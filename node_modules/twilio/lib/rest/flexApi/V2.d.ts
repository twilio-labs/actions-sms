import FlexApiBase from "../FlexApiBase";
import Version from "../../base/Version";
import { FlexUserListInstance } from "./v2/flexUser";
import { WebChannelsListInstance } from "./v2/webChannels";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of FlexApi
     *
     * @param domain - The Twilio (Twilio.FlexApi) domain
     */
    constructor(domain: FlexApiBase);
    /** flexUser - { Twilio.FlexApi.V2.FlexUserListInstance } resource */
    protected _flexUser?: FlexUserListInstance;
    /** webChannels - { Twilio.FlexApi.V2.WebChannelsListInstance } resource */
    protected _webChannels?: WebChannelsListInstance;
    /** Getter for flexUser resource */
    get flexUser(): FlexUserListInstance;
    /** Getter for webChannels resource */
    get webChannels(): WebChannelsListInstance;
}
