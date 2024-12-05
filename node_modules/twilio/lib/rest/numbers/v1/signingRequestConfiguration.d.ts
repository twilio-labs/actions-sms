/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to create a SigningRequestConfigurationInstance
 */
export interface SigningRequestConfigurationListInstanceCreateOptions {
    /**  */
    body?: object;
}
/**
 * Options to pass to each
 */
export interface SigningRequestConfigurationListInstanceEachOptions {
    /** The country ISO code to apply this configuration, this is an optional field, Example: US, MX */
    country?: string;
    /** The product or service for which is requesting the signature, this is an optional field, Example: Porting, Hosting */
    product?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: SigningRequestConfigurationInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface SigningRequestConfigurationListInstanceOptions {
    /** The country ISO code to apply this configuration, this is an optional field, Example: US, MX */
    country?: string;
    /** The product or service for which is requesting the signature, this is an optional field, Example: Porting, Hosting */
    product?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface SigningRequestConfigurationListInstancePageOptions {
    /** The country ISO code to apply this configuration, this is an optional field, Example: US, MX */
    country?: string;
    /** The product or service for which is requesting the signature, this is an optional field, Example: Porting, Hosting */
    product?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface SigningRequestConfigurationSolution {
}
export interface SigningRequestConfigurationListInstance {
    _version: V1;
    _solution: SigningRequestConfigurationSolution;
    _uri: string;
    /**
     * Create a SigningRequestConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SigningRequestConfigurationInstance
     */
    create(callback?: (error: Error | null, item?: SigningRequestConfigurationInstance) => any): Promise<SigningRequestConfigurationInstance>;
    /**
     * Create a SigningRequestConfigurationInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed SigningRequestConfigurationInstance
     */
    create(params: object, callback?: (error: Error | null, item?: SigningRequestConfigurationInstance) => any): Promise<SigningRequestConfigurationInstance>;
    /**
     * Streams SigningRequestConfigurationInstance records from the API.
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
     * @param { SigningRequestConfigurationListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: SigningRequestConfigurationInstance, done: (err?: Error) => void) => void): void;
    each(params: SigningRequestConfigurationListInstanceEachOptions, callback?: (item: SigningRequestConfigurationInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of SigningRequestConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: SigningRequestConfigurationPage) => any): Promise<SigningRequestConfigurationPage>;
    /**
     * Lists SigningRequestConfigurationInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SigningRequestConfigurationListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: SigningRequestConfigurationInstance[]) => any): Promise<SigningRequestConfigurationInstance[]>;
    list(params: SigningRequestConfigurationListInstanceOptions, callback?: (error: Error | null, items: SigningRequestConfigurationInstance[]) => any): Promise<SigningRequestConfigurationInstance[]>;
    /**
     * Retrieve a single page of SigningRequestConfigurationInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { SigningRequestConfigurationListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: SigningRequestConfigurationPage) => any): Promise<SigningRequestConfigurationPage>;
    page(params: SigningRequestConfigurationListInstancePageOptions, callback?: (error: Error | null, items: SigningRequestConfigurationPage) => any): Promise<SigningRequestConfigurationPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function SigningRequestConfigurationListInstance(version: V1): SigningRequestConfigurationListInstance;
interface SigningRequestConfigurationPayload extends TwilioResponsePayload {
    configurations: SigningRequestConfigurationResource[];
}
interface SigningRequestConfigurationResource {
    logo_sid: string;
    friendly_name: string;
    product: string;
    country: string;
    email_subject: string;
    email_message: string;
    url_redirection: string;
    url: string;
}
export declare class SigningRequestConfigurationInstance {
    protected _version: V1;
    constructor(_version: V1, payload: SigningRequestConfigurationResource);
    /**
     * The SID of the document  that includes the logo that will appear in the LOA. To upload documents follow the following guide: https://www.twilio.com/docs/phone-numbers/regulatory/getting-started/create-new-bundle-public-rest-apis#supporting-document-create
     */
    logoSid: string;
    /**
     * This is the string that you assigned as a friendly name for describing the creation of the configuration.
     */
    friendlyName: string;
    /**
     * The product or service for which is requesting the signature.
     */
    product: string;
    /**
     * The country ISO code to apply the configuration.
     */
    country: string;
    /**
     * Subject of the email that the end client will receive ex: “Twilio Hosting Request”, maximum length of 255 characters.
     */
    emailSubject: string;
    /**
     * Content of the email that the end client will receive ex: “This is a Hosting request from Twilio, please check the document and sign it”, maximum length of 5,000 characters.
     */
    emailMessage: string;
    /**
     * Url the end client will be redirected after signing a document.
     */
    urlRedirection: string;
    url: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        logoSid: string;
        friendlyName: string;
        product: string;
        country: string;
        emailSubject: string;
        emailMessage: string;
        urlRedirection: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class SigningRequestConfigurationPage extends Page<V1, SigningRequestConfigurationPayload, SigningRequestConfigurationResource, SigningRequestConfigurationInstance> {
    /**
     * Initialize the SigningRequestConfigurationPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: SigningRequestConfigurationSolution);
    /**
     * Build an instance of SigningRequestConfigurationInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: SigningRequestConfigurationResource): SigningRequestConfigurationInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
