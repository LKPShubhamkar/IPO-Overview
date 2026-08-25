const BASE_URL = "https://api.lkpconnect.net.in/api";

const username = "admin";
const password = "admin";

const getAuthHeader = () => {
  return `Basic ${btoa(`${username}:${password}`)}`;
};

export const commonApi = async (
  endpoint: string,
  payload: Record<string, any> = {},
  method: "POST" | "GET" = "POST",
  // responseType: "json" | "blob" = "json",
) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: {
        Authorization: getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: Object.keys(payload).length ? JSON.stringify(payload) : undefined,
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
