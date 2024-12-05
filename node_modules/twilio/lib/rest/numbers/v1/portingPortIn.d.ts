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
     * Account Sid or subaccount where the phone number(s) will be Ported
     */
    accountSid: string;
    /**
     * Additional emails to send a copy of the signed LOA to.
     */
    notificationEmails: Array<string>;
    /**
     * Target date to port the number. We cannot guarantee that this date will be honored by the other carriers, please work with Ops to get a confirmation of the firm order commitment (FOC) date. Expected format is ISO Local Date, example: ‘2011-12-03`. This date must be at least 7 days in the future for US ports and 10 days in the future for Japanese ports. (This value is only available for custom porting customers.)
     */
    targetPortInDate: Date;
    /**
     * The earliest time that the port should occur on the target port in date. Expected format is ISO Offset Time, example: ‘10:15:00-08:00\'. (This value is only available for custom porting customers.)
     */
    targetPortInTimeRangeStart: string;
    /**
     * The latest time that the port should occur on the target port in date. Expected format is ISO Offset Time, example: ‘10:15:00-08:00\'.  (This value is only available for custom porting customers.)
     */
    targetPortInTimeRangeEnd: string;
    /**
     * The status of the port in request. The possible values are: In progress, Completed, Expired, In review, Waiting for Signature, Action Required, and Canceled.
     */
    portInRequestStatus: string;
    /**
     * Details regarding the customer’s information with the losing carrier. These values will be used to generate the letter of authorization and should match the losing carrier’s data as closely as possible to ensure the port is accepted.
     */
    losingCarrierInformation: any;
    phoneNumbers: Array<any>;
    /**
     * List of document SIDs for all phone numbers included in the port in request. At least one document SID referring to a document of the type Utility Bill is required.
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
