"use server";
export async function ExistsImage(url: string) {
	try {
		console.log(url);
		const response = await fetch(url, { method: "HEAD" });
		return response.ok;
	} catch (_error) {
		return false;
	}
}
