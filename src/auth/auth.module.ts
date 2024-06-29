import { Module, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, { provide: "authSer", useExisting: AuthService }, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule implements OnModuleInit {
  onModuleInit() {
    console.log("AuthModule module init");
  }
}