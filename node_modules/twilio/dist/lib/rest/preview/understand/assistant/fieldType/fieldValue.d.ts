/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import Understand from "../../../Understand";
/**
 * Options to pass to create a FieldValueInstance
 */
export interface FieldValueListInstanceCreateOptions {
    /** An ISO language-country string of the value. */
    language: string;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    value: string;
    /** A value that indicates this field value is a synonym of. Empty if the value is not a synonym. */
    synonymOf?: string;
}
/**
 * Options to pass to each
 */
export interface FieldValueListInstanceEachOptions {
    /** An ISO language-country string of the value. For example: *en-US* */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface FieldValueListInstanceOptions {
    /** An ISO language-country string of the value. For example: *en-US* */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface FieldValueListInstancePageOptions {
    /** An ISO language-country string of the value. For example: *en-US* */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface FieldValueContext {
    /**
     * Remove a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldValueInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldValueContextSolution {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class FieldValueContextImpl implements FieldValueContext {
    protected _version: Understand;
    protected _solution: FieldValueContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, fieldTypeSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldValueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldValuePayload extends TwilioResponsePayload {
    field_values: FieldValueResource[];
}
interface FieldValueResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    field_type_sid: string;
    language: string;
    assistant_sid: string;
    sid: string;
    value: string;
    url: string;
    synonym_of: string;
}
export declare class FieldValueInstance {
    protected _version: Understand;
    protected _solution: FieldValueContextSolution;
    protected _context?: FieldValueContext;
    constructor(_version: Understand, payload: FieldValueResource, assistantSid: string, fieldTypeSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Field Value.
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
     * The unique ID of the Field Type associated with this Field Value.
     */
    fieldTypeSid: string;
    /**
     * An ISO language-country string of the value.
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
     * The Field Value itself.
     */
    value: string;
    url: string;
    /**
     * A value that indicates this field value is a synonym of. Empty if the value is not a synonym.
     */
    synonymOf: string;
    private get _proxy();
    /**
     * Remove a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldValueInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        fieldTypeSid: string;
        language: string;
        assistantSid: string;
        sid: string;
        value: string;
        url: string;
        synonymOf: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldValueSolution {
    assistantSid: string;
    fieldTypeSid: string;
}
export interface FieldValueListInstance {
    _version: Understand;
    _solution: FieldValueSolution;
    _uri: string;
    (sid: string): FieldValueContext;
    get(sid: string): FieldValueContext;
    /**
     * Create a FieldValueInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldValueInstance
     */
    create(params: FieldValueListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Streams FieldValueInstance records from the API.
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
     * @param { FieldValueListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
    each(params: FieldValueListInstanceEachOptions, callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    /**
     * Lists FieldValueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
    list(params: FieldValueListInstanceOptions, callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
    /**
     * Retrieve a single page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    page(params: FieldValueListInstancePageOptions, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FieldValueListInstance(version: Understand, assistantSid: string, fieldTypeSid: string): FieldValueListInstance;
export declare class FieldValuePage extends Page<Understand, FieldValuePayload, FieldValueResource, FieldValueInstance> {
    /**
     * Initialize the FieldValuePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: FieldValueSolution);
    /**
     * Build an instance of FieldValueInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldValueResource): FieldValueInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
