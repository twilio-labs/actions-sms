export declare abstract class Grant<TOptions, TPayload, TKey> {
    key?: TKey;
    constructor(opts?: TOptions);
    abstract toPayload(): TPayload;
}
export interface TaskRouterGrantOptions {
    workspaceSid?: string;
    workerSid?: string;
    role?: string;
}
export interface TaskRouterGrantPayload {
    workspace_sid?: string;
    worker_sid?: string;
    role?: string;
}
export interface ChatGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    deploymentRoleSid?: string;
    pushCredentialSid?: string;
}
export interface ChatGrantPayload {
    service_sid?: string;
    endpoint_id?: string;
    deployment_role_sid?: string;
    push_credential_sid?: string;
}
export interface VideoGrantOptions {
    room?: string;
}
export interface VideoGrantPayload {
    room?: string;
}
export interface SyncGrantOptions {
    serviceSid?: string;
    endpointId?: string;
}
export interface SyncGrantPayload {
    service_sid?: string;
    endpoint_id?: string;
}
export interface VoiceGrantOptions {
    incomingAllow?: boolean;
    outgoingApplicationSid?: string;
    outgoingApplicationParams?: object;
    pushCredentialSid?: string;
    endpointId?: string;
}
export interface VoiceGrantPayload {
    incoming?: {
        allow: boolean;
    };
    outgoing?: {
        application_sid: string;
        params?: object;
    };
    push_credential_sid?: string;
    endpoint_id?: string;
}
export interface PlaybackGrantOptions {
    grant?: object;
}
export interface PlaybackGrantPayload {
    grant?: object;
}
export interface AccessTokenOptions {
    /**
     * Time to live in seconds
     */
    ttl?: number;
    /**
     * The identity of the first person. Required.
     */
    identity: string;
    /**
     * Time from epoch in seconds for not before value
     */
    nbf?: number;
    /**
     * The region value associated with this account
     */
    region?: string;
}
type ALGORITHMS = "HS256" | "HS384" | "HS512";
declare class TaskRouterGrant extends Grant<TaskRouterGrantOptions, TaskRouterGrantPayload, "task_router"> implements TaskRouterGrantOptions {
    workspaceSid?: string;
    workerSid?: string;
    role?: string;
    /**
     * @param options - ...
     * @param options.workspaceSid - The workspace unique ID
     * @param options.workerSid - The worker unique ID
     * @param options.role - The role of the grant
     */
    constructor(options?: TaskRouterGrantOptions);
    toPayload(): TaskRouterGrantPayload;
}
export declare class ChatGrant extends Grant<ChatGrantOptions, ChatGrantPayload, "chat"> implements ChatGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    deploymentRoleSid?: string;
    pushCredentialSid?: string;
    /**
     * @param options - ...
     * @param options.serviceSid - The service unique ID
     * @param options.endpointId - The endpoint ID
     * @param options.deploymentRoleSid - SID of the deployment role to be
     *                 assigned to the user
     * @param options.pushCredentialSid - The Push Credentials SID
     */
    constructor(options?: ChatGrantOptions);
    toPayload(): ChatGrantPayload;
}
declare class VideoGrant extends Grant<VideoGrantOptions, VideoGrantPayload, "video"> implements VideoGrantOptions {
    room?: string;
    /**
     * @param options - ...
     * @param options.room - The Room name or Room sid.
     */
    constructor(options?: VideoGrantOptions);
    toPayload(): VideoGrantPayload;
}
declare class SyncGrant extends Grant<SyncGrantOptions, SyncGrantPayload, "data_sync"> implements SyncGrantOptions {
    serviceSid?: string;
    endpointId?: string;
    /**
     * @param options.serviceSid - The service unique ID
     * @param options.endpointId - The endpoint ID
     */
    constructor(options?: SyncGrantOptions);
    toPayload(): SyncGrantPayload;
}
declare class VoiceGrant extends Grant<VoiceGrantOptions, VoiceGrantPayload, "voice"> implements VoiceGrantOptions {
    incomingAllow?: boolean;
    outgoingApplicationSid?: string;
    outgoingApplicationParams?: object;
    pushCredentialSid?: string;
    endpointId?: string;
    /**
     * @param options - ...
     * @param options.incomingAllow - Whether or not this endpoint is allowed to receive incoming calls as grants.identity
     * @param options.outgoingApplicationSid - application sid to call when placing outgoing call
     * @param options.outgoingApplicationParams - request params to pass to the application
     * @param options.pushCredentialSid - Push Credential Sid to use when registering to receive incoming call notifications
     * @param options.endpointId - Specify an endpoint identifier for this device, which will allow the developer
     *                 to direct calls to a specific endpoint when multiple devices are associated with a single identity
     */
    constructor(options?: VoiceGrantOptions);
    toPayload(): VoiceGrantPayload;
}
declare class PlaybackGrant extends Grant<PlaybackGrantOptions, PlaybackGrantPayload, "player"> implements PlaybackGrantOptions {
    grant?: object;
    /**
     * @param options - ...
     * @param options.grant - The PlaybackGrant retrieved from Twilio's API
     */
    constructor(options?: PlaybackGrantOptions);
    toPayload(): PlaybackGrantPayload;
}
export default class AccessToken implements AccessTokenOptions {
    static DEFAULT_ALGORITHM: "HS256";
    static ALGORITHMS: ALGORITHMS[];
    static ChatGrant: typeof ChatGrant;
    static VoiceGrant: typeof VoiceGrant;
    static SyncGrant: typeof SyncGrant;
    static VideoGrant: typeof VideoGrant;
    static TaskRouterGrant: typeof TaskRouterGrant;
    static PlaybackGrant: typeof PlaybackGrant;
    accountSid: string;
    keySid: string;
    secret: string;
    ttl: number;
    identity: string;
    nbf?: number;
    region?: string;
    grants: Grant<any, any, any>[];
    /**
     * @param accountSid - The account's unique ID to which access is scoped
     * @param keySid - The signing key's unique ID
     * @param secret - The secret to sign the token with
     * @param options - ...
     * @param options.ttl - Time to live in seconds (default 3600)
     * @param options.identity - The identity of the first person. Required.
     * @param options.nbf - Time from epoch in seconds for not before value
     * @param options.region - The region value associated with this account
     */
    constructor(accountSid: string, keySid: string, secret: string, options: AccessTokenOptions);
    addGrant<T extends Grant<any, any, any>>(grant: T): void;
    toJwt(algorithm?: ALGORITHMS): string;
}
export {};
