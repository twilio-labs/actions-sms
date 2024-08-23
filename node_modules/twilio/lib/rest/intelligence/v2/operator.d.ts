/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
export type OperatorAvailability = "internal" | "beta" | "public" | "retired";
/**
 * Options to pass to each
 */
export interface OperatorListInstanceEachOptions {
    /** Returns Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: OperatorAvailability;
    /** Returns Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: OperatorInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface OperatorListInstanceOptions {
    /** Returns Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: OperatorAvailability;
    /** Returns Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface OperatorListInstancePageOptions {
    /** Returns Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: OperatorAvailability;
    /** Returns Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface OperatorContext {
    /**
     * Fetch a OperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorInstance
     */
    fetch(callback?: (error: Error | null, item?: OperatorInstance) => any): Promise<OperatorInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OperatorContextSolution {
    sid: string;
}
export declare class OperatorContextImpl implements OperatorContext {
    protected _version: V2;
    protected _solution: OperatorContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: (error: Error | null, item?: OperatorInstance) => any): Promise<OperatorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OperatorContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OperatorPayload extends TwilioResponsePayload {
    operators: OperatorResource[];
}
interface OperatorResource {
    account_sid: string;
    sid: string;
    friendly_name: string;
    description: string;
    author: string;
    operator_type: string;
    version: number;
    availability: OperatorAvailability;
    config: any;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class OperatorInstance {
    protected _version: V2;
    protected _solution: OperatorContextSolution;
    protected _context?: OperatorContext;
    constructor(_version: V2, payload: OperatorResource, sid?: string);
    /**
     * The unique SID identifier of the Account the Operator belongs to.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies this Operator.
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
     * The creator of the Operator. Either Twilio or the creating Account.
     */
    author: string;
    /**
     * Operator Type for this Operator. References an existing Operator Type resource.
     */
    operatorType: string;
    /**
     * Numeric Operator version. Incremented with each update on the resource, used to ensure integrity when updating the Operator.
     */
    version: number;
    availability: OperatorAvailability;
    /**
     * Operator configuration, following the schema defined by the Operator Type. Only available on Custom Operators created by the Account.
     */
    config: any;
    /**
     * The date that this Operator was created, given in ISO 8601 format.
     */
    dateCreated: Date;
    /**
     * The date that this Operator was updated, given in ISO 8601 format.
     */
    dateUpdated: Date;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a OperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorInstance
     */
    fetch(callback?: (error: Error | null, item?: OperatorInstance) => any): Promise<OperatorInstance>;
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
        availability: OperatorAvailability;
        config: any;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OperatorSolution {
}
export interface OperatorListInstance {
    _version: V2;
    _solution: OperatorSolution;
    _uri: string;
    (sid: string): OperatorContext;
    get(sid: string): OperatorContext;
    /**
     * Streams OperatorInstance records from the API.
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
     * @param { OperatorListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: OperatorInstance, done: (err?: Error) => void) => void): void;
    each(params: OperatorListInstanceEachOptions, callback?: (item: OperatorInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of OperatorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: OperatorPage) => any): Promise<OperatorPage>;
    /**
     * Lists OperatorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OperatorListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: OperatorInstance[]) => any): Promise<OperatorInstance[]>;
    list(params: OperatorListInstanceOptions, callback?: (error: Error | null, items: OperatorInstance[]) => any): Promise<OperatorInstance[]>;
    /**
     * Retrieve a single page of OperatorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OperatorListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: OperatorPage) => any): Promise<OperatorPage>;
    page(params: OperatorListInstancePageOptions, callback?: (error: Error | null, items: OperatorPage) => any): Promise<OperatorPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function OperatorListInstance(version: V2): OperatorListInstance;
export declare class OperatorPage extends Page<V2, OperatorPayload, OperatorResource, OperatorInstance> {
    /**
     * Initialize the OperatorPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: OperatorSolution);
    /**
     * Build an instance of OperatorInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: OperatorResource): OperatorInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
