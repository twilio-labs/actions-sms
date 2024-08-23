/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a PluginVersionArchiveInstance
 */
export interface PluginVersionArchiveContextUpdateOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
export interface PluginVersionArchiveContext {
    /**
     * Update a PluginVersionArchiveInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionArchiveInstance
     */
    update(callback?: (error: Error | null, item?: PluginVersionArchiveInstance) => any): Promise<PluginVersionArchiveInstance>;
    /**
     * Update a PluginVersionArchiveInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionArchiveInstance
     */
    update(params: PluginVersionArchiveContextUpdateOptions, callback?: (error: Error | null, item?: PluginVersionArchiveInstance) => any): Promise<PluginVersionArchiveInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginVersionArchiveContextSolution {
    pluginSid: string;
    sid: string;
}
export declare class PluginVersionArchiveContextImpl implements PluginVersionArchiveContext {
    protected _version: V1;
    protected _solution: PluginVersionArchiveContextSolution;
    protected _uri: string;
    constructor(_version: V1, pluginSid: string, sid: string);
    update(params?: PluginVersionArchiveContextUpdateOptions | ((error: Error | null, item?: PluginVersionArchiveInstance) => any), callback?: (error: Error | null, item?: PluginVersionArchiveInstance) => any): Promise<PluginVersionArchiveInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginVersionArchiveContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginVersionArchiveResource {
    sid: string;
    plugin_sid: string;
    account_sid: string;
    version: string;
    plugin_url: string;
    changelog: string;
    private: boolean;
    archived: boolean;
    date_created: Date;
    url: string;
}
export declare class PluginVersionArchiveInstance {
    protected _version: V1;
    protected _solution: PluginVersionArchiveContextSolution;
    protected _context?: PluginVersionArchiveContext;
    constructor(_version: V1, payload: PluginVersionArchiveResource, pluginSid?: string, sid?: string);
    /**
     * The unique string that we created to identify the Flex Plugin Version resource.
     */
    sid: string;
    /**
     * The SID of the Flex Plugin resource this Flex Plugin Version belongs to.
     */
    pluginSid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Plugin Version resource and owns this resource.
     */
    accountSid: string;
    /**
     * The unique version of this Flex Plugin Version.
     */
    version: string;
    /**
     * The URL of where the Flex Plugin Version JavaScript bundle is hosted on.
     */
    pluginUrl: string;
    /**
     * A changelog that describes the changes this Flex Plugin Version brings.
     */
    changelog: string;
    /**
     * Whether to inject credentials while accessing this Plugin Version. The default value is false.
     */
    _private: boolean;
    /**
     * Whether the Flex Plugin Version is archived. The default value is false.
     */
    archived: boolean;
    /**
     * The date and time in GMT when the Flex Plugin Version was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The absolute URL of the Flex Plugin Version resource.
     */
    url: string;
    private get _proxy();
    /**
     * Update a PluginVersionArchiveInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionArchiveInstance
     */
    update(callback?: (error: Error | null, item?: PluginVersionArchiveInstance) => any): Promise<PluginVersionArchiveInstance>;
    /**
     * Update a PluginVersionArchiveInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionArchiveInstance
     */
    update(params: PluginVersionArchiveContextUpdateOptions, callback?: (error: Error | null, item?: PluginVersionArchiveInstance) => any): Promise<PluginVersionArchiveInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        pluginSid: string;
        accountSid: string;
        version: string;
        pluginUrl: string;
        changelog: string;
        _private: boolean;
        archived: boolean;
        dateCreated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginVersionArchiveSolution {
}
export interface PluginVersionArchiveListInstance {
    _version: V1;
    _solution: PluginVersionArchiveSolution;
    _uri: string;
    (pluginSid: string, sid: string): PluginVersionArchiveContext;
    get(pluginSid: string, sid: string): PluginVersionArchiveContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginVersionArchiveListInstance(version: V1): PluginVersionArchiveListInstance;
export {};
