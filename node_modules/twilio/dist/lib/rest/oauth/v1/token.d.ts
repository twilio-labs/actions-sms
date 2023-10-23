/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a TokenInstance
 */
export interface TokenListInstanceCreateOptions {
    /** Grant type is a credential representing resource owner\\\'s authorization which can be used by client to obtain access token. */
    grantType: string;
    /** A 34 character string that uniquely identifies this OAuth App. */
    clientSid: string;
    /** The credential for confidential OAuth App. */
    clientSecret?: string;
    /** JWT token related to the authorization code grant type. */
    code?: string;
    /** A code which is generation cryptographically. */
    codeVerifier?: string;
    /** JWT token related to the device code grant type. */
    deviceCode?: string;
    /** JWT token related to the refresh token grant type. */
    refreshToken?: string;
    /** The Id of the device associated with the token (refresh token). */
    deviceId?: string;
}
export interface TokenSolution {
}
export interface TokenListInstance {
    _version: V1;
    _solution: TokenSolution;
    _uri: string;
    /**
     * Create a TokenInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TokenInstance
     */
    create(params: TokenListInstanceCreateOptions, callback?: (error: Error | null, item?: TokenInstance) => any): Promise<TokenInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function TokenListInstance(version: V1): TokenListInstance;
interface TokenResource {
    access_token: string;
    refresh_token: string;
    id_token: string;
    refresh_token_expires_at: Date;
    access_token_expires_at: Date;
}
export declare class TokenInstance {
    protected _version: V1;
    constructor(_version: V1, payload: TokenResource);
    /**
     * Token which carries the necessary information to access a Twilio resource directly.
     */
    accessToken: string;
    /**
     * Token which carries the information necessary to get a new access token.
     */
    refreshToken: string;
    idToken: string;
    /**
     * The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    refreshTokenExpiresAt: Date;
    /**
     * The date and time in GMT when the refresh token expires in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    accessTokenExpiresAt: Date;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accessToken: string;
        refreshToken: string;
        idToken: string;
        refreshTokenExpiresAt: Date;
        accessTokenExpiresAt: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
