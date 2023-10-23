/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Understand from "../../../Understand";
/**
 * Options to pass to create a FieldInstance
 */
export interface FieldListInstanceCreateOptions {
    /** The unique name or sid of the FieldType. It can be any [Built-in Field Type](https://www.twilio.com/docs/assistant/api/built-in-field-types) or the unique_name or the Field Type sid of a custom Field Type. */
    fieldType: string;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
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
    protected _version: Understand;
    protected _solution: FieldContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, taskSid: string, sid: string);
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
    protected _version: Understand;
    protected _solution: FieldContextSolution;
    protected _context?: FieldContext;
    constructor(_version: Understand, payload: FieldResource, assistantSid: string, taskSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Field.
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
     * The Field Type of this field. It can be any [Built-in Field Type](https://www.twilio.com/docs/assistant/api/built-in-field-types) or the unique_name or sid of a custom Field Type.
     */
    fieldType: string;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName: string;
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
    _version: Understand;
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
export declare function FieldListInstance(version: Understand, assistantSid: string, taskSid: string): FieldListInstance;
export declare class FieldPage extends Page<Understand, FieldPayload, FieldResource, FieldInstance> {
    /**
     * Initialize the FieldPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: FieldSolution);
    /**
     * Build an instance of FieldInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldResource): FieldInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
