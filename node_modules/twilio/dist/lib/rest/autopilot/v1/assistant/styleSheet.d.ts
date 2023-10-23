/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Options to pass to update a StyleSheetInstance
 */
export interface StyleSheetContextUpdateOptions {
    /** The JSON string that describes the style sheet object. */
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
    protected _version: V1;
    protected _solution: StyleSheetContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string);
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
    protected _version: V1;
    protected _solution: StyleSheetContextSolution;
    protected _context?: StyleSheetContext;
    constructor(_version: V1, payload: StyleSheetResource, assistantSid: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the StyleSheet resource.
     */
    accountSid: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource.
     */
    assistantSid: string;
    /**
     * The absolute URL of the StyleSheet resource.
     */
    url: string;
    /**
     * The JSON string that describes the style sheet object.
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
    _version: V1;
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
export declare function StyleSheetListInstance(version: V1, assistantSid: string): StyleSheetListInstance;
export {};
