/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../../V1";
/**
 * Options to pass to create a TaskQueueBulkRealTimeStatisticsInstance
 */
export interface TaskQueueBulkRealTimeStatisticsListInstanceCreateOptions {
    /**  */
    body?: object;
}
export interface TaskQueueBulkRealTimeStatisticsSolution {
    workspaceSid: string;
}
export interface TaskQueueBulkRealTimeStatisticsListInstance {
    _version: V1;
    _solution: TaskQueueBulkRealTimeStatisticsSolution;
    _uri: string;
    /**
     * Create a TaskQueueBulkRealTimeStatisticsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskQueueBulkRealTimeStatisticsInstance
     */
    create(callback?: (error: Error | null, item?: TaskQueueBulkRealTimeStatisticsInstance) => any): Promise<TaskQueueBulkRealTimeStatisticsInstance>;
    /**
     * Create a TaskQueueBulkRealTimeStatisticsInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed TaskQueueBulkRealTimeStatisticsInstance
     */
    create(params: object, callback?: (error: Error | null, item?: TaskQueueBulkRealTimeStatisticsInstance) => any): Promise<TaskQueueBulkRealTimeStatisticsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function TaskQueueBulkRealTimeStatisticsListInstance(version: V1, workspaceSid: string): TaskQueueBulkRealTimeStatisticsListInstance;
interface TaskQueueBulkRealTimeStatisticsResource {
    account_sid: string;
    workspace_sid: string;
    task_queue_data: Array<any>;
    task_queue_response_count: number;
    url: string;
}
export declare class TaskQueueBulkRealTimeStatisticsInstance {
    protected _version: V1;
    constructor(_version: V1, payload: TaskQueueBulkRealTimeStatisticsResource, workspaceSid: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the TaskQueue resource.
     */
    accountSid: string;
    /**
     * The SID of the Workspace that contains the TaskQueue.
     */
    workspaceSid: string;
    /**
     * The real-time statistics for each requested TaskQueue SID. `task_queue_data` returns the following attributes:  `task_queue_sid`: The SID of the TaskQueue from which these statistics were calculated.  `total_available_workers`: The total number of Workers available for Tasks in the TaskQueue.  `total_eligible_workers`: The total number of Workers eligible for Tasks in the TaskQueue, regardless of their Activity state.  `total_tasks`: The total number of Tasks.  `longest_task_waiting_age`: The age of the longest waiting Task.  `longest_task_waiting_sid`: The SID of the longest waiting Task.  `tasks_by_status`: The number of Tasks grouped by their current status.  `tasks_by_priority`: The number of Tasks grouped by priority.  `activity_statistics`: The number of current Workers grouped by Activity.
     */
    taskQueueData: Array<any>;
    /**
     * The number of TaskQueue statistics received in task_queue_data.
     */
    taskQueueResponseCount: number;
    /**
     * The absolute URL of the TaskQueue statistics resource.
     */
    url: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        workspaceSid: string;
        taskQueueData: any[];
        taskQueueResponseCount: number;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
