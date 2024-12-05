import MarketplaceBase from "../MarketplaceBase";
import Version from "../../base/Version";
import { AvailableAddOnListInstance } from "./v1/availableAddOn";
import { InstalledAddOnListInstance } from "./v1/installedAddOn";
import { ModuleDataManagementListInstance } from "./v1/moduleDataManagement";
import { ReferralConversionListInstance } from "./v1/referralConversion";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Marketplace
     *
     * @param domain - The Twilio (Twilio.Marketplace) domain
     */
    constructor(domain: MarketplaceBase);
    /** availableAddOns - { Twilio.Marketplace.V1.AvailableAddOnListInstance } resource */
    protected _availableAddOns?: AvailableAddOnListInstance;
    /** installedAddOns - { Twilio.Marketplace.V1.InstalledAddOnListInstance } resource */
    protected _installedAddOns?: InstalledAddOnListInstance;
    /** moduleDataManagement - { Twilio.Marketplace.V1.ModuleDataManagementListInstance } resource */
    protected _moduleDataManagement?: ModuleDataManagementListInstance;
    /** referralConversion - { Twilio.Marketplace.V1.ReferralConversionListInstance } resource */
    protected _referralConversion?: ReferralConversionListInstance;
    /** Getter for availableAddOns resource */
    get availableAddOns(): AvailableAddOnListInstance;
    /** Getter for installedAddOns resource */
    get installedAddOns(): InstalledAddOnListInstance;
    /** Getter for moduleDataManagement resource */
    get moduleDataManagement(): ModuleDataManagementListInstance;
    /** Getter for referralConversion resource */
    get referralConversion(): ReferralConversionListInstance;
}
