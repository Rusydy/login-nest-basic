import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(
    name: string,
    gender: number,
    email: string,
    password: string) {
    const newUser = new this.userModel({
      name,
      gender,
      email,
      password
    })
    const result = await newUser.save()
    return result
  }

  async login(
    email: string,
    password: string // I'll use it after auth done
  ) {
    let user = await this.userModel.findOne({email: email, password: password}).exec()
    return user
  }

  async getUsers() {
    const users = await this.userModel.find().exec()
    return users.map(user => ({
      id: user.id,
      name: user.name,
      gender: user.gender,
      email: user.email,
      password: user.password
    }))
  }
}