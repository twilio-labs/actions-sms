/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export declare class MarketplaceV1InstalledAddOnInstalledAddOnUsage {
    /**
     * Total amount in local currency that was billed in this request. Aggregates all billable_items that were successfully submitted.
     */
    "totalSubmitted"?: number;
    "billableItems": Array<MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems>;
}
export declare class MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems {
    /**
     * Total amount in local currency that was billed for this Billing Item. Can be any floating number greater than 0.
     */
    "quantity": number;
    /**
     * BillingSid to use for billing.
     */
    "sid": string;
    /**
     * Whether the billing event was successfully generated for this Billable Item.
     */
    "submitted"?: boolean;
}
/**
 * Options to pass to create a InstalledAddOnUsageInstance
 */
export interface InstalledAddOnUsageListInstanceCreateOptions {
    /**  */
    marketplaceV1InstalledAddOnInstalledAddOnUsage: MarketplaceV1InstalledAddOnInstalledAddOnUsage;
}
export interface InstalledAddOnUsageSolution {
    installedAddOnSid: string;
}
export interface InstalledAddOnUsageListInstance {
    _version: V1;
    _solution: InstalledAddOnUsageSolution;
    _uri: string;
    /**
     * Create a InstalledAddOnUsageInstance
     *
     * @param params - Body for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed InstalledAddOnUsageInstance
     */
    create(params: MarketplaceV1InstalledAddOnInstalledAddOnUsage, callback?: (error: Error | null, item?: InstalledAddOnUsageInstance) => any): Promise<InstalledAddOnUsageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function InstalledAddOnUsageListInstance(version: V1, installedAddOnSid: string): InstalledAddOnUsageListInstance;
interface InstalledAddOnUsageResource {
    total_submitted: number;
    billable_items: Array<MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems>;
}
export declare class InstalledAddOnUsageInstance {
    protected _version: V1;
    constructor(_version: V1, payload: InstalledAddOnUsageResource, installedAddOnSid: string);
    /**
     * Total amount in local currency that was billed in this request. Aggregates all billable_items that were successfully submitted.
     */
    totalSubmitted: number;
    billableItems: Array<MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        totalSubmitted: number;
        billableItems: MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems[];
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
