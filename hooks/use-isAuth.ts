import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'

export const useIsAuth = (): boolean => {
  const token = Cookies.get('access_token')
  if (!token) return false

  try {
    const decoded: any = jwtDecode(token)
    const exp = decoded.exp * 1000
    const iat = decoded.iat * 1000
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000

    return Date.now() < exp && Date.now() - iat <= sevenDaysInMs
  } catch (error: any | unknown) {
    console.log(error)
    return false
  }
}
