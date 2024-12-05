/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export type ConversationWithParticipantsState = "inactive" | "active" | "closed";
export type ConversationWithParticipantsWebhookEnabledType = "true" | "false";
/**
 * Options to pass to create a ConversationWithParticipantsInstance
 */
export interface ConversationWithParticipantsListInstanceCreateOptions {
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: ConversationWithParticipantsWebhookEnabledType;
    /** The human-readable name of this conversation, limited to 256 characters. Optional. */
    friendlyName?: string;
    /** An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\\\'s `sid` in the URL. */
    uniqueName?: string;
    /** The date that this resource was created. */
    dateCreated?: Date;
    /** The date that this resource was last updated. */
    dateUpdated?: Date;
    /** The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to. */
    messagingServiceSid?: string;
    /** An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \\\"{}\\\" will be returned. */
    attributes?: string;
    /**  */
    state?: ConversationWithParticipantsState;
    /** ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute. */
    "timers.inactive"?: string;
    /** ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes. */
    "timers.closed"?: string;
    /** The default email address that will be used when sending outbound emails in this conversation. */
    "bindings.email.address"?: string;
    /** The default name that will be used when sending outbound emails in this conversation. */
    "bindings.email.name"?: string;
    /** The participant to be added to the conversation in JSON format. The JSON object attributes are as parameters in [Participant Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource). The maximum number of participants that can be added in a single request is 10. */
    participant?: Array<string>;
}
export interface ConversationWithParticipantsSolution {
    chatServiceSid: string;
}
export interface ConversationWithParticipantsListInstance {
    _version: V1;
    _solution: ConversationWithParticipantsSolution;
    _uri: string;
    /**
     * Create a ConversationWithParticipantsInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConversationWithParticipantsInstance
     */
    create(callback?: (error: Error | null, item?: ConversationWithParticipantsInstance) => any): Promise<ConversationWithParticipantsInstance>;
    /**
     * Create a ConversationWithParticipantsInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConversationWithParticipantsInstance
     */
    create(params: ConversationWithParticipantsListInstanceCreateOptions, callback?: (error: Error | null, item?: ConversationWithParticipantsInstance) => any): Promise<ConversationWithParticipantsInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ConversationWithParticipantsListInstance(version: V1, chatServiceSid: string): ConversationWithParticipantsListInstance;
interface ConversationWithParticipantsResource {
    account_sid: string;
    chat_service_sid: string;
    messaging_service_sid: string;
    sid: string;
    friendly_name: string;
    unique_name: string;
    attributes: string;
    state: ConversationWithParticipantsState;
    date_created: Date;
    date_updated: Date;
    timers: any;
    links: Record<string, string>;
    bindings: any;
    url: string;
}
export declare class ConversationWithParticipantsInstance {
    protected _version: V1;
    constructor(_version: V1, payload: ConversationWithParticipantsResource, chatServiceSid: string);
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
     */
    accountSid: string;
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource) this conversation belongs to.
     */
    messagingServiceSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The human-readable name of this conversation, limited to 256 characters. Optional.
     */
    friendlyName: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource\'s `sid` in the URL.
     */
    uniqueName: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \"{}\" will be returned.
     */
    attributes: string;
    state: ConversationWithParticipantsState;
    /**
     * The date that this resource was created.
     */
    dateCreated: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated: Date;
    /**
     * Timer date values representing state update for this conversation.
     */
    timers: any;
    /**
     * Contains absolute URLs to access the [participants](https://www.twilio.com/docs/conversations/api/conversation-participant-resource), [messages](https://www.twilio.com/docs/conversations/api/conversation-message-resource) and [webhooks](https://www.twilio.com/docs/conversations/api/conversation-scoped-webhook-resource) of this conversation.
     */
    links: Record<string, string>;
    bindings: any;
    /**
     * An absolute API resource URL for this conversation.
     */
    url: string;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        chatServiceSid: string;
        messagingServiceSid: string;
        sid: string;
        friendlyName: string;
        uniqueName: string;
        attributes: string;
        state: ConversationWithParticipantsState;
        dateCreated: Date;
        dateUpdated: Date;
        timers: any;
        links: Record<string, string>;
        bindings: any;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
