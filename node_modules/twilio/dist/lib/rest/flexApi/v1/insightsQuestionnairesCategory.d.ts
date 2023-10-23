/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to remove a InsightsQuestionnairesCategoryInstance
 */
export interface InsightsQuestionnairesCategoryContextRemoveOptions {
    /** The Token HTTP request header */
    token?: string;
}
/**
 * Options to pass to update a InsightsQuestionnairesCategoryInstance
 */
export interface InsightsQuestionnairesCategoryContextUpdateOptions {
    /** The name of this category. */
    name: string;
    /** The Token HTTP request header */
    token?: string;
}
/**
 * Options to pass to create a InsightsQuestionnairesCategoryInstance
 */
export interface InsightsQuestionnairesCategoryListInstanceCreateOptions {
    /** The name of this category. */
    name: string;
    /** The Token HTTP request header */
    token?: string;
}
export interface InsightsQuestionnairesCategoryContext {
    /**
     * Remove a InsightsQuestionnairesCategoryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a InsightsQuestionnairesCategoryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
     */
    remove(params: InsightsQuestionnairesCategoryContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Update a InsightsQuestionnairesCategoryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
     */
    update(params: InsightsQuestionnairesCategoryContextUpdateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesCategoryInstance) => any): Promise<InsightsQuestionnairesCategoryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InsightsQuestionnairesCategoryContextSolution {
    categoryId: string;
}
export declare class InsightsQuestionnairesCategoryContextImpl implements InsightsQuestionnairesCategoryContext {
    protected _version: V1;
    protected _solution: InsightsQuestionnairesCategoryContextSolution;
    protected _uri: string;
    constructor(_version: V1, categoryId: string);
    remove(params?: InsightsQuestionnairesCategoryContextRemoveOptions | ((error: Error | null, item?: boolean) => any), callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    update(params: InsightsQuestionnairesCategoryContextUpdateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesCategoryInstance) => any): Promise<InsightsQuestionnairesCategoryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InsightsQuestionnairesCategoryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InsightsQuestionnairesCategoryResource {
    account_sid: string;
    category_id: string;
    name: string;
    url: string;
}
export declare class InsightsQuestionnairesCategoryInstance {
    protected _version: V1;
    protected _solution: InsightsQuestionnairesCategoryContextSolution;
    protected _context?: InsightsQuestionnairesCategoryContext;
    constructor(_version: V1, payload: InsightsQuestionnairesCategoryResource, categoryId?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
     */
    accountSid: string;
    /**
     * The unique ID for the category
     */
    categoryId: string;
    /**
     * The name of this category.
     */
    name: string;
    url: string;
    private get _proxy();
    /**
     * Remove a InsightsQuestionnairesCategoryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a InsightsQuestionnairesCategoryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
     */
    remove(params: InsightsQuestionnairesCategoryContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Update a InsightsQuestionnairesCategoryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
     */
    update(params: InsightsQuestionnairesCategoryContextUpdateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesCategoryInstance) => any): Promise<InsightsQuestionnairesCategoryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        categoryId: string;
        name: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InsightsQuestionnairesCategorySolution {
}
export interface InsightsQuestionnairesCategoryListInstance {
    _version: V1;
    _solution: InsightsQuestionnairesCategorySolution;
    _uri: string;
    (categoryId: string): InsightsQuestionnairesCategoryContext;
    get(categoryId: string): InsightsQuestionnairesCategoryContext;
    /**
     * Create a InsightsQuestionnairesCategoryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesCategoryInstance
     */
    create(params: InsightsQuestionnairesCategoryListInstanceCreateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesCategoryInstance) => any): Promise<InsightsQuestionnairesCategoryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function InsightsQuestionnairesCategoryListInstance(version: V1): InsightsQuestionnairesCategoryListInstance;
export {};
