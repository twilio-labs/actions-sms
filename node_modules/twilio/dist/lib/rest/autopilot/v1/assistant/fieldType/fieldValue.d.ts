/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
/**
 * Options to pass to create a FieldValueInstance
 */
export interface FieldValueListInstanceCreateOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
    language: string;
    /** The Field Value data. */
    value: string;
    /** The string value that indicates which word the field value is a synonym of. */
    synonymOf?: string;
}
/**
 * Options to pass to each
 */
export interface FieldValueListInstanceEachOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface FieldValueListInstanceOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface FieldValueListInstancePageOptions {
    /** The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US` */
    language?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface FieldValueContext {
    /**
     * Remove a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldValueInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FieldValueContextSolution {
    assistantSid: string;
    fieldTypeSid: string;
    sid: string;
}
export declare class FieldValueContextImpl implements FieldValueContext {
    protected _version: V1;
    protected _solution: FieldValueContextSolution;
    protected _uri: string;
    constructor(_version: V1, assistantSid: string, fieldTypeSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FieldValueContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FieldValuePayload extends TwilioResponsePayload {
    field_values: FieldValueResource[];
}
interface FieldValueResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    field_type_sid: string;
    language: string;
    assistant_sid: string;
    sid: string;
    value: string;
    url: string;
    synonym_of: string;
}
export declare class FieldValueInstance {
    protected _version: V1;
    protected _solution: FieldValueContextSolution;
    protected _context?: FieldValueContext;
    constructor(_version: V1, payload: FieldValueResource, assistantSid: string, fieldTypeSid: string, sid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the FieldValue resource.
     */
    accountSid: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The SID of the Field Type associated with the Field Value.
     */
    fieldTypeSid: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US`
     */
    language: string;
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resource.
     */
    assistantSid: string;
    /**
     * The unique string that we created to identify the FieldValue resource.
     */
    sid: string;
    /**
     * The Field Value data.
     */
    value: string;
    /**
     * The absolute URL of the FieldValue resource.
     */
    url: string;
    /**
     * The word for which the field value is a synonym of.
     */
    synonymOf: string;
    private get _proxy();
    /**
     * Remove a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FieldValueInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldValueInstance
     */
    fetch(callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        fieldTypeSid: string;
        language: string;
        assistantSid: string;
        sid: string;
        value: string;
        url: string;
        synonymOf: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FieldValueSolution {
    assistantSid: string;
    fieldTypeSid: string;
}
export interface FieldValueListInstance {
    _version: V1;
    _solution: FieldValueSolution;
    _uri: string;
    (sid: string): FieldValueContext;
    get(sid: string): FieldValueContext;
    /**
     * Create a FieldValueInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FieldValueInstance
     */
    create(params: FieldValueListInstanceCreateOptions, callback?: (error: Error | null, item?: FieldValueInstance) => any): Promise<FieldValueInstance>;
    /**
     * Streams FieldValueInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
    each(params: FieldValueListInstanceEachOptions, callback?: (item: FieldValueInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    /**
     * Lists FieldValueInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
    list(params: FieldValueListInstanceOptions, callback?: (error: Error | null, items: FieldValueInstance[]) => any): Promise<FieldValueInstance[]>;
    /**
     * Retrieve a single page of FieldValueInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FieldValueListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    page(params: FieldValueListInstancePageOptions, callback?: (error: Error | null, items: FieldValuePage) => any): Promise<FieldValuePage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FieldValueListInstance(version: V1, assistantSid: string, fieldTypeSid: string): FieldValueListInstance;
export declare class FieldValuePage extends Page<V1, FieldValuePayload, FieldValueResource, FieldValueInstance> {
    /**
     * Initialize the FieldValuePage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FieldValueSolution);
    /**
     * Build an instance of FieldValueInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FieldValueResource): FieldValueInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
