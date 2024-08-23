/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { PluginVersionsListInstance } from "./plugin/pluginVersions";
/**
 * Options to pass to fetch a PluginInstance
 */
export interface PluginContextFetchOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
/**
 * Options to pass to update a PluginInstance
 */
export interface PluginContextUpdateOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The Flex Plugin\\\'s friendly name. */
    friendlyName?: string;
    /** A descriptive string that you update to describe the plugin resource. It can be up to 500 characters long */
    description?: string;
}
/**
 * Options to pass to create a PluginInstance
 */
export interface PluginListInstanceCreateOptions {
    /** The Flex Plugin\\\'s unique name. */
    uniqueName: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The Flex Plugin\\\'s friendly name. */
    friendlyName?: string;
    /** A descriptive string that you create to describe the plugin resource. It can be up to 500 characters long */
    description?: string;
}
/**
 * Options to pass to each
 */
export interface PluginListInstanceEachOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: PluginInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface PluginListInstanceOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface PluginListInstancePageOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface PluginContext {
    pluginVersions: PluginVersionsListInstance;
    /**
     * Fetch a PluginInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Fetch a PluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    fetch(params: PluginContextFetchOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Update a PluginInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    update(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Update a PluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    update(params: PluginContextUpdateOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginContextSolution {
    sid: string;
}
export declare class PluginContextImpl implements PluginContext {
    protected _version: V1;
    protected _solution: PluginContextSolution;
    protected _uri: string;
    protected _pluginVersions?: PluginVersionsListInstance;
    constructor(_version: V1, sid: string);
    get pluginVersions(): PluginVersionsListInstance;
    fetch(params?: PluginContextFetchOptions | ((error: Error | null, item?: PluginInstance) => any), callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    update(params?: PluginContextUpdateOptions | ((error: Error | null, item?: PluginInstance) => any), callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginPayload extends TwilioResponsePayload {
    plugins: PluginResource[];
}
interface PluginResource {
    sid: string;
    account_sid: string;
    unique_name: string;
    friendly_name: string;
    description: string;
    archived: boolean;
    date_created: Date;
    date_updated: Date;
    url: string;
    links: Record<string, string>;
}
export declare class PluginInstance {
    protected _version: V1;
    protected _solution: PluginContextSolution;
    protected _context?: PluginContext;
    constructor(_version: V1, payload: PluginResource, sid?: string);
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
     * The date and time in GMT-7 when the Flex Plugin was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT-7 when the Flex Plugin was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * The absolute URL of the Flex Plugin resource.
     */
    url: string;
    links: Record<string, string>;
    private get _proxy();
    /**
     * Fetch a PluginInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Fetch a PluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    fetch(params: PluginContextFetchOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Update a PluginInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    update(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Update a PluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    update(params: PluginContextUpdateOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Access the pluginVersions.
     */
    pluginVersions(): PluginVersionsListInstance;
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
        links: Record<string, string>;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginSolution {
}
export interface PluginListInstance {
    _version: V1;
    _solution: PluginSolution;
    _uri: string;
    (sid: string): PluginContext;
    get(sid: string): PluginContext;
    /**
     * Create a PluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginInstance
     */
    create(params: PluginListInstanceCreateOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
    /**
     * Streams PluginInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: PluginInstance, done: (err?: Error) => void) => void): void;
    each(params: PluginListInstanceEachOptions, callback?: (item: PluginInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of PluginInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage>;
    /**
     * Lists PluginInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PluginInstance[]) => any): Promise<PluginInstance[]>;
    list(params: PluginListInstanceOptions, callback?: (error: Error | null, items: PluginInstance[]) => any): Promise<PluginInstance[]>;
    /**
     * Retrieve a single page of PluginInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage>;
    page(params: PluginListInstancePageOptions, callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginListInstance(version: V1): PluginListInstance;
export declare class PluginPage extends Page<V1, PluginPayload, PluginResource, PluginInstance> {
    /**
     * Initialize the PluginPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PluginSolution);
    /**
     * Build an instance of PluginInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PluginResource): PluginInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
