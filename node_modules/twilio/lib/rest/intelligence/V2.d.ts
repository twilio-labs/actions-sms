import IntelligenceBase from "../IntelligenceBase";
import Version from "../../base/Version";
import { CustomOperatorListInstance } from "./v2/customOperator";
import { OperatorListInstance } from "./v2/operator";
import { OperatorAttachmentListInstance } from "./v2/operatorAttachment";
import { OperatorAttachmentsListInstance } from "./v2/operatorAttachments";
import { OperatorTypeListInstance } from "./v2/operatorType";
import { PrebuiltOperatorListInstance } from "./v2/prebuiltOperator";
import { ServiceListInstance } from "./v2/service";
import { TranscriptListInstance } from "./v2/transcript";
export default class V2 extends Version {
    /**
     * Initialize the V2 version of Intelligence
     *
     * @param domain - The Twilio (Twilio.Intelligence) domain
     */
    constructor(domain: IntelligenceBase);
    /** customOperators - { Twilio.Intelligence.V2.CustomOperatorListInstance } resource */
    protected _customOperators?: CustomOperatorListInstance;
    /** operators - { Twilio.Intelligence.V2.OperatorListInstance } resource */
    protected _operators?: OperatorListInstance;
    /** operatorAttachment - { Twilio.Intelligence.V2.OperatorAttachmentListInstance } resource */
    protected _operatorAttachment?: OperatorAttachmentListInstance;
    /** operatorAttachments - { Twilio.Intelligence.V2.OperatorAttachmentsListInstance } resource */
    protected _operatorAttachments?: OperatorAttachmentsListInstance;
    /** operatorType - { Twilio.Intelligence.V2.OperatorTypeListInstance } resource */
    protected _operatorType?: OperatorTypeListInstance;
    /** prebuiltOperators - { Twilio.Intelligence.V2.PrebuiltOperatorListInstance } resource */
    protected _prebuiltOperators?: PrebuiltOperatorListInstance;
    /** services - { Twilio.Intelligence.V2.ServiceListInstance } resource */
    protected _services?: ServiceListInstance;
    /** transcripts - { Twilio.Intelligence.V2.TranscriptListInstance } resource */
    protected _transcripts?: TranscriptListInstance;
    /** Getter for customOperators resource */
    get customOperators(): CustomOperatorListInstance;
    /** Getter for operators resource */
    get operators(): OperatorListInstance;
    /** Getter for operatorAttachment resource */
    get operatorAttachment(): OperatorAttachmentListInstance;
    /** Getter for operatorAttachments resource */
    get operatorAttachments(): OperatorAttachmentsListInstance;
    /** Getter for operatorType resource */
    get operatorType(): OperatorTypeListInstance;
    /** Getter for prebuiltOperators resource */
    get prebuiltOperators(): PrebuiltOperatorListInstance;
    /** Getter for services resource */
    get services(): ServiceListInstance;
    /** Getter for transcripts resource */
    get transcripts(): TranscriptListInstance;
}
