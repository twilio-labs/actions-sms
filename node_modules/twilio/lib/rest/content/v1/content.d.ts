/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
import { ApprovalCreateListInstance } from "./content/approvalCreate";
import { ApprovalFetchListInstance } from "./content/approvalFetch";
export declare class AuthenticationAction {
    "type": AuthenticationActionType;
    "copyCodeText": string;
}
export type AuthenticationActionType = "COPY_CODE";
export declare class CallToActionAction {
    "type": CallToActionActionType;
    "title": string;
    "url"?: string;
    "phone"?: string;
    "id"?: string;
}
export type CallToActionActionType = "URL" | "PHONE_NUMBER";
export declare class CardAction {
    "type": CardActionType;
    "title": string;
    "url"?: string;
    "phone"?: string;
    "id"?: string;
}
export type CardActionType = "URL" | "PHONE_NUMBER" | "QUICK_REPLY";
export declare class CatalogItem {
    "id"?: string;
    "sectionTitle"?: string;
    "name"?: string;
    "mediaUrl"?: string;
    "price"?: number;
    "description"?: string;
}
/**
 * Content creation request body
 */
export declare class ContentCreateRequest {
    /**
     * User defined name of the content
     */
    "friendlyName"?: string;
    /**
     * Key value pairs of variable name to value
     */
    "variables"?: {
        [key: string]: string;
    };
    /**
     * Language code for the content
     */
    "language": string;
    "types": Types;
}
export declare class ListItem {
    "id": string;
    "item": string;
    "description"?: string;
}
export declare class QuickReplyAction {
    "type": QuickReplyActionType;
    "title": string;
    "id"?: string;
}
export type QuickReplyActionType = "QUICK_REPLY";
/**
 * twilio/call-to-action buttons let recipients tap to trigger actions such as launching a website or making a phone call.
 */
export declare class TwilioCallToAction {
    "body"?: string;
    "actions"?: Array<CallToActionAction>;
}
/**
 * twilio/card is a structured template which can be used to send a series of related information. It must include a title and at least one additional field.
 */
export declare class TwilioCard {
    "title": string;
    "subtitle"?: string;
    "media"?: Array<string>;
    "actions"?: Array<CardAction>;
}
/**
 * twilio/catalog type lets recipients view list of catalog products, ask questions about products, order products.
 */
export declare class TwilioCatalog {
    "title"?: string;
    "body": string;
    "subtitle"?: string;
    "id"?: string;
    "items"?: Array<CatalogItem>;
    "dynamicItems"?: string;
}
/**
 * twilio/list-picker includes a menu of up to 10 options, which offers a simple way for users to make a selection.
 */
export declare class TwilioListPicker {
    "body": string;
    "button": string;
    "items": Array<ListItem>;
}
/**
 * twilio/location type contains a location pin and an optional label, which can be used to enhance delivery notifications or connect recipients to physical experiences you offer.
 */
export declare class TwilioLocation {
    "latitude": number;
    "longitude": number;
    "label"?: string;
}
/**
 * twilio/media is used to send file attachments, or to send long text via MMS in the US and Canada. As such, the twilio/media type must contain at least ONE of text or media content.
 */
export declare class TwilioMedia {
    "body"?: string;
    "media": Array<string>;
}
/**
 * twilio/quick-reply templates let recipients tap, rather than type, to respond to the message.
 */
export declare class TwilioQuickReply {
    "body": string;
    "actions": Array<QuickReplyAction>;
}
/**
 * Type containing only plain text-based content
 */
export declare class TwilioText {
    "body": string;
}
/**
 * Content types
 */
export declare class Types {
    "twilioText"?: TwilioText | null;
    "twilioMedia"?: TwilioMedia | null;
    "twilioLocation"?: TwilioLocation | null;
    "twilioListPicker"?: TwilioListPicker | null;
    "twilioCallToAction"?: TwilioCallToAction | null;
    "twilioQuickReply"?: TwilioQuickReply | null;
    "twilioCard"?: TwilioCard | null;
    "twilioCatalog"?: TwilioCatalog | null;
    "whatsappCard"?: WhatsappCard | null;
    "whatsappAuthentication"?: WhatsappAuthentication | null;
}
/**
 * whatsApp/authentication templates let companies deliver WA approved one-time-password button.
 */
export declare class WhatsappAuthentication {
    "addSecurityRecommendation"?: boolean;
    "codeExpirationMinutes"?: number;
    "actions": Array<AuthenticationAction>;
}
/**
 * whatsapp/card is a structured template which can be used to send a series of related information. It must include a body and at least one additional field.
 */
export declare class WhatsappCard {
    "body": string;
    "footer"?: string;
    "media"?: Array<string>;
    "headerText"?: string;
    "actions"?: Array<CardAction>;
}
/**
 * Options to pass to create a ContentInstance
 */
