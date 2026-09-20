const rawBackendUrl =
  import.meta.env.VITE_BACKEND_URL ||
  import.meta.env.BACKEND_URL;

if (!rawBackendUrl) {
  throw new Error(
    "Set VITE_BACKEND_URL in the deployment environment before building the frontend.",
  );
}

export const BACKEND_URL = rawBackendUrl.replace(/\/$/, "");
export const API_BASE_URL = `${BACKEND_URL}/api`;
export const ADMIN_BASE_URL = BACKEND_URL;

const rawVisitCounterUrl = import.meta.env.VITE_VISIT_COUNTER_URL;

export const VISIT_COUNTER_URL = rawVisitCounterUrl
  ? rawVisitCounterUrl.replace(/\/$/, "")
  : "";
