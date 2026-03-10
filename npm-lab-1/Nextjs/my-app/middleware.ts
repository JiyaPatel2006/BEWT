import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const url = request.nextUrl;


// task 1 -> Add default page no.
if(url.pathname === "/Lab22/page") {
    return NextResponse.redirect(
        new URL("/Lab22/page/0", request.url)
    );
}

 // Task 2 and 3 -> Auth check 
 if(url.pathname.startsWith("/page/")) {
    const tokenCookie = request.cookies.get("token");

    //no token -> redirect to login
    if (!tokenCookie) {
        return NextResponse.redirect(
            new URL("/Lab22/login", request.url));
    }

//parse token expiry (simple simulation)
const tokenData = JSON.parse(tokenCookie.value);
const now = Date.now();

//Expired -> issue new token
if(tokenData.expiry < now) {
    const response = NextResponse.next();

    const newToken = JSON.stringify({
        value: "newTokenValue",
        expiry: now + 60 * 60 * 1000 // 1 hour expiry
    });

    response.cookies.set("token", newToken);
    return response;
}

}

return NextResponse.next();
}