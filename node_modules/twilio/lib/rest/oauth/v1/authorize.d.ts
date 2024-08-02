/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to fetch a AuthorizeInstance
 */
export interface AuthorizeListInstanceFetchOptions {
    /** Response Type */
    responseType?: string;
    /** The Client Identifier */
    clientId?: string;
    /** The url to which response will be redirected to */
    redirectUri?: string;
    /** The scope of the access request */
    scope?: string;
    /** An opaque value which can be used to maintain state between the request and callback */
    state?: string;
}
export interface AuthorizeSolution {
}
export interface AuthorizeListInstance {
    _version: V1;
    _solution: AuthorizeSolution;
    _uri: string;
    /**
     * Fetch a AuthorizeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AuthorizeInstance
     */
    fetch(callback?: (error: Error | null, item?: AuthorizeInstance) => any): Promise<AuthorizeInstance>;
    /**
     * Fetch a AuthorizeInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AuthorizeInstance
     */
    fetch(params: AuthorizeListInstanceFetchOptions, callback?: (error: Error | null, item?: AuthorizeInstance) => any): Promise<AuthorizeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AuthorizeListInstance(version: V1): AuthorizeListInstance;
interface AuthorizeResource {
    redirect_to: string;
}
export declare class AuthorizeInstance {
    protected _version: V1;
    constructor(_version: V1, payload: AuthorizeResource);
    /**
     * The callback URL
     */
    redirectTo: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        redirectTo: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
