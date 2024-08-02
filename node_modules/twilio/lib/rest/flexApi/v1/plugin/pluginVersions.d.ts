/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to fetch a PluginVersionsInstance
 */
export interface PluginVersionsContextFetchOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
/**
 * Options to pass to create a PluginVersionsInstance
 */
export interface PluginVersionsListInstanceCreateOptions {
    /** The Flex Plugin Version\\\'s version. */
    version: string;
    /** The URL of the Flex Plugin Version bundle */
    pluginUrl: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The changelog of the Flex Plugin Version. */
    changelog?: string;
    /** Whether this Flex Plugin Version requires authorization. */
    private?: boolean;
    /** The version of Flex Plugins CLI used to create this plugin */
    cliVersion?: string;
    /** The validation status of the plugin, indicating whether it has been validated */
    validateStatus?: string;
}
/**
 * Options to pass to each
 */
export interface PluginVersionsListInstanceEachOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: PluginVersionsInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface PluginVersionsListInstanceOptions {
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
export interface PluginVersionsListInstancePageOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface PluginVersionsContext {
    /**
     * Fetch a PluginVersionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionsInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginVersionsInstance) => any): Promise<PluginVersionsInstance>;
    /**
     * Fetch a PluginVersionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionsInstance
     */
    fetch(params: PluginVersionsContextFetchOptions, callback?: (error: Error | null, item?: PluginVersionsInstance) => any): Promise<PluginVersionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginVersionsContextSolution {
    pluginSid: string;
    sid: string;
}
export declare class PluginVersionsContextImpl implements PluginVersionsContext {
    protected _version: V1;
    protected _solution: PluginVersionsContextSolution;
    protected _uri: string;
    constructor(_version: V1, pluginSid: string, sid: string);
    fetch(params?: PluginVersionsContextFetchOptions | ((error: Error | null, item?: PluginVersionsInstance) => any), callback?: (error: Error | null, item?: PluginVersionsInstance) => any): Promise<PluginVersionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginVersionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginVersionsPayload extends TwilioResponsePayload {
    plugin_versions: PluginVersionsResource[];
}
interface PluginVersionsResource {
    sid: string;
    plugin_sid: string;
    account_sid: string;
    version: string;
    plugin_url: string;
    changelog: string;
    private: boolean;
    archived: boolean;
    validated: boolean;
    date_created: Date;
    url: string;
}
export declare class PluginVersionsInstance {
    protected _version: V1;
    protected _solution: PluginVersionsContextSolution;
    protected _context?: PluginVersionsContext;
    constructor(_version: V1, payload: PluginVersionsResource, pluginSid: string, sid?: string);
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
     * Whether the Flex Plugin Version is validated. The default value is false.
     */
    _private: boolean;
    /**
     * Whether the Flex Plugin Version is archived. The default value is false.
     */
    archived: boolean;
    validated: boolean;
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
     * Fetch a PluginVersionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionsInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginVersionsInstance) => any): Promise<PluginVersionsInstance>;
    /**
     * Fetch a PluginVersionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionsInstance
     */
    fetch(params: PluginVersionsContextFetchOptions, callback?: (error: Error | null, item?: PluginVersionsInstance) => any): Promise<PluginVersionsInstance>;
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
        validated: boolean;
        dateCreated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginVersionsSolution {
    pluginSid: string;
}
export interface PluginVersionsListInstance {
    _version: V1;
    _solution: PluginVersionsSolution;
    _uri: string;
    (sid: string): PluginVersionsContext;
    get(sid: string): PluginVersionsContext;
    /**
     * Create a PluginVersionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginVersionsInstance
     */
    create(params: PluginVersionsListInstanceCreateOptions, callback?: (error: Error | null, item?: PluginVersionsInstance) => any): Promise<PluginVersionsInstance>;
    /**
     * Streams PluginVersionsInstance records from the API.
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
     * @param { PluginVersionsListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: PluginVersionsInstance, done: (err?: Error) => void) => void): void;
    each(params: PluginVersionsListInstanceEachOptions, callback?: (item: PluginVersionsInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of PluginVersionsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: PluginVersionsPage) => any): Promise<PluginVersionsPage>;
    /**
     * Lists PluginVersionsInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginVersionsListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PluginVersionsInstance[]) => any): Promise<PluginVersionsInstance[]>;
    list(params: PluginVersionsListInstanceOptions, callback?: (error: Error | null, items: PluginVersionsInstance[]) => any): Promise<PluginVersionsInstance[]>;
    /**
     * Retrieve a single page of PluginVersionsInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginVersionsListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PluginVersionsPage) => any): Promise<PluginVersionsPage>;
    page(params: PluginVersionsListInstancePageOptions, callback?: (error: Error | null, items: PluginVersionsPage) => any): Promise<PluginVersionsPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginVersionsListInstance(version: V1, pluginSid: string): PluginVersionsListInstance;
export declare class PluginVersionsPage extends Page<V1, PluginVersionsPayload, PluginVersionsResource, PluginVersionsInstance> {
    /**
     * Initialize the PluginVersionsPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PluginVersionsSolution);
    /**
     * Build an instance of PluginVersionsInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PluginVersionsResource): PluginVersionsInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
