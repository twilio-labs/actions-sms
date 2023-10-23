/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface OauthContext {
    /**
     * Fetch a OauthInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OauthInstance
     */
    fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OauthContextSolution {
}
export declare class OauthContextImpl implements OauthContext {
    protected _version: V1;
    protected _solution: OauthContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OauthContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OauthResource {
    keys: any;
    url: string;
}
export declare class OauthInstance {
    protected _version: V1;
    protected _solution: OauthContextSolution;
    protected _context?: OauthContext;
    constructor(_version: V1, payload: OauthResource);
    /**
     * A collection of certificates where are signed Twilio-issued tokens.
     */
    keys: any;
    url: string;
    private get _proxy();
    /**
     * Fetch a OauthInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OauthInstance
     */
    fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        keys: any;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OauthSolution {
}
export interface OauthListInstance {
    _version: V1;
    _solution: OauthSolution;
    _uri: string;
    (): OauthContext;
    get(): OauthContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function OauthListInstance(version: V1): OauthListInstance;
export {};
