/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
export type BundleCloneStatus = "draft" | "pending-review" | "in-review" | "twilio-rejected" | "twilio-approved" | "provisionally-approved";
/**
 * Options to pass to create a BundleCloneInstance
 */
export interface BundleCloneContextCreateOptions {
    /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) where the bundle needs to be cloned. */
    targetAccountSid: string;
    /** If set to true, the cloned bundle will be in the DRAFT state, else it will be twilio-approved */
    moveToDraft?: boolean;
    /** The string that you assigned to describe the cloned bundle. */
    friendlyName?: string;
}
export interface BundleCloneContext {
    /**
     * Create a BundleCloneInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BundleCloneInstance
     */
    create(params: BundleCloneContextCreateOptions, callback?: (error: Error | null, item?: BundleCloneInstance) => any): Promise<BundleCloneInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BundleCloneContextSolution {
    bundleSid: string;
}
export declare class BundleCloneContextImpl implements BundleCloneContext {
    protected _version: V2;
    protected _solution: BundleCloneContextSolution;
    protected _uri: string;
    constructor(_version: V2, bundleSid: string);
    create(params: BundleCloneContextCreateOptions, callback?: (error: Error | null, item?: BundleCloneInstance) => any): Promise<BundleCloneInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): BundleCloneContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface BundleCloneResource {
    bundle_sid: string;
    account_sid: string;
    regulation_sid: string;
    friendly_name: string;
    status: BundleCloneStatus;
    valid_until: Date;
    email: string;
    status_callback: string;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class BundleCloneInstance {
    protected _version: V2;
    protected _solution: BundleCloneContextSolution;
    protected _context?: BundleCloneContext;
    constructor(_version: V2, payload: BundleCloneResource, bundleSid?: string);
    /**
     * The unique string that we created to identify the Bundle resource.
     */
    bundleSid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle resource.
     */
    accountSid: string;
    /**
     * The unique string of a regulation that is associated to the Bundle resource.
     */
    regulationSid: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    status: BundleCloneStatus;
    /**
     * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format when the resource will be valid until.
     */
    validUntil: Date;
    /**
     * The email address that will receive updates when the Bundle resource changes status.
     */
    email: string;
    /**
     * The URL we call to inform your application of status changes.
     */
    statusCallback: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * The URL of this resource.
     */
    url: string;
    private get _proxy();
    /**
     * Create a BundleCloneInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BundleCloneInstance
     */
    create(params: BundleCloneContextCreateOptions, callback?: (error: Error | null, item?: BundleCloneInstance) => any): Promise<BundleCloneInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        bundleSid: string;
        accountSid: string;
        regulationSid: string;
        friendlyName: string;
        status: BundleCloneStatus;
        validUntil: Date;
        email: string;
        statusCallback: string;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface BundleCloneSolution {
}
export interface BundleCloneListInstance {
    _version: V2;
    _solution: BundleCloneSolution;
    _uri: string;
    (bundleSid: string): BundleCloneContext;
    get(bundleSid: string): BundleCloneContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function BundleCloneListInstance(version: V2): BundleCloneListInstance;
export {};
