/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { DefaultsListInstance } from "./assistant/defaults";
import { DialogueListInstance } from "./assistant/dialogue";
import { FieldTypeListInstance } from "./assistant/fieldType";
import { ModelBuildListInstance } from "./assistant/modelBuild";
import { QueryListInstance } from "./assistant/query";
import { StyleSheetListInstance } from "./assistant/styleSheet";
import { TaskListInstance } from "./assistant/task";
import { WebhookListInstance } from "./assistant/webhook";
/**
 * Options to pass to update a AssistantInstance
 */
export interface AssistantContextUpdateOptions {
    /** A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long. */
    friendlyName?: string;
    /** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
    logQueries?: boolean;
    /** An application-defined string that uniquely identifies the resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique. */
    uniqueName?: string;
    /** Reserved. */
    callbackUrl?: string;
    /** Reserved. */
    callbackEvents?: string;
    /** The JSON string that defines the Assistant\\\'s [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet) */
    styleSheet?: any;
    /** A JSON object that defines the Assistant\\\'s [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks. */
    defaults?: any;
    /** A string describing the state of the assistant. */
    developmentStage?: string;
}
/**
 * Options to pass to create a AssistantInstance
 */
export interface AssistantListInstanceCreateOptions {
    /** A descriptive string that you create to describe the new resource. It is not unique and can be up to 255 characters long. */
    friendlyName?: string;
    /** Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored. */
    logQueries?: boolean;
    /** An application-defined string that uniquely identifies the new resource. It can be used as an alternative to the `sid` in the URL path to address the resource. The first 64 characters must be unique. */
    uniqueName?: string;
    /** Reserved. */
    callbackUrl?: string;
    /** Reserved. */
    callbackEvents?: string;
    /** The JSON string that defines the Assistant\\\'s [style sheet](https://www.twilio.com/docs/autopilot/api/assistant/stylesheet) */
    styleSheet?: any;
    /** A JSON object that defines the Assistant\\\'s [default tasks](https://www.twilio.com/docs/autopilot/api/assistant/defaults) for various scenarios, including initiation actions and fallback tasks. */
    defaults?: any;
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
    defaults: DefaultsListInstance;
    dialogues: DialogueListInstance;
    fieldTypes: FieldTypeListInstance;
    modelBuilds: ModelBuildListInstance;
    queries: QueryListInstance;
    styleSheet: StyleSheetListInstance;
    tasks: TaskListInstance;
    webhooks: WebhookListInstance;
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
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    update(params: AssistantContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantContextSolution {
    sid: string;
}
export declare class AssistantContextImpl implements AssistantContext {
    protected _version: V1;
    protected _solution: AssistantContextSolution;
    protected _uri: string;
    protected _defaults?: DefaultsListInstance;
    protected _dialogues?: DialogueListInstance;
    protected _fieldTypes?: FieldTypeListInstance;
    protected _modelBuilds?: ModelBuildListInstance;
    protected _queries?: QueryListInstance;
    protected _styleSheet?: StyleSheetListInstance;
    protected _tasks?: TaskListInstance;
    protected _webhooks?: WebhookListInstance;
    constructor(_version: V1, sid: string);
    get defaults(): DefaultsListInstance;
    get dialogues(): DialogueListInstance;
    get fieldTypes(): FieldTypeListInstance;
    get modelBuilds(): ModelBuildListInstance;
    get queries(): QueryListInstance;
    get styleSheet(): StyleSheetListInstance;
    get tasks(): TaskListInstance;
    get webhooks(): WebhookListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    update(params?: AssistantContextUpdateOptions | ((error: Error | null, item?: AssistantInstance) => any), callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
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
    date_created: Date;
    date_updated: Date;
    friendly_name: string;
    latest_model_build_sid: string;
    links: Record<string, string>;
    log_queries: boolean;
    development_stage: string;
    needs_model_build: boolean;
    sid: string;
    unique_name: string;
    url: string;
    callback_url: string;
    callback_events: string;
}
export declare class AssistantInstance {
    protected _version: V1;
    protected _solution: AssistantContextSolution;
    protected _context?: AssistantContext;
    constructor(_version: V1, payload: AssistantResource, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Assistant resource.
     */
    accountSid: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The string that you assigned to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName: string;
    /**
     * Reserved.
     */
    latestModelBuildSid: string;
    /**
     * A list of the URLs of the Assistant\'s related resources.
     */
    links: Record<string, string>;
    /**
     * Whether queries should be logged and kept after training. Can be: `true` or `false` and defaults to `true`. If `true`, queries are stored for 30 days, and then deleted. If `false`, no queries are stored.
     */
    logQueries: boolean;
    /**
     * A string describing the state of the assistant.
     */
    developmentStage: string;
    /**
     * Whether model needs to be rebuilt.
     */
    needsModelBuild: boolean;
    /**
     * The unique string that we created to identify the Assistant resource.
     */
    sid: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource\'s `sid` in the URL to address the resource. It can be up to 64 characters long.
     */
    uniqueName: string;
    /**
     * The absolute URL of the Assistant resource.
     */
    url: string;
    /**
     * Reserved.
     */
    callbackUrl: string;
    /**
     * Reserved.
     */
    callbackEvents: string;
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
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    update(params: AssistantContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Access the defaults.
     */
    defaults(): DefaultsListInstance;
    /**
     * Access the dialogues.
     */
    dialogues(): DialogueListInstance;
    /**
     * Access the fieldTypes.
     */
    fieldTypes(): FieldTypeListInstance;
    /**
     * Access the modelBuilds.
     */
    modelBuilds(): ModelBuildListInstance;
    /**
     * Access the queries.
     */
    queries(): QueryListInstance;
    /**
     * Access the styleSheet.
     */
    styleSheet(): StyleSheetListInstance;
    /**
     * Access the tasks.
     */
    tasks(): TaskListInstance;
    /**
     * Access the webhooks.
     */
    webhooks(): WebhookListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        friendlyName: string;
        latestModelBuildSid: string;
        links: Record<string, string>;
        logQueries: boolean;
        developmentStage: string;
        needsModelBuild: boolean;
        sid: string;
        uniqueName: string;
        url: string;
        callbackUrl: string;
        callbackEvents: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssistantSolution {
}
export interface AssistantListInstance {
    _version: V1;
    _solution: AssistantSolution;
    _uri: string;
    (sid: string): AssistantContext;
    get(sid: string): AssistantContext;
    /**
     * Create a AssistantInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    create(callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
    /**
     * Create a AssistantInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInstance
     */
    create(params: AssistantListInstanceCreateOptions, callback?: (error: Error | null, item?: AssistantInstance) => any): Promise<AssistantInstance>;
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
