/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export interface DialogueContext {
    /**
     * Fetch a DialogueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DialogueInstance
     */
    fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DialogueContextSolution {
    assistantSid: string;
    sid: string;
}
export declare class DialogueContextImpl implements DialogueContext {
    protected _version: V1;
    protected _solution: DialogueContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, sid: string);
    fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DialogueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DialogueResource {
    account_sid: string;
    assistant_sid: string;
    sid: string;
    data: any;
    url: string;
}
export declare class DialogueInstance {
    protected _version: V1;
    protected _solution: DialogueContextSolution;
    protected _context?: DialogueContext;
    constructor(_version: V1, payload: DialogueResource, assistantSid: string, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Dialogue resource.
     */
    accountSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid: string;
    /**
     * The unique string that we created to identify the Dialogue resource.
     */
    sid: string;
    /**
     * The JSON string that describes the dialogue session object.
     */
    data: any;
    /**
     * The absolute URL of the Dialogue resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a DialogueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DialogueInstance
     */
    fetch(callback?: (error: Error | null, item?: DialogueInstance) => any): Promise<DialogueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        assistantSid: string;
        sid: string;
        data: any;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DialogueSolution {
    assistantSid: string;
}
export interface DialogueListInstance {
    _version: V1;
    _solution: DialogueSolution;
    _uri: string;
    (sid: string): DialogueContext;
    get(sid: string): DialogueContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function DialogueListInstance(version: V1, assistantSid: string): DialogueListInstance;
export {};
