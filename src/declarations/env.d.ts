/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_API_BASE_URL: string;
  readonly APP_STORAGE_SESSION_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
