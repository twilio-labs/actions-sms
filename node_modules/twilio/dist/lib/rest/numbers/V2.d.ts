import NumbersBase from "../NumbersBase";
import Version from "../../base/Version";
import { RegulatoryComplianceListInstance } from "./v2/regulatoryCompliance";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Numbers
     *
     * @param domain - The Twilio (Twilio.Numbers) domain
     */
    constructor(domain: NumbersBase);
    /** regulatoryCompliance - { Twilio.Numbers.V2.RegulatoryComplianceListInstance } resource */
    protected _regulatoryCompliance?: RegulatoryComplianceListInstance;
    /** Getter for regulatoryCompliance resource */
    get regulatoryCompliance(): RegulatoryComplianceListInstance;
}
