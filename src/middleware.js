import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const token = true;

  if (!token && request.nextUrl.pathname !== "/login") {
    url.pathname = "/login";

    return NextResponse.redirect(url);
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/login", "/register", "/"],
};
