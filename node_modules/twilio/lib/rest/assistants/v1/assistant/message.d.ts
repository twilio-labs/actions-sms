/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export declare class AssistantsV1ServiceAssistantSendMessageRequest {
    /**
     * The unique identity of user for the session.
     */
    "identity": string;
    /**
     * The unique name for the session.
     */
    "sessionId"?: string;
    /**
     * The query to ask the assistant.
     */
    "body": string;
    /**
     * The webhook url to call after the assistant has generated a response or report an error.
     */
    "webhook"?: string;
    /**
     * one of the modes \'chat\', \'email\' or \'voice\'
     */
    "mode"?: string;
}
/**
 * Options to pass to create a MessageInstance
 */
export interface MessageListInstanceCreateOptions {
    /**  */
    assistantsV1ServiceAssistantSendMessageRequest: AssistantsV1ServiceAssistantSendMessageRequest;
}
export interface MessageSolution {
    id: string;
}
export interface MessageListInstance {
    _version: V1;
    _solution: MessageSolution;
    _uri: string;
    /**
     * Create a MessageInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed MessageInstance
     */
    create(params: AssistantsV1ServiceAssistantSendMessageRequest, callback?: (error: Error | null, item?: MessageInstance) => any): Promise<MessageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function MessageListInstance(version: V1, id: string): MessageListInstance;
interface MessageResource {
    status: string;
    flagged: boolean;
    aborted: boolean;
    session_id: string;
    account_sid: string;
    body: string;
    error: string;
}
export declare class MessageInstance {
    protected _version: V1;
    constructor(_version: V1, payload: MessageResource, id: string);
    /**
     * success or failure based on whether the request successfully generated a response.
     */
    status: string;
    /**
     * If successful, this property will denote whether the response was flagged or not.
     */
    flagged: boolean;
    /**
     * This property will denote whether the request was aborted or not.
     */
    aborted: boolean;
    /**
     * The unique name for the session.
     */
    sessionId: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that sent the Message.
     */
    accountSid: string;
    /**
     * If successful, the body of the generated response
     */
    body: string;
    /**
     * The error message if generation was not successful
     */
    error: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        status: string;
        flagged: boolean;
        aborted: boolean;
        sessionId: string;
        accountSid: string;
        body: string;
        error: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
