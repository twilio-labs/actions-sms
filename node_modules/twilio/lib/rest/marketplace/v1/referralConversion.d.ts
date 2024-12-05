/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export declare class CreateReferralConversionRequest {
    "referralAccountSid"?: string;
}
/**
 * Options to pass to create a ReferralConversionInstance
 */
export interface ReferralConversionListInstanceCreateOptions {
    /**  */
    createReferralConversionRequest: CreateReferralConversionRequest;
}
export interface ReferralConversionSolution {
}
export interface ReferralConversionListInstance {
    _version: V1;
    _solution: ReferralConversionSolution;
    _uri: string;
    /**
     * Create a ReferralConversionInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ReferralConversionInstance
     */
    create(params: CreateReferralConversionRequest, callback?: (error: Error | null, item?: ReferralConversionInstance) => any): Promise<ReferralConversionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ReferralConversionListInstance(version: V1): ReferralConversionListInstance;
interface ReferralConversionResource {
    converted_account_sid: string;
}
export declare class ReferralConversionInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ReferralConversionResource);
    convertedAccountSid: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        convertedAccountSid: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
