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
}
export declare class PortingPortInPhoneNumberInstance {
    protected _version: V1;
    protected _solution: PortingPortInPhoneNumberContextSolution;
    protected _context?: PortingPortInPhoneNumberContext;
    constructor(_version: V1, payload: PortingPortInPhoneNumberResource, portInRequestSid?: string, phoneNumberSid?: string);
    /**
     * The SID of the Port In request. This is a unique identifier of the port in request.
     */
    portInRequestSid: string;
    /**
     * The SID of the Port In request phone number. This is a unique identifier of the phone number.
     */
    phoneNumberSid: string;
    url: string;
    /**
     * The SID of the account that the phone number belongs to.
     */
    accountSid: string;
    /**
     * The type of the phone number.
     */
    phoneNumberType: string;
    /**
     * The date when the phone number was created.
     */
    dateCreated: Date;
    /**
     * The country of the phone number.
     */
    country: string;
    /**
     * The phone number is missing required fields.
     */
    missingRequiredFields: boolean;
    /**
     * The timestamp when the status was last updated.
     */
    lastUpdated: Date;
    /**
     * The phone number.
     */
    phoneNumber: string;
    /**
     * The phone number is portable.
     */
    portable: boolean;
    /**
     * The reason why the phone number is not portable.
     */
    notPortabilityReason: string;
    /**
     * The code of the reason why the phone number is not portable.
     */
    notPortabilityReasonCode: number;
    /**
     * The status of the phone number in the port in request.
     */
    portInPhoneNumberStatus: string;
    /**
     * The pin required for the losing carrier to port out the phone number.
     */
    portOutPin: number;
    /**
     * The rejection reason returned by the vendor.
     */
    rejectionReason: string;
    /**
     * The rejection reason code returned by the vendor.
     */
    rejectionReasonCode: number;
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
