import { type NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: ["/auth", "/dashboard"],
};

export default function middleware(request: NextRequest) {
	const login = request.cookies.get("login");

	if (request.nextUrl.pathname.startsWith("/auth")) {
		if (login) return NextResponse.redirect("/dashboard");
		return NextResponse.next();
	}

	if (login) return NextResponse.next();

	return NextResponse.redirect("/auth");
}
