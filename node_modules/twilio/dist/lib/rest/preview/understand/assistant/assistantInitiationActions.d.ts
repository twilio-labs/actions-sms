/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
/**
 * Options to pass to update a AssistantInitiationActionsInstance
 */
export interface AssistantInitiationActionsContextUpdateOptions {
    /**  */
    initiationActions?: any;
}
export interface AssistantInitiationActionsContext {
    /**
     * Fetch a AssistantInitiationActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInitiationActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInitiationActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInitiationActionsInstance
     */
    update(params: AssistantInitiationActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantInitiationActionsContextSolution {
    assistantSid: string;
}
export declare class AssistantInitiationActionsContextImpl implements AssistantInitiationActionsContext {
    protected _version: Understand;
    protected _solution: AssistantInitiationActionsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string);
    fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    update(params?: AssistantInitiationActionsContextUpdateOptions | ((error: Error | null, item?: AssistantInitiationActionsInstance) => any), callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantInitiationActionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantInitiationActionsResource {
    account_sid: string;
    assistant_sid: string;
    url: string;
    data: any;
}
export declare class AssistantInitiationActionsInstance {
    protected _version: Understand;
    protected _solution: AssistantInitiationActionsContextSolution;
    protected _context?: AssistantInitiationActionsContext;
    constructor(_version: Understand, payload: AssistantInitiationActionsResource, assistantSid: string);
    accountSid: string;
    assistantSid: string;
    url: string;
    data: any;
    private get _proxy();
    /**
     * Fetch a AssistantInitiationActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInitiationActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInitiationActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Update a AssistantInitiationActionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantInitiationActionsInstance
     */
    update(params: AssistantInitiationActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantInitiationActionsInstance) => any): Promise<AssistantInitiationActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        assistantSid: string;
        url: string;
        data: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssistantInitiationActionsSolution {
    assistantSid: string;
}
export interface AssistantInitiationActionsListInstance {
    _version: Understand;
    _solution: AssistantInitiationActionsSolution;
    _uri: string;
    (): AssistantInitiationActionsContext;
    get(): AssistantInitiationActionsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AssistantInitiationActionsListInstance(version: Understand, assistantSid: string): AssistantInitiationActionsListInstance;
export {};
