import { createClient } from "microcms-js-sdk";

if (!process.env.MICRO_CMS_API_KEY)
	throw new Error("MICRO_CMS_API_KEY is undefined in env");

export const cmsClient = createClient({
	serviceDomain: "ksg",
	apiKey: process.env.MICRO_CMS_API_KEY,
});
