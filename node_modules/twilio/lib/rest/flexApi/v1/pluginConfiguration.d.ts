/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ConfiguredPluginListInstance } from "./pluginConfiguration/configuredPlugin";
/**
 * Options to pass to fetch a PluginConfigurationInstance
 */
export interface PluginConfigurationContextFetchOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
/**
 * Options to pass to create a PluginConfigurationInstance
 */
export interface PluginConfigurationListInstanceCreateOptions {
    /** The Flex Plugin Configuration\\\'s name. */
    name: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** A list of objects that describe the plugin versions included in the configuration. Each object contains the sid of the plugin version. */
    plugins?: Array<any>;
    /** The Flex Plugin Configuration\\\'s description. */
    description?: string;
}
/**
 * Options to pass to each
 */
export interface PluginConfigurationListInstanceEachOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: PluginConfigurationInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface PluginConfigurationListInstanceOptions {
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
export interface PluginConfigurationListInstancePageOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface PluginConfigurationContext {
    plugins: ConfiguredPluginListInstance;
    /**
     * Fetch a PluginConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginConfigurationInstance) => any): Promise<PluginConfigurationInstance>;
    /**
     * Fetch a PluginConfigurationInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationInstance
     */
    fetch(params: PluginConfigurationContextFetchOptions, callback?: (error: Error | null, item?: PluginConfigurationInstance) => any): Promise<PluginConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginConfigurationContextSolution {
    sid: string;
}
export declare class PluginConfigurationContextImpl implements PluginConfigurationContext {
    protected _version: V1;
    protected _solution: PluginConfigurationContextSolution;
    protected _uri: string;
    protected _plugins?: ConfiguredPluginListInstance;
    constructor(_version: V1, sid: string);
    get plugins(): ConfiguredPluginListInstance;
    fetch(params?: PluginConfigurationContextFetchOptions | ((error: Error | null, item?: PluginConfigurationInstance) => any), callback?: (error: Error | null, item?: PluginConfigurationInstance) => any): Promise<PluginConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginConfigurationContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginConfigurationPayload extends TwilioResponsePayload {
    configurations: PluginConfigurationResource[];
}
interface PluginConfigurationResource {
    sid: string;
    account_sid: string;
    name: string;
    description: string;
    archived: boolean;
    date_created: Date;
    url: string;
    links: Record<string, string>;
}
export declare class PluginConfigurationInstance {
    protected _version: V1;
    protected _solution: PluginConfigurationContextSolution;
    protected _context?: PluginConfigurationContext;
    constructor(_version: V1, payload: PluginConfigurationResource, sid?: string);
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
    links: Record<string, string>;
    private get _proxy();
    /**
     * Fetch a PluginConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginConfigurationInstance) => any): Promise<PluginConfigurationInstance>;
    /**
     * Fetch a PluginConfigurationInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationInstance
     */
    fetch(params: PluginConfigurationContextFetchOptions, callback?: (error: Error | null, item?: PluginConfigurationInstance) => any): Promise<PluginConfigurationInstance>;
    /**
     * Access the plugins.
     */
    plugins(): ConfiguredPluginListInstance;
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
        links: Record<string, string>;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginConfigurationSolution {
}
export interface PluginConfigurationListInstance {
    _version: V1;
    _solution: PluginConfigurationSolution;
    _uri: string;
    (sid: string): PluginConfigurationContext;
    get(sid: string): PluginConfigurationContext;
    /**
     * Create a PluginConfigurationInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginConfigurationInstance
     */
    create(params: PluginConfigurationListInstanceCreateOptions, callback?: (error: Error | null, item?: PluginConfigurationInstance) => any): Promise<PluginConfigurationInstance>;
    /**
     * Streams PluginConfigurationInstance records from the API.
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
     * @param { PluginConfigurationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: PluginConfigurationInstance, done: (err?: Error) => void) => void): void;
    each(params: PluginConfigurationListInstanceEachOptions, callback?: (item: PluginConfigurationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of PluginConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: PluginConfigurationPage) => any): Promise<PluginConfigurationPage>;
    /**
     * Lists PluginConfigurationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginConfigurationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PluginConfigurationInstance[]) => any): Promise<PluginConfigurationInstance[]>;
    list(params: PluginConfigurationListInstanceOptions, callback?: (error: Error | null, items: PluginConfigurationInstance[]) => any): Promise<PluginConfigurationInstance[]>;
    /**
     * Retrieve a single page of PluginConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginConfigurationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PluginConfigurationPage) => any): Promise<PluginConfigurationPage>;
    page(params: PluginConfigurationListInstancePageOptions, callback?: (error: Error | null, items: PluginConfigurationPage) => any): Promise<PluginConfigurationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginConfigurationListInstance(version: V1): PluginConfigurationListInstance;
export declare class PluginConfigurationPage extends Page<V1, PluginConfigurationPayload, PluginConfigurationResource, PluginConfigurationInstance> {
    /**
     * Initialize the PluginConfigurationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PluginConfigurationSolution);
    /**
     * Build an instance of PluginConfigurationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PluginConfigurationResource): PluginConfigurationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
