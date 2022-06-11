/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL,

  isProd() {
    return this.NODE_ENV === 'production';
  },
  isDev() {
    return this.NODE_ENV === 'development';
  },
};

export default Env;
