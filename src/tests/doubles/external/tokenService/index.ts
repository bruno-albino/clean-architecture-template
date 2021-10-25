import { TokenService } from "external/ports"

export class DoubleTokenService implements TokenService {
  sign(payload: any, ttl?: number): string {
    return 'token'
  }

  verify<T>(token: string): T {
    const decoded = token as unknown as T
    return decoded
  }
}
