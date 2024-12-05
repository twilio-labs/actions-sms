/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface PortingPortInPhoneNumberContext {
    /**
     * Remove a PortingPortInPhoneNumberInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PortingPortInPhoneNumberInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInPhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PortingPortInPhoneNumberInstance) => any): Promise<PortingPortInPhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PortingPortInPhoneNumberContextSolution {
    portInRequestSid: string;
    phoneNumberSid: string;
}
export declare class PortingPortInPhoneNumberContextImpl implements PortingPortInPhoneNumberContext {
    protected _version: V1;
    protected _solution: PortingPortInPhoneNumberContextSolution;
    protected _uri: string;
    constructor(_version: V1, portInRequestSid: string, phoneNumberSid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: PortingPortInPhoneNumberInstance) => any): Promise<PortingPortInPhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PortingPortInPhoneNumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PortingPortInPhoneNumberResource {
    port_in_request_sid: string;
    phone_number_sid: string;
    url: string;
    account_sid: string;
    phone_number_type: string;
    date_created: Date;
    country: string;
    missing_required_fields: boolean;
    last_updated: Date;
    phone_number: string;
    portable: boolean;
    not_portability_reason: string;
    not_portability_reason_code: number;
    port_in_phone_number_status: string;
    port_out_pin: number;
    rejection_reason: string;
    rejection_reason_code: number;
    port_date: Date;
}
export declare class PortingPortInPhoneNumberInstance {
    protected _version: V1;
    protected _solution: PortingPortInPhoneNumberContextSolution;
    protected _context?: PortingPortInPhoneNumberContext;
    constructor(_version: V1, payload: PortingPortInPhoneNumberResource, portInRequestSid?: string, phoneNumberSid?: string);
    /**
     * The unique identifier for the port in request that this phone number is associated with.
     */
    portInRequestSid: string;
    /**
     * The unique identifier for this phone number associated with this port in request.
     */
    phoneNumberSid: string;
    /**
     * URL reference for this resource.
     */
    url: string;
    /**
     * Account Sid or subaccount where the phone number(s) will be Ported.
     */
    accountSid: string;
    /**
     * The number type of the phone number. This can be: toll-free, local, mobile or unknown. This field may be null if the number is not portable or if the portability for a number has not yet been evaluated.
     */
    phoneNumberType: string;
    /**
     * The timestamp for when this port in phone number was created.
     */
    dateCreated: Date;
    /**
     * The ISO country code that this number is associated with. This field may be null if the number is not portable or if the portability for a number has not yet been evaluated.
     */
    country: string;
    /**
     * Indicates if the phone number is missing required fields such as a PIN or account number. This field may be null if the number is not portable or if the portability for a number has not yet been evaluated.
     */
    missingRequiredFields: boolean;
    /**
     * Timestamp indicating when the Port In Phone Number resource was last modified.
     */
    lastUpdated: Date;
    /**
     * Phone number to be ported. This will be in the E164 Format.
     */
    phoneNumber: string;
    /**
     * If the number is portable by Twilio or not. This field may be null if the number portability has not yet been evaluated. If a number is not portable reference the `not_portability_reason_code` and `not_portability_reason` fields for more details
     */
    portable: boolean;
    /**
     * The not portability reason code description. This field may be null if the number is portable or if the portability for a number has not yet been evaluated.
     */
    notPortabilityReason: string;
    /**
     * The not portability reason code. This field may be null if the number is portable or if the portability for a number has not yet been evaluated.
     */
    notPortabilityReasonCode: number;
    /**
     * The status of the port in phone number.
     */
    portInPhoneNumberStatus: string;
    /**
     * The pin required by the losing carrier to do the port out.
     */
    portOutPin: number;
    /**
     * The description of the rejection reason provided by the losing carrier. This field may be null if the number has not been rejected by the losing carrier.
     */
    rejectionReason: string;
    /**
     * The code for the rejection reason provided by the losing carrier. This field may be null if the number has not been rejected by the losing carrier.
     */
    rejectionReasonCode: number;
    /**
     * The timestamp the phone number will be ported. This will only be set once a port date has been confirmed. Not all carriers can guarantee a specific time on the port date. Twilio will try its best to get the port completed by this time on the port date. Please subscribe to webhooks for confirmation on when a port has actually been completed.
     */
    portDate: Date;
    private get _proxy();
    /**
     * Remove a PortingPortInPhoneNumberInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a PortingPortInPhoneNumberInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortInPhoneNumberInstance
     */
    fetch(callback?: (error: Error | null, item?: PortingPortInPhoneNumberInstance) => any): Promise<PortingPortInPhoneNumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        portInRequestSid: string;
        phoneNumberSid: string;
        url: string;
        accountSid: string;
        phoneNumberType: string;
        dateCreated: Date;
        country: string;
        missingRequiredFields: boolean;
        lastUpdated: Date;
        phoneNumber: string;
        portable: boolean;
        notPortabilityReason: string;
        notPortabilityReasonCode: number;
        portInPhoneNumberStatus: string;
        portOutPin: number;
        rejectionReason: string;
        rejectionReasonCode: number;
        portDate: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PortingPortInPhoneNumberSolution {
}
export interface PortingPortInPhoneNumberListInstance {
    _version: V1;
    _solution: PortingPortInPhoneNumberSolution;
    _uri: string;
    (portInRequestSid: string, phoneNumberSid: string): PortingPortInPhoneNumberContext;
    get(portInRequestSid: string, phoneNumberSid: string): PortingPortInPhoneNumberContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PortingPortInPhoneNumberListInstance(version: V1): PortingPortInPhoneNumberListInstance;
export {};
