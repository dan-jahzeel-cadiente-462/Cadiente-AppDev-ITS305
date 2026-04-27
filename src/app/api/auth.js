const API_BASE_URL = 'http://your-api-url.com';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const getAuthHeaders = () => {
  const token = global.authToken;
  return token
    ? { ...defaultHeaders, Authorization: `Bearer ${token}` }
    : { ...defaultHeaders };
};

const handleResponse = async (response) => {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw data || { message: `HTTP ${response.status} error` };
  }
  return data;
};

export const loginAPI = async (username, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({ username, password }),
  });
  return handleResponse(response);
};

export const registerAPI = async (username, password, confirmPassword) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify({ username, password, confirmPassword }),
  });
  return handleResponse(response);
};

export const logoutAPI = async () => {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify({}),
  });
  return handleResponse(response);
};
