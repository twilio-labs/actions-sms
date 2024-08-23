/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to fetch a PluginReleaseInstance
 */
export interface PluginReleaseContextFetchOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
/**
 * Options to pass to create a PluginReleaseInstance
 */
export interface PluginReleaseListInstanceCreateOptions {
    /** The SID or the Version of the Flex Plugin Configuration to release. */
    configurationId: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
/**
 * Options to pass to each
 */
export interface PluginReleaseListInstanceEachOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: PluginReleaseInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface PluginReleaseListInstanceOptions {
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
export interface PluginReleaseListInstancePageOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface PluginReleaseContext {
    /**
     * Fetch a PluginReleaseInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginReleaseInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginReleaseInstance) => any): Promise<PluginReleaseInstance>;
    /**
     * Fetch a PluginReleaseInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginReleaseInstance
     */
    fetch(params: PluginReleaseContextFetchOptions, callback?: (error: Error | null, item?: PluginReleaseInstance) => any): Promise<PluginReleaseInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PluginReleaseContextSolution {
    sid: string;
}
export declare class PluginReleaseContextImpl implements PluginReleaseContext {
    protected _version: V1;
    protected _solution: PluginReleaseContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(params?: PluginReleaseContextFetchOptions | ((error: Error | null, item?: PluginReleaseInstance) => any), callback?: (error: Error | null, item?: PluginReleaseInstance) => any): Promise<PluginReleaseInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PluginReleaseContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PluginReleasePayload extends TwilioResponsePayload {
    releases: PluginReleaseResource[];
}
interface PluginReleaseResource {
    sid: string;
    account_sid: string;
    configuration_sid: string;
    date_created: Date;
    url: string;
}
export declare class PluginReleaseInstance {
    protected _version: V1;
    protected _solution: PluginReleaseContextSolution;
    protected _context?: PluginReleaseContext;
    constructor(_version: V1, payload: PluginReleaseResource, sid?: string);
    /**
     * The unique string that we created to identify the Plugin Release resource.
     */
    sid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Plugin Release resource and owns this resource.
     */
    accountSid: string;
    /**
     * The SID of the Plugin Configuration resource to release.
     */
    configurationSid: string;
    /**
     * The date and time in GMT when the Flex Plugin Release was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The absolute URL of the Plugin Release resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a PluginReleaseInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginReleaseInstance
     */
    fetch(callback?: (error: Error | null, item?: PluginReleaseInstance) => any): Promise<PluginReleaseInstance>;
    /**
     * Fetch a PluginReleaseInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginReleaseInstance
     */
    fetch(params: PluginReleaseContextFetchOptions, callback?: (error: Error | null, item?: PluginReleaseInstance) => any): Promise<PluginReleaseInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        accountSid: string;
        configurationSid: string;
        dateCreated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PluginReleaseSolution {
}
export interface PluginReleaseListInstance {
    _version: V1;
    _solution: PluginReleaseSolution;
    _uri: string;
    (sid: string): PluginReleaseContext;
    get(sid: string): PluginReleaseContext;
    /**
     * Create a PluginReleaseInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PluginReleaseInstance
     */
    create(params: PluginReleaseListInstanceCreateOptions, callback?: (error: Error | null, item?: PluginReleaseInstance) => any): Promise<PluginReleaseInstance>;
    /**
     * Streams PluginReleaseInstance records from the API.
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
     * @param { PluginReleaseListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: PluginReleaseInstance, done: (err?: Error) => void) => void): void;
    each(params: PluginReleaseListInstanceEachOptions, callback?: (item: PluginReleaseInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of PluginReleaseInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: PluginReleasePage) => any): Promise<PluginReleasePage>;
    /**
     * Lists PluginReleaseInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginReleaseListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PluginReleaseInstance[]) => any): Promise<PluginReleaseInstance[]>;
    list(params: PluginReleaseListInstanceOptions, callback?: (error: Error | null, items: PluginReleaseInstance[]) => any): Promise<PluginReleaseInstance[]>;
    /**
     * Retrieve a single page of PluginReleaseInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PluginReleaseListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PluginReleasePage) => any): Promise<PluginReleasePage>;
    page(params: PluginReleaseListInstancePageOptions, callback?: (error: Error | null, items: PluginReleasePage) => any): Promise<PluginReleasePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PluginReleaseListInstance(version: V1): PluginReleaseListInstance;
export declare class PluginReleasePage extends Page<V1, PluginReleasePayload, PluginReleaseResource, PluginReleaseInstance> {
    /**
     * Initialize the PluginReleasePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PluginReleaseSolution);
    /**
     * Build an instance of PluginReleaseInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PluginReleaseResource): PluginReleaseInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
