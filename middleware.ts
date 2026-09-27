import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

type CookieOptions = {
  domain?: string
  encode?: (value: string) => string
  expires?: Date
  httpOnly?: boolean
  maxAge?: number
  path?: string
  sameSite?: boolean | 'lax' | 'strict' | 'none'
  secure?: boolean
}

type CookieToSet = {
  name: string
  value: string
  options?: CookieOptions
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),

        setAll: (cookies: CookieToSet[]) => {
          cookies.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const protectedPath = [
    '/report',
    '/account',
    '/admin',
    '/worker',
  ].some((path) =>
    request.nextUrl.pathname.startsWith(path)
  )

  if (protectedPath && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: [
    '/report/:path*',
    '/account/:path*',
    '/admin/:path*',
    '/worker/:path*',
  ],
}