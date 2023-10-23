/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface OpenidDiscoveryContext {
    /**
     * Fetch a OpenidDiscoveryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OpenidDiscoveryInstance
     */
    fetch(callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any): Promise<OpenidDiscoveryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OpenidDiscoveryContextSolution {
}
export declare class OpenidDiscoveryContextImpl implements OpenidDiscoveryContext {
    protected _version: V1;
    protected _solution: OpenidDiscoveryContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any): Promise<OpenidDiscoveryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OpenidDiscoveryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OpenidDiscoveryResource {
    issuer: string;
    authorization_endpoint: string;
    device_authorization_endpoint: string;
    token_endpoint: string;
    userinfo_endpoint: string;
    revocation_endpoint: string;
    jwk_uri: string;
    response_type_supported: Array<string>;
    subject_type_supported: Array<string>;
    id_token_signing_alg_values_supported: Array<string>;
    scopes_supported: Array<string>;
    claims_supported: Array<string>;
    url: string;
}
export declare class OpenidDiscoveryInstance {
    protected _version: V1;
    protected _solution: OpenidDiscoveryContextSolution;
    protected _context?: OpenidDiscoveryContext;
    constructor(_version: V1, payload: OpenidDiscoveryResource);
    /**
     * The URL of the party that will create the token and sign it with its private key.
     */
    issuer: string;
    /**
     * The endpoint that validates all authorization requests.
     */
    authorizationEndpoint: string;
    /**
     * The endpoint that validates all device code related authorization requests.
     */
    deviceAuthorizationEndpoint: string;
    /**
     * The URL of the token endpoint. After a client has received an authorization code, that code is presented to the token endpoint and exchanged for an identity token, an access token, and a refresh token.
     */
    tokenEndpoint: string;
    /**
     * The URL of the user info endpoint, which returns user profile information to a client. Keep in mind that the user info endpoint returns only the information that has been requested.
     */
    userinfoEndpoint: string;
    /**
     * The endpoint used to revoke access or refresh tokens issued by the authorization server.
     */
    revocationEndpoint: string;
    /**
     * The URL of your JSON Web Key Set. This set is a collection of JSON Web Keys, a standard method for representing cryptographic keys in a JSON structure.
     */
    jwkUri: string;
    /**
     * A collection of response type supported by authorization server.
     */
    responseTypeSupported: Array<string>;
    /**
     * A collection of subject by authorization server.
     */
    subjectTypeSupported: Array<string>;
    /**
     * A collection of JWS signing algorithms supported by authorization server to sign identity token.
     */
    idTokenSigningAlgValuesSupported: Array<string>;
    /**
     * A collection of scopes supported by authorization server for identity token
     */
    scopesSupported: Array<string>;
    /**
     * A collection of claims supported by authorization server for identity token
     */
    claimsSupported: Array<string>;
    url: string;
    private get _proxy();
    /**
     * Fetch a OpenidDiscoveryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OpenidDiscoveryInstance
     */
    fetch(callback?: (error: Error | null, item?: OpenidDiscoveryInstance) => any): Promise<OpenidDiscoveryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        issuer: string;
        authorizationEndpoint: string;
        deviceAuthorizationEndpoint: string;
        tokenEndpoint: string;
        userinfoEndpoint: string;
        revocationEndpoint: string;
        jwkUri: string;
        responseTypeSupported: string[];
        subjectTypeSupported: string[];
        idTokenSigningAlgValuesSupported: string[];
        scopesSupported: string[];
        claimsSupported: string[];
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OpenidDiscoverySolution {
}
export interface OpenidDiscoveryListInstance {
    _version: V1;
    _solution: OpenidDiscoverySolution;
    _uri: string;
    (): OpenidDiscoveryContext;
    get(): OpenidDiscoveryContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function OpenidDiscoveryListInstance(version: V1): OpenidDiscoveryListInstance;
export {};
