// 本番ログイン機構ではより厳格な実装にすること
// https://nextjs.org/docs/app/guides/authentication#3-setting-cookies-recommended-options

"use server";

import { cookies } from "next/headers";

export async function auth() {
	const expiresAt = new Date(Date.now() + 1 * 365 * 24 * 60 * 60 * 1000);
	const cookieStore = await cookies();

	cookieStore.set("login", "true", {
		expires: expiresAt,
		httpOnly: true,
	});
}

export async function logout() {
	const cookieStore = await cookies();

	cookieStore.delete("login");
}
