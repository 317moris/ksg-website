import { type NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: ["/auth", "/dashboard"],
};

export default function proxy(request: NextRequest) {
	const login = request.cookies.get("login");

	if (request.nextUrl.pathname.startsWith("/auth")) {
		const req = request.nextUrl.clone();
		req.pathname = "/dashboard";
		if (login) return NextResponse.redirect(req);
		return NextResponse.next();
	}

	if (login) return NextResponse.next();

	request.nextUrl.pathname = "/auth";
	return NextResponse.redirect(request.nextUrl);
}
