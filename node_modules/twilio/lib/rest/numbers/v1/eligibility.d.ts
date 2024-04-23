/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a EligibilityInstance
 */
export interface EligibilityListInstanceCreateOptions {
    /**  */
    body?: object;
}
export interface EligibilitySolution {
}
export interface EligibilityListInstance {
    _version: V1;
    _solution: EligibilitySolution;
    _uri: string;
    /**
     * Create a EligibilityInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EligibilityInstance
     */
    create(callback?: (error: Error | null, item?: EligibilityInstance) => any): Promise<EligibilityInstance>;
    /**
     * Create a EligibilityInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed EligibilityInstance
     */
    create(params: object, callback?: (error: Error | null, item?: EligibilityInstance) => any): Promise<EligibilityInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function EligibilityListInstance(version: V1): EligibilityListInstance;
interface EligibilityResource {
    results: Array<any>;
}
export declare class EligibilityInstance {
    protected _version: V1;
    constructor(_version: V1, payload: EligibilityResource);
    /**
     * The result set that contains the eligibility check response for the requested number, each result has at least the following attributes:  phone_number: The requested phone number ,hosting_account_sid: The account sid where the phone number will be hosted, date_last_checked: Datetime (ISO 8601) when the PN was last checked for eligibility, country: Phone number’s country, eligibility_status: Indicates the eligibility status of the PN (Eligible/Ineligible), eligibility_sub_status: Indicates the sub status of the eligibility , ineligibility_reason: Reason for number\'s ineligibility (if applicable), next_step: Suggested next step in the hosting process based on the eligibility status.
     */
    results: Array<any>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        results: any[];
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
