import {
  Controller,
  Get,
  UseGuards,
  Request,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { Issuer } from 'openid-client';
import { SteamOAuthGuard } from 'src/steam-oauth.guard';
import passport = require('passport');

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/login')
  @UseGuards(SteamOAuthGuard)
  async getSteamAuth(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('steam-redirect')
  @UseGuards(SteamOAuthGuard)
  async googleAuthRedirect(@Request() req): Promise<any> {
    passport.authenticate('steam', { failureRedirect: '/' }),
      function (req, res) {
        res.redirect('/');
      };
    return {
      message: 'hello',
    };
  }
}
