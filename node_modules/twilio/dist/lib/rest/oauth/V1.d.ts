import OauthBase from "../OauthBase";
import Version from "../../base/Version";
import { DeviceCodeListInstance } from "./v1/deviceCode";
import { OauthListInstance } from "./v1/oauth";
import { OpenidDiscoveryListInstance } from "./v1/openidDiscovery";
import { TokenListInstance } from "./v1/token";
import { UserInfoListInstance } from "./v1/userInfo";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Oauth
     *
     * @param domain - The Twilio (Twilio.Oauth) domain
     */
    constructor(domain: OauthBase);
    /** deviceCode - { Twilio.Oauth.V1.DeviceCodeListInstance } resource */
    protected _deviceCode?: DeviceCodeListInstance;
    /** oauth - { Twilio.Oauth.V1.OauthListInstance } resource */
    protected _oauth?: OauthListInstance;
    /** openidDiscovery - { Twilio.Oauth.V1.OpenidDiscoveryListInstance } resource */
    protected _openidDiscovery?: OpenidDiscoveryListInstance;
    /** token - { Twilio.Oauth.V1.TokenListInstance } resource */
    protected _token?: TokenListInstance;
    /** userInfo - { Twilio.Oauth.V1.UserInfoListInstance } resource */
    protected _userInfo?: UserInfoListInstance;
    /** Getter for deviceCode resource */
    get deviceCode(): DeviceCodeListInstance;
    /** Getter for oauth resource */
    get oauth(): OauthListInstance;
    /** Getter for openidDiscovery resource */
    get openidDiscovery(): OpenidDiscoveryListInstance;
    /** Getter for token resource */
    get token(): TokenListInstance;
    /** Getter for userInfo resource */
    get userInfo(): UserInfoListInstance;
}
