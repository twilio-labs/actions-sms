import OauthBase from "../OauthBase";
import Version from "../../base/Version";
import { AuthorizeListInstance } from "./v1/authorize";
import { TokenListInstance } from "./v1/token";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Oauth
     *
     * @param domain - The Twilio (Twilio.Oauth) domain
     */
    constructor(domain: OauthBase);
    /** authorize - { Twilio.Oauth.V1.AuthorizeListInstance } resource */
    protected _authorize?: AuthorizeListInstance;
    /** token - { Twilio.Oauth.V1.TokenListInstance } resource */
    protected _token?: TokenListInstance;
    /** Getter for authorize resource */
    get authorize(): AuthorizeListInstance;
    /** Getter for token resource */
    get token(): TokenListInstance;
}
