import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common'
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService:UsersService){}
  
  @Get()
  async getUsers(){
    const users = await this.userService.getUsers()
    return users
  }

  @Post('register')
  async createUser(
    @Body('name') userName: string,
    @Body('gender') userGender: number,
    @Body('email') userEmail: string,
    @Body('password') userPass: string
  ){
    const user = await this.userService.createUser(
      userName,
      userGender,
      userEmail,
      userPass
    )
    return {
      statusCode: HttpStatus.OK,
      message: "login success!",
      data: user
    }
  }
}