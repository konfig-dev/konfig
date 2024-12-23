/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type simCredentials = {
    /**
     * Type of object is always `simCredentials`.
     */
    object: string;
    /**
     * eSIM activation code to download and install the profile in a device. Only available for type `eSIM`.
     */
    activationCode: string | null;
    /**
     * URL of the activation code in QR-Code format. Only available for type `eSIM`.
     *
     * <!-- theme: warning -->
     *
     * > Be careful how you share this URL, it can be accessed publicly without authentication.
     */
    qrCodeUrl: string | null;
    /**
     * Unique identifier for the SIM this credentials are for.
     */
    sim: string;
};

