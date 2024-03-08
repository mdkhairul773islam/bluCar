import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();
    const token = true; // Assuming this is the token value for the sake of example

    if (!token && request.nextUrl.pathname !== '/login') {
        // Redirect to /login if token is false and not already on the login page
        url.pathname = '/login';
        return NextResponse.redirect(url);
    } else {
        // Proceed with the next response if token is true or already on the login page
        return NextResponse.next();
    }
}

export const config = {
    matcher: '/:path*',
};
