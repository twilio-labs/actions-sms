import IamBase from "../IamBase";
import Version from "../../base/Version";
import { ApiKeyListInstance } from "./v1/apiKey";
import { GetApiKeysListInstance } from "./v1/getApiKeys";
import { KeyListInstance } from "./v1/key";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Iam
     *
     * @param domain - The Twilio (Twilio.Iam) domain
     */
    constructor(domain: IamBase);
    /** apiKey - { Twilio.Iam.V1.ApiKeyListInstance } resource */
    protected _apiKey?: ApiKeyListInstance;
    /** getApiKeys - { Twilio.Iam.V1.GetApiKeysListInstance } resource */
    protected _getApiKeys?: GetApiKeysListInstance;
    /** keys - { Twilio.Iam.V1.KeyListInstance } resource */
    protected _keys?: KeyListInstance;
    /** Getter for apiKey resource */
    get apiKey(): ApiKeyListInstance;
    /** Getter for getApiKeys resource */
    get getApiKeys(): GetApiKeysListInstance;
    /** Getter for keys resource */
    get keys(): KeyListInstance;
}
