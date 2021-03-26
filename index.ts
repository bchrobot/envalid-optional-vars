require("dotenv").config();
import { cleanEnv, str } from "envalid";

export const env = cleanEnv(process.env, {
  OPTIONAL_VARIABLE: str({ default: undefined }),
});

console.log({
  isDev: env.isDev,
  isProd: env.isProd,
  optionalVariable: env.OPTIONAL_VARIABLE,
});
