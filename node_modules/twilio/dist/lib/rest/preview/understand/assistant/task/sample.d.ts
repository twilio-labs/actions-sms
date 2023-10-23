/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Understand from "../../../Understand";
/**
 * Options to pass to update a SampleInstance
 */
export interface SampleContextUpdateOptions {
    /** An ISO language-country string of the sample. */
    language?: string;
    /** The text example of how end-users may express this task. The sample may contain Field tag blocks. */
    taggedText?: string;
    /** The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null */
    sourceChannel?: string;
}
/**
 * Options to pass to create a SampleInstance
 */
export interface SampleListInstanceCreateOptions {
    /** An ISO language-country string of the sample. */
    language: string;
    /** The text example of how end-users may express this task. The sample may contain Field tag blocks. */
    taggedText: string;
    /** The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null */
    sourceChannel?: string;
}
/**
 * Options to pass to each
 */
export interface SampleListInstanceEachOptions {
    /** An ISO language-country string of the sample. */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: SampleInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface SampleListInstanceOptions {
    /** An ISO language-country string of the sample. */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface SampleListInstancePageOptions {
    /** An ISO language-country string of the sample. */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface SampleContext {
    /**
     * Remove a SampleInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SampleInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    fetch(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    update(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    update(params: SampleContextUpdateOptions, callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SampleContextSolution {
    assistantSid: string;
    taskSid: string;
    sid: string;
}
export declare class SampleContextImpl implements SampleContext {
    protected _version: Understand;
    protected _solution: SampleContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, taskSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    update(params?: SampleContextUpdateOptions | ((error: Error | null, item?: SampleInstance) => any), callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): SampleContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface SamplePayload extends TwilioResponsePayload {
    samples: SampleResource[];
}
interface SampleResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    task_sid: string;
    language: string;
    assistant_sid: string;
    sid: string;
    tagged_text: string;
    url: string;
    source_channel: string;
}
export declare class SampleInstance {
    protected _version: Understand;
    protected _solution: SampleContextSolution;
    protected _context?: SampleContext;
    constructor(_version: Understand, payload: SampleResource, assistantSid: string, taskSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Sample.
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
     * The unique ID of the Task associated with this Sample.
     */
    taskSid: string;
    /**
     * An ISO language-country string of the sample.
     */
    language: string;
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The text example of how end-users may express this task. The sample may contain Field tag blocks.
     */
    taggedText: string;
    url: string;
    /**
     * The communication channel the sample was captured. It can be: *voice*, *sms*, *chat*, *alexa*, *google-assistant*, or *slack*. If not included the value will be null
     */
    sourceChannel: string;
    private get _proxy();
    /**
     * Remove a SampleInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a SampleInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    fetch(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    update(callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Update a SampleInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    update(params: SampleContextUpdateOptions, callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        taskSid: string;
        language: string;
        assistantSid: string;
        sid: string;
        taggedText: string;
        url: string;
        sourceChannel: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface SampleSolution {
    assistantSid: string;
    taskSid: string;
}
export interface SampleListInstance {
    _version: Understand;
    _solution: SampleSolution;
    _uri: string;
    (sid: string): SampleContext;
    get(sid: string): SampleContext;
    /**
     * Create a SampleInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SampleInstance
     */
    create(params: SampleListInstanceCreateOptions, callback?: (error: Error | null, item?: SampleInstance) => any): Promise<SampleInstance>;
    /**
     * Streams SampleInstance records from the API.
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
     * @param { SampleListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: SampleInstance, done: (err?: Error) => void) => void): void;
    each(params: SampleListInstanceEachOptions, callback?: (item: SampleInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of SampleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    /**
     * Lists SampleInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SampleListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SampleInstance[]) => any): Promise<SampleInstance[]>;
    list(params: SampleListInstanceOptions, callback?: (error: Error | null, items: SampleInstance[]) => any): Promise<SampleInstance[]>;
    /**
     * Retrieve a single page of SampleInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SampleListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    page(params: SampleListInstancePageOptions, callback?: (error: Error | null, items: SamplePage) => any): Promise<SamplePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function SampleListInstance(version: Understand, assistantSid: string, taskSid: string): SampleListInstance;
export declare class SamplePage extends Page<Understand, SamplePayload, SampleResource, SampleInstance> {
    /**
     * Initialize the SamplePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: SampleSolution);
    /**
     * Build an instance of SampleInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SampleResource): SampleInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
