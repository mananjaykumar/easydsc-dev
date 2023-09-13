export const ROOT = '/';
export const DASHBOARD = '/dashboard';
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const SERVICES = (type: string) => {
  return `/services/${type}`;
};
