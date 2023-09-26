//
// JMustache - A Java implementation of the Mustache templating language
// http://github.com/samskivert/jmustache/blob/master/LICENSE

package com.samskivert.mustache;

import java.io.*;
import java.util.*;

/**
 * Provides <a href="http://mustache.github.com/">Mustache</a> templating services.
 *
 * <p> Basic usage:
 * <pre>{@code
 * String source = "Hello {{arg}}!";
 * Template tmpl = Mustache.compiler().compile(source);
 * Map<String, Object> context = new HashMap<String, Object>();
 * context.put("arg", "world");
 * tmpl.execute(context); // returns "Hello world!"
 * }</pre>
 */
public class Mustache {

    /** Compiles templates into executable form. See {@link Mustache}. */
    public static class Compiler {

        /** Whether or not standards mode is enabled. */
        public final boolean standardsMode;

        /** Whether or not to throw an exception when a section resolves to a missing value. If
          * false, the section is simply omitted (or included in the case of inverse sections). If
          * true, a {@code MustacheException} is thrown. */
        public final boolean strictSections;

        /** A value to use when a variable resolves to null. If this value is null (which is the
          * default null value), an exception will be thrown. If {@link #missingIsNull} is also
          * true, this value will be used when a variable cannot be resolved.
          *
          * <p>If the nullValue contains a substring {@code {{name}}}, then this substring will be
          * replaced by name of the variable. For example, if nullValue is {@code ?{{name}}?} and
          * the missing variable is {@code foo}, then string {@code ?foo?} will be used.</p> */
        public final String nullValue;

        /** If this value is true, missing variables will be treated like variables that return
          * null. {@link #nullValue} will be used in their place, assuming {@link #nullValue} is
          * configured to a non-null value. */
        public final boolean missingIsNull;

        /** If this value is true, empty string will be treated as a false value, as in JavaScript
          * mustache implementation. Default is false. */
        public final boolean emptyStringIsFalse;

        /** If this value is true, zero will be treated as a false value, as in JavaScript
          * mustache implementation. Default is false. */
        public final boolean zeroIsFalse;

        /** Handles converting objects to strings when rendering a template. The default formatter
          * uses {@link String#valueOf}. */
        public final Formatter formatter;

        /** Handles escaping characters in substituted text. */
        public final Escaper escaper;

        /** The template loader in use during this compilation. */
        public final TemplateLoader loader;

        /** The collector used by templates compiled with this compiler. */
        public final Collector collector;

        /** The delimiters used by default in templates compiled with this compiler. */
        public final Delims delims;

        /** Compiles the supplied template into a repeatedly executable intermediate form. */
        public Template compile (String template) {
            return compile(new StringReader(template));
        }

        /** Compiles the supplied template into a repeatedly executable intermediate form. */
        public Template compile (Reader source) {
            return Mustache.compile(source, this);
        }

        /** Returns a compiler that either does or does not escape HTML by default. Note: this
          * overrides any escaper set via {@link #withEscaper}. */
        public Compiler escapeHTML (boolean escapeHTML) {
            return withEscaper(escapeHTML ? Escapers.HTML : Escapers.NONE);
        }

        /** Returns a compiler that either does or does not use standards mode. Standards mode
          * disables the non-standard JMustache extensions like looking up missing names in a parent
          * context. */
        public Compiler standardsMode (boolean standardsMode) {
            return new Compiler(standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, this.escaper, this.loader, this.collector,
                                this.delims);
        }

        /** Returns a compiler that throws an exception when a section references a missing value
          * ({@code true}) or treats a missing value as {@code false} ({@code false}, the default).
          */
        public Compiler strictSections (boolean strictSections) {
            return new Compiler(this.standardsMode, strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, this.escaper, this.loader, this.collector,
                                this.delims);
        }

        /** Returns a compiler that will use the given value for any variable that is missing, or
          * otherwise resolves to null. This is like {@link #nullValue} except that it returns the
          * supplied default for missing keys and existing keys that return null values. */
        public Compiler defaultValue (String defaultValue) {
            return new Compiler(this.standardsMode, this.strictSections, defaultValue, true,
                                this.emptyStringIsFalse, this.zeroIsFalse, this.formatter,
                                this.escaper, this.loader, this.collector, this.delims);
        }

        /** Returns a compiler that will use the given value for any variable that resolves to
          * null, but will still raise an exception for variables for which an accessor cannot be
          * found. This is like {@link #defaultValue} except that it differentiates between missing
          * accessors, and accessors that exist but return null.
          * <ul>
          * <li>In the case of a Java object being used as a context, if no field or method can be
          * found for a variable, an exception will be raised.</li>
          * <li>In the case of a {@link Map} being used as a context, if the map does not contain
          * a mapping for a variable, an exception will be raised. If the map contains a mapping
          * which maps to {@code null}, then {@code nullValue} is used.</li>
          * </ul> */
        public Compiler nullValue (String nullValue) {
            return new Compiler(this.standardsMode, this.strictSections, nullValue, false,
                                this.emptyStringIsFalse, this.zeroIsFalse, this.formatter,
                                this.escaper, this.loader, this.collector, this.delims);
        }

