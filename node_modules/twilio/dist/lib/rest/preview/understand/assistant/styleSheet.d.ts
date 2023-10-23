/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Understand from "../../Understand";
/**
 * Options to pass to update a StyleSheetInstance
 */
export interface StyleSheetContextUpdateOptions {
    /** The JSON Style sheet string */
    styleSheet?: any;
}
export interface StyleSheetContext {
    /**
     * Fetch a StyleSheetInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StyleSheetInstance
     */
    fetch(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StyleSheetInstance
     */
    update(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StyleSheetInstance
     */
    update(params: StyleSheetContextUpdateOptions, callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface StyleSheetContextSolution {
    assistantSid: string;
}
export declare class StyleSheetContextImpl implements StyleSheetContext {
    protected _version: Understand;
    protected _solution: StyleSheetContextSolution;
    protected _uri: string;
    constructor(_version: Understand, assistantSid: string);
    fetch(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    update(params?: StyleSheetContextUpdateOptions | ((error: Error | null, item?: StyleSheetInstance) => any), callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): StyleSheetContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface StyleSheetResource {
    account_sid: string;
    assistant_sid: string;
    url: string;
    data: any;
}
export declare class StyleSheetInstance {
    protected _version: Understand;
    protected _solution: StyleSheetContextSolution;
    protected _context?: StyleSheetContext;
    constructor(_version: Understand, payload: StyleSheetResource, assistantSid: string);
    /**
     * The unique ID of the Account that created this Assistant
     */
    accountSid: string;
    /**
     * The unique ID of the Assistant
     */
    assistantSid: string;
    url: string;
    /**
     * The JSON style sheet object
     */
    data: any;
    private get _proxy();
    /**
     * Fetch a StyleSheetInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StyleSheetInstance
     */
    fetch(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StyleSheetInstance
     */
    update(callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
    /**
     * Update a StyleSheetInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed StyleSheetInstance
     */
    update(params: StyleSheetContextUpdateOptions, callback?: (error: Error | null, item?: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
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
export interface StyleSheetSolution {
    assistantSid: string;
}
export interface StyleSheetListInstance {
    _version: Understand;
    _solution: StyleSheetSolution;
    _uri: string;
    (): StyleSheetContext;
    get(): StyleSheetContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function StyleSheetListInstance(version: Understand, assistantSid: string): StyleSheetListInstance;
export {};
