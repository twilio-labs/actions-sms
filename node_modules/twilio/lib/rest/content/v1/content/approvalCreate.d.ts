/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * Content approval request body
 */
export declare class ContentApprovalRequest {
    /**
     * Name of the template.
     */
    "name": string;
    /**
     * A WhatsApp recognized template category.
     */
    "category": string;
}
/**
 * Options to pass to create a ApprovalCreateInstance
 */
export interface ApprovalCreateListInstanceCreateOptions {
    /**  */
    contentApprovalRequest: ContentApprovalRequest;
}
export interface ApprovalCreateSolution {
    contentSid: string;
}
export interface ApprovalCreateListInstance {
    _version: V1;
    _solution: ApprovalCreateSolution;
    _uri: string;
    /**
     * Create a ApprovalCreateInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ApprovalCreateInstance
     */
    create(params: ContentApprovalRequest, callback?: (error: Error | null, item?: ApprovalCreateInstance) => any): Promise<ApprovalCreateInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ApprovalCreateListInstance(version: V1, contentSid: string): ApprovalCreateListInstance;
interface ApprovalCreateResource {
    name: string;
    category: string;
    content_type: string;
    status: string;
    rejection_reason: string;
    allow_category_change: boolean;
}
export declare class ApprovalCreateInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ApprovalCreateResource, contentSid: string);
    name: string;
    category: string;
    contentType: string;
    status: string;
    rejectionReason: string;
    allowCategoryChange: boolean;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        name: string;
        category: string;
        contentType: string;
        status: string;
        rejectionReason: string;
        allowCategoryChange: boolean;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
