/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a PortingPortInInstance
 */
export interface PortingPortInListInstanceCreateOptions {
    /**  */
    body?: object;
}
export interface PortingPortInContext {
    /**
     * Remove a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInInstance
     */
    fetch(callback?: (error: Error | null, item?: PortingPortInInstance) => any): Promise<PortingPortInInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PortingPortInContextSolution {
    portInRequestSid: string;
}
export declare class PortingPortInContextImpl implements PortingPortInContext {
    protected _version: V1;
    protected _solution: PortingPortInContextSolution;
    protected _uri: string;
    constructor(_version: V1, portInRequestSid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: PortingPortInInstance) => any): Promise<PortingPortInInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PortingPortInContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PortingPortInResource {
    port_in_request_sid: string;
    url: string;
    account_sid: string;
    notification_emails: Array<string>;
    target_port_in_date: Date;
    target_port_in_time_range_start: string;
    target_port_in_time_range_end: string;
    port_in_request_status: string;
    losing_carrier_information: any;
    phone_numbers: Array<any>;
    documents: Array<string>;
    date_created: Date;
}
export declare class PortingPortInInstance {
    protected _version: V1;
    protected _solution: PortingPortInContextSolution;
    protected _context?: PortingPortInContext;
    constructor(_version: V1, payload: PortingPortInResource, portInRequestSid?: string);
    /**
     * The SID of the Port In request. This is a unique identifier of the port in request.
     */
    portInRequestSid: string;
    /**
     * The URL of this Port In request
     */
    url: string;
    /**
     * The Account SID that the numbers will be added to after they are ported into Twilio.
     */
    accountSid: string;
    /**
     * List of emails for getting notifications about the LOA signing process. Allowed Max 10 emails.
     */
    notificationEmails: Array<string>;
    /**
     * Minimum number of days in the future (at least 2 days) needs to be established with the Ops team for validation.
     */
    targetPortInDate: Date;
    /**
     * Minimum hour in the future needs to be established with the Ops team for validation.
     */
    targetPortInTimeRangeStart: string;
    /**
     * Maximum hour in the future needs to be established with the Ops team for validation.
     */
    targetPortInTimeRangeEnd: string;
    /**
     * The status of the port in request. The possible values are: In progress, Completed, Expired, In review, Waiting for Signature, Action Required, and Canceled.
     */
    portInRequestStatus: string;
    /**
     * The information for the losing carrier.
     */
    losingCarrierInformation: any;
    /**
     * The list of phone numbers to Port in. Phone numbers are in E.164 format (e.g. +16175551212).
     */
    phoneNumbers: Array<any>;
    /**
     * The list of documents SID referencing a utility bills
     */
    documents: Array<string>;
    dateCreated: Date;
    private get _proxy();
    /**
     * Remove a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInInstance
     */
    fetch(callback?: (error: Error | null, item?: PortingPortInInstance) => any): Promise<PortingPortInInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        portInRequestSid: string;
        url: string;
        accountSid: string;
        notificationEmails: string[];
        targetPortInDate: Date;
        targetPortInTimeRangeStart: string;
        targetPortInTimeRangeEnd: string;
        portInRequestStatus: string;
        losingCarrierInformation: any;
        phoneNumbers: any[];
        documents: string[];
        dateCreated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PortingPortInSolution {
}
export interface PortingPortInListInstance {
    _version: V1;
    _solution: PortingPortInSolution;
    _uri: string;
    (portInRequestSid: string): PortingPortInContext;
    get(portInRequestSid: string): PortingPortInContext;
    /**
     * Create a PortingPortInInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInInstance
     */
    create(callback?: (error: Error | null, item?: PortingPortInInstance) => any): Promise<PortingPortInInstance>;
    /**
     * Create a PortingPortInInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInInstance
     */
    create(params: object, callback?: (error: Error | null, item?: PortingPortInInstance) => any): Promise<PortingPortInInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PortingPortInListInstance(version: V1): PortingPortInListInstance;
export {};
