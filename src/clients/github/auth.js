import cookies from 'js-cookie'

const COOKIE = 'ghtoken'

export class Auth {
  static authed() {
    const token = this.getToken()
    return token && token !== ''
  }

  static clearToken() {
    return cookies.remove(COOKIE)
  }

  static getToken() {
    return cookies.get(COOKIE)
  }

  static setToken(token) {
    return cookies.set(COOKIE, token)
  }

  static appendHeaders(headers = {}) {
    const token = this.getToken()

    if (token !== undefined && token !== '') {
      headers.Authorization = `Bearer ${token}`
    }

    return headers
  }
}
