import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

export function decodeToken(token: string): JwtPayload | null {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (err) {
    console.error('Invalid token', err);
    return null;
  }
}
