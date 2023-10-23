/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to update a SampleInstance
 */
export interface SampleContextUpdateOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
    language?: string;
    /** The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging). */
    taggedText?: string;
    /** The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included. */
    sourceChannel?: string;
}
/**
 * Options to pass to create a SampleInstance
 */
export interface SampleListInstanceCreateOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new sample. For example: `en-US`. */
    language: string;
    /** The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging). */
    taggedText: string;
    /** The communication channel from which the new sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included. */
    sourceChannel?: string;
}
/**
 * Options to pass to each
 */
export interface SampleListInstanceEachOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
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
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
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
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`. */
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
    protected _version: V1;
    protected _solution: SampleContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string, sid: string);
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
    protected _version: V1;
    protected _solution: SampleContextSolution;
    protected _context?: SampleContext;
    constructor(_version: V1, payload: SampleResource, assistantSid: string, taskSid: string, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sample resource.
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
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
     */
    taskSid: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the sample. For example: `en-US`.
     */
    language: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
     */
    assistantSid: string;
    /**
     * The unique string that we created to identify the Sample resource.
     */
    sid: string;
    /**
     * The text example of how end users might express the task. The sample can contain [Field tag blocks](https://www.twilio.com/docs/autopilot/api/task-sample#field-tagging).
     */
    taggedText: string;
    /**
     * The absolute URL of the Sample resource.
     */
    url: string;
    /**
     * The communication channel from which the sample was captured. Can be: `voice`, `sms`, `chat`, `alexa`, `google-assistant`, `slack`, or null if not included.
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
    _version: V1;
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
export declare function SampleListInstance(version: V1, assistantSid: string, taskSid: string): SampleListInstance;
export declare class SamplePage extends Page<V1, SamplePayload, SampleResource, SampleInstance> {
    /**
     * Initialize the SamplePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SampleSolution);
    /**
     * Build an instance of SampleInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SampleResource): SampleInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
