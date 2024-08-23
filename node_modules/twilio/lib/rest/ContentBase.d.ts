import Domain from "../base/Domain";
import V1 from "./content/V1";
import V2 from "./content/V2";
declare class ContentBase extends Domain {
    _v1?: V1;
    _v2?: V2;
    /**
     * Initialize content domain
     *
     * @param twilio - The twilio client
     */
    constructor(twilio: any);
    get v1(): V1;
    get v2(): V2;
}
export = ContentBase;
