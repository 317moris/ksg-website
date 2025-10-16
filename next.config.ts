import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	images: {
		remotePatterns: [
			new URL(
				"https://images.microcms-assets.io/assets/47f3328d673f4ec79dbc34797a3220a2/**",
			),
			new URL("https://ksg-h.spec.ed.jp/**"),
		],
	},
};

export default nextConfig;
