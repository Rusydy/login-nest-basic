import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthSchema } from './schemas/auth.schema';

  @Global()
  @Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }]),
      JwtModule.register({ secret: process.env.JWT_SECRET }),
    ],
    exports: [AuthService],
    providers: [AuthService],
  })
export class AuthModule {}
