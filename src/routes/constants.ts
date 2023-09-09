export const ROOT = '/';
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const SERVICES = (type: string) => {
  return `/services/${type}`;
};
