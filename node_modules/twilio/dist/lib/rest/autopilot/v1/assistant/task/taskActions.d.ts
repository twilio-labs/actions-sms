/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to update a TaskActionsInstance
 */
export interface TaskActionsContextUpdateOptions {
    /** The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task. */
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
    protected _version: V1;
    protected _solution: TaskActionsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string);
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
    protected _version: V1;
    protected _solution: TaskActionsContextSolution;
    protected _context?: TaskActionsContext;
    constructor(_version: V1, payload: TaskActionsResource, assistantSid: string, taskSid: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskActions resource.
     */
    accountSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
     */
    assistantSid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) associated with the resource.
     */
    taskSid: string;
    /**
     * The absolute URL of the TaskActions resource.
     */
    url: string;
    /**
     * The JSON string that specifies the [actions](https://www.twilio.com/docs/autopilot/actions) that instruct the Assistant on how to perform the task.
     */
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
    _version: V1;
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
export declare function TaskActionsListInstance(version: V1, assistantSid: string, taskSid: string): TaskActionsListInstance;
export {};
