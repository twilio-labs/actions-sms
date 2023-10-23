import AutopilotBase from "../AutopilotBase";
import Version from "../../base/Version";
import { AssistantListInstance } from "./v1/assistant";
import { RestoreAssistantListInstance } from "./v1/restoreAssistant";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Autopilot
     *
     * @param domain - The Twilio (Twilio.Autopilot) domain
     */
    constructor(domain: AutopilotBase);
    /** assistants - { Twilio.Autopilot.V1.AssistantListInstance } resource */
    protected _assistants?: AssistantListInstance;
    /** restoreAssistant - { Twilio.Autopilot.V1.RestoreAssistantListInstance } resource */
    protected _restoreAssistant?: RestoreAssistantListInstance;
    /** Getter for assistants resource */
    get assistants(): AssistantListInstance;
    /** Getter for restoreAssistant resource */
    get restoreAssistant(): RestoreAssistantListInstance;
}
