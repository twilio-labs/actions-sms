/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export type PortingPortabilityNumberType = "LOCAL" | "UNKNOWN" | "MOBILE" | "TOLL-FREE";
/**
 * Options to pass to fetch a PortingPortabilityInstance
 */
export interface PortingPortabilityContextFetchOptions {
    /** Account Sid to which the number will be ported. This can be used to determine if a sub account already has the number in its inventory or a different sub account. If this is not provided, the authenticated account will be assumed to be the target account. */
    targetAccountSid?: string;
    /** Address Sid of customer to which the number will be ported. */
    addressSid?: string;
}
export interface PortingPortabilityContext {
    /**
     * Fetch a PortingPortabilityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortabilityInstance
     */
    fetch(callback?: (error: Error | null, item?: PortingPortabilityInstance) => any): Promise<PortingPortabilityInstance>;
    /**
     * Fetch a PortingPortabilityInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortabilityInstance
     */
    fetch(params: PortingPortabilityContextFetchOptions, callback?: (error: Error | null, item?: PortingPortabilityInstance) => any): Promise<PortingPortabilityInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PortingPortabilityContextSolution {
    phoneNumber: string;
}
export declare class PortingPortabilityContextImpl implements PortingPortabilityContext {
    protected _version: V1;
    protected _solution: PortingPortabilityContextSolution;
    protected _uri: string;
    constructor(_version: V1, phoneNumber: string);
    fetch(params?: PortingPortabilityContextFetchOptions | ((error: Error | null, item?: PortingPortabilityInstance) => any), callback?: (error: Error | null, item?: PortingPortabilityInstance) => any): Promise<PortingPortabilityInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PortingPortabilityContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface PortingPortabilityResource {
    phone_number: string;
    account_sid: string;
    portable: boolean;
    pin_and_account_number_required: boolean;
    not_portable_reason: string;
    not_portable_reason_code: number;
    number_type: PortingPortabilityNumberType;
    country: string;
    url: string;
}
export declare class PortingPortabilityInstance {
    protected _version: V1;
    protected _solution: PortingPortabilityContextSolution;
    protected _context?: PortingPortabilityContext;
    constructor(_version: V1, payload: PortingPortabilityResource, phoneNumber?: string);
    /**
     * The phone number which portability is to be checked. Phone numbers are in E.164 format (e.g. +16175551212).
     */
    phoneNumber: string;
    /**
     * Account Sid that the phone number belongs to in Twilio. This is only returned for phone numbers that already exist in Twilio’s inventory and belong to your account or sub account.
     */
    accountSid: string;
    /**
     * Boolean flag indicates if the phone number can be ported into Twilio through the Porting API or not.
     */
    portable: boolean;
    /**
     * Indicates if the port in process will require a personal identification number (PIN) and an account number for this phone number. If this is true you will be required to submit both a PIN and account number from the losing carrier for this number when opening a port in request. These fields will be required in order to complete the port in process to Twilio.
     */
    pinAndAccountNumberRequired: boolean;
    /**
     * Reason why the phone number cannot be ported into Twilio, `null` otherwise.
     */
    notPortableReason: string;
    /**
     * The Portability Reason Code for the phone number if it cannot be ported into Twilio, `null` otherwise.
     */
    notPortableReasonCode: number;
    numberType: PortingPortabilityNumberType;
    /**
     * Country the phone number belongs to.
     */
    country: string;
    /**
     * This is the url of the request that you\'re trying to reach out to locate the resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a PortingPortabilityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortabilityInstance
     */
    fetch(callback?: (error: Error | null, item?: PortingPortabilityInstance) => any): Promise<PortingPortabilityInstance>;
    /**
     * Fetch a PortingPortabilityInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingPortabilityInstance
     */
    fetch(params: PortingPortabilityContextFetchOptions, callback?: (error: Error | null, item?: PortingPortabilityInstance) => any): Promise<PortingPortabilityInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        phoneNumber: string;
        accountSid: string;
        portable: boolean;
        pinAndAccountNumberRequired: boolean;
        notPortableReason: string;
        notPortableReasonCode: number;
        numberType: PortingPortabilityNumberType;
        country: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PortingPortabilitySolution {
}
export interface PortingPortabilityListInstance {
    _version: V1;
    _solution: PortingPortabilitySolution;
    _uri: string;
    (phoneNumber: string): PortingPortabilityContext;
    get(phoneNumber: string): PortingPortabilityContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PortingPortabilityListInstance(version: V1): PortingPortabilityListInstance;
export {};
