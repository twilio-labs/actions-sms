import ContentBase from "../ContentBase";
import Version from "../../base/Version";
import { ContentListInstance } from "./v1/content";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Content
     *
     * @param domain - The Twilio (Twilio.Content) domain
     */
    constructor(domain: ContentBase);
    /** contents - { Twilio.Content.V1.ContentListInstance } resource */
    protected _contents?: ContentListInstance;
    /** Getter for contents resource */
    get contents(): ContentListInstance;
}
