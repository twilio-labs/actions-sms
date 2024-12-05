/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { AssistantsKnowledgeListInstance } from "./assistant/assistantsKnowledge";
import { AssistantsToolListInstance } from "./assistant/assistantsTool";
import { FeedbackListInstance } from "./assistant/feedback";
import { MessageListInstance } from "./assistant/message";
export declare class AssistantsV1ServiceCreateAssistantRequest {
    "customerAi"?: AssistantsV1ServiceCustomerAi;
    /**
     * The name of the assistant.
     */
    "name": string;
    /**
     * The owner/company of the assistant.
     */
    "owner"?: string;
    /**
     * The personality prompt to be used for assistant.
     */
    "personalityPrompt"?: string;
    "segmentCredential"?: AssistantsV1ServiceSegmentCredential;
}
export declare class AssistantsV1ServiceCustomerAi {
    /**
     * True if the perception engine is enabled.
     */
    "perceptionEngineEnabled": boolean;
    /**
     * True if the personalization engine is enabled.
     */
    "personalizationEngineEnabled": boolean;
}
export declare class AssistantsV1ServiceKnowledge {
    /**
     * The type of knowledge source.
     */
    "description"?: string;
    /**
     * The description of knowledge.
     */
    "id"?: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
     */
    "accountSid"?: string;
    /**
     * The details of the knowledge source based on the type.
     */
    "knowledgeSourceDetails"?: Record<string, object>;
    /**
     * The name of the knowledge source.
     */
    "name"?: string;
    /**
     * The status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
     */
    "status"?: string;
    /**
     * The type of knowledge source (\'Web\', \'Database\', \'Text\', \'File\')
     */
    "type"?: string;
    /**
     * The url of the knowledge resource.
     */
    "url"?: string;
    /**
     * The date and time in GMT when the Knowledge was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    "dateCreated"?: Date;
    /**
     * The date and time in GMT when the Knowledge was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    "dateUpdated"?: Date;
}
export declare class AssistantsV1ServiceSegmentCredential {
    /**
     * The profile API key.
     */
    "profileApiKey"?: string;
    /**
     * The space ID.
     */
    "spaceId"?: string;
    /**
     * The write key.
     */
    "writeKey"?: string;
}
export declare class AssistantsV1ServiceTool {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tool resource.
     */
    "accountSid"?: string;
    /**
     * The description of the tool.
     */
    "description": string;
    /**
     * True if the tool is enabled.
     */
    "enabled": boolean;
    /**
     * The tool ID.
     */
    "id": string;
    /**
     * The metadata related to method, url, input_schema to used with the Tool.
     */
    "meta": Record<string, object>;
    /**
     * The name of the tool.
     */
    "name": string;
    /**
     * The authentication requirement for the tool.
     */
    "requiresAuth": boolean;
    /**
     * The type of the tool. (\'WEBHOOK\')
     */
    "type": string;
    /**
     * The url of the tool resource.
     */
    "url"?: string;
    /**
     * The date and time in GMT when the Tool was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    "dateCreated": Date;
    /**
     * The date and time in GMT when the Tool was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    "dateUpdated": Date;
}
export declare class AssistantsV1ServiceUpdateAssistantRequest {
    "customerAi"?: AssistantsV1ServiceCustomerAi;
    /**
     * The name of the assistant.
     */
    "name"?: string;
    /**
     * The owner/company of the assistant.
     */
    "owner"?: string;
    /**
     * The personality prompt to be used for assistant.
     */
    "personalityPrompt"?: string;
    "segmentCredential"?: AssistantsV1ServiceSegmentCredential;
}
/**
 * Options to pass to update a AssistantInstance
 */
export interface AssistantContextUpdateOptions {
    /**  */
    assistantsV1ServiceUpdateAssistantRequest?: AssistantsV1ServiceUpdateAssistantRequest;
}
/**
 * Options to pass to create a AssistantInstance
 */
export interface AssistantListInstanceCreateOptions {
    /**  */
    assistantsV1ServiceCreateAssistantRequest: AssistantsV1ServiceCreateAssistantRequest;
}
/**
 * Options to pass to each
 */
