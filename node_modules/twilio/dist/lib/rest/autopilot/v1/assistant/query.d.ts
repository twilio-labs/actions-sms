/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to update a QueryInstance
 */
export interface QueryContextUpdateOptions {
    /** The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query. */
    sampleSid?: string;
    /** The new status of the resource. Can be: `pending-review`, `reviewed`, or `discarded` */
    status?: string;
}
/**
 * Options to pass to create a QueryInstance
 */
export interface QueryListInstanceCreateOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new query. For example: `en-US`. */
    language: string;
    /** The end-user\\\'s natural language input. It can be up to 2048 characters long. */
    query: string;
    /** The list of tasks to limit the new query to. Tasks are expressed as a comma-separated list of task `unique_name` values. For example, `task-unique_name-1, task-unique_name-2`. Listing specific tasks is useful to constrain the paths that a user can take. */
    tasks?: string;
    /** The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried. */
    modelBuild?: string;
}
/**
 * Options to pass to each
 */
export interface QueryListInstanceEachOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`. */
    language?: string;
    /** The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried. */
    modelBuild?: string;
    /** The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded` */
    status?: string;
    /** The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue). */
    dialogueSid?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: QueryInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface QueryListInstanceOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`. */
    language?: string;
    /** The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried. */
    modelBuild?: string;
    /** The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded` */
    status?: string;
    /** The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue). */
    dialogueSid?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface QueryListInstancePageOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query resources to read. For example: `en-US`. */
    language?: string;
    /** The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried. */
    modelBuild?: string;
    /** The status of the resources to read. Can be: `pending-review`, `reviewed`, or `discarded` */
    status?: string;
    /** The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue). */
    dialogueSid?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface QueryContext {
    /**
     * Remove a QueryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a QueryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    update(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    update(params: QueryContextUpdateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface QueryContextSolution {
    assistantSid: string;
    sid: string;
}
export declare class QueryContextImpl implements QueryContext {
    protected _version: V1;
    protected _solution: QueryContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    update(params?: QueryContextUpdateOptions | ((error: Error | null, item?: QueryInstance) => any), callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): QueryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface QueryPayload extends TwilioResponsePayload {
    queries: QueryResource[];
}
interface QueryResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    results: any;
    language: string;
    model_build_sid: string;
    query: string;
    sample_sid: string;
    assistant_sid: string;
    sid: string;
    status: string;
    url: string;
    source_channel: string;
    dialogue_sid: string;
}
export declare class QueryInstance {
    protected _version: V1;
    protected _solution: QueryContextSolution;
    protected _context?: QueryContext;
    constructor(_version: V1, payload: QueryResource, assistantSid: string, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Query resource.
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
     * The natural language analysis results that include the [Task](https://www.twilio.com/docs/autopilot/api/task) recognized and a list of identified [Fields](https://www.twilio.com/docs/autopilot/api/task-field).
     */
    results: any;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used by the Query. For example: `en-US`.
     */
    language: string;
    /**
     * The SID of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) queried.
     */
    modelBuildSid: string;
    /**
     * The end-user\'s natural language input.
     */
    query: string;
    /**
     * The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
     */
    sampleSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid: string;
    /**
     * The unique string that we created to identify the Query resource.
     */
    sid: string;
    /**
     * The status of the Query. Can be: `pending-review`, `reviewed`, or `discarded`
     */
    status: string;
    /**
     * The absolute URL of the Query resource.
     */
    url: string;
    /**
     * The communication channel from where the end-user input came.
     */
    sourceChannel: string;
    /**
     * The SID of the [Dialogue](https://www.twilio.com/docs/autopilot/api/dialogue).
     */
    dialogueSid: string;
    private get _proxy();
    /**
     * Remove a QueryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a QueryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    fetch(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    update(callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Update a QueryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    update(params: QueryContextUpdateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        results: any;
        language: string;
        modelBuildSid: string;
        query: string;
        sampleSid: string;
        assistantSid: string;
        sid: string;
        status: string;
        url: string;
        sourceChannel: string;
        dialogueSid: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface QuerySolution {
    assistantSid: string;
}
export interface QueryListInstance {
    _version: V1;
    _solution: QuerySolution;
    _uri: string;
    (sid: string): QueryContext;
    get(sid: string): QueryContext;
    /**
     * Create a QueryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed QueryInstance
     */
    create(params: QueryListInstanceCreateOptions, callback?: (error: Error | null, item?: QueryInstance) => any): Promise<QueryInstance>;
    /**
     * Streams QueryInstance records from the API.
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
     * @param { QueryListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
    each(params: QueryListInstanceEachOptions, callback?: (item: QueryInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of QueryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    /**
     * Lists QueryInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { QueryListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
    list(params: QueryListInstanceOptions, callback?: (error: Error | null, items: QueryInstance[]) => any): Promise<QueryInstance[]>;
    /**
     * Retrieve a single page of QueryInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { QueryListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    page(params: QueryListInstancePageOptions, callback?: (error: Error | null, items: QueryPage) => any): Promise<QueryPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function QueryListInstance(version: V1, assistantSid: string): QueryListInstance;
export declare class QueryPage extends Page<V1, QueryPayload, QueryResource, QueryInstance> {
    /**
     * Initialize the QueryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: QuerySolution);
    /**
     * Build an instance of QueryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: QueryResource): QueryInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
