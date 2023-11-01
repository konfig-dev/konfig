package org.openapitools.codegen.model;

public class PythonDependency {
    String name;
    String version;
    String setupPyModifier;
    String poetryModifier;

    public PythonDependency(String name, String version, String setupPyModifier, String poetryModifier) {
        this.name = name;
        this.version = version;
        this.setupPyModifier = setupPyModifier;
        this.poetryModifier = poetryModifier;
    }

    // example: certifi = ">=2023.7.22"
    public String poetry() {
        return name + " = " + "\"" + poetryModifier + version + "\"";
    }

    // example: certifi = ">=2023.7.22"
    public String setupPy() {
        return "\"" + name + " " + setupPyModifier + " " + version + "\"";
    }
}