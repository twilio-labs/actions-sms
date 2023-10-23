/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
type ModelBuildStatus = "enqueued" | "building" | "completed" | "failed" | "canceled";
/**
 * Options to pass to update a ModelBuildInstance
 */
export interface ModelBuildContextUpdateOptions {
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1 */
    uniqueName?: string;
}
/**
 * Options to pass to create a ModelBuildInstance
 */
export interface ModelBuildListInstanceCreateOptions {
    /**  */
    statusCallback?: string;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. For example: v0.1 */
    uniqueName?: string;
}
/**
 * Options to pass to each
 */
export interface ModelBuildListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface ModelBuildListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface ModelBuildListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface ModelBuildContext {
    /**
     * Remove a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    fetch(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    update(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    update(params: ModelBuildContextUpdateOptions, callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ModelBuildContextSolution {
    assistantSid: string;
    sid: string;
}
export declare class ModelBuildContextImpl implements ModelBuildContext {
    protected _version: Understand;
    protected _solution: ModelBuildContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    update(params?: ModelBuildContextUpdateOptions | ((error: Error | null, item?: ModelBuildInstance) => any), callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ModelBuildContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ModelBuildPayload extends TwilioResponsePayload {
    model_builds: ModelBuildResource[];
}
interface ModelBuildResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    assistant_sid: string;
    sid: string;
    status: ModelBuildStatus;
    unique_name: string;
    url: string;
    build_duration: number;
    error_code: number;
}
export declare class ModelBuildInstance {
    protected _version: Understand;
    protected _solution: ModelBuildContextSolution;
    protected _context?: ModelBuildContext;
    constructor(_version: Understand, payload: ModelBuildResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Model Build.
     */
    accountSid: string;
    /**
     * The date that this resource was created
     */
    dateCreated: Date;
    /**
     * The date that this resource was last updated
     */
    dateUpdated: Date;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    status: ModelBuildStatus;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName: string;
    url: string;
    /**
     * The time in seconds it took to build the model.
     */
    buildDuration: number;
    errorCode: number;
    private get _proxy();
    /**
     * Remove a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    fetch(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    update(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Update a ModelBuildInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    update(params: ModelBuildContextUpdateOptions, callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        assistantSid: string;
        sid: string;
        status: ModelBuildStatus;
        uniqueName: string;
        url: string;
        buildDuration: number;
        errorCode: number;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ModelBuildSolution {
    assistantSid: string;
}
export interface ModelBuildListInstance {
    _version: Understand;
    _solution: ModelBuildSolution;
    _uri: string;
    (sid: string): ModelBuildContext;
    get(sid: string): ModelBuildContext;
    /**
     * Create a ModelBuildInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    create(callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Create a ModelBuildInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModelBuildInstance
     */
    create(params: ModelBuildListInstanceCreateOptions, callback?: (error: Error | null, item?: ModelBuildInstance) => any): Promise<ModelBuildInstance>;
    /**
     * Streams ModelBuildInstance records from the API.
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
     * @param { ModelBuildListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void): void;
    each(params: ModelBuildListInstanceEachOptions, callback?: (item: ModelBuildInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of ModelBuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    /**
     * Lists ModelBuildInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ModelBuildListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ModelBuildInstance[]) => any): Promise<ModelBuildInstance[]>;
    list(params: ModelBuildListInstanceOptions, callback?: (error: Error | null, items: ModelBuildInstance[]) => any): Promise<ModelBuildInstance[]>;
    /**
     * Retrieve a single page of ModelBuildInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ModelBuildListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    page(params: ModelBuildListInstancePageOptions, callback?: (error: Error | null, items: ModelBuildPage) => any): Promise<ModelBuildPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ModelBuildListInstance(version: Understand, assistantSid: string): ModelBuildListInstance;
export declare class ModelBuildPage extends Page<Understand, ModelBuildPayload, ModelBuildResource, ModelBuildInstance> {
    /**
     * Initialize the ModelBuildPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: ModelBuildSolution);
    /**
     * Build an instance of ModelBuildInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ModelBuildResource): ModelBuildInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
