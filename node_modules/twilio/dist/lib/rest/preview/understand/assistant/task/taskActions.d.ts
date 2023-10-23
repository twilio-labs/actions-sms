/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../../Understand";
/**
 * Options to pass to update a TaskActionsInstance
 */
export interface TaskActionsContextUpdateOptions {
    /** The JSON actions that instruct the Assistant how to perform this task. */
    actions?: any;
}
export interface TaskActionsContext {
    /**
     * Fetch a TaskActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
     */
    update(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
     */
    update(params: TaskActionsContextUpdateOptions, callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskActionsContextSolution {
    assistantSid: string;
    taskSid: string;
}
export declare class TaskActionsContextImpl implements TaskActionsContext {
    protected _version: Understand;
    protected _solution: TaskActionsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, taskSid: string);
    fetch(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    update(params?: TaskActionsContextUpdateOptions | ((error: Error | null, item?: TaskActionsInstance) => any), callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskActionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskActionsResource {
    account_sid: string;
    assistant_sid: string;
    task_sid: string;
    url: string;
    data: any;
}
export declare class TaskActionsInstance {
    protected _version: Understand;
    protected _solution: TaskActionsContextSolution;
    protected _context?: TaskActionsContext;
    constructor(_version: Understand, payload: TaskActionsResource, assistantSid: string, taskSid: string);
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * The unique ID of the Task.
     */
    taskSid: string;
    url: string;
    data: any;
    private get _proxy();
    /**
     * Fetch a TaskActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
     */
    update(callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Update a TaskActionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskActionsInstance
     */
    update(params: TaskActionsContextUpdateOptions, callback?: (error: Error | null, item?: TaskActionsInstance) => any): Promise<TaskActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        assistantSid: string;
        taskSid: string;
        url: string;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskActionsSolution {
    assistantSid: string;
    taskSid: string;
}
export interface TaskActionsListInstance {
    _version: Understand;
    _solution: TaskActionsSolution;
    _uri: string;
    (): TaskActionsContext;
    get(): TaskActionsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function TaskActionsListInstance(version: Understand, assistantSid: string, taskSid: string): TaskActionsListInstance;
export {};
