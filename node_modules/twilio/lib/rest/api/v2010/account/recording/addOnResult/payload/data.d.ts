/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../../../V2010";
export interface DataContext {
    /**
     * Fetch a DataInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DataInstance
     */
    fetch(callback?: (error: Error | null, item?: DataInstance) => any): Promise<DataInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DataContextSolution {
    accountSid: string;
    referenceSid: string;
    addOnResultSid: string;
    payloadSid: string;
}
export declare class DataContextImpl implements DataContext {
    protected _version: V2010;
    protected _solution: DataContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, referenceSid: string, addOnResultSid: string, payloadSid: string);
    fetch(callback?: (error: Error | null, item?: DataInstance) => any): Promise<DataInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DataContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DataResource {
    redirect_to: string;
}
export declare class DataInstance {
    protected _version: V2010;
    protected _solution: DataContextSolution;
    protected _context?: DataContext;
    constructor(_version: V2010, payload: DataResource, accountSid: string, referenceSid: string, addOnResultSid: string, payloadSid: string);
    /**
     * The URL to redirect to to get the data returned by the AddOn that was previously stored.
     */
    redirectTo: string;
    private get _proxy();
    /**
     * Fetch a DataInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DataInstance
     */
    fetch(callback?: (error: Error | null, item?: DataInstance) => any): Promise<DataInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        redirectTo: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DataSolution {
    accountSid: string;
    referenceSid: string;
    addOnResultSid: string;
    payloadSid: string;
}
export interface DataListInstance {
    _version: V2010;
    _solution: DataSolution;
    _uri: string;
    (): DataContext;
    get(): DataContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function DataListInstance(version: V2010, accountSid: string, referenceSid: string, addOnResultSid: string, payloadSid: string): DataListInstance;
export {};
