//
// JMustache - A Java implementation of the Mustache templating language
// http://github.com/samskivert/jmustache/blob/master/LICENSE

package com.samskivert.mustache;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Represents a compiled template. Templates are executed with a <em>context</em> to generate
 * output. The context can be any tree of objects. Variables are resolved against the context.
 * Given a name {@code foo}, the following mechanisms are supported for resolving its value
 * (and are sought in this order):
 *
 * <ul>
 * <li>If the variable has the special name {@code this} the context object itself will be
 * returned. This is useful when iterating over lists.
 * <li>If the object is a {@link Map}, {@link Map#get} will be called with the string {@code foo}
 * as the key.
 * <li>A method named {@code foo} in the supplied object (with non-void return value).
 * <li>A method named {@code getFoo} in the supplied object (with non-void return value).
 * <li>A field named {@code foo} in the supplied object.
 * </ul>
 *
 * <p> The field type, method return type, or map value type should correspond to the desired
 * behavior if the resolved name corresponds to a section. {@link Boolean} is used for showing or
 * hiding sections without binding a sub-context. Arrays, {@link Iterator} and {@link Iterable}
 * implementations are used for sections that repeat, with the context bound to the elements of the
 * array, iterator or iterable. Lambdas are current unsupported, though they would be easy enough
 * to add if desire exists. See the <a href="http://mustache.github.com/mustache.5.html">Mustache
 * documentation</a> for more details on section behavior. </p>
 */
public class Template {

    /**
     * Encapsulates a fragment of a template that is passed to a lambda. The fragment is bound to
     * the variable context that was in effect at the time the lambda was called.
     */
    public abstract class Fragment {

        /** Executes this fragment; writes its result to {@code out}. */
        public abstract void execute (Writer out);

        /** Executes this fragment with the provided context; writes its result to {@code out}. The
          * provided context will be nested in the fragment's bound context. */
        public abstract void execute (Object context, Writer out);

        /** Executes {@code tmpl} using this fragment's bound context. This allows a lambda to
          * resolve its fragment to a dynamically loaded template and then run that template with
          * the same context as the lamda, allowing a lambda to act as a 'late bound' included
          * template, i.e. you can decide which template to include based on information in the
          * context. */
        public abstract void executeTemplate (Template tmpl, Writer out);

        /** Executes this fragment and returns its result as a string. */
        public String execute () {
            StringWriter out = new StringWriter();
            execute(out);
            return out.toString();
        }

        /** Executes this fragment with the provided context; returns its result as a string. The
          * provided context will be nested in the fragment's bound context. */
        public String execute (Object context) {
            StringWriter out = new StringWriter();
            execute(context, out);
            return out.toString();
        }

        /** Returns the context object in effect for this fragment. The actual type of the object
          * depends on the structure of the data passed to the top-level template. You know where
          * your lambdas are executed, so you know what type to which to cast the context in order
          * to inspect it (be that a {@code Map} or a POJO or something else). */
        public abstract Object context ();

        /** Like {@link #context()} btu returns the {@code n}th parent context object. {@code 0}
          * returns the same value as {@link #context()}, {@code 1} returns the parent context,
          * {@code 2} returns the grandparent and so forth. Note that if you request a parent that
          * does not exist an exception will be thrown. You should only use this method when you
          * know your lambda is run consistently in a context with a particular lineage. */
        public abstract Object context (int n);

        /** Decompiles the template inside this lamdba and returns <em>an approximation</em> of
          * the original template from which it was parsed. This is not the exact character for
          * character representation because the original text is not preserved because that would
          * incur a huge memory penalty for all users of the library when the vast majority of
          * them do not call decompile.
          *
          * <p>Limitations:
          * <ul><li> Whitespace inside tags is not preserved: i.e. {@code {{ foo.bar }}} becomes
          * {@code {{foo.bar}}}.
          * <li> If the delimiters are changed by the template, those are not preserved.
          * The delimiters configured on the {@link Compiler} are used for all decompilation.
          * </ul>
          *
          * <p>This feature is meant to enable use of lambdas for i18n such that you can recover
          * the contents of a lambda (so long as they're simple) to use as the lookup key for a
          * translation string. For example: {@code {{#i18n}}Hello {{user.name}}!{{/i18n}}} can be
          * sent to an {@code i18n} lambda which can use {@code decompile} to recover the text
          * {@code Hello {{user.name}}!} to be looked up in a translation dictionary. The
          * translated fragment could then be compiled and cached and then executed in lieu of the
          * original fragment using {@link Fragment#context}.
          */
        public String decompile () {
            return decompile(new StringBuilder()).toString();
        }

        /** Decompiles this fragment into {@code into}. See {@link #decompile()}.
          * @return {@code into} for call chaining. */
        public abstract StringBuilder decompile (StringBuilder into);
    }

    /** A sentinel object that can be returned by a {@link Mustache.Collector} to indicate that a
      * variable does not exist in a particular context. */
    public static final Object NO_FETCHER_FOUND = new String("<no fetcher found>");

    /**
     * Executes this template with the given context, returning the results as a string.
     * @throws MustacheException if an error occurs while executing or writing the template.
     */
    public String execute (Object context) throws MustacheException {
        StringWriter out = new StringWriter();
        execute(context, out);
        return out.toString();
    }

    /**
     * Executes this template with the given context, writing the results to the supplied writer.
     * @throws MustacheException if an error occurs while executing or writing the template.
     */
    public void execute (Object context, Writer out) throws MustacheException {
        executeSegs(new Context(context, null, 0, false, false), out);
    }

    /**
     * Executes this template with the supplied context and parent context, writing the results to
     * the supplied writer. The parent context will be searched for variables that cannot be found
     * in the main context, in the same way the main context becomes a parent context when entering
     * a block.
     * @throws MustacheException if an error occurs while executing or writing the template.
     */
    public void execute (Object context, Object parentContext, Writer out) throws MustacheException {
        Context pctx = new Context(parentContext, null, 0, false, false);
        executeSegs(new Context(context, pctx, 0, false, false), out);
    }

    /**
     * Visits the tags in this template (via {@code visitor}) without executing it.
     * @param visitor the visitor to be called back on each tag in the template.
     */
    public void visit (Mustache.Visitor visitor) {
        for (Segment seg : _segs) {
            seg.visit(visitor);
        }
    }

    protected Template(Segment[] segs, Mustache.Compiler compiler) {
        _segs = segs;
        _compiler = compiler;
        _fcache = compiler.collector.createFetcherCache();
    }

    protected void executeSegs (Context ctx, Writer out) throws MustacheException {
        for (Segment seg : _segs) {
            seg.execute(this, ctx, out);
        }
    }

    protected Fragment createFragment (final Segment[] segs, final Context currentCtx) {
        return new Fragment() {
            @Override public void execute (Writer out) {
                execute(currentCtx, out);
            }
            @Override public void execute (Object context, Writer out) {
                execute(currentCtx.nest(context), out);
            }
            @Override public void executeTemplate (Template tmpl, Writer out) {
                tmpl.executeSegs(currentCtx, out);
            }
            @Override public Object context () {
                return currentCtx.data;
            }
            @Override public Object context (int n) {
                return context(currentCtx, n);
            }
            @Override public StringBuilder decompile (StringBuilder into) {
                for (Segment seg : segs) seg.decompile(_compiler.delims, into);
                return into;
            }
            private Object context (Context ctx, int n) {
                return (n == 0) ? ctx.data : context(ctx.parent, n-1);
            }
            private void execute (Context ctx, Writer out) {
                for (Segment seg : segs) {
                    seg.execute(Template.this, ctx, out);
                }
            }
        };
    }

    /**
     * Generates a debug report for the supplied data by recursively iterating through data and producing a flattened
     * list of path to values. For example:
     * {
     *   "foo": {
     *     "bar": 1,
     *     "baz": 2
     *   },
     *   "quux": [
     *     {
     *       "a": 3,
     *       "b": 4
     *     },
     *     {
     *       "a": 5,
     *       "b": 6
     *     }
     *   ]
     * }
     * produces:
     * foo.bar: 1
     * foo.baz: 2
     * quux[0].a: 3
     * quux[0].b: 4
     * quux[1].a: 5
     * quux[1].b: 6
     *
     * @param data from the context
     * @return a string containing the debug report
     */
    static String generateDebugReport(Object data) {
        ArrayList<String> lines = new ArrayList<>();
        generateDebugReport(data, lines, ".");
        return String.join("\n", lines);
    }

    private static void generateDebugReport(Object data, ArrayList<String> lines, String prefix) {
        if (data instanceof Map) {
            Map<?, ?> map = (Map<?, ?>) data;
            // iterate through map in sorted manner
            ArrayList<String> keys = new ArrayList<>(map.keySet().size());
            keys.addAll(map.keySet().stream().map(Object::toString).collect(Collectors.toList()));
            Collections.sort(keys);
            for (String key : keys) {
                generateDebugReport(map.get(key), lines, prefix + key + ".");
            }
        } else if (data instanceof Iterable) {
            Iterable<?> iterable = (Iterable<?>) data;
            int index = 0;
            for (Object item : iterable) {
                generateDebugReport(item, lines, prefix + "[" + index + "].");
                index++;
            }
        } else if(data.getClass().isArray()) {
            Object[] array = (Object[]) data;
            int index = 0;
            for (Object item : array) {
                generateDebugReport(item, lines, prefix + "[" + index + "].");
                index++;
            }
        } else {
            String label = prefix.substring(0, prefix.length() - 1);
            lines.add(label + ": " + generateDebugString(data));
        }
    }

    static String generateDebugString(Object data) {
        if (data instanceof String) {
            return "\"" + data + "\"";
        }
        if (data == null) {
            return "null";
        }
        return data.toString();
    }

    /**
     * Called by executing segments to obtain the value of the specified variable in the supplied
     * context.
     *
     * @param ctx the context in which to look up the variable.
     * @param name the name of the variable to be resolved.
     * @param missingIsNull whether to fail if a variable cannot be resolved, or to return null in
     * that case.
     *
     * @return the value associated with the supplied name or null if no value could be resolved.
     */
    protected Object getValue (Context ctx, String name, int line, boolean missingIsNull) {
        // handle our special variables
        if (name.equals(FIRST_NAME)) {
            return ctx.onFirst;
        } else if (name.equals(LAST_NAME)) {
            return ctx.onLast;
        } else if (name.equals(INDEX_NAME)) {
            return ctx.index;
        }

        if (name.equals(DEBUG_NAME)) {
            return generateDebugReport(ctx.data);
        }

        if (name.startsWith(PARENT_NAME)) {
            // find the number of "../" strings are in the name and walk up that many parent
            // contexts. Do this by counting the number of "../" strings are at the beginning of name.
            int count = 0;
            String curr  = name;
            while (curr.startsWith(PARENT_NAME)) {
                count++;
                curr = curr.substring(PARENT_NAME.length());
            }
            while (count > 0 && ctx != null) {
                ctx = ctx.parent;
                if (ctx == null) {
                    throw new MustacheException.Context(
                        "Invalid name '" + name + "' on line " + line +
                        ". Tried to reference parent context " + count + " levels up, but no such " +
                        "context exists.", name, line);
                }
                count--;
            }
            // if we have a name left, resolve it in the context we found
            if (!curr.isEmpty()) {
                return getValueIn(ctx.data, curr, line);
            } else {
                return ctx.data;
            }
        }

        // if we're in standards mode, restrict ourselves to simple direct resolution (no compound
        // keys, no resolving values in parent contexts)
        if (_compiler.standardsMode) {
            Object value = getValueIn(ctx.data, name, line);
            return checkForMissing(name, line, missingIsNull, value);
        }

        // first search our parent contexts for the key (even if the key is a compound key, we will
        // first try to find it "whole" and only if that fails do we resolve it in parts)
        for (Context pctx = ctx; pctx != null; pctx = pctx.parent) {
            Object value = getValueIn(pctx.data, name, line);
            if (value != NO_FETCHER_FOUND) return value;
        }
        // if we reach here, we found nothing in this or our parent contexts...

        // if we have a compound key, decompose the value and resolve it step by step
        if (!name.equals(DOT_NAME) && name.indexOf(DOT_NAME) != -1) {
            return getCompoundValue(ctx, name, line, missingIsNull);
        } else {
            // otherwise let checkForMissing() decide what to do
            return checkForMissing(name, line, missingIsNull, NO_FETCHER_FOUND);
        }
    }

    /**
     * Decomposes the compound key {@code name} into components and resolves the value they
     * reference.
     */
    protected Object getCompoundValue (Context ctx, String name, int line, boolean missingIsNull) {
        String[] comps = name.split("\\.");
        // we want to allow the first component of a compound key to be located in a parent
        // context, but once we're selecting sub-components, they must only be resolved in the
        // object that represents that component
        Object data = getValue(ctx, comps[0], line, missingIsNull);
        for (int ii = 1; ii < comps.length; ii++) {
            if (data == NO_FETCHER_FOUND) {
                if (!missingIsNull) throw new MustacheException.Context(
                    "Missing context for compound variable '" + name + "' on line " + line +
                    ". '" + comps[ii - 1] + "' was not found.", name, line);
                return null;
            } else if (data == null) {
                return null;
            }
            // once we step into a composite key, we drop the ability to query our parent contexts;
            // that would be weird and confusing
            data = getValueIn(data, comps[ii], line);
        }
        return checkForMissing(name, line, missingIsNull, data);
    }

    /**
     * Returns the value of the specified variable, noting that it is intended to be used as the
     * contents for a section.
     */
    protected Object getSectionValue (Context ctx, String name, int line) {
        Object value = getValue(ctx, name, line, !_compiler.strictSections);
        // TODO: configurable behavior on null values?
        return (value == null) ? Collections.emptyList() : value;
    }

    /**
     * Returns the value for the specified variable, or the configured default value if the
     * variable resolves to null. See {@link #getValue}.
     */
    protected Object getValueOrDefault (Context ctx, String name, int line) {
        Object value = getValue(ctx, name, line, _compiler.missingIsNull);
        // getValue will raise MustacheException if a variable cannot be resolved and missingIsNull
        // is not configured; so we're safe to assume that any null that makes it up to this point
        // can be converted to nullValue
        return (value == null) ? _compiler.computeNullValue(name) : value;
    }

    protected Object getValueIn (Object data, String name, int line) {
        // if we're getting `.` or `this` then just return the whole context; we do this before the
        // null check because it may be valid for the context to be null (if we're iterating over a
        // list which contains nulls, for example)
        if (isThisName(name)) return data;

        if (data == null) {
            throw new NullPointerException(
                "Null context for variable '" + name + "' on line " + line);
        }

        Key key = new Key(data.getClass(), name);
        Mustache.VariableFetcher fetcher = _fcache.get(key);
        if (fetcher != null) {
            try {
                return fetcher.get(data, name);
            } catch (Exception e) {
                // zoiks! non-monomorphic call site, update the cache and try again
                fetcher = _compiler.collector.createFetcher(data, key.name);
            }
        } else {
            fetcher = _compiler.collector.createFetcher(data, key.name);
        }

        // if we were unable to create a fetcher, use the NOT_FOUND_FETCHER which will return
        // NO_FETCHER_FOUND to let the caller know that they can try the parent context or do le
        // freak out; we still cache this fetcher to avoid repeatedly looking up and failing to
        // find a fetcher in the same context (which can be expensive)
        if (fetcher == null) {
            fetcher = NOT_FOUND_FETCHER;
        }

        try {
            Object value = fetcher.get(data, name);
            _fcache.put(key, fetcher);
            return value;
        } catch (Exception e) {
            throw new MustacheException.Context(
                "Failure fetching variable '" + name + "' on line " + line, name, line, e);
        }
    }

    protected Object checkForMissing (String name, int line, boolean missingIsNull, Object value) {
        if (value == NO_FETCHER_FOUND) {
            if (missingIsNull) return null;
            throw new MustacheException.Context(
                "No method or field with name '" + name + "' on line " + line, name, line);
        } else {
            return value;
        }
    }

    protected final Segment[] _segs;
    protected final Mustache.Compiler _compiler;
    protected final Map<Key, Mustache.VariableFetcher> _fcache;

    protected static class Context {
        public final Object data;
        public final Context parent;
        public final int index;
        public final boolean onFirst;
        public final boolean onLast;

        public final int indent;

        public Context (Object data, Context parent, int index, boolean onFirst, boolean onLast, int indent) {
            this.data = data;
            this.parent = parent;
            this.index = index;
            this.onFirst = onFirst;
            this.onLast = onLast;
            this.indent = indent;
        }

        public Context (Object data, Context parent, int index, boolean onFirst, boolean onLast) {
            this(data, parent, index, onFirst, onLast, 0);
        }

        public Context nest (Object data) {
            return new Context(data, this, index, onFirst, onLast, indent);
        }

        public Context nest (Object data, int index, boolean onFirst, boolean onLast) {
            return new Context(data, this, index, onFirst, onLast, indent);
        }

        /**
         * Returns a new context with the specified indent.
         * @param indent the new indent length.
         * @return a new context with the specified indent.
         */
        public Context withIndent(int indent) {
            return new Context(data, parent, index, onFirst, onLast, indent);
        }
    }

    /** A template is broken into segments. */
    protected static abstract class Segment {
        abstract void execute (Template tmpl, Context ctx, Writer out);

        abstract void decompile (Mustache.Delims delims, StringBuilder into);

        abstract void visit (Mustache.Visitor visitor);

        protected static void write (Writer out, String data) {
            try {
                out.write(data);
            } catch (IOException ioe) {
                throw new MustacheException(ioe);
            }
        }
    }

    /** Used to cache variable fetchers for a given context class, name combination. */
    protected static class Key {
        public final Class<?> cclass;
        public final String name;

        public Key (Class<?> cclass, String name) {
            this.cclass = cclass;
            this.name = name;
        }

        @Override public int hashCode () {
            return cclass.hashCode() * 31 + name.hashCode();
        }

        @Override public boolean equals (Object other) {
            Key okey = (Key)other;
            return okey.cclass == cclass && okey.name.equals(name);
        }

        @Override public String toString () {
            return cclass.getName() + ":" + name;
        }
    }

    protected static boolean isThisName (String name) {
        return DOT_NAME.equals(name) || THIS_NAME.equals(name);
    }

    protected static final String DOT_NAME = ".";

    protected static final String DEBUG_NAME = "?";

    protected static final String PARENT_NAME = "../";
    protected static final String THIS_NAME = "this";
    protected static final String FIRST_NAME = "-first";
    protected static final String LAST_NAME = "-last";
    protected static final String INDEX_NAME = "-index";

    /** A fetcher cached for lookups that failed to find a fetcher. */
    protected static Mustache.VariableFetcher NOT_FOUND_FETCHER = new Mustache.VariableFetcher() {
        public Object get (Object ctx, String name) throws Exception {
            return NO_FETCHER_FOUND;
        }
    };
}
