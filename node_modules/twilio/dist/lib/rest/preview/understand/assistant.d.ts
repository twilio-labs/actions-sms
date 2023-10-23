/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Understand from "../Understand";
import { AssistantFallbackActionsListInstance } from "./assistant/assistantFallbackActions";
import { AssistantInitiationActionsListInstance } from "./assistant/assistantInitiationActions";
import { DialogueListInstance } from "./assistant/dialogue";
import { FieldTypeListInstance } from "./assistant/fieldType";
import { ModelBuildListInstance } from "./assistant/modelBuild";
import { QueryListInstance } from "./assistant/query";
import { StyleSheetListInstance } from "./assistant/styleSheet";
import { TaskListInstance } from "./assistant/task";
/**
 * Options to pass to update a AssistantInstance
 */
export interface AssistantContextUpdateOptions {
    /** A text description for the Assistant. It is non-unique and can up to 255 characters long. */
    friendlyName?: string;
    /** A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided. */
    logQueries?: boolean;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    uniqueName?: string;
    /** A user-provided URL to send event callbacks to. */
    callbackUrl?: string;
    /** Space-separated list of callback events that will trigger callbacks. */
    callbackEvents?: string;
    /** The JSON actions to be executed when the user\\\'s input is not recognized as matching any Task. */
    fallbackActions?: any;
    /** The JSON actions to be executed on inbound phone calls when the Assistant has to say something first. */
    initiationActions?: any;
    /** The JSON object that holds the style sheet for the assistant */
    styleSheet?: any;
}
/**
 * Options to pass to create a AssistantInstance
 */
export interface AssistantListInstanceCreateOptions {
    /** A text description for the Assistant. It is non-unique and can up to 255 characters long. */
    friendlyName?: string;
    /** A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter. Defaults to true if no value is provided. */
    logQueries?: boolean;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    uniqueName?: string;
    /** A user-provided URL to send event callbacks to. */
    callbackUrl?: string;
    /** Space-separated list of callback events that will trigger callbacks. */
    callbackEvents?: string;
    /** The JSON actions to be executed when the user\\\'s input is not recognized as matching any Task. */
    fallbackActions?: any;
    /** The JSON actions to be executed on inbound phone calls when the Assistant has to say something first. */
    initiationActions?: any;
    /** The JSON object that holds the style sheet for the assistant */
    styleSheet?: any;
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
    assistantFallbackActions: AssistantFallbackActionsListInstance;
    assistantInitiationActions: AssistantInitiationActionsListInstance;
    dialogues: DialogueListInstance;
    fieldTypes: FieldTypeListInstance;
    modelBuilds: ModelBuildListInstance;
    queries: QueryListInstance;
    styleSheet: StyleSheetListInstance;
    tasks: TaskListInstance;
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
    protected _version: Understand;
    protected _solution: AssistantContextSolution;
    protected _uri: string;
    protected _assistantFallbackActions?: AssistantFallbackActionsListInstance;
    protected _assistantInitiationActions?: AssistantInitiationActionsListInstance;
    protected _dialogues?: DialogueListInstance;
    protected _fieldTypes?: FieldTypeListInstance;
    protected _modelBuilds?: ModelBuildListInstance;
    protected _queries?: QueryListInstance;
    protected _styleSheet?: StyleSheetListInstance;
    protected _tasks?: TaskListInstance;
    constructor(_version: Understand, sid: string);
    get assistantFallbackActions(): AssistantFallbackActionsListInstance;
    get assistantInitiationActions(): AssistantInitiationActionsListInstance;
    get dialogues(): DialogueListInstance;
    get fieldTypes(): FieldTypeListInstance;
    get modelBuilds(): ModelBuildListInstance;
    get queries(): QueryListInstance;
    get styleSheet(): StyleSheetListInstance;
    get tasks(): TaskListInstance;
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
    sid: string;
    unique_name: string;
    url: string;
    callback_url: string;
    callback_events: string;
}
export declare class AssistantInstance {
    protected _version: Understand;
    protected _solution: AssistantContextSolution;
    protected _context?: AssistantContext;
    constructor(_version: Understand, payload: AssistantResource, sid?: string);
    /**
     * The unique ID of the Account that created this Assistant.
     */
    accountSid: string;
    /**
     * The date that this resource was created
     */
    dateCreated: Date;
    /**
     * The date that this resource was last updated
     */
    dateUpdated: Date;
    /**
     * A text description for the Assistant. It is non-unique and can up to 255 characters long.
     */
    friendlyName: string;
    /**
     * The unique ID (Sid) of the latest model build. Null if no model has been built.
     */
    latestModelBuildSid: string;
    links: Record<string, string>;
    /**
     * A boolean that specifies whether queries should be logged for 30 days further training. If false, no queries will be stored, if true, queries will be stored for 30 days and deleted thereafter.
     */
    logQueries: boolean;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. You can use the unique name in the URL path. Unique up to 64 characters long.
     */
    uniqueName: string;
    url: string;
    /**
     * A user-provided URL to send event callbacks to.
     */
    callbackUrl: string;
    /**
     * Space-separated list of callback events that will trigger callbacks.
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
     * Access the assistantFallbackActions.
     */
    assistantFallbackActions(): AssistantFallbackActionsListInstance;
    /**
     * Access the assistantInitiationActions.
     */
    assistantInitiationActions(): AssistantInitiationActionsListInstance;
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
    _version: Understand;
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
export declare function AssistantListInstance(version: Understand): AssistantListInstance;
export declare class AssistantPage extends Page<Understand, AssistantPayload, AssistantResource, AssistantInstance> {
    /**
     * Initialize the AssistantPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: AssistantSolution);
    /**
     * Build an instance of AssistantInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: AssistantResource): AssistantInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
