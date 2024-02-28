import { jwtDecode } from 'jwt-decode'

export const veryfiToken = (token: string) => {
    return jwtDecode(token)
}