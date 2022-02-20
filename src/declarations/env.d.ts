/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
