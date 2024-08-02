/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
/**
 * Options to pass to create a PortingWebhookConfigurationInstance
 */
export interface PortingWebhookConfigurationListInstanceCreateOptions {
    /**  */
    body?: object;
}
export interface PortingWebhookConfigurationSolution {
}
export interface PortingWebhookConfigurationListInstance {
    _version: V1;
    _solution: PortingWebhookConfigurationSolution;
    _uri: string;
    /**
     * Create a PortingWebhookConfigurationInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingWebhookConfigurationInstance
     */
    create(callback?: (error: Error | null, item?: PortingWebhookConfigurationInstance) => any): Promise<PortingWebhookConfigurationInstance>;
    /**
     * Create a PortingWebhookConfigurationInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed PortingWebhookConfigurationInstance
     */
    create(params: object, callback?: (error: Error | null, item?: PortingWebhookConfigurationInstance) => any): Promise<PortingWebhookConfigurationInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PortingWebhookConfigurationListInstance(version: V1): PortingWebhookConfigurationListInstance;
interface PortingWebhookConfigurationResource {
    url: string;
    port_in_target_url: string;
    port_out_target_url: string;
    notifications_of: Array<string>;
}
export declare class PortingWebhookConfigurationInstance {
    protected _version: V1;
    constructor(_version: V1, payload: PortingWebhookConfigurationResource);
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
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        url: string;
        portInTargetUrl: string;
        portOutTargetUrl: string;
        notificationsOf: string[];
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