export interface AssistantListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: AssistantInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface AssistantListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface AssistantListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface AssistantContext {
    assistantsKnowledge: AssistantsKnowledgeListInstance;
    assistantsTools: AssistantsToolListInstance;
    feedbacks: FeedbackListInstance;
    messages: MessageListInstance;
    /**
     * Remove a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    update(params: AssistantsV1ServiceUpdateAssistantRequest, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantContextSolution {
    id: string;
}
export declare class AssistantContextImpl implements AssistantContext {
    protected _version: V1;
    protected _solution: AssistantContextSolution;
    protected _uri: string;
    protected _assistantsKnowledge?: AssistantsKnowledgeListInstance;
    protected _assistantsTools?: AssistantsToolListInstance;
    protected _feedbacks?: FeedbackListInstance;
    protected _messages?: MessageListInstance;
    constructor(_version: V1, id: string);
    get assistantsKnowledge(): AssistantsKnowledgeListInstance;
    get assistantsTools(): AssistantsToolListInstance;
    get feedbacks(): FeedbackListInstance;
    get messages(): MessageListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    update(params?: AssistantsV1ServiceUpdateAssistantRequest | ((error: Error | null, item?: AssistantInstance) => any), callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantPayload extends TwilioResponsePayload {
    assistants: AssistantResource[];
}
interface AssistantResource {
    account_sid: string;
    customer_ai: Record<string, object>;
    id: string;
    model: string;
    name: string;
    owner: string;
    url: string;
    personality_prompt: string;
    date_created: Date;
    date_updated: Date;
    knowledge: Array<AssistantsV1ServiceKnowledge>;
    tools: Array<AssistantsV1ServiceTool>;
}
export declare class AssistantInstance {
    protected _version: V1;
    protected _solution: AssistantContextSolution;
    protected _context?: AssistantContext;
    constructor(_version: V1, payload: AssistantResource, id?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
     */
    accountSid: string;
    /**
     * The Personalization and Perception Engine settings.
     */
    customerAi: Record<string, object>;
    /**
     * The Assistant ID.
     */
    id: string;
    /**
     * The default model used by the assistant.
     */
    model: string;
    /**
     * The name of the assistant.
     */
    name: string;
    /**
     * The owner/company of the assistant.
     */
    owner: string;
    /**
     * The url of the assistant resource.
     */
    url: string;
    /**
     * The personality prompt to be used for assistant.
     */
    personalityPrompt: string;
    /**
     * The date and time in GMT when the Assistant was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Assistant was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * The list of knowledge sources associated with the assistant.
     */
    knowledge: Array<AssistantsV1ServiceKnowledge>;
    /**
     * The list of tools associated with the assistant.
     */
    tools: Array<AssistantsV1ServiceTool>;
    private get _proxy();
    /**
     * Remove a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Update a AssistantInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    update(params: AssistantsV1ServiceUpdateAssistantRequest, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Access the assistantsKnowledge.
     */
    assistantsKnowledge(): AssistantsKnowledgeListInstance;
    /**
     * Access the assistantsTools.
     */
    assistantsTools(): AssistantsToolListInstance;
    /**
     * Access the feedbacks.
     */
    feedbacks(): FeedbackListInstance;
    /**
     * Access the messages.
     */
    messages(): MessageListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        customerAi: Record<string, object>;
        id: string;
        model: string;
        name: string;
        owner: string;
        url: string;
        personalityPrompt: string;
        dateCreated: Date;
        dateUpdated: Date;
        knowledge: AssistantsV1ServiceKnowledge[];
        tools: AssistantsV1ServiceTool[];
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssistantSolution {
}
export interface AssistantListInstance {
    _version: V1;
    _solution: AssistantSolution;
    _uri: string;
    (id: string): AssistantContext;
    get(id: string): AssistantContext;
    /**
     * Create a AssistantInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    create(params: AssistantsV1ServiceCreateAssistantRequest, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Streams AssistantInstance records from the API.
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
     * @param { AssistantListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
    each(params: AssistantListInstanceEachOptions, callback?: (item: AssistantInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of AssistantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    /**
     * Lists AssistantInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssistantListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
    list(params: AssistantListInstanceOptions, callback?: (error: Error | null, items: AssistantInstance[]) => any): Promise<AssistantInstance[]>;
    /**
     * Retrieve a single page of AssistantInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { AssistantListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    page(params: AssistantListInstancePageOptions, callback?: (error: Error | null, items: AssistantPage) => any): Promise<AssistantPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AssistantListInstance(version: V1): AssistantListInstance;
export declare class AssistantPage extends Page<V1, AssistantPayload, AssistantResource, AssistantInstance> {
    /**
     * Initialize the AssistantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: AssistantSolution);
    /**
     * Build an instance of AssistantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssistantResource): AssistantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
