/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
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
    protected _version: V1;
    protected _solution: TaskStatisticsContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, taskSid: string);
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
    protected _version: V1;
    protected _solution: TaskStatisticsContextSolution;
    protected _context?: TaskStatisticsContext;
    constructor(_version: V1, payload: TaskStatisticsResource, assistantSid: string, taskSid: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskStatistics resource.
     */
    accountSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resource.
     */
    assistantSid: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) for which the statistics were collected.
     */
    taskSid: string;
    /**
     * The total number of [Samples](https://www.twilio.com/docs/autopilot/api/task-sample) associated with the Task.
     */
    samplesCount: number;
    /**
     * The total number of [Fields](https://www.twilio.com/docs/autopilot/api/task-field) associated with the Task.
     */
    fieldsCount: number;
    /**
     * The absolute URL of the TaskStatistics resource.
     */
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
    _version: V1;
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
export declare function TaskStatisticsListInstance(version: V1, assistantSid: string, taskSid: string): TaskStatisticsListInstance;
export {};
