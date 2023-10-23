/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
import { RecordListInstance } from "./usage/record";
import { TriggerListInstance } from "./usage/trigger";
export interface UsageSolution {
    accountSid: string;
}
export interface UsageListInstance {
    _version: V2010;
    _solution: UsageSolution;
    _uri: string;
    _records?: RecordListInstance;
    records: RecordListInstance;
    _triggers?: TriggerListInstance;
    triggers: TriggerListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function UsageListInstance(version: V2010, accountSid: string): UsageListInstance;
