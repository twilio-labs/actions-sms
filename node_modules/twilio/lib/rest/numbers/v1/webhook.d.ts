/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface WebhookSolution {
}
export interface WebhookListInstance {
    _version: V1;
    _solution: WebhookSolution;
    _uri: string;
    /**
     * Fetch a WebhookInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed WebhookInstance
     */
    fetch(callback?: (error: Error | null, item?: WebhookInstance) => any): Promise<WebhookInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function WebhookListInstance(version: V1): WebhookListInstance;
interface WebhookResource {
    url: string;
    port_in_target_url: string;
    port_out_target_url: string;
    notifications_of: Array<string>;
    port_in_target_date_created: Date;
    port_out_target_date_created: Date;
}
export declare class WebhookInstance {
    protected _version: V1;
    constructor(_version: V1, payload: WebhookResource);
    /**
     * The URL of the webhook configuration request
     */
    url: string;
    /**
     * Webhook URL to send a request when a port in request or port in phone number event happens
     */
    portInTargetUrl: string;
    /**
     * Webhook URL to send a request when a port out phone number event happens
     */
    portOutTargetUrl: string;
    /**
     * List of notification events to send a request to the webhook URL
     */
    notificationsOf: Array<string>;
    /**
     * Creation date for the port in webhook configuration
     */
    portInTargetDateCreated: Date;
    /**
     * Creation date for the port out webhook configuration
     */
    portOutTargetDateCreated: Date;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        url: string;
        portInTargetUrl: string;
        portOutTargetUrl: string;
        notificationsOf: string[];
        portInTargetDateCreated: Date;
        portOutTargetDateCreated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
