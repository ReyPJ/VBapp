import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken');
    const isAdmin = request.cookies.get('isAdmin')?.value;

    if(!token) {
        return NextResponse.redirect(new URL ('/login', request.url));
    }

    if(request.nextUrl.pathname.startsWith('/dashboard')){
        if (isAdmin !== 'true') {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher:['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
}