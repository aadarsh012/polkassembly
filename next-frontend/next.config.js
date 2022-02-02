/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  plugins: ["babel-plugin-styled-components"],
  env: {
    REACT_APP_ENV: process.env.REACT_APP_ENV,
    REACT_APP_HASURA_GRAPHQL_URL: process.env.REACT_APP_HASURA_GRAPHQL_URL,
    REACT_APP_JWT_PUBLIC_KEY: process.env.REACT_APP_JWT_PUBLIC_KEY,
    HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_GRAPHQL_ADMIN_SECRET,
    REACT_APP_APPNAME: process.env.REACT_APP_APPNAME,
    NEXT_PUBLIC_NETWORK: process.env.NEXT_PUBLIC_NETWORK,
    REACT_APP_NETWORK: process.env.REACT_APP_NETWORK,
    SKIP_PREFLIGHT_CHECK: process.env.SKIP_PREFLIGHT_CHECK,
    REACT_APP_WS_PROVIDER: process.env.REACT_APP_WS_PROVIDER,
    REACT_APP_DEMOCRACY_PRECOMPILE: process.env.REACT_APP_DEMOCRACY_PRECOMPILE,
    NEXT_HASURA_GRAPHQL_URL: process.env.NEXT_HASURA_GRAPHQL_URL,
  },
};
