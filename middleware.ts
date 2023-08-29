import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {

    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    const { pathname } = req.nextUrl;

    if(pathname.includes('/api/auth') || token || pathname == '/login') {
        return NextResponse.next();
    }
    console.log(req.nextUrl);
    if(!token && !req.nextUrl.pathname.includes('/login')){
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        console.log("REDIRECT");

        return NextResponse.redirect(url);
    }
}

export const config = { matcher: "/((?!.*\\.).*)" };