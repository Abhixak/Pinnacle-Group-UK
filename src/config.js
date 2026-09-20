const rawBackendUrl = import.meta.env.BACKEND_URL;

if (!rawBackendUrl) {
  throw new Error("BACKEND_URL is not set in the environment.");
}

export const BACKEND_URL = rawBackendUrl.replace(/\/$/, "");
export const API_BASE_URL = `${BACKEND_URL}/api`;
export const ADMIN_BASE_URL = BACKEND_URL;
