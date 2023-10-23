/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
/**
 * Options to pass to update a QueryInstance
 */
export interface QueryContextUpdateOptions {
    /** An optional reference to the Sample created from this query. */
    sampleSid?: string;
    /** A string that described the query status. The values can be: pending_review, reviewed, discarded */
    status?: string;
}
/**
 * Options to pass to create a QueryInstance
 */
export interface QueryListInstanceCreateOptions {
    /** An ISO language-country string of the sample. */
    language: string;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. It can be up to 2048 characters long. */
    query: string;
    /** Constraints the query to a set of tasks. Useful when you need to constrain the paths the user can take. Tasks should be comma separated *task-unique-name-1*, *task-unique-name-2* */
    tasks?: string;
    /** The Model Build Sid or unique name of the Model Build to be queried. */
    modelBuild?: string;
    /** Constraints the query to a given Field with an task. Useful when you know the Field you are expecting. It accepts one field in the format *task-unique-name-1*:*field-unique-name* */
    field?: string;
}
/**
 * Options to pass to each
 */
export interface QueryListInstanceEachOptions {
    /** An ISO language-country string of the sample. */
    language?: string;
    /** The Model Build Sid or unique name of the Model Build to be queried. */
    modelBuild?: string;
    /** A string that described the query status. The values can be: pending_review, reviewed, discarded */
    status?: string;
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
    /** An ISO language-country string of the sample. */
    language?: string;
    /** The Model Build Sid or unique name of the Model Build to be queried. */
    modelBuild?: string;
    /** A string that described the query status. The values can be: pending_review, reviewed, discarded */
    status?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface QueryListInstancePageOptions {
    /** An ISO language-country string of the sample. */
    language?: string;
    /** The Model Build Sid or unique name of the Model Build to be queried. */
    modelBuild?: string;
    /** A string that described the query status. The values can be: pending_review, reviewed, discarded */
    status?: string;
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
    protected _version: Understand;
    protected _solution: QueryContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, sid: string);
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
}
export declare class QueryInstance {
    protected _version: Understand;
    protected _solution: QueryContextSolution;
    protected _context?: QueryContext;
    constructor(_version: Understand, payload: QueryResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Query.
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
     * The natural language analysis results which include the Task recognized, the confidence score and a list of identified Fields.
     */
    results: any;
    /**
     * An ISO language-country string of the sample.
     */
    language: string;
    /**
     * The unique ID of the Model Build queried.
     */
    modelBuildSid: string;
    /**
     * The end-user\'s natural language input.
     */
    query: string;
    /**
     * An optional reference to the Sample created from this query.
     */
    sampleSid: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * A string that described the query status. The values can be: pending_review, reviewed, discarded
     */
    status: string;
    url: string;
    /**
     * The communication channel where this end-user input came from
     */
    sourceChannel: string;
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
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface QuerySolution {
    assistantSid: string;
}
export interface QueryListInstance {
    _version: Understand;
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
export declare function QueryListInstance(version: Understand, assistantSid: string): QueryListInstance;
export declare class QueryPage extends Page<Understand, QueryPayload, QueryResource, QueryInstance> {
    /**
     * Initialize the QueryPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: QuerySolution);
    /**
     * Build an instance of QueryInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: QueryResource): QueryInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
