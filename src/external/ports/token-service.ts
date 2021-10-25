export interface TokenService {
  sign: (payload: any, ttl?: number) => string
  verify: <T>(token: string) => T
}
