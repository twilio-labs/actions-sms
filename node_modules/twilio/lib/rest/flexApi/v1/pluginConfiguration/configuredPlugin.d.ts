/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
/**
 * Options to pass to fetch a ConfiguredPluginInstance
 */
export interface ConfiguredPluginContextFetchOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
}
/**
 * Options to pass to each
 */
export interface ConfiguredPluginListInstanceEachOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Function to process each record. If this and a positional callback are passed, this one will be used */
    callback?: (item: ConfiguredPluginInstance, done: (err?: Error) => void) => void;
    /** Function to be called upon completion of streaming */
    done?: Function;
    /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to list
 */
export interface ConfiguredPluginListInstanceOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
    limit?: number;
}
/**
 * Options to pass to page
 */
export interface ConfiguredPluginListInstancePageOptions {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
    pageSize?: number;
    /** Page Number, this value is simply for client state */
    pageNumber?: number;
    /** PageToken provided by the API */
    pageToken?: string;
}
export interface ConfiguredPluginContext {
    /**
     * Fetch a ConfiguredPluginInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConfiguredPluginInstance
     */
    fetch(callback?: (error: Error | null, item?: ConfiguredPluginInstance) => any): Promise<ConfiguredPluginInstance>;
    /**
     * Fetch a ConfiguredPluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConfiguredPluginInstance
     */
    fetch(params: ConfiguredPluginContextFetchOptions, callback?: (error: Error | null, item?: ConfiguredPluginInstance) => any): Promise<ConfiguredPluginInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface ConfiguredPluginContextSolution {
    configurationSid: string;
    pluginSid: string;
}
export declare class ConfiguredPluginContextImpl implements ConfiguredPluginContext {
    protected _version: V1;
    protected _solution: ConfiguredPluginContextSolution;
    protected _uri: string;
    constructor(_version: V1, configurationSid: string, pluginSid: string);
    fetch(params?: ConfiguredPluginContextFetchOptions | ((error: Error | null, item?: ConfiguredPluginInstance) => any), callback?: (error: Error | null, item?: ConfiguredPluginInstance) => any): Promise<ConfiguredPluginInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): ConfiguredPluginContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface ConfiguredPluginPayload extends TwilioResponsePayload {
    plugins: ConfiguredPluginResource[];
}
interface ConfiguredPluginResource {
    account_sid: string;
    configuration_sid: string;
    plugin_sid: string;
    plugin_version_sid: string;
    phase: number;
    plugin_url: string;
    unique_name: string;
    friendly_name: string;
    description: string;
    plugin_archived: boolean;
    version: string;
    changelog: string;
    plugin_version_archived: boolean;
    private: boolean;
    date_created: Date;
    url: string;
}
export declare class ConfiguredPluginInstance {
    protected _version: V1;
    protected _solution: ConfiguredPluginContextSolution;
    protected _context?: ConfiguredPluginContext;
    constructor(_version: V1, payload: ConfiguredPluginResource, configurationSid: string, pluginSid?: string);
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Flex Plugin resource is installed for.
     */
    accountSid: string;
    /**
     * The SID of the Flex Plugin Configuration that this Flex Plugin belongs to.
     */
    configurationSid: string;
    /**
     * The SID of the Flex Plugin.
     */
    pluginSid: string;
    /**
     * The SID of the Flex Plugin Version.
     */
    pluginVersionSid: string;
    /**
     * The phase this Flex Plugin would initialize at runtime.
     */
    phase: number;
    /**
     * The URL of where the Flex Plugin Version JavaScript bundle is hosted on.
     */
    pluginUrl: string;
    /**
     * The name that uniquely identifies this Flex Plugin resource.
     */
    uniqueName: string;
    /**
     * The friendly name of this Flex Plugin resource.
     */
    friendlyName: string;
    /**
     * A descriptive string that you create to describe the plugin resource. It can be up to 500 characters long
     */
    description: string;
    /**
     * Whether the Flex Plugin is archived. The default value is false.
     */
    pluginArchived: boolean;
    /**
     * The latest version of this Flex Plugin Version.
     */
    version: string;
    /**
     * A changelog that describes the changes this Flex Plugin Version brings.
     */
    changelog: string;
    /**
     * Whether the Flex Plugin Version is archived. The default value is false.
     */
    pluginVersionArchived: boolean;
    /**
     * Whether to validate the request is authorized to access the Flex Plugin Version.
     */
    _private: boolean;
    /**
     * The date and time in GMT when the Flex Plugin was installed specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated: Date;
    /**
     * The absolute URL of the Flex Plugin resource.
     */
    url: string;
    private get _proxy();
    /**
     * Fetch a ConfiguredPluginInstance
     *
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConfiguredPluginInstance
     */
    fetch(callback?: (error: Error | null, item?: ConfiguredPluginInstance) => any): Promise<ConfiguredPluginInstance>;
    /**
     * Fetch a ConfiguredPluginInstance
     *
     * @param params - Parameter for request
     * @param callback - Callback to handle processed record
     *
     * @returns Resolves to processed ConfiguredPluginInstance
     */
    fetch(params: ConfiguredPluginContextFetchOptions, callback?: (error: Error | null, item?: ConfiguredPluginInstance) => any): Promise<ConfiguredPluginInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string;
        configurationSid: string;
        pluginSid: string;
        pluginVersionSid: string;
        phase: number;
        pluginUrl: string;
        uniqueName: string;
        friendlyName: string;
        description: string;
        pluginArchived: boolean;
        version: string;
        changelog: string;
        pluginVersionArchived: boolean;
        _private: boolean;
        dateCreated: Date;
        url: string;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface ConfiguredPluginSolution {
    configurationSid: string;
}
export interface ConfiguredPluginListInstance {
    _version: V1;
    _solution: ConfiguredPluginSolution;
    _uri: string;
    (pluginSid: string): ConfiguredPluginContext;
    get(pluginSid: string): ConfiguredPluginContext;
    /**
     * Streams ConfiguredPluginInstance records from the API.
     *
     * This operation lazily loads records as efficiently as possible until the limit
     * is reached.
     *
     * The results are passed into the callback function, so this operation is memory
     * efficient.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConfiguredPluginListInstanceEachOptions } [params] - Options for request
     * @param { function } [callback] - Function to process each record
     */
    each(callback?: (item: ConfiguredPluginInstance, done: (err?: Error) => void) => void): void;
    each(params: ConfiguredPluginListInstanceEachOptions, callback?: (item: ConfiguredPluginInstance, done: (err?: Error) => void) => void): void;
    /**
     * Retrieve a single target page of ConfiguredPluginInstance records from the API.
     *
     * The request is executed immediately.
     *
     * @param { string } [targetUrl] - API-generated URL for the requested results page
     * @param { function } [callback] - Callback to handle list of records
     */
    getPage(targetUrl: string, callback?: (error: Error | null, items: ConfiguredPluginPage) => any): Promise<ConfiguredPluginPage>;
    /**
     * Lists ConfiguredPluginInstance records from the API as a list.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConfiguredPluginListInstanceOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    list(callback?: (error: Error | null, items: ConfiguredPluginInstance[]) => any): Promise<ConfiguredPluginInstance[]>;
    list(params: ConfiguredPluginListInstanceOptions, callback?: (error: Error | null, items: ConfiguredPluginInstance[]) => any): Promise<ConfiguredPluginInstance[]>;
    /**
     * Retrieve a single page of ConfiguredPluginInstance records from the API.
     *
     * The request is executed immediately.
     *
     * If a function is passed as the first argument, it will be used as the callback
     * function.
     *
     * @param { ConfiguredPluginListInstancePageOptions } [params] - Options for request
     * @param { function } [callback] - Callback to handle list of records
     */
    page(callback?: (error: Error | null, items: ConfiguredPluginPage) => any): Promise<ConfiguredPluginPage>;
    page(params: ConfiguredPluginListInstancePageOptions, callback?: (error: Error | null, items: ConfiguredPluginPage) => any): Promise<ConfiguredPluginPage>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export declare function ConfiguredPluginListInstance(version: V1, configurationSid: string): ConfiguredPluginListInstance;
export declare class ConfiguredPluginPage extends Page<V1, ConfiguredPluginPayload, ConfiguredPluginResource, ConfiguredPluginInstance> {
    /**
     * Initialize the ConfiguredPluginPage
     *
     * @param version - Version of the resource
     * @param response - Response from the API
     * @param solution - Path solution
     */
    constructor(version: V1, response: Response<string>, solution: ConfiguredPluginSolution);
    /**
     * Build an instance of ConfiguredPluginInstance
     *
     * @param payload - Payload response from the API
     */
    getInstance(payload: ConfiguredPluginResource): ConfiguredPluginInstance;
    [inspect.custom](depth: any, options: InspectOptions): string;
}
export {};
