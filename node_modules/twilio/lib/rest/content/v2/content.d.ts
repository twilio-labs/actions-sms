/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
/**
 * Options to pass to each
 */
export interface ContentListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Whether to sort by ascending or descending date updated */
    sortByDate?: string;
    /** Whether to sort by ascending or descending content name */
    sortByContentName?: string;
    /** Filter by >=[date-time] */
    dateCreatedAfter?: Date;
    /** Filter by <=[date-time] */
    dateCreatedBefore?: Date;
    /** Filter by Regex Pattern in content name */
    contentName?: string;
    /** Filter by Regex Pattern in template content */
    content?: string;
    /** Filter by array of valid language(s) */
    language?: Array<string>;
    /** Filter by array of contentType(s) */
    contentType?: Array<string>;
    /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
    channelEligibility?: Array<string>;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface ContentListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Whether to sort by ascending or descending date updated */
    sortByDate?: string;
    /** Whether to sort by ascending or descending content name */
    sortByContentName?: string;
    /** Filter by >=[date-time] */
    dateCreatedAfter?: Date;
    /** Filter by <=[date-time] */
    dateCreatedBefore?: Date;
    /** Filter by Regex Pattern in content name */
    contentName?: string;
    /** Filter by Regex Pattern in template content */
    content?: string;
    /** Filter by array of valid language(s) */
    language?: Array<string>;
    /** Filter by array of contentType(s) */
    contentType?: Array<string>;
    /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
    channelEligibility?: Array<string>;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface ContentListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Whether to sort by ascending or descending date updated */
    sortByDate?: string;
    /** Whether to sort by ascending or descending content name */
    sortByContentName?: string;
    /** Filter by >=[date-time] */
    dateCreatedAfter?: Date;
    /** Filter by <=[date-time] */
    dateCreatedBefore?: Date;
    /** Filter by Regex Pattern in content name */
    contentName?: string;
    /** Filter by Regex Pattern in template content */
    content?: string;
    /** Filter by array of valid language(s) */
    language?: Array<string>;
    /** Filter by array of contentType(s) */
    contentType?: Array<string>;
    /** Filter by array of ChannelEligibility(s), where ChannelEligibility=<channel>:<status> */
    channelEligibility?: Array<string>;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface ContentSolution {
}
export interface ContentListInstance {
    _version: V2;
    _solution: ContentSolution;
    _uri: string;
    /**
     * Streams ContentInstance records from the API.
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
     * @param { ContentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: ContentInstance, done: (err?: Error) => void) => void): void;
    each(params: ContentListInstanceEachOptions, callback?: (item: ContentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    /**
     * Lists ContentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ContentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ContentInstance[]) => any): Promise<ContentInstance[]>;
    list(params: ContentListInstanceOptions, callback?: (error: Error | null, items: ContentInstance[]) => any): Promise<ContentInstance[]>;
    /**
     * Retrieve a single page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ContentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    page(params: ContentListInstancePageOptions, callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ContentListInstance(version: V2): ContentListInstance;
interface ContentPayload extends TwilioResponsePayload {
    contents: ContentResource[];
}
interface ContentResource {
    date_created: Date;
    date_updated: Date;
    sid: string;
    account_sid: string;
    friendly_name: string;
    language: string;
    variables: any;
    types: any;
    url: string;
    links: Record<string, string>;
}
export declare class ContentInstance {
    protected _version: V2;
    constructor(_version: V2, payload: ContentResource);
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The unique string that that we created to identify the Content resource.
     */
    sid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
     */
    accountSid: string;
    /**
     * A string name used to describe the Content resource. Not visible to the end recipient.
     */
    friendlyName: string;
    /**
     * Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in.
     */
    language: string;
    /**
     * Defines the default placeholder values for variables included in the Content resource. e.g. {\"1\": \"Customer_Name\"}.
     */
    variables: any;
    /**
     * The [Content types](https://www.twilio.com/docs/content/content-types-overview) (e.g. twilio/text) for this Content resource.
     */
    types: any;
    /**
     * The URL of the resource, relative to `https://content.twilio.com`.
     */
    url: string;
    /**
     * A list of links related to the Content resource, such as approval_fetch and approval_create
     */
    links: Record<string, string>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        dateCreated: Date;
        dateUpdated: Date;
        sid: string;
        accountSid: string;
        friendlyName: string;
        language: string;
        variables: any;
        types: any;
        url: string;
        links: Record<string, string>;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class ContentPage extends Page<V2, ContentPayload, ContentResource, ContentInstance> {
    /**
     * Initialize the ContentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V2, response: Response<string>, solution: ContentSolution);
    /**
     * Build an instance of ContentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ContentResource): ContentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
