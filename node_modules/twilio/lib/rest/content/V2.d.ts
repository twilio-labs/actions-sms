import ContentBase from "../ContentBase";
import Version from "../../base/Version";
import { ContentListInstance } from "./v2/content";
import { ContentAndApprovalsListInstance } from "./v2/contentAndApprovals";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Content
     *
     * @param domain - The Twilio (Twilio.Content) domain
     */
    constructor(domain: ContentBase);
    /** contents - { Twilio.Content.V2.ContentListInstance } resource */
    protected _contents?: ContentListInstance;
    /** contentAndApprovals - { Twilio.Content.V2.ContentAndApprovalsListInstance } resource */
    protected _contentAndApprovals?: ContentAndApprovalsListInstance;
    /** Getter for contents resource */
    get contents(): ContentListInstance;
    /** Getter for contentAndApprovals resource */
    get contentAndApprovals(): ContentAndApprovalsListInstance;
}
