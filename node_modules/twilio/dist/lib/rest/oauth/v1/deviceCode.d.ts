/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a DeviceCodeInstance
 */
export interface DeviceCodeListInstanceCreateOptions {
    /** A 34 character string that uniquely identifies this OAuth App. */
    clientSid: string;
    /** An Array of scopes for authorization request */
    scopes: Array<string>;
    /** An array of intended audiences for token requests */
    audiences?: Array<string>;
}
export interface DeviceCodeSolution {
}
export interface DeviceCodeListInstance {
    _version: V1;
    _solution: DeviceCodeSolution;
    _uri: string;
    /**
     * Create a DeviceCodeInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DeviceCodeInstance
     */
    create(params: DeviceCodeListInstanceCreateOptions, callback?: (error: Error | null, item?: DeviceCodeInstance) => any): Promise<DeviceCodeInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function DeviceCodeListInstance(version: V1): DeviceCodeListInstance;
interface DeviceCodeResource {
    device_code: string;
    user_code: string;
    verification_uri: string;
    verification_uri_complete: string;
    expires_in: number;
    interval: number;
}
export declare class DeviceCodeInstance {
    protected _version: V1;
    constructor(_version: V1, payload: DeviceCodeResource);
    /**
     * The device verification code.
     */
    deviceCode: string;
    /**
     * The verification code which end user uses to verify authorization request.
     */
    userCode: string;
    /**
     * The URI that the end user visits to verify authorization request.
     */
    verificationUri: string;
    /**
     * The URI with user_code that the end-user alternatively visits to verify authorization request.
     */
    verificationUriComplete: string;
    /**
     * The expiration time of the device_code and user_code in seconds.
     */
    expiresIn: number;
    /**
     * The minimum amount of time in seconds that the client should wait between polling requests to the token endpoint.
     */
    interval: number;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        deviceCode: string;
        userCode: string;
        verificationUri: string;
        verificationUriComplete: string;
        expiresIn: number;
        interval: number;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
