import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(username: string, pass: string): Promise<any> {
    return null;
  }
  steamLogin(req) {
    if (!req.user) {
      return 'No user from steam';
    }

    return {
      message: 'User information from steam',
      user: req.user,
    };
  }
}
