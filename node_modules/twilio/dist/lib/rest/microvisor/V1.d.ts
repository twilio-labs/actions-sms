import MicrovisorBase from "../MicrovisorBase";
import Version from "../../base/Version";
import { AppListInstance } from "./v1/app";
import { DeviceListInstance } from "./v1/device";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Microvisor
     *
     * @param domain - The Twilio (Twilio.Microvisor) domain
     */
    constructor(domain: MicrovisorBase);
    /** apps - { Twilio.Microvisor.V1.AppListInstance } resource */
    protected _apps?: AppListInstance;
    /** devices - { Twilio.Microvisor.V1.DeviceListInstance } resource */
    protected _devices?: DeviceListInstance;
    /** Getter for apps resource */
    get apps(): AppListInstance;
    /** Getter for devices resource */
    get devices(): DeviceListInstance;
}
