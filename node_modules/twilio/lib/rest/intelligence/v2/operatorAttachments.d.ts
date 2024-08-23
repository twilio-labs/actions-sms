/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
export interface OperatorAttachmentsContext {
    /**
     * Fetch a OperatorAttachmentsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorAttachmentsInstance
     */
    fetch(callback?: (error: Error | null, item?: OperatorAttachmentsInstance) => any): Promise<OperatorAttachmentsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OperatorAttachmentsContextSolution {
    serviceSid: string;
}
export declare class OperatorAttachmentsContextImpl implements OperatorAttachmentsContext {
    protected _version: V2;
    protected _solution: OperatorAttachmentsContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string);
    fetch(callback?: (error: Error | null, item?: OperatorAttachmentsInstance) => any): Promise<OperatorAttachmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OperatorAttachmentsContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OperatorAttachmentsResource {
    service_sid: string;
    operator_sids: Array<string>;
    url: string;
}
export declare class OperatorAttachmentsInstance {
    protected _version: V2;
    protected _solution: OperatorAttachmentsContextSolution;
    protected _context?: OperatorAttachmentsContext;
    constructor(_version: V2, payload: OperatorAttachmentsResource, serviceSid?: string);
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
    /**
     * List of Operator SIDs attached to the service. Includes both Custom and Pre-built Operators.
     */
    operatorSids: Array<string>;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a OperatorAttachmentsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorAttachmentsInstance
     */
    fetch(callback?: (error: Error | null, item?: OperatorAttachmentsInstance) => any): Promise<OperatorAttachmentsInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        serviceSid: string;
        operatorSids: string[];
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OperatorAttachmentsSolution {
}
export interface OperatorAttachmentsListInstance {
    _version: V2;
    _solution: OperatorAttachmentsSolution;
    _uri: string;
    (serviceSid: string): OperatorAttachmentsContext;
    get(serviceSid: string): OperatorAttachmentsContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function OperatorAttachmentsListInstance(version: V2): OperatorAttachmentsListInstance;
export {};
