/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface AssessmentsContext {
    /**
     * Create a AssessmentsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssessmentsInstance
     */
    create(callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AssessmentsContextSolution {
}
export declare class AssessmentsContextImpl implements AssessmentsContext {
    protected _version: V1;
    protected _solution: AssessmentsContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    create(callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): AssessmentsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface AssessmentsResource {
    url: string;
}
export declare class AssessmentsInstance {
    protected _version: V1;
    protected _solution: AssessmentsContextSolution;
    protected _context?: AssessmentsContext;
    constructor(_version: V1, payload: AssessmentsResource);
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Create a AssessmentsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed AssessmentsInstance
     */
    create(callback?: (error: Error | null, item?: AssessmentsInstance) => any): Promise<AssessmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface AssessmentsSolution {
}
export interface AssessmentsListInstance {
    _version: V1;
    _solution: AssessmentsSolution;
    _uri: string;
    (): AssessmentsContext;
    get(): AssessmentsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function AssessmentsListInstance(version: V1): AssessmentsListInstance;
export {};
