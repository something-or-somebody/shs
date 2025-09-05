/// <reference types="vite/client" />

declare const PRODUCTION: boolean;

declare type ApplicationInfo = {
    name: string;
    version: string;
    description: string;
    author: string;
}

declare const APP_MANIFEST: ApplicationInfo;

interface ImportMeta {
    globEager: any;
}
