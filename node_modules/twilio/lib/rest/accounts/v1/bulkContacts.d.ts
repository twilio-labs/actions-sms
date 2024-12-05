/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a BulkContactsInstance
 */
export interface BulkContactsListInstanceCreateOptions {
    /** A list of objects where each object represents a contact\\\'s details. Each object includes the following fields: `contact_id`, which must be a string representing phone number in [E.164 format](https://www.twilio.com/docs/glossary/what-e164); `correlation_id`, a unique 32-character UUID that maps the response to the original request; `country_iso_code`, a string representing the country using the ISO format (e.g., US for the United States); and `zip_code`, a string representing the postal code. */
    items: Array<any>;
}
export interface BulkContactsSolution {
}
export interface BulkContactsListInstance {
    _version: V1;
    _solution: BulkContactsSolution;
    _uri: string;
    /**
     * Create a BulkContactsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed BulkContactsInstance
     */
    create(params: BulkContactsListInstanceCreateOptions, callback?: (error: Error | null, item?: BulkContactsInstance) => any): Promise<BulkContactsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function BulkContactsListInstance(version: V1): BulkContactsListInstance;
interface BulkContactsResource {
    items: any;
}
export declare class BulkContactsInstance {
    protected _version: V1;
    constructor(_version: V1, payload: BulkContactsResource);
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
