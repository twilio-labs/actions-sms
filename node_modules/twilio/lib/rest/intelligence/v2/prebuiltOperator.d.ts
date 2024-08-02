/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
export type PrebuiltOperatorAvailability = "internal" | "beta" | "public" | "retired";
/**
 * Options to pass to each
 */
export interface PrebuiltOperatorListInstanceEachOptions {
    /** Returns Pre-built Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: PrebuiltOperatorAvailability;
    /** Returns Pre-built Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: PrebuiltOperatorInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface PrebuiltOperatorListInstanceOptions {
    /** Returns Pre-built Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: PrebuiltOperatorAvailability;
    /** Returns Pre-built Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface PrebuiltOperatorListInstancePageOptions {
    /** Returns Pre-built Operators with the provided availability type. Possible values: internal, beta, public, retired. */
    availability?: PrebuiltOperatorAvailability;
    /** Returns Pre-built Operators that support the provided language code. */
    languageCode?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface PrebuiltOperatorContext {
    /**
     * Fetch a PrebuiltOperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PrebuiltOperatorInstance
     */
    fetch(callback?: (error: Error | null, item?: PrebuiltOperatorInstance) => any): Promise<PrebuiltOperatorInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PrebuiltOperatorContextSolution {
    sid: string;
}
export declare class PrebuiltOperatorContextImpl implements PrebuiltOperatorContext {
    protected _version: V2;
    protected _solution: PrebuiltOperatorContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: (error: Error | null, item?: PrebuiltOperatorInstance) => any): Promise<PrebuiltOperatorInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PrebuiltOperatorContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PrebuiltOperatorPayload extends TwilioResponsePayload {
    operators: PrebuiltOperatorResource[];
}
interface PrebuiltOperatorResource {
    account_sid: string;
    sid: string;
    friendly_name: string;
    description: string;
    author: string;
    operator_type: string;
    version: number;
    availability: PrebuiltOperatorAvailability;
    config: any;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class PrebuiltOperatorInstance {
    protected _version: V2;
    protected _solution: PrebuiltOperatorContextSolution;
    protected _context?: PrebuiltOperatorContext;
    constructor(_version: V2, payload: PrebuiltOperatorResource, sid?: string);
    /**
     * The unique SID identifier of the Account the Pre-built Operator belongs to.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies this Pre-built Operator.
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
     * The creator of the Operator. Pre-built Operators can only be created by Twilio.
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
    availability: PrebuiltOperatorAvailability;
    /**
     * Operator configuration, following the schema defined by the Operator Type. Only available on Custom Operators created by the Account, will be empty for Pre-Built Operators.
     */
    config: any;
    /**
     * The date that this Pre-built Operator was created, given in ISO 8601 format.
     */
    dateCreated: Date;
    /**
     * The date that this Pre-built Operator was updated, given in ISO 8601 format.
     */
    dateUpdated: Date;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a PrebuiltOperatorInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PrebuiltOperatorInstance
     */
    fetch(callback?: (error: Error | null, item?: PrebuiltOperatorInstance) => any): Promise<PrebuiltOperatorInstance>;
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
        availability: PrebuiltOperatorAvailability;
        config: any;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PrebuiltOperatorSolution {
}
export interface PrebuiltOperatorListInstance {
    _version: V2;
    _solution: PrebuiltOperatorSolution;
    _uri: string;
    (sid: string): PrebuiltOperatorContext;
    get(sid: string): PrebuiltOperatorContext;
    /**
     * Streams PrebuiltOperatorInstance records from the API.
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
     * @param { PrebuiltOperatorListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: PrebuiltOperatorInstance, done: (err?: Error) => void) => void): void;
    each(params: PrebuiltOperatorListInstanceEachOptions, callback?: (item: PrebuiltOperatorInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of PrebuiltOperatorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: PrebuiltOperatorPage) => any): Promise<PrebuiltOperatorPage>;
    /**
     * Lists PrebuiltOperatorInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PrebuiltOperatorListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PrebuiltOperatorInstance[]) => any): Promise<PrebuiltOperatorInstance[]>;
    list(params: PrebuiltOperatorListInstanceOptions, callback?: (error: Error | null, items: PrebuiltOperatorInstance[]) => any): Promise<PrebuiltOperatorInstance[]>;
    /**
     * Retrieve a single page of PrebuiltOperatorInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PrebuiltOperatorListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PrebuiltOperatorPage) => any): Promise<PrebuiltOperatorPage>;
    page(params: PrebuiltOperatorListInstancePageOptions, callback?: (error: Error | null, items: PrebuiltOperatorPage) => any): Promise<PrebuiltOperatorPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PrebuiltOperatorListInstance(version: V2): PrebuiltOperatorListInstance;
export declare class PrebuiltOperatorPage extends Page<V2, PrebuiltOperatorPayload, PrebuiltOperatorResource, PrebuiltOperatorInstance> {
    /**
     * Initialize the PrebuiltOperatorPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: PrebuiltOperatorSolution);
    /**
     * Build an instance of PrebuiltOperatorInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PrebuiltOperatorResource): PrebuiltOperatorInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
