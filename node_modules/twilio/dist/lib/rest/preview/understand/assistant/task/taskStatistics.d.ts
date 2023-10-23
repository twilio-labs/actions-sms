/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../../Understand";
export interface TaskStatisticsContext {
    /**
     * Fetch a TaskStatisticsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskStatisticsInstance) => any): Promise<TaskStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface TaskStatisticsContextSolution {
    assistantSid: string;
    taskSid: string;
}
export declare class TaskStatisticsContextImpl implements TaskStatisticsContext {
    protected _version: Understand;
    protected _solution: TaskStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, taskSid: string);
    fetch(callback?: (error: Error | null, item?: TaskStatisticsInstance) => any): Promise<TaskStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): TaskStatisticsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface TaskStatisticsResource {
    account_sid: string;
    assistant_sid: string;
    task_sid: string;
    samples_count: number;
    fields_count: number;
    url: string;
}
export declare class TaskStatisticsInstance {
    protected _version: Understand;
    protected _solution: TaskStatisticsContextSolution;
    protected _context?: TaskStatisticsContext;
    constructor(_version: Understand, payload: TaskStatisticsResource, assistantSid: string, taskSid: string);
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
    /**
     * The total number of Samples associated with this Task.
     */
    samplesCount: number;
    /**
     * The total number of Fields associated with this Task.
     */
    fieldsCount: number;
    url: string;
    private get _proxy();
    /**
     * Fetch a TaskStatisticsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskStatisticsInstance
     */
    fetch(callback?: (error: Error | null, item?: TaskStatisticsInstance) => any): Promise<TaskStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        assistantSid: string;
        taskSid: string;
        samplesCount: number;
        fieldsCount: number;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface TaskStatisticsSolution {
    assistantSid: string;
    taskSid: string;
}
export interface TaskStatisticsListInstance {
    _version: Understand;
    _solution: TaskStatisticsSolution;
    _uri: string;
    (): TaskStatisticsContext;
    get(): TaskStatisticsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function TaskStatisticsListInstance(version: Understand, assistantSid: string, taskSid: string): TaskStatisticsListInstance;
export {};
