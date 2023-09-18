import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SteamStrategyExport } from './steam.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [AuthService, SteamStrategyExport],
  controllers: [AuthController],
})
export class AuthModule {}
