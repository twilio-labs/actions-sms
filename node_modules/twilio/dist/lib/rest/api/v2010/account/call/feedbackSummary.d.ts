/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../V2010";
type CallFeedbackSummaryStatus = "queued" | "in-progress" | "completed" | "failed";
/**
 * Options to pass to create a FeedbackSummaryInstance
 */
export interface FeedbackSummaryListInstanceCreateOptions {
    /** Only include feedback given on or after this date. Format is `YYYY-MM-DD` and specified in UTC. */
    startDate: Date;
    /** Only include feedback given on or before this date. Format is `YYYY-MM-DD` and specified in UTC. */
    endDate: Date;
    /** Whether to also include Feedback resources from all subaccounts. `true` includes feedback from all subaccounts and `false`, the default, includes feedback from only the specified account. */
    includeSubaccounts?: boolean;
    /** The URL that we will request when the feedback summary is complete. */
    statusCallback?: string;
    /** The HTTP method (`GET` or `POST`) we use to make the request to the `StatusCallback` URL. */
    statusCallbackMethod?: string;
}
export interface FeedbackSummaryContext {
    /**
     * Remove a FeedbackSummaryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FeedbackSummaryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FeedbackSummaryContextSolution {
    accountSid: string;
    sid: string;
}
export declare class FeedbackSummaryContextImpl implements FeedbackSummaryContext {
    protected _version: V2010;
    protected _solution: FeedbackSummaryContextSolution;
    protected _uri: string;
    constructor(_version: V2010, accountSid: string, sid: string);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FeedbackSummaryContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FeedbackSummaryResource {
    account_sid: string;
    call_count: number;
    call_feedback_count: number;
    date_created: Date;
    date_updated: Date;
    end_date: Date;
    include_subaccounts: boolean;
    issues: Array<any>;
    quality_score_average: number;
    quality_score_median: number;
    quality_score_standard_deviation: number;
    sid: string;
    start_date: Date;
    status: CallFeedbackSummaryStatus;
}
export declare class FeedbackSummaryInstance {
    protected _version: V2010;
    protected _solution: FeedbackSummaryContextSolution;
    protected _context?: FeedbackSummaryContext;
    constructor(_version: V2010, payload: FeedbackSummaryResource, accountSid: string, sid?: string);
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * The total number of calls.
     */
    callCount: number;
    /**
     * The total number of calls with a feedback entry.
     */
    callFeedbackCount: number;
    /**
     * The date that this resource was created, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateCreated: Date;
    /**
     * The date that this resource was last updated, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateUpdated: Date;
    /**
     * The last date for which feedback entries are included in this Feedback Summary, formatted as `YYYY-MM-DD` and specified in UTC.
     */
    endDate: Date;
    /**
     * Whether the feedback summary includes subaccounts; `true` if it does, otherwise `false`.
     */
    includeSubaccounts: boolean;
    /**
     * A list of issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, or `one-way-audio`.
     */
    issues: Array<any>;
    /**
     * The average QualityScore of the feedback entries.
     */
    qualityScoreAverage: number;
    /**
     * The median QualityScore of the feedback entries.
     */
    qualityScoreMedian: number;
    /**
     * The standard deviation of the quality scores.
     */
    qualityScoreStandardDeviation: number;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The first date for which feedback entries are included in this feedback summary, formatted as `YYYY-MM-DD` and specified in UTC.
     */
    startDate: Date;
    status: CallFeedbackSummaryStatus;
    private get _proxy();
    /**
     * Remove a FeedbackSummaryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a FeedbackSummaryInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackSummaryInstance
     */
    fetch(callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        callCount: number;
        callFeedbackCount: number;
        dateCreated: Date;
        dateUpdated: Date;
        endDate: Date;
        includeSubaccounts: boolean;
        issues: any[];
        qualityScoreAverage: number;
        qualityScoreMedian: number;
        qualityScoreStandardDeviation: number;
        sid: string;
        startDate: Date;
        status: CallFeedbackSummaryStatus;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FeedbackSummarySolution {
    accountSid: string;
}
export interface FeedbackSummaryListInstance {
    _version: V2010;
    _solution: FeedbackSummarySolution;
    _uri: string;
    (sid: string): FeedbackSummaryContext;
    get(sid: string): FeedbackSummaryContext;
    /**
     * Create a FeedbackSummaryInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FeedbackSummaryInstance
     */
    create(params: FeedbackSummaryListInstanceCreateOptions, callback?: (error: Error | null, item?: FeedbackSummaryInstance) => any): Promise<FeedbackSummaryInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FeedbackSummaryListInstance(version: V2010, accountSid: string): FeedbackSummaryListInstance;
export {};
