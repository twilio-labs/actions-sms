/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
export declare class AssistantsV1ServiceCreatePolicyRequest {
    /**
     * The description of the policy.
     */
    "description"?: string;
    /**
     * The Policy ID.
     */
    "id"?: string;
    /**
     * The name of the policy.
     */
    "name"?: string;
    "policyDetails": any | null;
    /**
     * The description of the policy.
     */
    "type"?: string;
}
export declare class AssistantsV1ServiceCreateToolRequest {
    /**
     * The Assistant ID.
     */
    "assistantId"?: string;
    /**
     * The description of the tool.
     */
    "description"?: string;
    /**
     * True if the tool is enabled.
     */
    "enabled": boolean;
    /**
     * The metadata related to method, url, input_schema to used with the Tool.
     */
    "meta"?: Record<string, object>;
    /**
     * The name of the tool.
     */
    "name": string;
    "policy"?: AssistantsV1ServiceCreatePolicyRequest;
    /**
     * The description of the tool.
     */
    "type": string;
}
export declare class AssistantsV1ServicePolicy {
    /**
     * The Policy ID.
     */
    "id"?: string;
    /**
     * The name of the policy.
     */
    "name"?: string;
    /**
     * The description of the policy.
     */
    "description"?: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Policy resource.
     */
    "accountSid"?: string;
    /**
     * The SID of the User that created the Policy resource.
     */
    "userSid"?: string;
    /**
     * The type of the policy.
     */
    "type": string;
    /**
     * The details of the policy based on the type.
     */
    "policyDetails": Record<string, object>;
    /**
     * The date and time in GMT when the Policy was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    "dateCreated"?: Date;
    /**
     * The date and time in GMT when the Policy was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    "dateUpdated"?: Date;
}
export declare class AssistantsV1ServiceUpdateToolRequest {
    /**
     * The Assistant ID.
     */
    "assistantId"?: string;
    /**
     * The description of the tool.
     */
    "description"?: string;
    /**
     * True if the tool is enabled.
     */
    "enabled"?: boolean;
    /**
     * The metadata related to method, url, input_schema to used with the Tool.
     */
    "meta"?: Record<string, object>;
    /**
     * The name of the tool.
     */
    "name"?: string;
    "policy"?: AssistantsV1ServiceCreatePolicyRequest;
    /**
     * The type of the tool.
     */
    "type"?: string;
}
/**
 * Options to pass to update a ToolInstance
 */
export interface ToolContextUpdateOptions {
    /**  */
    assistantsV1ServiceUpdateToolRequest?: AssistantsV1ServiceUpdateToolRequest;
}
/**
 * Options to pass to create a ToolInstance
 */
export interface ToolListInstanceCreateOptions {
    /**  */
    assistantsV1ServiceCreateToolRequest: AssistantsV1ServiceCreateToolRequest;
}
/**
 * Options to pass to each
 */
export interface ToolListInstanceEachOptions {
    /**  */
    assistantId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: ToolInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface ToolListInstanceOptions {
    /**  */
    assistantId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface ToolListInstancePageOptions {
    /**  */
    assistantId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface ToolContext {
    /**
     * Remove a ToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    fetch(callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Update a ToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    update(callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Update a ToolInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    update(params: AssistantsV1ServiceUpdateToolRequest, callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ToolContextSolution {
    id: string;
}
export declare class ToolContextImpl implements ToolContext {
    protected _version: V1;
    protected _solution: ToolContextSolution;
    protected _uri: string;
    constructor(_version: V1, id: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    update(params?: AssistantsV1ServiceUpdateToolRequest | ((error: Error | null, item?: ToolInstance) => any), callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ToolContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ToolPayload extends TwilioResponsePayload {
    tools: ToolResource[];
}
interface ToolResource {
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
    policies: Array<AssistantsV1ServicePolicy>;
}
export declare class ToolInstance {
    protected _version: V1;
    protected _solution: ToolContextSolution;
    protected _context?: ToolContext;
    constructor(_version: V1, payload: ToolResource, id?: string);
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
    /**
     * The Policies associated with the tool.
     */
    policies: Array<AssistantsV1ServicePolicy>;
    private get _proxy();
    /**
     * Remove a ToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    fetch(callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Update a ToolInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    update(callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Update a ToolInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    update(params: AssistantsV1ServiceUpdateToolRequest, callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
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
        policies: AssistantsV1ServicePolicy[];
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ToolSolution {
}
export interface ToolListInstance {
    _version: V1;
    _solution: ToolSolution;
    _uri: string;
    (id: string): ToolContext;
    get(id: string): ToolContext;
    /**
     * Create a ToolInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ToolInstance
     */
    create(params: AssistantsV1ServiceCreateToolRequest, callback?: (error: Error | null, item?: ToolInstance) => any): Promise<ToolInstance>;
    /**
     * Streams ToolInstance records from the API.
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
     * @param { ToolListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: ToolInstance, done: (err?: Error) => void) => void): void;
    each(params: ToolListInstanceEachOptions, callback?: (item: ToolInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of ToolInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: ToolPage) => any): Promise<ToolPage>;
    /**
     * Lists ToolInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ToolListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ToolInstance[]) => any): Promise<ToolInstance[]>;
    list(params: ToolListInstanceOptions, callback?: (error: Error | null, items: ToolInstance[]) => any): Promise<ToolInstance[]>;
    /**
     * Retrieve a single page of ToolInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ToolListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ToolPage) => any): Promise<ToolPage>;
    page(params: ToolListInstancePageOptions, callback?: (error: Error | null, items: ToolPage) => any): Promise<ToolPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ToolListInstance(version: V1): ToolListInstance;
export declare class ToolPage extends Page<V1, ToolPayload, ToolResource, ToolInstance> {
    /**
     * Initialize the ToolPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ToolSolution);
    /**
     * Build an instance of ToolInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ToolResource): ToolInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
