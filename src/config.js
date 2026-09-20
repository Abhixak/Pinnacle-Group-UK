const DEFAULT_BACKEND_URL =
  "https://nripropertybackend-production.up.railway.app";

const rawBackendUrl =
  import.meta.env.VITE_BACKEND_URL ||
  import.meta.env.BACKEND_URL ||
  DEFAULT_BACKEND_URL;

export const BACKEND_URL = rawBackendUrl.replace(/\/$/, "");
export const API_BASE_URL = `${BACKEND_URL}/api`;
export const ADMIN_BASE_URL = BACKEND_URL;
