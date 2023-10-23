import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AssistantListInstance } from "./understand/assistant";
export default class Understand extends Version {
    /**
     * Initialize the Understand version of Preview
     *
     * @param domain - The Twilio (Twilio.Preview) domain
     */
    constructor(domain: PreviewBase);
    /** assistants - { Twilio.Preview.Understand.AssistantListInstance } resource */
    protected _assistants?: AssistantListInstance;
    /** Getter for assistants resource */
    get assistants(): AssistantListInstance;
}
