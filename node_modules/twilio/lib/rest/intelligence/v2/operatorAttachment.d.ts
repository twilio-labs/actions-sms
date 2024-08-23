/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
export interface OperatorAttachmentContext {
    /**
     * Create a OperatorAttachmentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorAttachmentInstance
     */
    create(callback?: (error: Error | null, item?: OperatorAttachmentInstance) => any): Promise<OperatorAttachmentInstance>;
    /**
     * Remove a OperatorAttachmentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface OperatorAttachmentContextSolution {
    serviceSid: string;
    operatorSid: string;
}
export declare class OperatorAttachmentContextImpl implements OperatorAttachmentContext {
    protected _version: V2;
    protected _solution: OperatorAttachmentContextSolution;
    protected _uri: string;
    constructor(_version: V2, serviceSid: string, operatorSid: string);
    create(callback?: (error: Error | null, item?: OperatorAttachmentInstance) => any): Promise<OperatorAttachmentInstance>;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): OperatorAttachmentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface OperatorAttachmentResource {
    service_sid: string;
    operator_sid: string;
    url: string;
}
export declare class OperatorAttachmentInstance {
    protected _version: V2;
    protected _solution: OperatorAttachmentContextSolution;
    protected _context?: OperatorAttachmentContext;
    constructor(_version: V2, payload: OperatorAttachmentResource, serviceSid?: string, operatorSid?: string);
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
    /**
     * The unique SID identifier of the Operator.
     */
    operatorSid: string;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Create a OperatorAttachmentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed OperatorAttachmentInstance
     */
    create(callback?: (error: Error | null, item?: OperatorAttachmentInstance) => any): Promise<OperatorAttachmentInstance>;
    /**
     * Remove a OperatorAttachmentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        serviceSid: string;
        operatorSid: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface OperatorAttachmentSolution {
}
export interface OperatorAttachmentListInstance {
    _version: V2;
    _solution: OperatorAttachmentSolution;
    _uri: string;
    (serviceSid: string, operatorSid: string): OperatorAttachmentContext;
    get(serviceSid: string, operatorSid: string): OperatorAttachmentContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function OperatorAttachmentListInstance(version: V2): OperatorAttachmentListInstance;
export {};
