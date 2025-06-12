import { createClient } from "microcms-js-sdk";
import { EnvHttpProxyAgent, setGlobalDispatcher } from "undici";

if (!process.env.MICRO_CMS_API_KEY)
	throw new Error("MICRO_CMS_API_KEY is undefined in env");

setGlobalDispatcher(new EnvHttpProxyAgent());

export const cmsClient = createClient({
	serviceDomain: "ksg",
	apiKey: process.env.MICRO_CMS_API_KEY,
});
