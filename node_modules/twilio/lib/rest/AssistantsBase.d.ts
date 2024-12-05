import Domain from "../base/Domain";
import V1 from "./assistants/V1";
declare class AssistantsBase extends Domain {
    _v1?: V1;
    /**
     * Initialize assistants domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any);
    get v1(): V1;
}
export = AssistantsBase;
