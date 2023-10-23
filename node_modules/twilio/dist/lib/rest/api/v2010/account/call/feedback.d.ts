/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
type CallFeedbackIssues = "audio-latency" | "digits-not-captured" | "dropped-call" | "imperfect-audio" | "incorrect-caller-id" | "one-way-audio" | "post-dial-delay" | "unsolicited-call";
/**
 * Options to pass to update a FeedbackInstance
 */
export interface FeedbackContextUpdateOptions {
    /** The call quality expressed as an integer from `1` to `5` where `1` represents very poor call quality and `5` represents a perfect call. */
    qualityScore?: number;
    /** One or more issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, `unsolicited-call`, or `one-way-audio`. */
    issue?: Array<CallFeedbackIssues>;
}
export interface FeedbackContext {
    /**
     * Fetch a FeedbackInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    update(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    update(params: FeedbackContextUpdateOptions, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackContextSolution {
    accountSid: string;
    callSid: string;
}
export declare class FeedbackContextImpl implements FeedbackContext {
    protected _version: V2010;
    protected _solution: FeedbackContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, callSid: string);
    fetch(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    update(params?: FeedbackContextUpdateOptions | ((error: Error | null, item?: FeedbackInstance) => any), callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FeedbackContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FeedbackResource {
    account_sid: string;
    date_created: Date;
    date_updated: Date;
    issues: Array<CallFeedbackIssues>;
    quality_score: number;
    sid: string;
}
export declare class FeedbackInstance {
    protected _version: V2010;
    protected _solution: FeedbackContextSolution;
    protected _context?: FeedbackContext;
    constructor(_version: V2010, payload: FeedbackResource, accountSid: string, callSid: string);
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The date that this resource was created, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateCreated: Date;
    /**
     * The date that this resource was last updated, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateUpdated: Date;
    /**
     * A list of issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, `unsolicited-call`, or `one-way-audio`.
     */
    issues: Array<CallFeedbackIssues>;
    /**
     * `1` to `5` quality score where `1` represents imperfect experience and `5` represents a perfect call.
     */
    qualityScore: number;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    private get _proxy();
    /**
     * Fetch a FeedbackInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    update(callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Update a FeedbackInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackInstance
     */
    update(params: FeedbackContextUpdateOptions, callback?: (error: Error | null, item?: FeedbackInstance) => any): Promise<FeedbackInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        dateCreated: Date;
        dateUpdated: Date;
        issues: CallFeedbackIssues[];
        qualityScore: number;
        sid: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FeedbackSolution {
    accountSid: string;
    callSid: string;
}
export interface FeedbackListInstance {
    _version: V2010;
    _solution: FeedbackSolution;
    _uri: string;
    (): FeedbackContext;
    get(): FeedbackContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FeedbackListInstance(version: V2010, accountSid: string, callSid: string): FeedbackListInstance;
export {};
