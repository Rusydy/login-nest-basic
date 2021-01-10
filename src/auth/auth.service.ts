import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly auth: Model<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  // async login(payload: any, client: { userAgent: any; ip: any; deviceToken: any; deviceType: any; }): Promise<Model<Auth>> {
  //   const [accessToken, refreshToken] = this.generateToken(payload);
  //   const auth = new this.auth({
  //     accessToken: accessToken,
  //     refreshToken: refreshToken,
  //     morph: payload.sub,
  //     morphModel: ActorType.getModel(payload.type),
  //     userAgent: client.userAgent,
  //     ip: client.ip,
  //     deviceToken: client.deviceToken,
  //     deviceType: client.deviceType,
  // });
  // const res = await auth.save();

  // return auth;
  // }

  generateToken(payload: any = {}): [string, string] {
    const accessToken = this.jwtService.sign(payload, { expiresIn: process.env.JWT_TTL });
    const refreshToken = this.jwtService.sign({}, { expiresIn: process.env.JWT_REFRESH_TTL });
    return [accessToken, refreshToken];
  }
}
