package org.openapitools.codegen.model;

public class PythonDependency {
    String name;
    String[] version;
    String[] setupPyModifier;
    String[] poetryModifier;

    public PythonDependency(String name, String version, String setupPyModifier, String poetryModifier) {
        this.name = name;
        this.version = new String[]{version};
        this.setupPyModifier = new String[]{setupPyModifier};
        this.poetryModifier = new String[]{poetryModifier};
    }

    public PythonDependency(String name, String[] version, String[] setupPyModifier, String[] poetryModifier) {
        this.name = name;
        this.version = version;
        this.setupPyModifier = setupPyModifier;
        this.poetryModifier = poetryModifier;
    }

    // example: certifi = ">=2023.7.22"
    public String poetry() {
        StringBuilder res = new StringBuilder(name + " = " + "\"");
        for (int i = 0; i < version.length; i++) {
            res.append(poetryModifier[i]).append(version[i].strip());
            if (i < version.length - 1)
                res.append(" || ");
        }
        res.append("\"");
        return res.toString();
    }

    // example: certifi = ">=2023.7.22"
    public String setupPy() {
        StringBuilder res = new StringBuilder("\"" + name + " ");
        for (int i = 0; i < version.length; i++) {
            res.append(setupPyModifier[i]).append(" ").append(version[i]);
            if (i < version.length - 1)
                res.append(", ");
        }
        res.append("\"");
        return res.toString();
    }
}