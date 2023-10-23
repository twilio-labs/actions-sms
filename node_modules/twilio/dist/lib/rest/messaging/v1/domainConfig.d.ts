/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to update a DomainConfigInstance
 */
export interface DomainConfigContextUpdateOptions {
    /** A list of messagingServiceSids (with prefix MG) */
    messagingServiceSids: Array<string>;
    /** Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping. */
    fallbackUrl?: string;
    /** URL to receive click events to your webhook whenever the recipients click on the shortened links */
    callbackUrl?: string;
    /** An action type for messaging_service_sids operation (ADD, DELETE, REPLACE) */
    messagingServiceSidsAction?: string;
}
export interface DomainConfigContext {
    /**
     * Fetch a DomainConfigInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DomainConfigInstance
     */
    fetch(callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Update a DomainConfigInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DomainConfigInstance
     */
    update(params: DomainConfigContextUpdateOptions, callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DomainConfigContextSolution {
    domainSid: string;
}
export declare class DomainConfigContextImpl implements DomainConfigContext {
    protected _version: V1;
    protected _solution: DomainConfigContextSolution;
    protected _uri: string;
    constructor(_version: V1, domainSid: string);
    fetch(callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    update(params: DomainConfigContextUpdateOptions, callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): DomainConfigContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface DomainConfigResource {
    domain_sid: string;
    config_sid: string;
    messaging_service_sids: Array<string>;
    fallback_url: string;
    callback_url: string;
    date_created: Date;
    date_updated: Date;
    url: string;
}
export declare class DomainConfigInstance {
    protected _version: V1;
    protected _solution: DomainConfigContextSolution;
    protected _context?: DomainConfigContext;
    constructor(_version: V1, payload: DomainConfigResource, domainSid?: string);
    /**
     * The unique string that we created to identify the Domain resource.
     */
    domainSid: string;
    /**
     * The unique string that we created to identify the Domain config (prefix ZK).
     */
    configSid: string;
    /**
     * A list of messagingServiceSids (with prefix MG).
     */
    messagingServiceSids: Array<string>;
    /**
     * Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
     */
    fallbackUrl: string;
    /**
     * URL to receive click events to your webhook whenever the recipients click on the shortened links.
     */
    callbackUrl: string;
    /**
     * Date this Domain Config was created.
     */
    dateCreated: Date;
    /**
     * Date that this Domain Config was last updated.
     */
    dateUpdated: Date;
    url: string;
    private get _proxy();
    /**
     * Fetch a DomainConfigInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DomainConfigInstance
     */
    fetch(callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Update a DomainConfigInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed DomainConfigInstance
     */
    update(params: DomainConfigContextUpdateOptions, callback?: (error: Error | null, item?: DomainConfigInstance) => any): Promise<DomainConfigInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        domainSid: string;
        configSid: string;
        messagingServiceSids: string[];
        fallbackUrl: string;
        callbackUrl: string;
        dateCreated: Date;
        dateUpdated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface DomainConfigSolution {
}
export interface DomainConfigListInstance {
    _version: V1;
    _solution: DomainConfigSolution;
    _uri: string;
    (domainSid: string): DomainConfigContext;
    get(domainSid: string): DomainConfigContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function DomainConfigListInstance(version: V1): DomainConfigListInstance;
export {};
