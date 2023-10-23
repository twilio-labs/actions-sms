/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
type ModelBuildStatus = "enqueued" | "building" | "completed" | "failed" | "canceled";
/**
 * Options to pass to update a ModelBuildInstance
 */
export interface ModelBuildContextUpdateOptions {
    /** An application-defined string that uniquely identifies the resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource. */
    uniqueName?: string;
}
/**
 * Options to pass to create a ModelBuildInstance
 */
export interface ModelBuildListInstanceCreateOptions {
    /** The URL we should call using a POST method to send status information to your application. */
    statusCallback?: string;
    /** An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource. */
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
    protected _version: V1;
    protected _solution: ModelBuildContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, sid: string);
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
    protected _version: V1;
    protected _solution: ModelBuildContextSolution;
    protected _context?: ModelBuildContext;
    constructor(_version: V1, payload: ModelBuildResource, assistantSid: string, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ModelBuild resource.
     */
    accountSid: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid: string;
    /**
     * The unique string that we created to identify the ModelBuild resource.
     */
    sid: string;
    status: ModelBuildStatus;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName: string;
    /**
     * The absolute URL of the ModelBuild resource.
     */
    url: string;
    /**
     * The time in seconds it took to build the model.
     */
    buildDuration: number;
    /**
     * If the `status` for the model build is `failed`, this value is a code to more information about the failure. This value will be null for all other statuses. See [error code dictionary](https://www.twilio.com/docs/api/errors) for a description of the error.
     */
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
    _version: V1;
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
export declare function ModelBuildListInstance(version: V1, assistantSid: string): ModelBuildListInstance;
export declare class ModelBuildPage extends Page<V1, ModelBuildPayload, ModelBuildResource, ModelBuildInstance> {
    /**
     * Initialize the ModelBuildPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ModelBuildSolution);
    /**
     * Build an instance of ModelBuildInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ModelBuildResource): ModelBuildInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
