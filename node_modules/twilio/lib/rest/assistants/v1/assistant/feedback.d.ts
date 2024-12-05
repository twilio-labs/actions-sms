/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
export declare class AssistantsV1ServiceCreateFeedbackRequest {
    /**
     * The message ID.
     */
    "messageId"?: string;
    /**
     * The score to be given(0-1).
     */
    "score"?: number;
    /**
     * The Session ID.
     */
    "sessionId": string;
    /**
     * The text to be given as feedback.
     */
    "text"?: string;
}
/**
 * Options to pass to create a FeedbackInstance
 */
export interface FeedbackListInstanceCreateOptions {
    /**  */
    assistantsV1ServiceCreateFeedbackRequest: AssistantsV1ServiceCreateFeedbackRequest;
}
/**
 * Options to pass to each
 */
export interface FeedbackListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface FeedbackListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface FeedbackListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface FeedbackSolution {
    id: string;
}
export interface FeedbackListInstance {
    _version: V1;
    _solution: FeedbackSolution;
    _uri: string;
    /**
     * Create a FeedbackInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    create(params: AssistantsV1ServiceCreateFeedbackRequest, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Streams FeedbackInstance records from the API.
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
     * @param { FeedbackListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void): void;
    each(params: FeedbackListInstanceEachOptions, callback?: (item: FeedbackInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of FeedbackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
    /**
     * Lists FeedbackInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FeedbackListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: FeedbackInstance[]) => any): Promise<FeedbackInstance[]>;
    list(params: FeedbackListInstanceOptions, callback?: (error: Error | null, items: FeedbackInstance[]) => any): Promise<FeedbackInstance[]>;
    /**
     * Retrieve a single page of FeedbackInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { FeedbackListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
    page(params: FeedbackListInstancePageOptions, callback?: (error: Error | null, items: FeedbackPage) => any): Promise<FeedbackPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FeedbackListInstance(version: V1, id: string): FeedbackListInstance;
interface FeedbackPayload extends TwilioResponsePayload {
    feedbacks: FeedbackResource[];
}
interface FeedbackResource {
    assistant_id: string;
    id: string;
    account_sid: string;
    user_sid: string;
    message_id: string;
    score: number;
    session_id: string;
    text: string;
    date_created: Date;
    date_updated: Date;
}
export declare class FeedbackInstance {
    protected _version: V1;
    constructor(_version: V1, payload: FeedbackResource, id: string);
    /**
     * The Assistant ID.
     */
    assistantId: string;
    /**
     * The Feedback ID.
     */
    id: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Feedback.
     */
    accountSid: string;
    /**
     * The SID of the User created the Feedback.
     */
    userSid: string;
    /**
     * The Message ID.
     */
    messageId: string;
    /**
     * The Score to provide as Feedback (0-1)
     */
    score: number;
    /**
     * The Session ID.
     */
    sessionId: string;
    /**
     * The text to be given as feedback.
     */
    text: string;
    /**
     * The date and time in GMT when the Feedback was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT when the Feedback was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        assistantId: string;
        id: string;
        accountSid: string;
        userSid: string;
        messageId: string;
        score: number;
        sessionId: string;
        text: string;
        dateCreated: Date;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export declare class FeedbackPage extends Page<V1, FeedbackPayload, FeedbackResource, FeedbackInstance> {
    /**
     * Initialize the FeedbackPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: FeedbackSolution);
    /**
     * Build an instance of FeedbackInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: FeedbackResource): FeedbackInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
