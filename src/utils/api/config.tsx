export const API_BASE_URL = 'https://gogo-api.onrender.com/';
//export const API_BASE_URL = 'http://localhost:8081/';

export interface TAppConfig {
  baseApiUrl: string;
}

function getAppConfig(): TAppConfig {
  return {
    baseApiUrl: API_BASE_URL,
  };
}

export function getEnvConfig(): TAppConfig {
  return getAppConfig();
}
