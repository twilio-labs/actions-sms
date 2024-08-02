/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
export type CustomOperatorAvailability = "internal" | "beta" | "public" | "retired";
/**
 * Options to pass to update a CustomOperatorInstance
 */
export interface CustomOperatorContextUpdateOptions {
    /** A human-readable name of this resource, up to 64 characters. */
    friendlyName: string;
    /** Operator configuration, following the schema defined by the Operator Type. */
    config: any;
    /** The If-Match HTTP request header */
    ifMatch?: string;
}
/**
 * Options to pass to create a CustomOperatorInstance
 */
export interface CustomOperatorListInstanceCreateOptions {
    /** A human readable description of the new Operator, up to 64 characters. */
    friendlyName: string;
    /** Operator Type for this Operator. References an existing Operator Type resource. */
    operatorType: string;
    /** Operator configuration, following the schema defined by the Operator Type. */
    config: any;
}
/**
 * Options to pass to each
 */
export interface CustomOperatorListInstanceEachOptions {
    /** Returns Custom Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: CustomOperatorAvailability;
    /** Returns Custom Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: CustomOperatorInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface CustomOperatorListInstanceOptions {
    /** Returns Custom Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: CustomOperatorAvailability;
    /** Returns Custom Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface CustomOperatorListInstancePageOptions {
    /** Returns Custom Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: CustomOperatorAvailability;
    /** Returns Custom Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface CustomOperatorContext {
    /**
     * Remove a CustomOperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomOperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CustomOperatorInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    /**
     * Update a CustomOperatorInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CustomOperatorInstance
     */
    update(params: CustomOperatorContextUpdateOptions, callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CustomOperatorContextSolution {
    sid: string;
}
export declare class CustomOperatorContextImpl implements CustomOperatorContext {
    protected _version: V2;
    protected _solution: CustomOperatorContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    update(params: CustomOperatorContextUpdateOptions, callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): CustomOperatorContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface CustomOperatorPayload extends TwilioResponsePayload {
    operators: CustomOperatorResource[];
}
interface CustomOperatorResource {
    account_sid: string;
    sid: string;
    friendly_name: string;
    description: string;
    author: string;
    operator_type: string;
    version: number;
    availability: CustomOperatorAvailability;
    config: any;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class CustomOperatorInstance {
    protected _version: V2;
    protected _solution: CustomOperatorContextSolution;
    protected _context?: CustomOperatorContext;
    constructor(_version: V2, payload: CustomOperatorResource, sid?: string);
    /**
     * The unique SID identifier of the Account the Custom Operator belongs to.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies this Custom Operator.
     */
    sid: string;
    /**
     * A human-readable name of this resource, up to 64 characters.
     */
    friendlyName: string;
    /**
     * A human-readable description of this resource, longer than the friendly name.
     */
    description: string;
    /**
     * The creator of the Custom Operator. Custom Operators can only be created by a Twilio Account.
     */
    author: string;
    /**
     * Operator Type for this Operator. References an existing Operator Type resource.
     */
    operatorType: string;
    /**
     * Numeric Custom Operator version. Incremented with each update on the resource, used to ensure integrity when updating the Custom Operator.
     */
    version: number;
    availability: CustomOperatorAvailability;
    /**
     * Operator configuration, following the schema defined by the Operator Type. Only available on Operators created by the Account.
     */
    config: any;
    /**
     * The date that this Custom Operator was created, given in ISO 8601 format.
     */
    dateCreated: Date;
    /**
     * The date that this Custom Operator was updated, given in ISO 8601 format.
     */
    dateUpdated: Date;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Remove a CustomOperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a CustomOperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CustomOperatorInstance
     */
    fetch(callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    /**
     * Update a CustomOperatorInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CustomOperatorInstance
     */
    update(params: CustomOperatorContextUpdateOptions, callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        sid: string;
        friendlyName: string;
        description: string;
        author: string;
        operatorType: string;
        version: number;
        availability: CustomOperatorAvailability;
        config: any;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface CustomOperatorSolution {
}
export interface CustomOperatorListInstance {
    _version: V2;
    _solution: CustomOperatorSolution;
    _uri: string;
    (sid: string): CustomOperatorContext;
    get(sid: string): CustomOperatorContext;
    /**
     * Create a CustomOperatorInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed CustomOperatorInstance
     */
    create(params: CustomOperatorListInstanceCreateOptions, callback?: (error: Error | null, item?: CustomOperatorInstance) => any): Promise<CustomOperatorInstance>;
    /**
     * Streams CustomOperatorInstance records from the API.
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
     * @param { CustomOperatorListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: CustomOperatorInstance, done: (err?: Error) => void) => void): void;
    each(params: CustomOperatorListInstanceEachOptions, callback?: (item: CustomOperatorInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of CustomOperatorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: CustomOperatorPage) => any): Promise<CustomOperatorPage>;
    /**
     * Lists CustomOperatorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomOperatorListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CustomOperatorInstance[]) => any): Promise<CustomOperatorInstance[]>;
    list(params: CustomOperatorListInstanceOptions, callback?: (error: Error | null, items: CustomOperatorInstance[]) => any): Promise<CustomOperatorInstance[]>;
    /**
     * Retrieve a single page of CustomOperatorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CustomOperatorListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CustomOperatorPage) => any): Promise<CustomOperatorPage>;
    page(params: CustomOperatorListInstancePageOptions, callback?: (error: Error | null, items: CustomOperatorPage) => any): Promise<CustomOperatorPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function CustomOperatorListInstance(version: V2): CustomOperatorListInstance;
export declare class CustomOperatorPage extends Page<V2, CustomOperatorPayload, CustomOperatorResource, CustomOperatorInstance> {
    /**
     * Initialize the CustomOperatorPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: CustomOperatorSolution);
    /**
     * Build an instance of CustomOperatorInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CustomOperatorResource): CustomOperatorInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
