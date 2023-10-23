/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to create a FieldInstance
 */
export interface FieldListInstanceCreateOptions {
    /** The Field Type of the new field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the `unique_name`, or the `sid` of a custom Field Type. */
    fieldType: string;
    /** An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource. */
    uniqueName: string;
}
/**
 * Options to pass to each
 */
export interface FieldListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: FieldInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface FieldListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface FieldListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface FieldContext {
    /**
     * Remove a FieldInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldContextSolution {
    assistantSid: string;
    taskSid: string;
    sid: string;
}
export declare class FieldContextImpl implements FieldContext {
    protected _version: V1;
    protected _solution: FieldContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldPayload extends TwilioResponsePayload {
    fields: FieldResource[];
}
interface FieldResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    field_type: string;
    task_sid: string;
    assistant_sid: string;
    sid: string;
    unique_name: string;
    url: string;
}
export declare class FieldInstance {
    protected _version: V1;
    protected _solution: FieldContextSolution;
    protected _context?: FieldContext;
    constructor(_version: V1, payload: FieldResource, assistantSid: string, taskSid: string, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Field resource.
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
     * The Field Type of the field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the unique_name, or the SID of a custom Field Type.
     */
    fieldType: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with this Field.
     */
    taskSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
     */
    assistantSid: string;
    /**
     * The unique string that we created to identify the Field resource.
     */
    sid: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource\'s `sid` in the URL to address the resource.
     */
    uniqueName: string;
    /**
     * The absolute URL of the Field resource.
     */
    url: string;
    private get _proxy();
    /**
     * Remove a FieldInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        fieldType: string;
        taskSid: string;
        assistantSid: string;
        sid: string;
        uniqueName: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldSolution {
    assistantSid: string;
    taskSid: string;
}
export interface FieldListInstance {
    _version: V1;
    _solution: FieldSolution;
    _uri: string;
    (sid: string): FieldContext;
    get(sid: string): FieldContext;
    /**
     * Create a FieldInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldInstance
     */
    create(params: FieldListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldInstance) => any): Promise<FieldInstance>;
    /**
     * Streams FieldInstance records from the API.
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
     * @param { FieldListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: FieldInstance, done: (err?: Error) => void) => void): void;
    each(params: FieldListInstanceEachOptions, callback?: (item: FieldInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of FieldInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    /**
     * Lists FieldInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldInstance[]) => any): Promise<FieldInstance[]>;
    list(params: FieldListInstanceOptions, callback?: (error: Error | null, items: FieldInstance[]) => any): Promise<FieldInstance[]>;
    /**
     * Retrieve a single page of FieldInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    page(params: FieldListInstancePageOptions, callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FieldListInstance(version: V1, assistantSid: string, taskSid: string): FieldListInstance;
export declare class FieldPage extends Page<V1, FieldPayload, FieldResource, FieldInstance> {
    /**
     * Initialize the FieldPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FieldSolution);
    /**
     * Build an instance of FieldInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldResource): FieldInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