export interface ContentListInstanceCreateOptions {
    /**  */
    contentCreateRequest: ContentCreateRequest;
}
/**
 * Options to pass to each
 */
export interface ContentListInstanceEachOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: ContentInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface ContentListInstanceOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface ContentListInstancePageOptions {
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface ContentContext {
    approvalCreate: ApprovalCreateListInstance;
    approvalFetch: ApprovalFetchListInstance;
    /**
     * Remove a ContentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ContentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ContentInstance
     */
    fetch(callback?: (error: Error | null, item?: ContentInstance) => any): Promise<ContentInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ContentContextSolution {
    sid: string;
}
export declare class ContentContextImpl implements ContentContext {
    protected _version: V1;
    protected _solution: ContentContextSolution;
    protected _uri: string;
    protected _approvalCreate?: ApprovalCreateListInstance;
    protected _approvalFetch?: ApprovalFetchListInstance;
    constructor(_version: V1, sid: string);
    get approvalCreate(): ApprovalCreateListInstance;
    get approvalFetch(): ApprovalFetchListInstance;
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    fetch(callback?: (error: Error | null, item?: ContentInstance) => any): Promise<ContentInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ContentContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ContentPayload extends TwilioResponsePayload {
    contents: ContentResource[];
}
interface ContentResource {
    date_created: Date;
    date_updated: Date;
    sid: string;
    account_sid: string;
    friendly_name: string;
    language: string;
    variables: any;
    types: any;
    url: string;
    links: Record<string, string>;
}
export declare class ContentInstance {
    protected _version: V1;
    protected _solution: ContentContextSolution;
    protected _context?: ContentContext;
    constructor(_version: V1, payload: ContentResource, sid?: string);
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated: Date;
    /**
     * The unique string that that we created to identify the Content resource.
     */
    sid: string;
    /**
     * The SID of the [Account](https://www.twilio.com/docs/usage/api/account) that created Content resource.
     */
    accountSid: string;
    /**
     * A string name used to describe the Content resource. Not visible to the end recipient.
     */
    friendlyName: string;
    /**
     * Two-letter (ISO 639-1) language code (e.g., en) identifying the language the Content resource is in.
     */
    language: string;
    /**
     * Defines the default placeholder values for variables included in the Content resource. e.g. {\"1\": \"Customer_Name\"}.
     */
    variables: any;
    /**
     * The [Content types](https://www.twilio.com/docs/content-api/content-types-overview) (e.g. twilio/text) for this Content resource.
     */
    types: any;
    /**
     * The URL of the resource, relative to `https://content.twilio.com`.
     */
    url: string;
    /**
     * A list of links related to the Content resource, such as approval_fetch and approval_create
     */
    links: Record<string, string>;
    private get _proxy();
    /**
     * Remove a ContentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Fetch a ContentInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ContentInstance
     */
    fetch(callback?: (error: Error | null, item?: ContentInstance) => any): Promise<ContentInstance>;
    /**
     * Access the approvalCreate.
     */
    approvalCreate(): ApprovalCreateListInstance;
    /**
     * Access the approvalFetch.
     */
    approvalFetch(): ApprovalFetchListInstance;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        dateCreated: Date;
        dateUpdated: Date;
        sid: string;
        accountSid: string;
        friendlyName: string;
        language: string;
        variables: any;
        types: any;
        url: string;
        links: Record<string, string>;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ContentSolution {
}
export interface ContentListInstance {
    _version: V1;
    _solution: ContentSolution;
    _uri: string;
    (sid: string): ContentContext;
    get(sid: string): ContentContext;
    /**
     * Create a ContentInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ContentInstance
     */
    create(params: ContentCreateRequest, callback?: (error: Error | null, item?: ContentInstance) => any): Promise<ContentInstance>;
    /**
     * Streams ContentInstance records from the API.
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
     * @param { ContentListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: ContentInstance, done: (err?: Error) => void) => void): void;
    each(params: ContentListInstanceEachOptions, callback?: (item: ContentInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    /**
     * Lists ContentInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ContentListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ContentInstance[]) => any): Promise<ContentInstance[]>;
    list(params: ContentListInstanceOptions, callback?: (error: Error | null, items: ContentInstance[]) => any): Promise<ContentInstance[]>;
    /**
     * Retrieve a single page of ContentInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ContentListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    page(params: ContentListInstancePageOptions, callback?: (error: Error | null, items: ContentPage) => any): Promise<ContentPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ContentListInstance(version: V1): ContentListInstance;
export declare class ContentPage extends Page<V1, ContentPayload, ContentResource, ContentInstance> {
    /**
     * Initialize the ContentPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ContentSolution);
    /**
     * Build an instance of ContentInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ContentResource): ContentInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
