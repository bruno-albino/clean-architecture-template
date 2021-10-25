import jwt from 'jsonwebtoken'
import { TokenService } from '../ports/token-service';

const DEFAULT_EXPIRATION = 60 * 60 * 24 * 7
export class JsonWebToken implements TokenService {
  private secret: string

  constructor(secret: string) {
    this.secret = secret
  }

  sign(payload: any, ttl?: number): string {
    const token = jwt.sign(payload, this.secret, {
      expiresIn: ttl | DEFAULT_EXPIRATION
    })
    return token
  }

  verify<T>(token: string): T {
    const decoded = jwt.verify(token, this.secret)
    return decoded as T
  }
  
}
