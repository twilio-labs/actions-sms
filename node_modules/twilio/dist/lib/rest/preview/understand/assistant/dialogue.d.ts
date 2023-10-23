/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
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
    protected _version: Understand;
    protected _solution: DialogueContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string, sid: string);
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
    protected _version: Understand;
    protected _solution: DialogueContextSolution;
    protected _context?: DialogueContext;
    constructor(_version: Understand, payload: DialogueResource, assistantSid: string, sid?: string);
    /**
     * The unique ID of the Account that created this Field.
     */
    accountSid: string;
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    /**
     * The unique ID of the Dialogue
     */
    sid: string;
    /**
     * The dialogue memory object as json
     */
    data: any;
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
    _version: Understand;
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
export declare function DialogueListInstance(version: Understand, assistantSid: string): DialogueListInstance;
export {};
