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
    clientId: string;
    /** The credential for confidential OAuth App. */
    clientSecret?: string;
    /** JWT token related to the authorization code grant type. */
    code?: string;
    /** The redirect uri */
    redirectUri?: string;
    /** The targeted audience uri */
    audience?: string;
    /** JWT token related to refresh access token. */
    refreshToken?: string;
    /** The scope of token */
    scope?: string;
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
    token_type: string;
    expires_in: number;
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
    /**
     * Token which carries the information necessary of user profile.
     */
    idToken: string;
    /**
     * Token type
     */
    tokenType: string;
    expiresIn: number;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accessToken: string;
        refreshToken: string;
        idToken: string;
        tokenType: string;
        expiresIn: number;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
