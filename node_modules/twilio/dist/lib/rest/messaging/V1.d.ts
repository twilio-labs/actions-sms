import MessagingBase from "../MessagingBase";
import Version from "../../base/Version";
import { BrandRegistrationListInstance } from "./v1/brandRegistration";
import { DeactivationsListInstance } from "./v1/deactivations";
import { DomainCertsListInstance } from "./v1/domainCerts";
import { DomainConfigListInstance } from "./v1/domainConfig";
import { ExternalCampaignListInstance } from "./v1/externalCampaign";
import { ServiceListInstance } from "./v1/service";
import { TollfreeVerificationListInstance } from "./v1/tollfreeVerification";
import { UsecaseListInstance } from "./v1/usecase";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Messaging
     *
     * @param domain - The Twilio (Twilio.Messaging) domain
     */
    constructor(domain: MessagingBase);
    /** brandRegistrations - { Twilio.Messaging.V1.BrandRegistrationListInstance } resource */
    protected _brandRegistrations?: BrandRegistrationListInstance;
    /** deactivations - { Twilio.Messaging.V1.DeactivationsListInstance } resource */
    protected _deactivations?: DeactivationsListInstance;
    /** domainCerts - { Twilio.Messaging.V1.DomainCertsListInstance } resource */
    protected _domainCerts?: DomainCertsListInstance;
    /** domainConfig - { Twilio.Messaging.V1.DomainConfigListInstance } resource */
    protected _domainConfig?: DomainConfigListInstance;
    /** externalCampaign - { Twilio.Messaging.V1.ExternalCampaignListInstance } resource */
    protected _externalCampaign?: ExternalCampaignListInstance;
    /** services - { Twilio.Messaging.V1.ServiceListInstance } resource */
    protected _services?: ServiceListInstance;
    /** tollfreeVerifications - { Twilio.Messaging.V1.TollfreeVerificationListInstance } resource */
    protected _tollfreeVerifications?: TollfreeVerificationListInstance;
    /** usecases - { Twilio.Messaging.V1.UsecaseListInstance } resource */
    protected _usecases?: UsecaseListInstance;
    /** Getter for brandRegistrations resource */
    get brandRegistrations(): BrandRegistrationListInstance;
    /** Getter for deactivations resource */
    get deactivations(): DeactivationsListInstance;
    /** Getter for domainCerts resource */
    get domainCerts(): DomainCertsListInstance;
    /** Getter for domainConfig resource */
    get domainConfig(): DomainConfigListInstance;
    /** Getter for externalCampaign resource */
    get externalCampaign(): ExternalCampaignListInstance;
    /** Getter for services resource */
    get services(): ServiceListInstance;
    /** Getter for tollfreeVerifications resource */
    get tollfreeVerifications(): TollfreeVerificationListInstance;
    /** Getter for usecases resource */
    get usecases(): UsecaseListInstance;
}
