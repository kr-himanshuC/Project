export { default } from 'next-auth/middleware'
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"


const secret = process.env.AUTH_SECRET;


export  const middleware = async (req: NextRequest) => {
    const path = req.nextUrl.pathname;

    const isPublicPaths = (path === '/signin' || path === '/signup' || path === '/')

    const token = await getToken({req,secret});
    
    if(isPublicPaths && token){
        return NextResponse.redirect(new URL('/home', req.nextUrl));
    }

    if(!isPublicPaths && !token){
        return NextResponse.redirect(new URL('/signin', req.nextUrl));
    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        '/',
        '/signin',
        '/signup',
        '/home'
    ],
}