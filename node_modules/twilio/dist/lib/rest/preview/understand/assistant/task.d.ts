/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Understand from "../../Understand";
import { FieldListInstance } from "./task/field";
import { SampleListInstance } from "./task/sample";
import { TaskActionsListInstance } from "./task/taskActions";
import { TaskStatisticsListInstance } from "./task/taskStatistics";
/**
 * Options to pass to update a TaskInstance
 */
export interface TaskContextUpdateOptions {
    /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
    friendlyName?: string;
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    uniqueName?: string;
    /** A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique. */
    actions?: any;
    /** User-provided HTTP endpoint where from the assistant fetches actions */
    actionsUrl?: string;
}
/**
 * Options to pass to create a TaskInstance
 */
export interface TaskListInstanceCreateOptions {
    /** A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long. */
    uniqueName: string;
    /** A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long. */
    friendlyName?: string;
    /** A user-provided JSON object encoded as a string to specify the actions for this task. It is optional and non-unique. */
    actions?: any;
    /** User-provided HTTP endpoint where from the assistant fetches actions */
    actionsUrl?: string;
}
/**
 * Options to pass to each
 */
export interface TaskListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: TaskInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface TaskListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface TaskListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface TaskContext {
    fields: FieldListInstance;
    samples: SampleListInstance;
    taskActions: TaskActionsListInstance;
    statistics: TaskStatisticsListInstance;
    /**
     * Remove a TaskInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    update(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    update(params: TaskContextUpdateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskContextSolution {
    assistantSid: string;
    sid: string;
}
export declare class TaskContextImpl implements TaskContext {
    protected _version: Understand;
    protected _solution: TaskContextSolution;
    protected _uri: string;
    protected _fields?: FieldListInstance;
    protected _samples?: SampleListInstance;
    protected _taskActions?: TaskActionsListInstance;
    protected _statistics?: TaskStatisticsListInstance;
    constructor(_version: Understand, assistantSid: string, sid: string);
    get fields(): FieldListInstance;
    get samples(): SampleListInstance;
    get taskActions(): TaskActionsListInstance;
    get statistics(): TaskStatisticsListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    update(params?: TaskContextUpdateOptions | ((error: Error | null, item?: TaskInstance) => any), callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskPayload extends TwilioResponsePayload {
    tasks: TaskResource[];
}
interface TaskResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    friendly_name: string;
    links: Record<string, string>;
    assistant_sid: string;
    sid: string;
    unique_name: string;
    actions_url: string;
    url: string;
}
export declare class TaskInstance {
    protected _version: Understand;
    protected _solution: TaskContextSolution;
    protected _context?: TaskContext;
    constructor(_version: Understand, payload: TaskResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Task.
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
     * A user-provided string that identifies this resource. It is non-unique and can up to 255 characters long.
     */
    friendlyName: string;
    links: Record<string, string>;
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName: string;
    /**
     * User-provided HTTP endpoint where from the assistant fetches actions
     */
    actionsUrl: string;
    url: string;
    private get _proxy();
    /**
     * Remove a TaskInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a TaskInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    update(callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Update a TaskInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    update(params: TaskContextUpdateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Access the fields.
     */
    fields(): FieldListInstance;
    /**
     * Access the samples.
     */
    samples(): SampleListInstance;
    /**
     * Access the taskActions.
     */
    taskActions(): TaskActionsListInstance;
    /**
     * Access the statistics.
     */
    statistics(): TaskStatisticsListInstance;
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
        links: Record<string, string>;
        assistantSid: string;
        sid: string;
        uniqueName: string;
        actionsUrl: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskSolution {
    assistantSid: string;
}
export interface TaskListInstance {
    _version: Understand;
    _solution: TaskSolution;
    _uri: string;
    (sid: string): TaskContext;
    get(sid: string): TaskContext;
    /**
     * Create a TaskInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskInstance
     */
    create(params: TaskListInstanceCreateOptions, callback?: (error: Error | null, item?: TaskInstance) => any): Promise<TaskInstance>;
    /**
     * Streams TaskInstance records from the API.
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
     * @param { TaskListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
    each(params: TaskListInstanceEachOptions, callback?: (item: TaskInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of TaskInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    /**
     * Lists TaskInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
    list(params: TaskListInstanceOptions, callback?: (error: Error | null, items: TaskInstance[]) => any): Promise<TaskInstance[]>;
    /**
     * Retrieve a single page of TaskInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { TaskListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    page(params: TaskListInstancePageOptions, callback?: (error: Error | null, items: TaskPage) => any): Promise<TaskPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function TaskListInstance(version: Understand, assistantSid: string): TaskListInstance;
export declare class TaskPage extends Page<Understand, TaskPayload, TaskResource, TaskInstance> {
    /**
     * Initialize the TaskPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: Understand, response: Response<string>, solution: TaskSolution);
    /**
     * Build an instance of TaskInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: TaskResource): TaskInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
