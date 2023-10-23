/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
export interface UserInfoContext {
    /**
     * Fetch a UserInfoInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed UserInfoInstance
     */
    fetch(callback?: (error: Error | null, item?: UserInfoInstance) => any): Promise<UserInfoInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UserInfoContextSolution {
}
export declare class UserInfoContextImpl implements UserInfoContext {
    protected _version: V1;
    protected _solution: UserInfoContextSolution;
    protected _uri: string;
    constructor(_version: V1);
    fetch(callback?: (error: Error | null, item?: UserInfoInstance) => any): Promise<UserInfoInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): UserInfoContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface UserInfoResource {
    user_sid: string;
    first_name: string;
    last_name: string;
    friendly_name: string;
    email: string;
    url: string;
}
export declare class UserInfoInstance {
    protected _version: V1;
    protected _solution: UserInfoContextSolution;
    protected _context?: UserInfoContext;
    constructor(_version: V1, payload: UserInfoResource);
    /**
     * The URL of the party that will create the token and sign it with its private key.
     */
    userSid: string;
    /**
     * The first name of the end-user.
     */
    firstName: string;
    /**
     * The last name of the end-user.
     */
    lastName: string;
    /**
     * The friendly name of the end-user.
     */
    friendlyName: string;
    /**
     * The end-user\'s preferred email address.
     */
    email: string;
    url: string;
    private get _proxy();
    /**
     * Fetch a UserInfoInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed UserInfoInstance
     */
    fetch(callback?: (error: Error | null, item?: UserInfoInstance) => any): Promise<UserInfoInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        userSid: string;
        firstName: string;
        lastName: string;
        friendlyName: string;
        email: string;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface UserInfoSolution {
}
export interface UserInfoListInstance {
    _version: V1;
    _solution: UserInfoSolution;
    _uri: string;
    (): UserInfoContext;
    get(): UserInfoContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function UserInfoListInstance(version: V1): UserInfoListInstance;
export {};
