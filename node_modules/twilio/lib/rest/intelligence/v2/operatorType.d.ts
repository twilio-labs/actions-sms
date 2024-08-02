/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
export type OperatorTypeAvailability = "internal" | "beta" | "public" | "retired";
export type OperatorTypeOutputType = "text-classification" | "text-extraction" | "text-extraction-normalized" | "text-generation";
export type OperatorTypeProvider = "twilio" | "amazon" | "openai";
/**
 * Options to pass to each
 */
export interface OperatorTypeListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: OperatorTypeInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface OperatorTypeListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface OperatorTypeListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface OperatorTypeContext {
    /**
     * Fetch a OperatorTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: OperatorTypeInstance) => any): Promise<OperatorTypeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OperatorTypeContextSolution {
    sid: string;
}
export declare class OperatorTypeContextImpl implements OperatorTypeContext {
    protected _version: V2;
    protected _solution: OperatorTypeContextSolution;
    protected _uri: string;
    constructor(_version: V2, sid: string);
    fetch(callback?: (error: Error | null, item?: OperatorTypeInstance) => any): Promise<OperatorTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OperatorTypeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OperatorTypePayload extends TwilioResponsePayload {
    operator_types: OperatorTypeResource[];
}
interface OperatorTypeResource {
    name: string;
    sid: string;
    friendly_name: string;
    description: string;
    docs_link: string;
    output_type: OperatorTypeOutputType;
    supported_languages: Array<string>;
    provider: OperatorTypeProvider;
    availability: OperatorTypeAvailability;
    configurable: boolean;
    config_schema: any;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class OperatorTypeInstance {
    protected _version: V2;
    protected _solution: OperatorTypeContextSolution;
    protected _context?: OperatorTypeContext;
    constructor(_version: V2, payload: OperatorTypeResource, sid?: string);
    /**
     * A unique name that references an Operator\'s Operator Type.
     */
    name: string;
    /**
     * A 34 character string that uniquely identifies this Operator Type.
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
     * Additional documentation for the Operator Type.
     */
    docsLink: string;
    outputType: OperatorTypeOutputType;
    /**
     * List of languages this Operator Type supports.
     */
    supportedLanguages: Array<string>;
    provider: OperatorTypeProvider;
    availability: OperatorTypeAvailability;
    /**
     * Operators can be created from configurable Operator Types.
     */
    configurable: boolean;
    /**
     * JSON Schema for configuring an Operator with this Operator Type. Following https://json-schema.org/
     */
    configSchema: any;
    /**
     * The date that this Operator Type was created, given in ISO 8601 format.
     */
    dateCreated: Date;
    /**
     * The date that this Operator Type was updated, given in ISO 8601 format.
     */
    dateUpdated: Date;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a OperatorTypeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorTypeInstance
     */
    fetch(callback?: (error: Error | null, item?: OperatorTypeInstance) => any): Promise<OperatorTypeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        name: string;
        sid: string;
        friendlyName: string;
        description: string;
        docsLink: string;
        outputType: OperatorTypeOutputType;
        supportedLanguages: string[];
        provider: OperatorTypeProvider;
        availability: OperatorTypeAvailability;
        configurable: boolean;
        configSchema: any;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OperatorTypeSolution {
}
export interface OperatorTypeListInstance {
    _version: V2;
    _solution: OperatorTypeSolution;
    _uri: string;
    (sid: string): OperatorTypeContext;
    get(sid: string): OperatorTypeContext;
    /**
     * Streams OperatorTypeInstance records from the API.
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
     * @param { OperatorTypeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: OperatorTypeInstance, done: (err?: Error) => void) => void): void;
    each(params: OperatorTypeListInstanceEachOptions, callback?: (item: OperatorTypeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of OperatorTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: OperatorTypePage) => any): Promise<OperatorTypePage>;
    /**
     * Lists OperatorTypeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OperatorTypeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: OperatorTypeInstance[]) => any): Promise<OperatorTypeInstance[]>;
    list(params: OperatorTypeListInstanceOptions, callback?: (error: Error | null, items: OperatorTypeInstance[]) => any): Promise<OperatorTypeInstance[]>;
    /**
     * Retrieve a single page of OperatorTypeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { OperatorTypeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: OperatorTypePage) => any): Promise<OperatorTypePage>;
    page(params: OperatorTypeListInstancePageOptions, callback?: (error: Error | null, items: OperatorTypePage) => any): Promise<OperatorTypePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function OperatorTypeListInstance(version: V2): OperatorTypeListInstance;
export declare class OperatorTypePage extends Page<V2, OperatorTypePayload, OperatorTypeResource, OperatorTypeInstance> {
    /**
     * Initialize the OperatorTypePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: OperatorTypeSolution);
    /**
     * Build an instance of OperatorTypeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: OperatorTypeResource): OperatorTypeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
