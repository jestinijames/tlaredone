import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  //const path = req.nextUrl.pathname;
  const session = !!req.cookies.get('next-auth.session-token');

  if (!session) {
    return NextResponse.redirect(new URL(`/`, req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/create-article'] };
