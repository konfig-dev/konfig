package org.openapitools.codegen;

/**
 * Includes all information about an import
 */
public class CodegenImport {
    /**
     * Import declaration
     */
    private String importString;

    /**
     * Is circular import
     */
    private boolean isCircular;

    public CodegenImport(String importString, boolean isCircular) {
        this.importString = importString;
        this.isCircular = isCircular;
    }

    public String getImportString() {
        return importString;
    }

    public void setImportString(String importString) {
        this.importString = importString;
    }

    public boolean isCircular() {
        return isCircular;
    }

    public void setCircular(boolean circular) {
        isCircular = circular;
    }
}
