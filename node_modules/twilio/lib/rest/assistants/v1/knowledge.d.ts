/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ChunkListInstance } from "./knowledge/chunk";
import { KnowledgeStatusListInstance } from "./knowledge/knowledgeStatus";
export declare class AssistantsV1ServiceCreateKnowledgeRequest {
    /**
     * The Assistant ID.
     */
    "assistantId"?: string;
    /**
     * The description of the knowledge source.
     */
    "description"?: string;
    /**
     * The details of the knowledge source based on the type.
     */
    "knowledgeSourceDetails"?: Record<string, object>;
    /**
     * The name of the tool.
     */
    "name": string;
    "policy"?: AssistantsV1ServiceCreatePolicyRequest;
    /**
     * The type of the knowledge source.
     */
    "type": string;
}
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
export declare class AssistantsV1ServiceUpdateKnowledgeRequest {
    /**
     * The description of the knowledge source.
     */
    "description"?: string;
    /**
     * The details of the knowledge source based on the type.
     */
    "knowledgeSourceDetails"?: Record<string, object>;
    /**
     * The name of the knowledge source.
     */
    "name"?: string;
    "policy"?: AssistantsV1ServiceCreatePolicyRequest;
    /**
     * The description of the knowledge source.
     */
    "type"?: string;
}
/**
 * Options to pass to update a KnowledgeInstance
 */
export interface KnowledgeContextUpdateOptions {
    /**  */
    assistantsV1ServiceUpdateKnowledgeRequest?: AssistantsV1ServiceUpdateKnowledgeRequest;
}
/**
 * Options to pass to create a KnowledgeInstance
 */
export interface KnowledgeListInstanceCreateOptions {
    /**  */
    assistantsV1ServiceCreateKnowledgeRequest: AssistantsV1ServiceCreateKnowledgeRequest;
}
/**
 * Options to pass to each
 */
export interface KnowledgeListInstanceEachOptions {
    /**  */
    assistantId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: KnowledgeInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface KnowledgeListInstanceOptions {
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
export interface KnowledgeListInstancePageOptions {
    /**  */
    assistantId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface KnowledgeContext {
    chunks: ChunkListInstance;
    knowledgeStatus: KnowledgeStatusListInstance;
    /**
     * Remove a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    fetch(callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Update a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    update(callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Update a KnowledgeInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    update(params: AssistantsV1ServiceUpdateKnowledgeRequest, callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface KnowledgeContextSolution {
    id: string;
}
export declare class KnowledgeContextImpl implements KnowledgeContext {
    protected _version: V1;
    protected _solution: KnowledgeContextSolution;
    protected _uri: string;
    protected _chunks?: ChunkListInstance;
    protected _knowledgeStatus?: KnowledgeStatusListInstance;
    constructor(_version: V1, id: string);
    get chunks(): ChunkListInstance;
    get knowledgeStatus(): KnowledgeStatusListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    update(params?: AssistantsV1ServiceUpdateKnowledgeRequest | ((error: Error | null, item?: KnowledgeInstance) => any), callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): KnowledgeContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface KnowledgePayload extends TwilioResponsePayload {
    knowledge: KnowledgeResource[];
}
interface KnowledgeResource {
    description: string;
    id: string;
    account_sid: string;
    knowledge_source_details: Record<string, object>;
    name: string;
    status: string;
    type: string;
    url: string;
    date_created: Date;
    date_updated: Date;
}
export declare class KnowledgeInstance {
    protected _version: V1;
    protected _solution: KnowledgeContextSolution;
    protected _context?: KnowledgeContext;
    constructor(_version: V1, payload: KnowledgeResource, id?: string);
    /**
     * The type of knowledge source.
     */
    description: string;
    /**
     * The description of knowledge.
     */
    id: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
     */
    accountSid: string;
    /**
     * The details of the knowledge source based on the type.
     */
    knowledgeSourceDetails: Record<string, object>;
    /**
     * The name of the knowledge source.
     */
    name: string;
    /**
     * The status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
     */
    status: string;
    /**
     * The type of knowledge source (\'Web\', \'Database\', \'Text\', \'File\')
     */
    type: string;
    /**
     * The url of the knowledge resource.
     */
    url: string;
    /**
     * The date and time in GMT when the Knowledge was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Knowledge was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    private get _proxy();
    /**
     * Remove a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    fetch(callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Update a KnowledgeInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    update(callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Update a KnowledgeInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    update(params: AssistantsV1ServiceUpdateKnowledgeRequest, callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Access the chunks.
     */
    chunks(): ChunkListInstance;
    /**
     * Access the knowledgeStatus.
     */
    knowledgeStatus(): KnowledgeStatusListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        description: string;
        id: string;
        accountSid: string;
        knowledgeSourceDetails: Record<string, object>;
        name: string;
        status: string;
        type: string;
        url: string;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface KnowledgeSolution {
}
export interface KnowledgeListInstance {
    _version: V1;
    _solution: KnowledgeSolution;
    _uri: string;
    (id: string): KnowledgeContext;
    get(id: string): KnowledgeContext;
    /**
     * Create a KnowledgeInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeInstance
     */
    create(params: AssistantsV1ServiceCreateKnowledgeRequest, callback?: (error: Error | null, item?: KnowledgeInstance) => any): Promise<KnowledgeInstance>;
    /**
     * Streams KnowledgeInstance records from the API.
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
     * @param { KnowledgeListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: KnowledgeInstance, done: (err?: Error) => void) => void): void;
    each(params: KnowledgeListInstanceEachOptions, callback?: (item: KnowledgeInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of KnowledgeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: KnowledgePage) => any): Promise<KnowledgePage>;
    /**
     * Lists KnowledgeInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { KnowledgeListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: KnowledgeInstance[]) => any): Promise<KnowledgeInstance[]>;
    list(params: KnowledgeListInstanceOptions, callback?: (error: Error | null, items: KnowledgeInstance[]) => any): Promise<KnowledgeInstance[]>;
    /**
     * Retrieve a single page of KnowledgeInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { KnowledgeListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: KnowledgePage) => any): Promise<KnowledgePage>;
    page(params: KnowledgeListInstancePageOptions, callback?: (error: Error | null, items: KnowledgePage) => any): Promise<KnowledgePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function KnowledgeListInstance(version: V1): KnowledgeListInstance;
export declare class KnowledgePage extends Page<V1, KnowledgePayload, KnowledgeResource, KnowledgeInstance> {
    /**
     * Initialize the KnowledgePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: KnowledgeSolution);
    /**
     * Build an instance of KnowledgeInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: KnowledgeResource): KnowledgeInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
