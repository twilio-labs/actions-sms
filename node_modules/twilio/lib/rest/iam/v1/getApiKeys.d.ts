/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to each
 */
export interface GetApiKeysListInstanceEachOptions {
    /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments resource. */
    accountSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: GetApiKeysInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface GetApiKeysListInstanceOptions {
    /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments resource. */
    accountSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface GetApiKeysListInstancePageOptions {
    /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments resource. */
    accountSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface GetApiKeysSolution {
}
export interface GetApiKeysListInstance {
    _version: V1;
    _solution: GetApiKeysSolution;
    _uri: string;
    /**
     * Streams GetApiKeysInstance records from the API.
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
     * @param { GetApiKeysListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(params: GetApiKeysListInstanceEachOptions, callback?: (item: GetApiKeysInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of GetApiKeysInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: GetApiKeysPage) => any): Promise<GetApiKeysPage>;
    /**
     * Lists GetApiKeysInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { GetApiKeysListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(params: GetApiKeysListInstanceOptions, callback?: (error: Error | null, items: GetApiKeysInstance[]) => any): Promise<GetApiKeysInstance[]>;
    /**
     * Retrieve a single page of GetApiKeysInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { GetApiKeysListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(params: GetApiKeysListInstancePageOptions, callback?: (error: Error | null, items: GetApiKeysPage) => any): Promise<GetApiKeysPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function GetApiKeysListInstance(version: V1): GetApiKeysListInstance;
interface GetApiKeysPayload extends TwilioResponsePayload {
    keys: GetApiKeysResource[];
}
interface GetApiKeysResource {
    sid: string;
    friendly_name: string;
    date_created: Date;
    date_updated: Date;
}
export declare class GetApiKeysInstance {
    protected _version: V1;
    constructor(_version: V1, payload: GetApiKeysResource);
    /**
     * The unique string that we created to identify the Key resource.
     */
    sid: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        friendlyName: string;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class GetApiKeysPage extends Page<V1, GetApiKeysPayload, GetApiKeysResource, GetApiKeysInstance> {
    /**
     * Initialize the GetApiKeysPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: GetApiKeysSolution);
    /**
     * Build an instance of GetApiKeysInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: GetApiKeysResource): GetApiKeysInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
