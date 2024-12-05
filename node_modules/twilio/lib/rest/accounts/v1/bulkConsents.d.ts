/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a BulkConsentsInstance
 */
export interface BulkConsentsListInstanceCreateOptions {
    /** This is a list of objects that describes a contact\\\'s opt-in status. Each object contains the following fields: `contact_id`, which must be a string representing phone number in [E.164 format](https://www.twilio.com/docs/glossary/what-e164); `correlation_id`, a unique 32-character UUID used to uniquely map the request item with the response item; `sender_id`, which can be either a valid messaging service SID or a from phone number; `status`, a string representing the consent status. Can be one of [`opt-in`, `opt-out`]; and `source`, a string indicating the medium through which the consent was collected. Can be one of [`website`, `offline`, `opt-in-message`, `opt-out-message`, `others`]. */
    items: Array<any>;
}
export interface BulkConsentsSolution {
}
export interface BulkConsentsListInstance {
    _version: V1;
    _solution: BulkConsentsSolution;
    _uri: string;
    /**
     * Create a BulkConsentsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BulkConsentsInstance
     */
    create(params: BulkConsentsListInstanceCreateOptions, callback?: (error: Error | null, item?: BulkConsentsInstance) => any): Promise<BulkConsentsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function BulkConsentsListInstance(version: V1): BulkConsentsListInstance;
interface BulkConsentsResource {
    items: any;
}
export declare class BulkConsentsInstance {
    protected _version: V1;
    constructor(_version: V1, payload: BulkConsentsResource);
    /**
     * A list of objects where each object represents the result of processing a `correlation_id`. Each object contains the following fields: `correlation_id`, a unique 32-character UUID that maps the response to the original request; `error_code`, an integer where 0 indicates success and any non-zero value represents an error; and `error_messages`, an array of strings describing specific validation errors encountered. If the request is successful, the error_messages array will be empty.
     */
    items: any;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        items: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
