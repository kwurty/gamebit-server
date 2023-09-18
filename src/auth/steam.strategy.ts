import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport/dist';
import { Strategy as SteamStrategy } from 'passport-steam';
import { Strategy as FitbitStrategy } from 'passport-fitbit-oauth2';
import { AuthService } from './auth.service';

@Injectable()
export class SteamStrategyExport extends PassportStrategy(
  SteamStrategy,
  'steam',
) {
  constructor(private authService: AuthService) {
    super({
      apiKey: process.env.STEAM_API_KEY,
      realm: 'http://localhost:3000/',
      returnURL: 'http://localhost:3000/auth/steam-redirect',
    });
  }

  validate(identifier, profile, done) {
    // add your code that is to be executed after the login succeeds here
    
  }
}
