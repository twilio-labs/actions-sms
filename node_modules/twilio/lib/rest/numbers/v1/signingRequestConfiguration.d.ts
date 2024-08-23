/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a SigningRequestConfigurationInstance
 */
export interface SigningRequestConfigurationListInstanceCreateOptions {
    /**  */
    body?: object;
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
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function SigningRequestConfigurationListInstance(version: V1): SigningRequestConfigurationListInstance;
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
export {};
