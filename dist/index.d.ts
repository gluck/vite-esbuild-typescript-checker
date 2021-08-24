import { PluginConfig } from "./helper";
import { Plugin } from "esbuild";
import { ViteDevServer } from "vite";
export declare function VitePlugin(config?: PluginConfig): {
    name: string;
    configureServer({ watcher, ws, config: { logger } }: ViteDevServer): void;
    writeBundle(options: any): Promise<void>;
};
export declare const EsbuildPlugin: (config: PluginConfig) => Plugin;
