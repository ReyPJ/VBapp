import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('accessToken');

    console.log('Token:', token);  // Añade esta línea para depurar

    if(!token) {
        return NextResponse.redirect(new URL ('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher:['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
}