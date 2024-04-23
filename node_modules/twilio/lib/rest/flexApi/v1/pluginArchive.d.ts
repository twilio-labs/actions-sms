/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a PluginArchiveInstance
 */
export interface PluginArchiveContextUpdateOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
export interface PluginArchiveContext {
    /**
     * Update a PluginArchiveInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginArchiveInstance
     */
    update(callback?: (error: Error | null, item?: PluginArchiveInstance) => any): Promise<PluginArchiveInstance>;
    /**
     * Update a PluginArchiveInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginArchiveInstance
     */
    update(params: PluginArchiveContextUpdateOptions, callback?: (error: Error | null, item?: PluginArchiveInstance) => any): Promise<PluginArchiveInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginArchiveContextSolution {
    sid: string;
}
export declare class PluginArchiveContextImpl implements PluginArchiveContext {
    protected _version: V1;
    protected _solution: PluginArchiveContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    update(params?: PluginArchiveContextUpdateOptions | ((error: Error | null, item?: PluginArchiveInstance) => any), callback?: (error: Error | null, item?: PluginArchiveInstance) => any): Promise<PluginArchiveInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginArchiveContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginArchiveResource {
    sid: string;
    account_sid: string;
    unique_name: string;
    friendly_name: string;
    description: string;
    archived: boolean;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class PluginArchiveInstance {
    protected _version: V1;
    protected _solution: PluginArchiveContextSolution;
    protected _context?: PluginArchiveContext;
    constructor(_version: V1, payload: PluginArchiveResource, sid?: string);
    /**
     * The unique string that we created to identify the Flex Plugin resource.
     */
    sid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Plugin resource and owns this resource.
     */
    accountSid: string;
    /**
     * The name that uniquely identifies this Flex Plugin resource.
     */
    uniqueName: string;
    /**
     * The friendly name this Flex Plugin resource.
     */
    friendlyName: string;
    /**
     * A descriptive string that you create to describe the plugin resource. It can be up to 500 characters long
     */
    description: string;
    /**
     * Whether the Flex Plugin is archived. The default value is false.
     */
    archived: boolean;
    /**
     * The date and time in GMT when the Flex Plugin was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Flex Plugin was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * The absolute URL of the Flex Plugin resource.
     */
    url: string;
    private get _proxy();
    /**
     * Update a PluginArchiveInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginArchiveInstance
     */
    update(callback?: (error: Error | null, item?: PluginArchiveInstance) => any): Promise<PluginArchiveInstance>;
    /**
     * Update a PluginArchiveInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginArchiveInstance
     */
    update(params: PluginArchiveContextUpdateOptions, callback?: (error: Error | null, item?: PluginArchiveInstance) => any): Promise<PluginArchiveInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        accountSid: string;
        uniqueName: string;
        friendlyName: string;
        description: string;
        archived: boolean;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginArchiveSolution {
}
export interface PluginArchiveListInstance {
    _version: V1;
    _solution: PluginArchiveSolution;
    _uri: string;
    (sid: string): PluginArchiveContext;
    get(sid: string): PluginArchiveContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginArchiveListInstance(version: V1): PluginArchiveListInstance;
export {};
