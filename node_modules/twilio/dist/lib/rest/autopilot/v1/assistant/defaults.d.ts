/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to update a DefaultsInstance
 */
export interface DefaultsContextUpdateOptions {
    /** A JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations. */
    defaults?: any;
}
export interface DefaultsContext {
    /**
     * Fetch a DefaultsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DefaultsInstance
     */
    fetch(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DefaultsInstance
     */
    update(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DefaultsInstance
     */
    update(params: DefaultsContextUpdateOptions, callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DefaultsContextSolution {
    assistantSid: string;
}
export declare class DefaultsContextImpl implements DefaultsContext {
    protected _version: V1;
    protected _solution: DefaultsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string);
    fetch(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    update(params?: DefaultsContextUpdateOptions | ((error: Error | null, item?: DefaultsInstance) => any), callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DefaultsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DefaultsResource {
    account_sid: string;
    assistant_sid: string;
    url: string;
    data: any;
}
export declare class DefaultsInstance {
    protected _version: V1;
    protected _solution: DefaultsContextSolution;
    protected _context?: DefaultsContext;
    constructor(_version: V1, payload: DefaultsResource, assistantSid: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Defaults resource.
     */
    accountSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid: string;
    /**
     * The absolute URL of the Defaults resource.
     */
    url: string;
    /**
     * The JSON string that describes the default task links for the `assistant_initiation`, `collect`, and `fallback` situations.
     */
    data: any;
    private get _proxy();
    /**
     * Fetch a DefaultsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DefaultsInstance
     */
    fetch(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DefaultsInstance
     */
    update(callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Update a DefaultsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DefaultsInstance
     */
    update(params: DefaultsContextUpdateOptions, callback?: (error: Error | null, item?: DefaultsInstance) => any): Promise<DefaultsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        assistantSid: string;
        url: string;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DefaultsSolution {
    assistantSid: string;
}
export interface DefaultsListInstance {
    _version: V1;
    _solution: DefaultsSolution;
    _uri: string;
    (): DefaultsContext;
    get(): DefaultsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function DefaultsListInstance(version: V1, assistantSid: string): DefaultsListInstance;
export {};