        /** Returns a compiler that will treat empty string as a false value if parameter is true. */
        public Compiler emptyStringIsFalse (boolean emptyStringIsFalse) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, this.escaper, this.loader, this.collector,
                                this.delims);
        }

        /** Returns a compiler that will treat zero as a false value if parameter is true. */
        public Compiler zeroIsFalse (boolean zeroIsFalse) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, zeroIsFalse,
                                this.formatter, this.escaper, this.loader, this.collector,
                                this.delims);
        }

        /** Configures the {@link Formatter} used to turn objects into strings. */
        public Compiler withFormatter (Formatter formatter) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                formatter, this.escaper, this.loader, this.collector, this.delims);
        }

        /** Configures the {@link Escaper} used to escape substituted text. */
        public Compiler withEscaper (Escaper escaper) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, escaper, this.loader, this.collector, this.delims);
        }

        /** Returns a compiler configured to use the supplied template loader to handle partials. */
        public Compiler withLoader (TemplateLoader loader) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, this.escaper, loader, this.collector, this.delims);
        }

        /** Returns a compiler configured to use the supplied collector. */
        public Compiler withCollector (Collector collector) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, this.escaper, this.loader, collector, this.delims);
        }

        /** Returns a compiler configured to use the supplied delims as default delimiters.
          * @param delims a string of the form {@code AB CD} or {@code A D} where A and B are
          * opening delims and C and D are closing delims. */
        public Compiler withDelims (String delims) {
            return new Compiler(this.standardsMode, this.strictSections, this.nullValue,
                                this.missingIsNull, this.emptyStringIsFalse, this.zeroIsFalse,
                                this.formatter, this.escaper, this.loader, this.collector,
                                new Delims().updateDelims(delims));
        }

        /** Returns the value to use in the template for the null-valued property {@code name}. See
          * {@link #nullValue} for more details. */
        public String computeNullValue (String name) {
            return (nullValue == null) ? null : nullValue.replace("{{name}}", name);
        }

        /** Returns true if the supplied value is "falsey". If {@link #emptyStringIsFalse} is true,
          * then empty strings are considered falsey. If {@link #zeroIsFalse} is true, then zero
          * values are considered falsey. */
        public boolean isFalsey (Object value) {
            return ((emptyStringIsFalse && "".equals(formatter.format(value))) ||
                    (zeroIsFalse && (value instanceof Number) && ((Number)value).longValue() == 0));
        }

        /** Loads and compiles the template {@code name} using this compiler's configured template
          * loader. Note that this does no caching: the caller should cache the loaded template if
          * they expect to use it multiple times.
          * @return the compiled template.
          * @throw MustacheException if the template could not be loaded (due to I/O exception) or
          * compiled (due to syntax error, etc.).
          */
        public Template loadTemplate (String name) throws MustacheException {
            Reader tin = null;
            try {
                tin = loader.getTemplate(name);
                return compile(tin);
            } catch (Exception e) {
                if (e instanceof RuntimeException) {
                    throw (RuntimeException)e;
                } else {
                    throw new MustacheException("Unable to load template: " + name, e);
                }
            } finally {
                if (tin != null) try {
                    tin.close();
                } catch (IOException ioe) {
                    throw new RuntimeException(ioe);
                }
            }
        }

        protected Compiler (boolean standardsMode, boolean strictSections, String nullValue,
                            boolean missingIsNull, boolean emptyStringIsFalse, boolean zeroIsFalse,
                            Formatter formatter, Escaper escaper, TemplateLoader loader,
                            Collector collector, Delims delims) {
            this.standardsMode = standardsMode;
            this.strictSections = strictSections;
            this.nullValue = nullValue;
            this.missingIsNull = missingIsNull;
            this.emptyStringIsFalse = emptyStringIsFalse;
            this.zeroIsFalse = zeroIsFalse;
            this.formatter = formatter;
            this.escaper = escaper;
            this.loader = loader;
            this.collector = collector;
            this.delims = delims;
        }
    }

    /** Handles converting objects to strings when rendering templates. */
    public interface Formatter {

        /** Converts {@code value} to a string for inclusion in a template. */
        String format (Object value);
    }

    /** Handles lambdas. */
    public interface Lambda {

        /** Executes this lambda on the supplied template fragment. The lambda should write its
          * results to {@code out}.
          *
          * @param frag the fragment of the template that was passed to the lambda.
          * @param out the writer to which the lambda should write its output.
          */
        void execute (Template.Fragment frag, Writer out) throws IOException;
    }

    /** Handles lambdas that are also invoked for inverse sections.. */
    public interface InvertibleLambda extends Lambda {

        /** Executes this lambda on the supplied template fragment, when the lambda is used in an
          * inverse section. The lambda should write its results to {@code out}.
          *
          * @param frag the fragment of the template that was passed to the lambda.
          * @param out the writer to which the lambda should write its output.
          */
        void executeInverse (Template.Fragment frag, Writer out) throws IOException;
    }

    /** Reads variables from context objects. */
    public interface VariableFetcher {

        /** Reads the so-named variable from the supplied context object. */
        Object get (Object ctx, String name) throws Exception;
    }

    /** Handles escaping characters in substituted text. */
    public interface Escaper {

        /** Returns {@code raw} with the appropriate characters replaced with escape sequences. */
        String escape (String raw);
    }

    /** Handles loading partial templates. */
    public interface TemplateLoader {

        /** Returns a reader for the template with the supplied name.
          * Reader will be closed by callee.
          * @throws Exception if the template could not be loaded for any reason. */
        Reader getTemplate (String name) throws Exception;
    }

    /** Handles interpreting objects as collections. */
    public interface Collector {

        /** Returns an iterator that can iterate over the supplied value, or null if the value is
          * not a collection. */
        Iterator<?> toIterator (final Object value);

        /** Creates a fetcher for a so-named variable in the supplied context object, which will
          * never be null. The fetcher will be cached and reused for future contexts for which
          * {@code octx.getClass().equals(nctx.getClass()}. */
        VariableFetcher createFetcher (Object ctx, String name);

        /** Creates a map to be used to cache {@link VariableFetcher} instances. The GWT-compatible
          * collector returns a HashMap here, but the reflection based fetcher (which only works on
          * the JVM and Android, returns a concurrent hashmap. */
        <K,V> Map<K,V> createFetcherCache ();
    }

    /**
     * Provides a means to implement custom logic for variable lookup. If a context object
     * implements this interface, its {@code get} method will be used to look up variables instead
     * of the usual methods.
     *
     * This is simpler than having a context implement {@link Map} which would require that it also
     * support the {@link Map#entrySet} method for iteration. A {@code CustomContext} object cannot
     * be used for a list section.
     */
    public interface CustomContext {

        /** Fetches the value of a variable named {@code name}. */
        Object get (String name) throws Exception;
    }

    /** Used to visit the tags in a template without executing it. */
    public interface Visitor {

        /** Visits a text segment. These are blocks of text that are normally just reproduced as
          * is when executing a template.
          * @param text the block of text. May contain newlines.
          */
        void visitText (String text);

        /** Visits a variable tag.
          * @param name the name of the variable.
          */
        void visitVariable (String name);

        /** Visits an include (partial) tag.
          * @param name the name of the partial template specified by the tag.
          * @return true if the template should be resolved and visited, false to skip it.
          */
        boolean visitInclude (String name);

        /** Visits a section tag.
          * @param name the name of the section.
          * @return true if the contents of the section should be visited, false to skip.
          */
        boolean visitSection (String name);

        /** Visits an inverted section tag.
          * @param name the name of the inverted section.
          * @return true if the contents of the section should be visited, false to skip.
          */
        boolean visitInvertedSection (String name);
    }

    /**
     * Returns a compiler that escapes HTML by default and does not use standards mode.
     */
    public static Compiler compiler () {
        return new Compiler(/*standardsMode=*/false, /*strictSections=*/false, /*nullValue=*/null,
                            /*missingIsNull=*/false, /*emptyStringIsFalse=*/false,
                            /*zeroIsFalse=*/false, DEFAULT_FORMATTER, Escapers.HTML, FAILING_LOADER,
                            new DefaultCollector(), new Delims());
    }

    /**
     * Compiles the supplied template into a repeatedly executable intermediate form.
     */
    protected static Template compile (Reader source, Compiler compiler) {
        Accumulator accum = new Parser(compiler).parse(source);
        return new Template(trim(accum.finish(), true), compiler);
    }

    private Mustache () {} // no instantiateski

    protected static Template.Segment[] trim (Template.Segment[] segs, boolean top) {
        // now that we have all of our segments, we make a pass through them to trim whitespace
        // from section tags which stand alone on their lines
        for (int ii = 0, ll = segs.length; ii < ll; ii++) {
            Template.Segment seg = segs[ii];
            Template.Segment pseg = (ii > 0   ) ? segs[ii-1] : null;
            Template.Segment nseg = (ii < ll-1) ? segs[ii+1] : null;
            StringSegment prev = (pseg instanceof StringSegment) ? (StringSegment)pseg : null;
            StringSegment next = (nseg instanceof StringSegment) ? (StringSegment)nseg : null;
            // if we're at the top-level there are virtual "blank lines" before & after segs
            boolean prevBlank = ((pseg == null && top) || (prev != null && prev.trailsBlank()));
            boolean nextBlank = ((nseg == null && top) || (next != null && next.leadsBlank()));
            // potentially trim around the open and close tags of a block segment
            if (seg instanceof BlockSegment) {
                BlockSegment block = (BlockSegment)seg;
                if (prevBlank && block.firstLeadsBlank()) {
                    if (pseg != null) segs[ii-1] = prev.trimTrailBlank();
                    block.trimFirstBlank();
                }
                if (nextBlank && block.lastTrailsBlank()) {
                    block.trimLastBlank();
                    if (nseg != null) segs[ii+1] = next.trimLeadBlank();
                }
            }
            // potentially trim around non-printing (comments/delims) segments
            else if (seg instanceof FauxSegment) {
                if (prevBlank && nextBlank) {
                    if (pseg != null) segs[ii-1] = prev.trimTrailBlank();
                    if (nseg != null) segs[ii+1] = next.trimLeadBlank();
                }
            }
        }
        return segs;
    }

    protected static void restoreStartTag (StringBuilder text, Delims starts) {
        text.insert(0, starts.start1);
        if (starts.start2 != NO_CHAR) {
            text.insert(1, starts.start2);
        }
    }

    // TODO: this method was never called, what was my intention here?
    protected static boolean allowsWhitespace (char typeChar) {
        return (typeChar == '=' /* change delimiters */) || (typeChar == '!' /* comment */);
    }

    protected static final int TEXT = 0;
    protected static final int MATCHING_START = 1;
    protected static final int MATCHING_END = 2;
    protected static final int TAG = 3;

    // a hand-rolled parser; whee!
    protected static class Parser {
        final Delims delims;
        final StringBuilder text = new StringBuilder();

        Reader source;
        Accumulator accum;

        int state = TEXT;
        int line = 1, column = 0;
        int tagStartColumn = -1;

        public Parser (Compiler compiler) {
            this.accum = new Accumulator(compiler, true);
            this.delims = compiler.delims.copy();
        }

        public Accumulator parse (Reader source) {
            this.source = source;

            int v;
            while ((v = nextChar()) != -1) {
                char c = (char)v;
                ++column; // our columns start at one, so increment before parse
                parseChar(c);
                // if we just parsed a newline, reset the column to zero and advance line
                if (c == '\n') {
                    column = 0;
                    ++line;
                }
            }

            // accumulate any trailing text
            switch (state) {
            case TAG:
                restoreStartTag(text, delims);
                break;
            case MATCHING_END:
                restoreStartTag(text, delims);
                text.append(delims.end1);
                break;
            case MATCHING_START:
                text.append(delims.start1);
                break;
            case TEXT: // do nothing
                break;
            }
            accum.addTextSegment(text);

            return accum;
        }

        protected void parseChar (char c) {
            switch (state) {
            case TEXT:
                if (c == delims.start1) {
                    state = MATCHING_START;
                    tagStartColumn = column;
                    if (delims.start2 == NO_CHAR) {
                        parseChar(NO_CHAR);
                    }
                } else {
                    text.append(c);
                }
                break;

            case MATCHING_START:
                if (c == delims.start2) {
                    accum.addTextSegment(text);
                    state = TAG;
                } else {
                    text.append(delims.start1);
                    state = TEXT;
                    parseChar(c);
                }
                break;

            case TAG:
                if (c == delims.end1) {
                    state = MATCHING_END;
                    if (delims.end2 == NO_CHAR) {
                        parseChar(NO_CHAR);
                    }

                } else if (c == delims.start1 && text.length() > 0 && text.charAt(0) != '!') {
                    // if we've already matched some tag characters and we see a new start tag
                    // character (e.g. "{{foo {" but not "{{{"), treat the already matched text as
                    // plain text and start matching a new tag from this point, unless we're in
                    // a comment tag.
                    restoreStartTag(text, delims);
                    accum.addTextSegment(text);
                    tagStartColumn = column;
                    if (delims.start2 == NO_CHAR) {
                        accum.addTextSegment(text);
                        state = TAG;
                    } else {
                        state = MATCHING_START;
                    }

                } else {
                    text.append(c);
                }
                break;

            case MATCHING_END:
                if (c == delims.end2) {
                    if (text.charAt(0) == '=') {
                        delims.updateDelims(text.substring(1, text.length()-1));
                        text.setLength(0);
                        accum.addFauxSegment(); // for newline trimming
                    } else {
                        // if the delimiters are {{ and }}, and the tag starts with {{{ then
                        // require that it end with }}} and disable escaping
                        if (delims.isStaches() && text.charAt(0) == delims.start1) {
                            // we've only parsed }} at this point, so we have to slurp in another
                            // character from the input stream and check it
                            int end3 = nextChar();
                            if (end3 != '}') {
                                String got = (end3 == -1) ? "" : String.valueOf((char)end3);
                                throw new MustacheParseException(
                                    "Invalid triple-mustache tag: {{" + text + "}}" + got, line);
                            }
                            // convert it into (equivalent) {{&text}} which addTagSegment handles
                            text.replace(0, 1, "&");
                        }
                        // process the tag between the mustaches
                        accum = accum.addTagSegment(text, line);
                    }
                    state = TEXT;

                } else {
                    text.append(delims.end1);
                    state = TAG;
                    parseChar(c);
                }
                break;
            }
        }

        protected int nextChar () {
            try {
                return source.read();
            } catch (IOException ioe) {
                throw new MustacheException(ioe);
            }
        }
    }

    protected static class Delims {
        public char start1 = '{', end1 = '}';
        public char start2 = '{', end2 = '}';

        public boolean isStaches () {
            return start1 == '{' && start2 == '{' && end1 == '}' && end2 == '}';
        }

        public Delims updateDelims (String dtext) {
            String[] delims = dtext.split(" ");
            if (delims.length != 2) throw new MustacheException(errmsg(dtext));

            switch (delims[0].length()) {
            case 1:
                start1 = delims[0].charAt(0);
                start2 = NO_CHAR;
                break;
            case 2:
                start1 = delims[0].charAt(0);
                start2 = delims[0].charAt(1);
                break;
            default:
                throw new MustacheException(errmsg(dtext));
            }

            switch (delims[1].length()) {
            case 1:
                end1 = delims[1].charAt(0);
                end2 = NO_CHAR;
                break;
            case 2:
                end1 = delims[1].charAt(0);
                end2 = delims[1].charAt(1);
                break;
            default:
                throw new MustacheException(errmsg(dtext));
            }
            return this;
        }

        public void addTag (char prefix, String name, StringBuilder into) {
            into.append(start1);
            into.append(start2);
            if (prefix != ' ') into.append(prefix);
            into.append(name);
            into.append(end1);
            into.append(end2);
        }

        Delims copy () {
            Delims d = new Delims();
            d.start1 = start1;
            d.start2 = start2;
            d.end1 = end1;
            d.end2 = end2;
            return d;
        }

        private static String errmsg (String dtext) {
            return "Invalid delimiter configuration '" + dtext + "'. Must be of the " +
                "form {{=1 2=}} or {{=12 34=}} where 1, 2, 3 and 4 are delimiter chars.";
        }
    }

    protected static class Accumulator {
        public Accumulator (Compiler compiler, boolean topLevel) {
            _comp = compiler;
            _topLevel = topLevel;
        }

        public void addTextSegment (StringBuilder text) {
            if (text.length() > 0) {
                _segs.add(new StringSegment(text.toString(), _segs.isEmpty() && _topLevel));
                text.setLength(0);
            }
        }

        public Accumulator addTagSegment (final StringBuilder accum, final int tagLine) {
            final Accumulator outer = this;
            String tag = accum.toString().trim();
            final String tag1 = tag.substring(1).trim();
            accum.setLength(0);

            switch (tag.charAt(0)) {
            case '#':
                requireNoNewlines(tag, tagLine);
                return new Accumulator(_comp, false) {
                    @Override public Template.Segment[] finish () {
                        throw new MustacheParseException(
                            "Section missing close tag '" + tag1 + "'", tagLine);
                    }
                    @Override protected Accumulator addCloseSectionSegment (String itag, int line) {
                        requireSameName(tag1, itag, line);
                        outer._segs.add(new SectionSegment(_comp, itag, super.finish(), tagLine));
                        return outer;
                    }
                };

            case '>':
                _segs.add(new IncludedTemplateSegment(_comp, tag1));
                return this;

            case '^':
                requireNoNewlines(tag, tagLine);
                return new Accumulator(_comp, false) {
                    @Override public Template.Segment[] finish () {
                        throw new MustacheParseException(
                            "Inverted section missing close tag '" + tag1 + "'", tagLine);
                    }
                    @Override protected Accumulator addCloseSectionSegment (String itag, int line) {
                        requireSameName(tag1, itag, line);
                        outer._segs.add(new InvertedSegment(_comp, itag, super.finish(), tagLine));
                        return outer;
                    }
                };

            case '/':
                requireNoNewlines(tag, tagLine);
                return addCloseSectionSegment(tag1, tagLine);

            case '!':
                // comment!, ignore
                _segs.add(new FauxSegment()); // for whitespace trimming
                return this;

            case '&':
                requireNoNewlines(tag, tagLine);
                _segs.add(new VariableSegment(tag1, tagLine, _comp.formatter, Escapers.NONE));
                return this;

            default:
                requireNoNewlines(tag, tagLine);
                _segs.add(new VariableSegment(tag, tagLine, _comp.formatter, _comp.escaper));
                return this;
            }
        }

        public void addFauxSegment () {
            _segs.add(new FauxSegment());
        }

        public Template.Segment[] finish () {
            return _segs.toArray(new Template.Segment[_segs.size()]);
        }

        protected Accumulator addCloseSectionSegment (String tag, int line) {
            throw new MustacheParseException(
                "Section close tag with no open tag '" + tag + "'", line);
        }

        protected static void requireNoNewlines (String tag, int line) {
            if (tag.indexOf('\n') != -1 || tag.indexOf('\r') != -1) {
                throw new MustacheParseException(
                    "Invalid tag name: contains newline '" + tag + "'", line);
            }
        }

        protected static void requireSameName (String name1, String name2, int line) {
            if (!name1.equals(name2)) {
                throw new MustacheParseException("Section close tag with mismatched open tag '" +
                                                 name2 + "' != '" + name1 + "'", line);
            }
        }

        protected final Compiler _comp;
        protected final boolean _topLevel;
        protected final List<Template.Segment> _segs = new ArrayList<Template.Segment>();
    }

    /** A simple segment that reproduces a string. */
    protected static class StringSegment extends Template.Segment {
        public StringSegment (String text, boolean first) {
            this(text, blankPos(text, true, first), blankPos(text, false, first));
        }

        public StringSegment (String text, int leadBlank, int trailBlank) {
            assert leadBlank >= -1;
            assert trailBlank >= -1;
            _text = text;
            _leadBlank = leadBlank;
            _trailBlank = trailBlank;
        }

        public boolean leadsBlank () { return _leadBlank != -1; }
        public boolean trailsBlank () { return _trailBlank != -1; }

        public StringSegment trimLeadBlank () {
            if (_leadBlank == -1) return this;
            int lpos = _leadBlank+1, newTrail = _trailBlank == -1 ? -1 : _trailBlank-lpos;
            return new StringSegment(_text.substring(lpos), -1, newTrail);
        }
        public StringSegment trimTrailBlank  () {
            return _trailBlank == -1 ? this : new StringSegment(
                _text.substring(0, _trailBlank), _leadBlank, -1);
        }

        @Override public void execute (Template tmpl, Template.Context ctx, Writer out) {
            write(out, _text, ctx.indent);
        }
        @Override public void decompile (Delims delims, StringBuilder into) {
            into.append(_text);
        }
        @Override public void visit (Visitor visitor) {
            visitor.visitText(_text);
        }
        @Override public String toString () {
            return "Text(" + _text.replace("\r", "\\r").replace("\n", "\\n") + ")" +
                _leadBlank + "/" + _trailBlank;
        }

        /**
         * Returns the index of the first non-whitespace character in {@code text}, or -1 if the
         * string is all whitespace. If {@code leading} is true, the search is performed from the
         * beginning of the string, otherwise from the end. If {@code first} is true, then a
         * totally blank string (but which lacks a newline) is considered to be all leading or
         * trailing whitespace.
         *
         * @param text the text to search.
         * @param leading if true, search from the beginning of the string, otherwise from the end.
         * @param first if true, a totally blank string (but which lacks a newline) is considered
         * @return the index of the first non-whitespace character, or -1 if the string is all
         * whitespace.
         */
        private static int blankPos (String text, boolean leading, boolean first) {
            int len = text.length();
            for (int ii = leading ? 0 : len-1, ll = leading ? len : -1, dd = leading ? 1 : -1;
                 ii != ll; ii += dd) {
                char c = text.charAt(ii);
                if (c == '\n') return leading ? ii : ii+1;
                if (!Character.isWhitespace(c)) return -1;
            }
            // if this is the first string segment and we're looking for trailing whitespace, a
            // totally blank segment (but which lacks a newline) is all trailing whitespace
            return (leading || !first) ? -1 : 0;
        }

        protected final String _text;
        protected final int _leadBlank, _trailBlank;
    }

    /** A segment that loads and executes a sub-template. */
    protected static class IncludedTemplateSegment extends Template.Segment {
        public IncludedTemplateSegment (Compiler compiler, String name) {
            _comp = compiler;
            _name = name;
        }
        @Override public void execute (Template tmpl, Template.Context ctx, Writer out) {

            // item_partial:
            // ```mustache
            // {{name}} = (
            //   {{value}}
            // )
            // ```
            // list_partial:
            // ```mustache
            // {{#list}}
            // {{item_partial}}
            // {{/list}}
            // ```
            // main:
            // ```mustache
            //      (
            //   {{>list_partial}}
            // )
            // ```
            // output:
            // ```output
            //      (
            //   name = (
            //     value
            //   )
            // )
            // ```

            // set indentation for inner template
            String buffer = ((StringWriter) out).getBuffer().toString();
            int lastNewline = buffer.lastIndexOf('\n');
            int offset = (lastNewline == -1) ? buffer.length() : buffer.length() - lastNewline - 1;

            // we must take care to preserve our context rather than creating a new one, which
            // would happen if we just called execute() with ctx.data. This is important for partials since
            // they are often used to modularize templates and the context naturally expected in partials.
            getTemplate().executeSegs(ctx.withIndent(offset), out);

            Template.Segment[] innerSegs = getTemplate()._segs;

            // determine if the last segment is a SectionSegment
            boolean lastSegmentIsSection = innerSegs[innerSegs.length-1] instanceof SectionSegment;

            if (lastSegmentIsSection) {
                // recursively determine if last segment is a SectionSegment with a newline at the end of its section
                while (!(innerSegs[innerSegs.length-1] instanceof StringSegment)) {
                    if (innerSegs[innerSegs.length-1] instanceof SectionSegment) {
                        innerSegs = ((SectionSegment)innerSegs[innerSegs.length-1])._segs;
                        // if the first and last segments are empty string segments
                        // remove first and last elements from innerSegs since they are virtual "blank lines"
                        if (innerSegs.length >= 3 && innerSegs[0] instanceof StringSegment && innerSegs[innerSegs.length-1] instanceof StringSegment) {
                            StringSegment firstStringSegment = (StringSegment) innerSegs[0];
                            StringSegment lastStringSegment = (StringSegment) innerSegs[innerSegs.length - 1];
                            if (firstStringSegment._text.equals("") && lastStringSegment._text.equals("")) {
                                innerSegs = Arrays.copyOfRange(innerSegs, 1, innerSegs.length - 1);
                            }
                        }
                    } else if (innerSegs[innerSegs.length-1] instanceof IncludedTemplateSegment) {
                        innerSegs = ((IncludedTemplateSegment)innerSegs[innerSegs.length-1]).getTemplate()._segs;
                    } else {
                        break;
                    }
                }
                if (innerSegs[innerSegs.length-1] instanceof StringSegment) {
                    StringSegment lastStringSegment = (StringSegment) innerSegs[innerSegs.length - 1];
                    if (lastStringSegment._text.endsWith("\n")) {
                        ((StringWriter) out).getBuffer().setLength(((StringWriter) out).getBuffer().length() - 1);
                    }
                }
            }
        }

        @Override public void decompile (Delims delims, StringBuilder into) {
            delims.addTag('>', _name, into);
        }
        @Override public void visit (Visitor visitor) {
            if (visitor.visitInclude(_name)) {
                getTemplate().visit(visitor);
            }
        }
        protected Template getTemplate () {
            // we compile our template lazily to avoid infinie recursion if a template includes
            // itself (see issue #13)
            if (_template == null) {
                _template = _comp.loadTemplate(_name);
            }
            return _template;
        }
        protected final Compiler _comp;
        protected final String _name;
        private Template _template;
    }

    /** A helper class for named segments. */
    protected static abstract class NamedSegment extends Template.Segment {
        protected NamedSegment (String name, int line) {
            _name = name;
            _line = line;
        }
        protected final String _name;
        protected final int _line;
    }

    /** A segment that substitutes the contents of a variable. */
    protected static class VariableSegment extends NamedSegment {
        public VariableSegment (String name, int line, Formatter formatter, Escaper escaper) {
            super(name, line);
            _formatter = formatter;
            _escaper = escaper;
        }
        @Override public void execute (Template tmpl, Template.Context ctx, Writer out) {
            Object value = tmpl.getValueOrDefault(ctx, _name, _line);
            if (value == null) {
                String msg = Template.isThisName(_name) ?
                    "Resolved '.' to null (which is disallowed), on line " + _line :
                    "No key, method or field with name '" + _name + "' on line " + _line;
                throw new MustacheException.Context(msg, _name, _line);
            }
            write(out, _escaper.escape(_formatter.format(value)), ctx.indent);
        }
        @Override public void decompile (Delims delims, StringBuilder into) {
            delims.addTag(' ', _name, into);
        }
        @Override public void visit (Visitor visitor) {
            visitor.visitVariable(_name);
        }
        @Override public String toString () {
            return "Var(" + _name + ":" + _line + ")";
        }
        protected final Formatter _formatter;
        protected final Escaper _escaper;
    }

    /** A helper class for block segments. */
    protected static abstract class BlockSegment extends NamedSegment {
        public boolean firstLeadsBlank () {
            if (_segs.length == 0 || !(_segs[0] instanceof StringSegment)) return false;
            return ((StringSegment)_segs[0]).leadsBlank();
        }
        public void trimFirstBlank () {
            _segs[0] = ((StringSegment)_segs[0]).trimLeadBlank();
        }

        public boolean lastTrailsBlank () {
            int lastIdx = _segs.length-1;
            if (_segs.length == 0 || !(_segs[lastIdx] instanceof StringSegment)) return false;
            return ((StringSegment)_segs[lastIdx]).trailsBlank();
        }
        public void trimLastBlank () {
            int idx = _segs.length-1;
            _segs[idx] = ((StringSegment)_segs[idx]).trimTrailBlank();
        }

        protected BlockSegment (String name, Template.Segment[] segs, int line) {
            super(name, line);
            _segs = trim(segs, false);
        }
        protected void executeSegs (Template tmpl, Template.Context ctx, Writer out) {
            for (Template.Segment seg : _segs) {
                seg.execute(tmpl, ctx, out);
            }
        }

        protected final Template.Segment[] _segs;
    }

    /** A segment that represents a section. */
    protected static class SectionSegment extends BlockSegment {
        public SectionSegment (Compiler compiler, String name, Template.Segment[] segs, int line) {
            super(name, segs, line);
            _comp = compiler;
        }
        @Override public void execute (Template tmpl, Template.Context ctx, Writer out) {
            Object value = tmpl.getSectionValue(ctx, _name, _line); // won't return null
            Iterator<?> iter = _comp.collector.toIterator(value);
            if (iter != null) {
                int index = 0;
                while (iter.hasNext()) {
                    Object elem = iter.next();
                    boolean onFirst = (index == 0), onLast = !iter.hasNext();
                    executeSegs(tmpl, ctx.nest(elem, ++index, onFirst, onLast), out);
                }
            } else if (value instanceof Boolean) {
                if ((Boolean)value) {
                    executeSegs(tmpl, ctx, out);
                }
            } else if (value instanceof Lambda) {
                try {
                    ((Lambda)value).execute(tmpl.createFragment(_segs, ctx), out);
                } catch (IOException ioe) {
                    throw new MustacheException(ioe);
                }
            } else if (_comp.isFalsey(value)) {
                // omit the section
            } else {
                executeSegs(tmpl, ctx.nest(value), out);
            }
        }
        @Override public void decompile (Delims delims, StringBuilder into) {
            delims.addTag('#', _name, into);
            for (Template.Segment seg : _segs) seg.decompile(delims, into);
            delims.addTag('/', _name, into);
        }
        @Override public void visit (Visitor visitor) {
            if (visitor.visitSection(_name)) {
                for (Template.Segment seg : _segs) {
                    seg.visit(visitor);
                }
            }
        }
        @Override public String toString () {
            return "Section(" + _name + ":" + _line + "): " + Arrays.toString(_segs);
        }
        protected final Compiler _comp;
    }

    /** A segment that represents an inverted section. */
    protected static class InvertedSegment extends BlockSegment {
        public InvertedSegment (Compiler compiler, String name, Template.Segment[] segs, int line) {
            super(name, segs, line);
            _comp = compiler;
        }
        @Override public void execute (Template tmpl, Template.Context ctx, Writer out) {
            Object value = tmpl.getSectionValue(ctx, _name, _line); // won't return null
            Iterator<?> iter = _comp.collector.toIterator(value);
            if (iter != null) {
                if (!iter.hasNext()) {
                    executeSegs(tmpl, ctx, out);
                }
            } else if (value instanceof Boolean) {
                if (!(Boolean)value) {
                    executeSegs(tmpl, ctx, out);
                }
            } else if (value instanceof InvertibleLambda) {
                try {
                    ((InvertibleLambda)value).executeInverse(tmpl.createFragment(_segs, ctx), out);
                } catch (IOException ioe) {
                    throw new MustacheException(ioe);
                }
            } else if (_comp.isFalsey(value)) {
                executeSegs(tmpl, ctx, out);
            } // TODO: fail?
        }
        @Override public void decompile (Delims delims, StringBuilder into) {
            delims.addTag('^', _name, into);
            for (Template.Segment seg : _segs) seg.decompile(delims, into);
            delims.addTag('/', _name, into);
        }
        @Override public void visit (Visitor visitor) {
            if (visitor.visitInvertedSection(_name)) {
                for (Template.Segment seg : _segs) {
                    seg.visit(visitor);
                }
            }
        }
        @Override public String toString () {
            return "Inverted(" + _name + ":" + _line + "): " + Arrays.toString(_segs);
        }
        protected final Compiler _comp;
    }

    protected static class FauxSegment extends Template.Segment {
        @Override public void execute (Template tmpl, Template.Context ctx, Writer out) {} // nada
        @Override public void decompile (Delims delims, StringBuilder into) {} // nada
        @Override public void visit (Visitor visit) {}
        @Override public String toString () { return "Faux"; }
    }

    /** Used when we have only a single character delimiter. */
    protected static final char NO_CHAR = Character.MIN_VALUE;

    protected static final TemplateLoader FAILING_LOADER = new TemplateLoader() {
        public Reader getTemplate (String name) {
            throw new UnsupportedOperationException("Template loading not configured");
        }
    };

    protected static final Formatter DEFAULT_FORMATTER = new Formatter() {
        public String format (Object value) {
            return String.valueOf(value);
        }
    };
}
