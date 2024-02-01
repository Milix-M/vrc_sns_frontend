import { NextRequest, NextResponse } from 'next/server'

type SessionIdType = string
type AccessTokenType = string

async function refreshToken (
  sessionId: SessionIdType
): Promise<undefined | AccessTokenType> {
  console.log(`${process.env.API_ENDPOINT}/api/users/me`)
  const token = await fetch(`${process.env.API_ENDPOINT}/api/token/refresh`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      session_id: sessionId
    })
  }).then(res => (res.ok ? res : undefined))

  if (token !== undefined) {
    const tokenData = await token.json()
    return tokenData.access_token
  }
  return undefined
}

async function checkAuth (accessToken: AccessTokenType): Promise<boolean> {
  console.log(`${process.env.API_ENDPOINT}/api/users/me`)
  const isSucceeded = await fetch(`${process.env.API_ENDPOINT}/api/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  }).then(async res => res.ok)

  return isSucceeded
}

async function checkUserInitialized(accessToken: AccessTokenType): Promise<boolean> {
  // console.log()
  const isInitialized = await fetch(`${process.env.API_ENDPOINT}/api/users/initialized`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  }).then(async res => res.json())
  return isInitialized
}

function redirectToLoginPage (request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL('/', request.url))
}

function redirectToHomePage (request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL('/home', request.url))
}

function redirectUserSignupPage (request: NextRequest): NextResponse {
  return NextResponse.redirect(new URL('/signup', request.url))
}

async function middleware (request: NextRequest) {
  const responce = await NextResponse.next()
  const sessionId: SessionIdType | undefined =
    request.cookies.get('session_id')?.value
  let accessToken: AccessTokenType | undefined =
    request.cookies.get('access_token')?.value

  if (request.nextUrl.pathname === '/' && accessToken !== undefined) {
    if (await checkAuth(accessToken)) {
      // ユーザーが認証されてて初期情報を登録されてなかったときSignupページに飛ばす
      if (await checkUserInitialized(accessToken) === false) {
        return redirectUserSignupPage(request)
      }
      return redirectToHomePage(request)
    }

    if (sessionId !== undefined) {
      accessToken = await refreshToken(sessionId)
      if (accessToken !== undefined && (await checkAuth(accessToken))) {
      // ユーザーが認証されてて初期情報を登録されてなかったときSignupページに飛ばす
      if (await checkUserInitialized(accessToken)  === false) {
        return redirectUserSignupPage(request)
      }
        return redirectToHomePage(request)
      }
    }
  }

  // If accessToken is not validated or null.
  if (
    accessToken === undefined ||
    (accessToken !== undefined && !(await checkAuth(accessToken)))
  ) {
    if (sessionId !== undefined) {
      accessToken = await refreshToken(sessionId)

      // Check the accessToken was refreshed
      if (
        accessToken === undefined ||
        (accessToken !== undefined && !(await checkAuth(accessToken)))
      ) {
        return redirectToLoginPage(request)
      }
      responce.cookies.set({
        name: 'access_token',
        value: accessToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        domain: request.nextUrl.domainLocale?.domain
      })
    }

    return responce
  }

  return responce
}

export const config = {
  matcher: ['/', '/home', '/search', '/notifications', '/profile']
}

export default middleware
