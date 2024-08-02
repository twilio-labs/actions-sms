/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export type PortingWebhookConfigurationDeleteWebhookType = "PORT_IN" | "PORT_OUT";
export interface PortingWebhookConfigurationDeleteContext {
    /**
     * Remove a PortingWebhookConfigurationDeleteInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed boolean
     */
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PortingWebhookConfigurationDeleteContextSolution {
    webhookType: PortingWebhookConfigurationDeleteWebhookType;
}
export declare class PortingWebhookConfigurationDeleteContextImpl implements PortingWebhookConfigurationDeleteContext {
    protected _version: V1;
    protected _solution: PortingWebhookConfigurationDeleteContextSolution;
    protected _uri: string;
    constructor(_version: V1, webhookType: PortingWebhookConfigurationDeleteWebhookType);
    remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): PortingWebhookConfigurationDeleteContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface PortingWebhookConfigurationDeleteSolution {
}
export interface PortingWebhookConfigurationDeleteListInstance {
    _version: V1;
    _solution: PortingWebhookConfigurationDeleteSolution;
    _uri: string;
    (webhookType: PortingWebhookConfigurationDeleteWebhookType): PortingWebhookConfigurationDeleteContext;
    get(webhookType: PortingWebhookConfigurationDeleteWebhookType): PortingWebhookConfigurationDeleteContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function PortingWebhookConfigurationDeleteListInstance(version: V1): PortingWebhookConfigurationDeleteListInstance;
