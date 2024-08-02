/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a PluginConfigurationArchiveInstance
 */
export interface PluginConfigurationArchiveContextUpdateOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
export interface PluginConfigurationArchiveContext {
    /**
     * Update a PluginConfigurationArchiveInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationArchiveInstance
     */
    update(callback?: (error: Error | null, item?: PluginConfigurationArchiveInstance) => any): Promise<PluginConfigurationArchiveInstance>;
    /**
     * Update a PluginConfigurationArchiveInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationArchiveInstance
     */
    update(params: PluginConfigurationArchiveContextUpdateOptions, callback?: (error: Error | null, item?: PluginConfigurationArchiveInstance) => any): Promise<PluginConfigurationArchiveInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginConfigurationArchiveContextSolution {
    sid: string;
}
export declare class PluginConfigurationArchiveContextImpl implements PluginConfigurationArchiveContext {
    protected _version: V1;
    protected _solution: PluginConfigurationArchiveContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    update(params?: PluginConfigurationArchiveContextUpdateOptions | ((error: Error | null, item?: PluginConfigurationArchiveInstance) => any), callback?: (error: Error | null, item?: PluginConfigurationArchiveInstance) => any): Promise<PluginConfigurationArchiveInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginConfigurationArchiveContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginConfigurationArchiveResource {
    sid: string;
    account_sid: string;
    name: string;
    description: string;
    archived: boolean;
    date_created: Date;
    url: string;
}
export declare class PluginConfigurationArchiveInstance {
    protected _version: V1;
    protected _solution: PluginConfigurationArchiveContextSolution;
    protected _context?: PluginConfigurationArchiveContext;
    constructor(_version: V1, payload: PluginConfigurationArchiveResource, sid?: string);
    /**
     * The unique string that we created to identify the Flex Plugin Configuration resource.
     */
    sid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Plugin Configuration resource and owns this resource.
     */
    accountSid: string;
    /**
     * The name of this Flex Plugin Configuration.
     */
    name: string;
    /**
     * The description of the Flex Plugin Configuration resource.
     */
    description: string;
    /**
     * Whether the Flex Plugin Configuration is archived. The default value is false.
     */
    archived: boolean;
    /**
     * The date and time in GMT when the Flex Plugin Configuration was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The absolute URL of the Flex Plugin Configuration resource.
     */
    url: string;
    private get _proxy();
    /**
     * Update a PluginConfigurationArchiveInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationArchiveInstance
     */
    update(callback?: (error: Error | null, item?: PluginConfigurationArchiveInstance) => any): Promise<PluginConfigurationArchiveInstance>;
    /**
     * Update a PluginConfigurationArchiveInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationArchiveInstance
     */
    update(params: PluginConfigurationArchiveContextUpdateOptions, callback?: (error: Error | null, item?: PluginConfigurationArchiveInstance) => any): Promise<PluginConfigurationArchiveInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        accountSid: string;
        name: string;
        description: string;
        archived: boolean;
        dateCreated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginConfigurationArchiveSolution {
}
export interface PluginConfigurationArchiveListInstance {
    _version: V1;
    _solution: PluginConfigurationArchiveSolution;
    _uri: string;
    (sid: string): PluginConfigurationArchiveContext;
    get(sid: string): PluginConfigurationArchiveContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginConfigurationArchiveListInstance(version: V1): PluginConfigurationArchiveListInstance;
export {};
