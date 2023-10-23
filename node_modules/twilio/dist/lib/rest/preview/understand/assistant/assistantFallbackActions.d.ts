/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
/**
 * Options to pass to update a AssistantFallbackActionsInstance
 */
export interface AssistantFallbackActionsContextUpdateOptions {
    /**  */
    fallbackActions?: any;
}
export interface AssistantFallbackActionsContext {
    /**
     * Fetch a AssistantFallbackActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantFallbackActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantFallbackActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantFallbackActionsInstance
     */
    update(params: AssistantFallbackActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssistantFallbackActionsContextSolution {
    assistantSid: string;
}
export declare class AssistantFallbackActionsContextImpl implements AssistantFallbackActionsContext {
    protected _version: Understand;
    protected _solution: AssistantFallbackActionsContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string);
    fetch(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    update(params?: AssistantFallbackActionsContextUpdateOptions | ((error: Error | null, item?: AssistantFallbackActionsInstance) => any), callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssistantFallbackActionsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssistantFallbackActionsResource {
    account_sid: string;
    assistant_sid: string;
    url: string;
    data: any;
}
export declare class AssistantFallbackActionsInstance {
    protected _version: Understand;
    protected _solution: AssistantFallbackActionsContextSolution;
    protected _context?: AssistantFallbackActionsContext;
    constructor(_version: Understand, payload: AssistantFallbackActionsResource, assistantSid: string);
    accountSid: string;
    assistantSid: string;
    url: string;
    data: any;
    private get _proxy();
    /**
     * Fetch a AssistantFallbackActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantFallbackActionsInstance
     */
    fetch(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantFallbackActionsInstance
     */
    update(callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
    /**
     * Update a AssistantFallbackActionsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssistantFallbackActionsInstance
     */
    update(params: AssistantFallbackActionsContextUpdateOptions, callback?: (error: Error | null, item?: AssistantFallbackActionsInstance) => any): Promise<AssistantFallbackActionsInstance>;
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
export interface AssistantFallbackActionsSolution {
    assistantSid: string;
}
export interface AssistantFallbackActionsListInstance {
    _version: Understand;
    _solution: AssistantFallbackActionsSolution;
    _uri: string;
    (): AssistantFallbackActionsContext;
    get(): AssistantFallbackActionsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AssistantFallbackActionsListInstance(version: Understand, assistantSid: string): AssistantFallbackActionsListInstance;
export {};
