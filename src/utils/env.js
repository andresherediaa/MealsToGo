import { HOST_LOCAL, HOST } from "@env";
export const host = process.env.NODE_ENV === "development" ? HOST_LOCAL : HOST;
export const isLocal = process.env.NODE_ENV === "development" ? true : false;
export const stripe_key = process.env.STRIPE_KEY;
