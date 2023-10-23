/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
import { FieldValueListInstance } from "./fieldType/fieldValue";
/**
 * Options to pass to update a FieldTypeInstance
 */
export interface FieldTypeContextUpdateOptions {
    /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
    friendlyName?: string;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    uniqueName?: string;
}
/**
 * Options to pass to create a FieldTypeInstance
 */
export interface FieldTypeListInstanceCreateOptions {
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    uniqueName: string;
    /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
    friendlyName?: string;
}
/**
 * Options to pass to each
 */
export interface FieldTypeListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface FieldTypeListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface FieldTypeListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface FieldTypeContext {
    fieldValues: FieldValueListInstance;
    /**
     * Remove a FieldTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    update(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    update(params: FieldTypeContextUpdateOptions, callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldTypeContextSolution {
    assistantSid: string;
    sid: string;
}
export declare class FieldTypeContextImpl implements FieldTypeContext {
    protected _version: Understand;
    protected _solution: FieldTypeContextSolution;
    protected _uri: string;
    protected _fieldValues?: FieldValueListInstance;
    constructor(_version: Understand, assistantSid: string, sid: string);
    get fieldValues(): FieldValueListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    update(params?: FieldTypeContextUpdateOptions | ((error: Error | null, item?: FieldTypeInstance) => any), callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldTypeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldTypePayload extends TwilioResponsePayload {
    field_types: FieldTypeResource[];
}
interface FieldTypeResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    friendly_name: string;
    links: Record<string, string>;
    assistant_sid: string;
    sid: string;
    unique_name: string;
    url: string;
}
export declare class FieldTypeInstance {
    protected _version: Understand;
    protected _solution: FieldTypeContextSolution;
    protected _context?: FieldTypeContext;
    constructor(_version: Understand, payload: FieldTypeResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Field Type.
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
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName: string;
    links: Record<string, string>;
    /**
     * The unique ID of the Assistant.
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
     * Remove a FieldTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    update(callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Update a FieldTypeInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    update(params: FieldTypeContextUpdateOptions, callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Access the fieldValues.
     */
    fieldValues(): FieldValueListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        friendlyName: string;
        links: Record<string, string>;
        assistantSid: string;
        sid: string;
        uniqueName: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldTypeSolution {
    assistantSid: string;
}
export interface FieldTypeListInstance {
    _version: Understand;
    _solution: FieldTypeSolution;
    _uri: string;
    (sid: string): FieldTypeContext;
    get(sid: string): FieldTypeContext;
    /**
     * Create a FieldTypeInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldTypeInstance
     */
    create(params: FieldTypeListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldTypeInstance) => any): Promise<FieldTypeInstance>;
    /**
     * Streams FieldTypeInstance records from the API.
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
     * @param { FieldTypeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void): void;
    each(params: FieldTypeListInstanceEachOptions, callback?: (item: FieldTypeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of FieldTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    /**
     * Lists FieldTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldTypeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldTypeInstance[]) => any): Promise<FieldTypeInstance[]>;
    list(params: FieldTypeListInstanceOptions, callback?: (error: Error | null, items: FieldTypeInstance[]) => any): Promise<FieldTypeInstance[]>;
    /**
     * Retrieve a single page of FieldTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldTypeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    page(params: FieldTypeListInstancePageOptions, callback?: (error: Error | null, items: FieldTypePage) => any): Promise<FieldTypePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FieldTypeListInstance(version: Understand, assistantSid: string): FieldTypeListInstance;
export declare class FieldTypePage extends Page<Understand, FieldTypePayload, FieldTypeResource, FieldTypeInstance> {
    /**
     * Initialize the FieldTypePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: FieldTypeSolution);
    /**
     * Build an instance of FieldTypeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldTypeResource): FieldTypeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
