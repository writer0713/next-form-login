import { NextRequest, NextResponse } from 'next/server';
import getSession, { isInvalidSession } from './utils/session';

export default async function middleware(request: NextRequest) {
  // 여기에 미들웨어 로직을 작성합니다.

  if (await isInvalidSession()) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/profile', '/tweets/:path*'],
};
