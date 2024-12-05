/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
export interface KnowledgeStatusContext {
    /**
     * Fetch a KnowledgeStatusInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeStatusInstance
     */
    fetch(callback?: (error: Error | null, item?: KnowledgeStatusInstance) => any): Promise<KnowledgeStatusInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface KnowledgeStatusContextSolution {
    id: string;
}
export declare class KnowledgeStatusContextImpl implements KnowledgeStatusContext {
    protected _version: V1;
    protected _solution: KnowledgeStatusContextSolution;
    protected _uri: string;
    constructor(_version: V1, id: string);
    fetch(callback?: (error: Error | null, item?: KnowledgeStatusInstance) => any): Promise<KnowledgeStatusInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): KnowledgeStatusContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface KnowledgeStatusResource {
    account_sid: string;
    status: string;
    last_status: string;
    date_updated: Date;
}
export declare class KnowledgeStatusInstance {
    protected _version: V1;
    protected _solution: KnowledgeStatusContextSolution;
    protected _context?: KnowledgeStatusContext;
    constructor(_version: V1, payload: KnowledgeStatusResource, id: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
     */
    accountSid: string;
    /**
     * The status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
     */
    status: string;
    /**
     * The last status of processing the knowledge source (\'QUEUED\', \'PROCESSING\', \'COMPLETED\', \'FAILED\')
     */
    lastStatus: string;
    /**
     * The date and time in GMT when the Knowledge was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated: Date;
    private get _proxy();
    /**
     * Fetch a KnowledgeStatusInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed KnowledgeStatusInstance
     */
    fetch(callback?: (error: Error | null, item?: KnowledgeStatusInstance) => any): Promise<KnowledgeStatusInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        status: string;
        lastStatus: string;
        dateUpdated: Date;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface KnowledgeStatusSolution {
    id: string;
}
export interface KnowledgeStatusListInstance {
    _version: V1;
    _solution: KnowledgeStatusSolution;
    _uri: string;
    (): KnowledgeStatusContext;
    get(): KnowledgeStatusContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function KnowledgeStatusListInstance(version: V1, id: string): KnowledgeStatusListInstance;
export {};
