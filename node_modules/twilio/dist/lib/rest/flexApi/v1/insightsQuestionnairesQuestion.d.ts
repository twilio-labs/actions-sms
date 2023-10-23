/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to remove a InsightsQuestionnairesQuestionInstance
 */
export interface InsightsQuestionnairesQuestionContextRemoveOptions {
    /** The Token HTTP request header */
    token?: string;
}
/**
 * Options to pass to update a InsightsQuestionnairesQuestionInstance
 */
export interface InsightsQuestionnairesQuestionContextUpdateOptions {
    /** The question. */
    question: string;
    /** The description for the question. */
    description: string;
    /** The answer_set for the question. */
    answerSetId: string;
    /** The flag to enable for disable NA for answer. */
    allowNa: boolean;
    /** The Token HTTP request header */
    token?: string;
    /** The ID of the category */
    categoryId?: string;
}
/**
 * Options to pass to create a InsightsQuestionnairesQuestionInstance
 */
export interface InsightsQuestionnairesQuestionListInstanceCreateOptions {
    /** The ID of the category */
    categoryId: string;
    /** The question. */
    question: string;
    /** The description for the question. */
    description: string;
    /** The answer_set for the question. */
    answerSetId: string;
    /** The flag to enable for disable NA for answer. */
    allowNa: boolean;
    /** The Token HTTP request header */
    token?: string;
}
export interface InsightsQuestionnairesQuestionContext {
    /**
     * Remove a InsightsQuestionnairesQuestionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a InsightsQuestionnairesQuestionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
     */
    remove(params: InsightsQuestionnairesQuestionContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Update a InsightsQuestionnairesQuestionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
     */
    update(params: InsightsQuestionnairesQuestionContextUpdateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesQuestionInstance) => any): Promise<InsightsQuestionnairesQuestionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface InsightsQuestionnairesQuestionContextSolution {
    questionId: string;
}
export declare class InsightsQuestionnairesQuestionContextImpl implements InsightsQuestionnairesQuestionContext {
    protected _version: V1;
    protected _solution: InsightsQuestionnairesQuestionContextSolution;
    protected _uri: string;
    constructor(_version: V1, questionId: string);
    remove(params?: InsightsQuestionnairesQuestionContextRemoveOptions | ((error: Error | null, item?: boolean) => any), callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    update(params: InsightsQuestionnairesQuestionContextUpdateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesQuestionInstance) => any): Promise<InsightsQuestionnairesQuestionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): InsightsQuestionnairesQuestionContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface InsightsQuestionnairesQuestionResource {
    account_sid: string;
    question_id: string;
    question: string;
    description: string;
    category: any;
    answer_set_id: string;
    allow_na: boolean;
    url: string;
}
export declare class InsightsQuestionnairesQuestionInstance {
    protected _version: V1;
    protected _solution: InsightsQuestionnairesQuestionContextSolution;
    protected _context?: InsightsQuestionnairesQuestionContext;
    constructor(_version: V1, payload: InsightsQuestionnairesQuestionResource, questionId?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
     */
    accountSid: string;
    /**
     * The unique ID of the question
     */
    questionId: string;
    /**
     * The question.
     */
    question: string;
    /**
     * The description for the question.
     */
    description: string;
    /**
     * The Category for the question.
     */
    category: any;
    /**
     * The answer_set for the question.
     */
    answerSetId: string;
    /**
     * The flag  to enable for disable NA for answer.
     */
    allowNa: boolean;
    url: string;
    private get _proxy();
    /**
     * Remove a InsightsQuestionnairesQuestionInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Remove a InsightsQuestionnairesQuestionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
     */
    remove(params: InsightsQuestionnairesQuestionContextRemoveOptions, callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Update a InsightsQuestionnairesQuestionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
     */
    update(params: InsightsQuestionnairesQuestionContextUpdateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesQuestionInstance) => any): Promise<InsightsQuestionnairesQuestionInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        questionId: string;
        question: string;
        description: string;
        category: any;
        answerSetId: string;
        allowNa: boolean;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface InsightsQuestionnairesQuestionSolution {
}
export interface InsightsQuestionnairesQuestionListInstance {
    _version: V1;
    _solution: InsightsQuestionnairesQuestionSolution;
    _uri: string;
    (questionId: string): InsightsQuestionnairesQuestionContext;
    get(questionId: string): InsightsQuestionnairesQuestionContext;
    /**
     * Create a InsightsQuestionnairesQuestionInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InsightsQuestionnairesQuestionInstance
     */
    create(params: InsightsQuestionnairesQuestionListInstanceCreateOptions, callback?: (error: Error | null, item?: InsightsQuestionnairesQuestionInstance) => any): Promise<InsightsQuestionnairesQuestionInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function InsightsQuestionnairesQuestionListInstance(version: V1): InsightsQuestionnairesQuestionListInstance;
export {};
