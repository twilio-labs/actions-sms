/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export type KeyKeytype = "restricted";
/**
 * Options to pass to create a KeyInstance
 */
export interface KeyListInstanceCreateOptions {
    /** The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments resource. */
    accountSid: string;
    /** A descriptive string that you create to describe the resource. It can be up to 64 characters long. */
    friendlyName?: string;
    /**  */
    keyType?: KeyKeytype;
    /** The \\\\`Policy\\\\` object is a collection that specifies the allowed Twilio permissions for the restricted key. For more information on the permissions available with restricted API keys, refer to the [Twilio documentation](https://www.twilio.com/docs/iam/api-keys/restricted-api-keys#permissions-available-with-restricted-api-keys). */
    policy?: any;
}
export interface KeySolution {
}
export interface KeyListInstance {
    _version: V1;
    _solution: KeySolution;
    _uri: string;
    /**
     * Create a KeyInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KeyInstance
     */
    create(params: KeyListInstanceCreateOptions, callback?: (error: Error | null, item?: KeyInstance) => any): Promise<KeyInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function KeyListInstance(version: V1): KeyListInstance;
interface KeyResource {
    sid: string;
    friendly_name: string;
    date_created: Date;
    date_updated: Date;
    secret: string;
    policy: any;
}
export declare class KeyInstance {
    protected _version: V1;
    constructor(_version: V1, payload: KeyResource);
    /**
     * The unique string that that we created to identify the NewKey resource. You will use this as the basic-auth `user` when authenticating to the API.
     */
    sid: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName: string;
    /**
     * The date and time in GMT that the API Key was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT that the new API Key was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The secret your application uses to sign Access Tokens and to authenticate to the REST API (you will use this as the basic-auth `password`).  **Note that for security reasons, this field is ONLY returned when the API Key is first created.**
     */
    secret: string;
    /**
     * Collection of allow assertions.
     */
    policy: any;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        sid: string;
        friendlyName: string;
        dateCreated: Date;
        dateUpdated: Date;
        secret: string;
        policy: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
