import { NextResponse } from "next/server";

export function middleware(req) {
    console.log("Middleware is running...");
    return NextResponse.next();
}