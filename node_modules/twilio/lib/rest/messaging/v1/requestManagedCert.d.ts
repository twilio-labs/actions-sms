/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface RequestManagedCertContext {
    /**
     * Update a RequestManagedCertInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed RequestManagedCertInstance
     */
    update(callback?: (error: Error | null, item?: RequestManagedCertInstance) => any): Promise<RequestManagedCertInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface RequestManagedCertContextSolution {
    domainSid: string;
}
export declare class RequestManagedCertContextImpl implements RequestManagedCertContext {
    protected _version: V1;
    protected _solution: RequestManagedCertContextSolution;
    protected _uri: string;
    constructor(_version: V1, domainSid: string);
    update(callback?: (error: Error | null, item?: RequestManagedCertInstance) => any): Promise<RequestManagedCertInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): RequestManagedCertContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface RequestManagedCertResource {
    domain_sid: string;
    date_updated: Date;
    date_created: Date;
    date_expires: Date;
    domain_name: string;
    certificate_sid: string;
    url: string;
    managed: boolean;
    requesting: boolean;
}
export declare class RequestManagedCertInstance {
    protected _version: V1;
    protected _solution: RequestManagedCertContextSolution;
    protected _context?: RequestManagedCertContext;
    constructor(_version: V1, payload: RequestManagedCertResource, domainSid?: string);
    /**
     * The unique string that we created to identify the Domain resource.
     */
    domainSid: string;
    /**
     * Date that this Domain was last updated.
     */
    dateUpdated: Date;
    /**
     * Date that this Domain was registered to the Twilio platform to create a new Domain object.
     */
    dateCreated: Date;
    /**
     * Date that the private certificate associated with this domain expires. This is the expiration date of your existing cert.
     */
    dateExpires: Date;
    /**
     * Full url path for this domain.
     */
    domainName: string;
    /**
     * The unique string that we created to identify this Certificate resource.
     */
    certificateSid: string;
    url: string;
    /**
     * A boolean flag indicating if the certificate is managed by Twilio.
     */
    managed: boolean;
    /**
     * A boolean flag indicating if a managed certificate needs to be fulfilled by Twilio.
     */
    requesting: boolean;
    private get _proxy();
    /**
     * Update a RequestManagedCertInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed RequestManagedCertInstance
     */
    update(callback?: (error: Error | null, item?: RequestManagedCertInstance) => any): Promise<RequestManagedCertInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        domainSid: string;
        dateUpdated: Date;
        dateCreated: Date;
        dateExpires: Date;
        domainName: string;
        certificateSid: string;
        url: string;
        managed: boolean;
        requesting: boolean;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface RequestManagedCertSolution {
}
export interface RequestManagedCertListInstance {
    _version: V1;
    _solution: RequestManagedCertSolution;
    _uri: string;
    (domainSid: string): RequestManagedCertContext;
    get(domainSid: string): RequestManagedCertContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function RequestManagedCertListInstance(version: V1): RequestManagedCertListInstance;
export {};
