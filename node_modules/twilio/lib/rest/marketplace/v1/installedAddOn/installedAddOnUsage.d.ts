/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export declare class CreateBillingUsageRequest {
    "billableItems"?: Array<CreateBillingUsageRequestBillableItems>;
}
export declare class CreateBillingUsageRequestBillableItems {
    /**
     *
     */
    "quantity": number;
    /**
     *
     */
    "sid": string;
}
export declare class MarketplaceV1InstalledAddOnBillingUsageResponseBillableItems {
    /**
     *
     */
    "quantity"?: number;
    /**
     *
     */
    "sid"?: string;
    /**
     * Whether this billable item was successfully submitted for billing.
     */
    "submitted"?: boolean;
}
/**
 * Options to pass to create a InstalledAddOnUsageInstance
 */
export interface InstalledAddOnUsageListInstanceCreateOptions {
    /**  */
    createBillingUsageRequest: CreateBillingUsageRequest;
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
    create(params: CreateBillingUsageRequest, callback?: (error: Error | null, item?: InstalledAddOnUsageInstance) => any): Promise<InstalledAddOnUsageInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function InstalledAddOnUsageListInstance(version: V1, installedAddOnSid: string): InstalledAddOnUsageListInstance;
interface InstalledAddOnUsageResource {
    billable_items: Array<MarketplaceV1InstalledAddOnBillingUsageResponseBillableItems>;
    total_submitted: number;
}
export declare class InstalledAddOnUsageInstance {
    protected _version: V1;
    constructor(_version: V1, payload: InstalledAddOnUsageResource, installedAddOnSid: string);
    billableItems: Array<MarketplaceV1InstalledAddOnBillingUsageResponseBillableItems>;
    /**
     * Represents the total quantity submitted.
     */
    totalSubmitted: number;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        billableItems: MarketplaceV1InstalledAddOnBillingUsageResponseBillableItems[];
        totalSubmitted: number;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
