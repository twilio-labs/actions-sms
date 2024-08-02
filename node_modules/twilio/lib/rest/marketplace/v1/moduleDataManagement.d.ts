/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a ModuleDataManagementInstance
 */
export interface ModuleDataManagementContextUpdateOptions {
    /**  */
    moduleInfo?: string;
    /**  */
    description?: string;
    /**  */
    documentation?: string;
    /**  */
    policies?: string;
    /**  */
    support?: string;
}
export interface ModuleDataManagementContext {
    /**
     * Fetch a ModuleDataManagementInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModuleDataManagementInstance
     */
    fetch(callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Update a ModuleDataManagementInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModuleDataManagementInstance
     */
    update(callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Update a ModuleDataManagementInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModuleDataManagementInstance
     */
    update(params: ModuleDataManagementContextUpdateOptions, callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ModuleDataManagementContextSolution {
    sid: string;
}
export declare class ModuleDataManagementContextImpl implements ModuleDataManagementContext {
    protected _version: V1;
    protected _solution: ModuleDataManagementContextSolution;
    protected _uri: string;
    constructor(_version: V1, sid: string);
    fetch(callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    update(params?: ModuleDataManagementContextUpdateOptions | ((error: Error | null, item?: ModuleDataManagementInstance) => any), callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ModuleDataManagementContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ModuleDataManagementResource {
    url: string;
    sid: string;
    description: any;
    support: any;
    policies: any;
    module_info: any;
    documentation: any;
}
export declare class ModuleDataManagementInstance {
    protected _version: V1;
    protected _solution: ModuleDataManagementContextSolution;
    protected _context?: ModuleDataManagementContext;
    constructor(_version: V1, payload: ModuleDataManagementResource, sid?: string);
    url: string;
    sid: string;
    description: any;
    support: any;
    policies: any;
    moduleInfo: any;
    documentation: any;
    private get _proxy();
    /**
     * Fetch a ModuleDataManagementInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModuleDataManagementInstance
     */
    fetch(callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Update a ModuleDataManagementInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModuleDataManagementInstance
     */
    update(callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Update a ModuleDataManagementInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ModuleDataManagementInstance
     */
    update(params: ModuleDataManagementContextUpdateOptions, callback?: (error: Error | null, item?: ModuleDataManagementInstance) => any): Promise<ModuleDataManagementInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        url: string;
        sid: string;
        description: any;
        support: any;
        policies: any;
        moduleInfo: any;
        documentation: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ModuleDataManagementSolution {
}
export interface ModuleDataManagementListInstance {
    _version: V1;
    _solution: ModuleDataManagementSolution;
    _uri: string;
    (sid: string): ModuleDataManagementContext;
    get(sid: string): ModuleDataManagementContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ModuleDataManagementListInstance(version: V1): ModuleDataManagementListInstance;
export {};
