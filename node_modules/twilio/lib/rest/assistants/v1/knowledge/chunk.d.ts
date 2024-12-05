/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to each
 */
export interface ChunkListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: ChunkInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface ChunkListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface ChunkListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface ChunkSolution {
    id: string;
}
export interface ChunkListInstance {
    _version: V1;
    _solution: ChunkSolution;
    _uri: string;
    /**
     * Streams ChunkInstance records from the API.
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
     * @param { ChunkListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: ChunkInstance, done: (err?: Error) => void) => void): void;
    each(params: ChunkListInstanceEachOptions, callback?: (item: ChunkInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of ChunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: ChunkPage) => any): Promise<ChunkPage>;
    /**
     * Lists ChunkInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ChunkListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ChunkInstance[]) => any): Promise<ChunkInstance[]>;
    list(params: ChunkListInstanceOptions, callback?: (error: Error | null, items: ChunkInstance[]) => any): Promise<ChunkInstance[]>;
    /**
     * Retrieve a single page of ChunkInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ChunkListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ChunkPage) => any): Promise<ChunkPage>;
    page(params: ChunkListInstancePageOptions, callback?: (error: Error | null, items: ChunkPage) => any): Promise<ChunkPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ChunkListInstance(version: V1, id: string): ChunkListInstance;
interface ChunkPayload extends TwilioResponsePayload {
    chunks: ChunkResource[];
}
interface ChunkResource {
    account_sid: string;
    content: string;
    metadata: Record<string, object>;
    date_created: Date;
    date_updated: Date;
}
export declare class ChunkInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ChunkResource, id: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
     */
    accountSid: string;
    /**
     * The chunk content.
     */
    content: string;
    /**
     * The metadata of the chunk.
     */
    metadata: Record<string, object>;
    /**
     * The date and time in GMT when the Chunk was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Chunk was updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        content: string;
        metadata: Record<string, object>;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class ChunkPage extends Page<V1, ChunkPayload, ChunkResource, ChunkInstance> {
    /**
     * Initialize the ChunkPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ChunkSolution);
    /**
     * Build an instance of ChunkInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ChunkResource): ChunkInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
