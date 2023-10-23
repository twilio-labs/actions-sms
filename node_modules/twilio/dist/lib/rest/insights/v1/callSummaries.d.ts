/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
type CallSummariesAnsweredBy = "unknown" | "machine_start" | "machine_end_beep" | "machine_end_silence" | "machine_end_other" | "human" | "fax";
type CallSummariesCallState = "ringing" | "completed" | "busy" | "fail" | "noanswer" | "canceled" | "answered" | "undialed";
type CallSummariesCallType = "carrier" | "sip" | "trunking" | "client";
type CallSummariesProcessingState = "complete" | "partial";
type CallSummariesProcessingStateRequest = "completed" | "started" | "partial" | "all";
type CallSummariesSortBy = "start_time" | "end_time";
/**
 * Options to pass to each
 */
export interface CallSummariesListInstanceEachOptions {
    /**  */
    from?: string;
    /**  */
    to?: string;
    /**  */
    fromCarrier?: string;
    /**  */
    toCarrier?: string;
    /**  */
    fromCountryCode?: string;
    /**  */
    toCountryCode?: string;
    /**  */
    branded?: boolean;
    /**  */
    verifiedCaller?: boolean;
    /**  */
    hasTag?: boolean;
    /**  */
    startTime?: string;
    /**  */
    endTime?: string;
    /**  */
    callType?: string;
    /**  */
    callState?: string;
    /**  */
    direction?: string;
    /**  */
    processingState?: CallSummariesProcessingStateRequest;
    /**  */
    sortBy?: CallSummariesSortBy;
    /**  */
    subaccount?: string;
    /**  */
    abnormalSession?: boolean;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface CallSummariesListInstanceOptions {
    /**  */
    from?: string;
    /**  */
    to?: string;
    /**  */
    fromCarrier?: string;
    /**  */
    toCarrier?: string;
    /**  */
    fromCountryCode?: string;
    /**  */
    toCountryCode?: string;
    /**  */
    branded?: boolean;
    /**  */
    verifiedCaller?: boolean;
    /**  */
    hasTag?: boolean;
    /**  */
    startTime?: string;
    /**  */
    endTime?: string;
    /**  */
    callType?: string;
    /**  */
    callState?: string;
    /**  */
    direction?: string;
    /**  */
    processingState?: CallSummariesProcessingStateRequest;
    /**  */
    sortBy?: CallSummariesSortBy;
    /**  */
    subaccount?: string;
    /**  */
    abnormalSession?: boolean;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface CallSummariesListInstancePageOptions {
    /**  */
    from?: string;
    /**  */
    to?: string;
    /**  */
    fromCarrier?: string;
    /**  */
    toCarrier?: string;
    /**  */
    fromCountryCode?: string;
    /**  */
    toCountryCode?: string;
    /**  */
    branded?: boolean;
    /**  */
    verifiedCaller?: boolean;
    /**  */
    hasTag?: boolean;
    /**  */
    startTime?: string;
    /**  */
    endTime?: string;
    /**  */
    callType?: string;
    /**  */
    callState?: string;
    /**  */
    direction?: string;
    /**  */
    processingState?: CallSummariesProcessingStateRequest;
    /**  */
    sortBy?: CallSummariesSortBy;
    /**  */
    subaccount?: string;
    /**  */
    abnormalSession?: boolean;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface CallSummariesSolution {
}
export interface CallSummariesListInstance {
    _version: V1;
    _solution: CallSummariesSolution;
    _uri: string;
    /**
     * Streams CallSummariesInstance records from the API.
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
     * @param { CallSummariesListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
    each(params: CallSummariesListInstanceEachOptions, callback?: (item: CallSummariesInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of CallSummariesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    /**
     * Lists CallSummariesInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CallSummariesListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
    list(params: CallSummariesListInstanceOptions, callback?: (error: Error | null, items: CallSummariesInstance[]) => any): Promise<CallSummariesInstance[]>;
    /**
     * Retrieve a single page of CallSummariesInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { CallSummariesListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    page(params: CallSummariesListInstancePageOptions, callback?: (error: Error | null, items: CallSummariesPage) => any): Promise<CallSummariesPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function CallSummariesListInstance(version: V1): CallSummariesListInstance;
interface CallSummariesPayload extends TwilioResponsePayload {
    call_summaries: CallSummariesResource[];
}
interface CallSummariesResource {
    account_sid: string;
    call_sid: string;
    answered_by: CallSummariesAnsweredBy;
    call_type: CallSummariesCallType;
    call_state: CallSummariesCallState;
    processing_state: CallSummariesProcessingState;
    created_time: Date;
    start_time: Date;
    end_time: Date;
    duration: number;
    connect_duration: number;
    from: any;
    to: any;
    carrier_edge: any;
    client_edge: any;
    sdk_edge: any;
    sip_edge: any;
    tags: Array<string>;
    url: string;
    attributes: any;
    properties: any;
    trust: any;
}
export declare class CallSummariesInstance {
    protected _version: V1;
    constructor(_version: V1, payload: CallSummariesResource);
    accountSid: string;
    callSid: string;
    answeredBy: CallSummariesAnsweredBy;
    callType: CallSummariesCallType;
    callState: CallSummariesCallState;
    processingState: CallSummariesProcessingState;
    createdTime: Date;
    startTime: Date;
    endTime: Date;
    duration: number;
    connectDuration: number;
    from: any;
    to: any;
    carrierEdge: any;
    clientEdge: any;
    sdkEdge: any;
    sipEdge: any;
    tags: Array<string>;
    url: string;
    attributes: any;
    properties: any;
    trust: any;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        callSid: string;
        answeredBy: CallSummariesAnsweredBy;
        callType: CallSummariesCallType;
        callState: CallSummariesCallState;
        processingState: CallSummariesProcessingState;
        createdTime: Date;
        startTime: Date;
        endTime: Date;
        duration: number;
        connectDuration: number;
        from: any;
        to: any;
        carrierEdge: any;
        clientEdge: any;
        sdkEdge: any;
        sipEdge: any;
        tags: string[];
        url: string;
        attributes: any;
        properties: any;
        trust: any;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class CallSummariesPage extends Page<V1, CallSummariesPayload, CallSummariesResource, CallSummariesInstance> {
    /**
     * Initialize the CallSummariesPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: CallSummariesSolution);
    /**
     * Build an instance of CallSummariesInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: CallSummariesResource): CallSummariesInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
