/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
export interface FlexUserContext {
    /**
     * Fetch a FlexUserInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FlexUserInstance
     */
    fetch(callback?: (error: Error | null, item?: FlexUserInstance) => any): Promise<FlexUserInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FlexUserContextSolution {
    instanceSid: string;
    flexUserSid: string;
}
export declare class FlexUserContextImpl implements FlexUserContext {
    protected _version: V2;
    protected _solution: FlexUserContextSolution;
    protected _uri: string;
    constructor(_version: V2, instanceSid: string, flexUserSid: string);
    fetch(callback?: (error: Error | null, item?: FlexUserInstance) => any): Promise<FlexUserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FlexUserContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FlexUserResource {
    account_sid: string;
    instance_sid: string;
    user_sid: string;
    flex_user_sid: string;
    worker_sid: string;
    workspace_sid: string;
    flex_team_sid: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    friendly_name: string;
    created_date: Date;
    updated_date: Date;
    version: number;
    url: string;
}
export declare class FlexUserInstance {
    protected _version: V2;
    protected _solution: FlexUserContextSolution;
    protected _context?: FlexUserContext;
    constructor(_version: V2, payload: FlexUserResource, instanceSid?: string, flexUserSid?: string);
    /**
     * The unique SID of the account that created the resource.
     */
    accountSid: string;
    /**
     * The unique ID created by Twilio to identify a Flex instance.
     */
    instanceSid: string;
    /**
     * The unique SID identifier of the Twilio Unified User.
     */
    userSid: string;
    /**
     * The unique SID identifier of the Flex User.
     */
    flexUserSid: string;
    /**
     * The unique SID identifier of the worker.
     */
    workerSid: string;
    /**
     * The unique SID identifier of the workspace.
     */
    workspaceSid: string;
    /**
     * The unique SID identifier of the Flex Team.
     */
    flexTeamSid: string;
    /**
     * First name of the User.
     */
    firstName: string;
    /**
     * Last name of the User.
     */
    lastName: string;
    /**
     * Username of the User.
     */
    username: string;
    /**
     * Email of the User.
     */
    email: string;
    /**
     * Friendly name of the User.
     */
    friendlyName: string;
    /**
     * The date that this user was created, given in ISO 8601 format.
     */
    createdDate: Date;
    /**
     * The date that this user was updated, given in ISO 8601 format.
     */
    updatedDate: Date;
    /**
     * The current version of the user.
     */
    version: number;
    url: string;
    private get _proxy();
    /**
     * Fetch a FlexUserInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed FlexUserInstance
     */
    fetch(callback?: (error: Error | null, item?: FlexUserInstance) => any): Promise<FlexUserInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        instanceSid: string;
        userSid: string;
        flexUserSid: string;
        workerSid: string;
        workspaceSid: string;
        flexTeamSid: string;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        friendlyName: string;
        createdDate: Date;
        updatedDate: Date;
        version: number;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FlexUserSolution {
}
export interface FlexUserListInstance {
    _version: V2;
    _solution: FlexUserSolution;
    _uri: string;
    (instanceSid: string, flexUserSid: string): FlexUserContext;
    get(instanceSid: string, flexUserSid: string): FlexUserContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function FlexUserListInstance(version: V2): FlexUserListInstance;
export {};
