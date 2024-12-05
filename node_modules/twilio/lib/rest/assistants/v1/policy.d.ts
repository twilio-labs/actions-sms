/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
/**
 * Options to pass to each
 */
export interface PolicyListInstanceEachOptions {
    /** The tool ID. */
    toolId?: string;
    /** The knowledge ID. */
    knowledgeId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: PolicyInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface PolicyListInstanceOptions {
    /** The tool ID. */
    toolId?: string;
    /** The knowledge ID. */
    knowledgeId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface PolicyListInstancePageOptions {
    /** The tool ID. */
    toolId?: string;
    /** The knowledge ID. */
    knowledgeId?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface PolicySolution {
}
export interface PolicyListInstance {
    _version: V1;
    _solution: PolicySolution;
    _uri: string;
    /**
     * Streams PolicyInstance records from the API.
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
     * @param { PolicyListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: PolicyInstance, done: (err?: Error) => void) => void): void;
    each(params: PolicyListInstanceEachOptions, callback?: (item: PolicyInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of PolicyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: PolicyPage) => any): Promise<PolicyPage>;
    /**
     * Lists PolicyInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PolicyListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: PolicyInstance[]) => any): Promise<PolicyInstance[]>;
    list(params: PolicyListInstanceOptions, callback?: (error: Error | null, items: PolicyInstance[]) => any): Promise<PolicyInstance[]>;
    /**
     * Retrieve a single page of PolicyInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { PolicyListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: PolicyPage) => any): Promise<PolicyPage>;
    page(params: PolicyListInstancePageOptions, callback?: (error: Error | null, items: PolicyPage) => any): Promise<PolicyPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PolicyListInstance(version: V1): PolicyListInstance;
interface PolicyPayload extends TwilioResponsePayload {
    policies: PolicyResource[];
}
interface PolicyResource {
    id: string;
    name: string;
    description: string;
    account_sid: string;
    user_sid: string;
    type: string;
    policy_details: Record<string, object>;
    date_created: Date;
    date_updated: Date;
}
export declare class PolicyInstance {
    protected _version: V1;
    constructor(_version: V1, payload: PolicyResource);
    /**
     * The Policy ID.
     */
    id: string;
    /**
     * The name of the policy.
     */
    name: string;
    /**
     * The description of the policy.
     */
    description: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Policy resource.
     */
    accountSid: string;
    /**
     * The SID of the User that created the Policy resource.
     */
    userSid: string;
    /**
     * The type of the policy.
     */
    type: string;
    /**
     * The details of the policy based on the type.
     */
    policyDetails: Record<string, object>;
    /**
     * The date and time in GMT when the Policy was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Policy was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        id: string;
        name: string;
        description: string;
        accountSid: string;
        userSid: string;
        type: string;
        policyDetails: Record<string, object>;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class PolicyPage extends Page<V1, PolicyPayload, PolicyResource, PolicyInstance> {
    /**
     * Initialize the PolicyPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: PolicySolution);
    /**
     * Build an instance of PolicyInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: PolicyResource): PolicyInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
