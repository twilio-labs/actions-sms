/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a ApiKeyInstance
 */
export interface ApiKeyContextUpdateOptions {
    /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
    friendlyName?: string;
    /** The \\\\`Policy\\\\` object is a collection that specifies the allowed Twilio permissions for the restricted key. For more information on the permissions available with restricted API keys, refer to the [Twilio documentation](https://www.twilio.com/docs/iam/api-keys/restricted-api-keys#permissions-available-with-restricted-api-keys). */
    policy?: any;
}
export interface ApiKeyContext {
    /**
     * Remove a ApiKeyInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ApiKeyInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApiKeyInstance
     */
    fetch(callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Update a ApiKeyInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApiKeyInstance
     */
    update(callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Update a ApiKeyInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApiKeyInstance
     */
    update(params: ApiKeyContextUpdateOptions, callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ApiKeyContextSolution {
    sid: string;
}
export declare class ApiKeyContextImpl implements ApiKeyContext {
    protected _version: V1;
    protected _solution: ApiKeyContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    update(params?: ApiKeyContextUpdateOptions | ((error: Error | null, item?: ApiKeyInstance) => any), callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ApiKeyContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ApiKeyResource {
    sid: string;
    friendly_name: string;
    date_created: Date;
    date_updated: Date;
    policy: any;
}
export declare class ApiKeyInstance {
    protected _version: V1;
    protected _solution: ApiKeyContextSolution;
    protected _context?: ApiKeyContext;
    constructor(_version: V1, payload: ApiKeyResource, sid?: string);
    /**
     * The unique string that we created to identify the Key resource.
     */
    sid: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The \\`Policy\\` object is a collection that specifies the allowed Twilio permissions for the restricted key. For more information on the permissions available with restricted API keys, refer to the [Twilio documentation](https://www.twilio.com/docs/iam/api-keys/restricted-api-keys#permissions-available-with-restricted-api-keys).
     */
    policy: any;
    private get _proxy();
    /**
     * Remove a ApiKeyInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ApiKeyInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApiKeyInstance
     */
    fetch(callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Update a ApiKeyInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApiKeyInstance
     */
    update(callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Update a ApiKeyInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApiKeyInstance
     */
    update(params: ApiKeyContextUpdateOptions, callback?: (error: Error | null, item?: ApiKeyInstance) => any): Promise<ApiKeyInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        friendlyName: string;
        dateCreated: Date;
        dateUpdated: Date;
        policy: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ApiKeySolution {
}
export interface ApiKeyListInstance {
    _version: V1;
    _solution: ApiKeySolution;
    _uri: string;
    (sid: string): ApiKeyContext;
    get(sid: string): ApiKeyContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ApiKeyListInstance(version: V1): ApiKeyListInstance;
export {};
