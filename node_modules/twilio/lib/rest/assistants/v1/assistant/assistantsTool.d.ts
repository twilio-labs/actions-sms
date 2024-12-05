/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to each
 */
export interface AssistantsToolListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: AssistantsToolInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface AssistantsToolListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface AssistantsToolListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface AssistantsToolContext {
    /**
     * Create a AssistantsToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantsToolInstance
     */
    create(callback?: (error: Error | null, item?: AssistantsToolInstance) => any): Promise<AssistantsToolInstance>;
    /**
     * Remove a AssistantsToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantsToolContextSolution {
    assistantId: string;
    id: string;
}
export declare class AssistantsToolContextImpl implements AssistantsToolContext {
    protected _version: V1;
    protected _solution: AssistantsToolContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantId: string, id: string);
    create(callback?: (error: Error | null, item?: AssistantsToolInstance) => any): Promise<AssistantsToolInstance>;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantsToolContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantsToolPayload extends TwilioResponsePayload {
    tools: AssistantsToolResource[];
}
interface AssistantsToolResource {
    account_sid: string;
    description: string;
    enabled: boolean;
    id: string;
    meta: Record<string, object>;
    name: string;
    requires_auth: boolean;
    type: string;
    url: string;
    date_created: Date;
    date_updated: Date;
}
export declare class AssistantsToolInstance {
    protected _version: V1;
    protected _solution: AssistantsToolContextSolution;
    protected _context?: AssistantsToolContext;
    constructor(_version: V1, payload: AssistantsToolResource, assistantId: string, id?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tool resource.
     */
    accountSid: string;
    /**
     * The description of the tool.
     */
    description: string;
    /**
     * True if the tool is enabled.
     */
    enabled: boolean;
    /**
     * The tool ID.
     */
    id: string;
    /**
     * The metadata related to method, url, input_schema to used with the Tool.
     */
    meta: Record<string, object>;
    /**
     * The name of the tool.
     */
    name: string;
    /**
     * The authentication requirement for the tool.
     */
    requiresAuth: boolean;
    /**
     * The type of the tool. (\'WEBHOOK\')
     */
    type: string;
    /**
     * The url of the tool resource.
     */
    url: string;
    /**
     * The date and time in GMT when the Tool was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Tool was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    private get _proxy();
    /**
     * Create a AssistantsToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantsToolInstance
     */
    create(callback?: (error: Error | null, item?: AssistantsToolInstance) => any): Promise<AssistantsToolInstance>;
    /**
     * Remove a AssistantsToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        description: string;
        enabled: boolean;
        id: string;
        meta: Record<string, object>;
        name: string;
        requiresAuth: boolean;
        type: string;
        url: string;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssistantsToolSolution {
    assistantId: string;
}
export interface AssistantsToolListInstance {
    _version: V1;
    _solution: AssistantsToolSolution;
    _uri: string;
    (id: string): AssistantsToolContext;
    get(id: string): AssistantsToolContext;
    /**
     * Streams AssistantsToolInstance records from the API.
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
     * @param { AssistantsToolListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: AssistantsToolInstance, done: (err?: Error) => void) => void): void;
    each(params: AssistantsToolListInstanceEachOptions, callback?: (item: AssistantsToolInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of AssistantsToolInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: AssistantsToolPage) => any): Promise<AssistantsToolPage>;
    /**
     * Lists AssistantsToolInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssistantsToolListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AssistantsToolInstance[]) => any): Promise<AssistantsToolInstance[]>;
    list(params: AssistantsToolListInstanceOptions, callback?: (error: Error | null, items: AssistantsToolInstance[]) => any): Promise<AssistantsToolInstance[]>;
    /**
     * Retrieve a single page of AssistantsToolInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssistantsToolListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AssistantsToolPage) => any): Promise<AssistantsToolPage>;
    page(params: AssistantsToolListInstancePageOptions, callback?: (error: Error | null, items: AssistantsToolPage) => any): Promise<AssistantsToolPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AssistantsToolListInstance(version: V1, assistantId: string): AssistantsToolListInstance;
export declare class AssistantsToolPage extends Page<V1, AssistantsToolPayload, AssistantsToolResource, AssistantsToolInstance> {
    /**
     * Initialize the AssistantsToolPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AssistantsToolSolution);
    /**
     * Build an instance of AssistantsToolInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssistantsToolResource): AssistantsToolInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
