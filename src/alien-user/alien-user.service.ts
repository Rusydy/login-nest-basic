import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Model } from 'mongoose';
import { AlienUser } from './interfaces/alien-user.interface';
// import { User } from './interfaces/user.interface';

@Injectable()
export class AlienUserService {
  constructor(@InjectModel('AlienUser') private readonly userModel: Model<AlienUser>) {}

  async createUser(
    name: string,
    type: number,
    email: string,
    password: string) {
    const newUser = new this.userModel({
      name,
      type,
      email,
      password
    })
    const result = await newUser.save()
    return result
  }

  async login(
    email: string,
    password: string
  ) {
    let user = await this.userModel.findOne({email: email, password: password}).exec()
    return user
  }

  async getUsers() {
    const users = await this.userModel.find().exec()
    return users.map(user => ({
      id: user.id,
      name: user.name,
      type: user.type,
      email: user.email,
      password: user.password
    }))
  }
}