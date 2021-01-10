import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common'
import { LoginUserDto } from './dto/login-user.dto';
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
      message: "register success!",
      data: user
    }
  }

  @Post('login')
  async login(
    @Body('email') userEmail: string,
    @Body('password') userPass: string
  ) {
    const user = await this.userService.login(
      userEmail,
      userPass
    )
    if (user != null)
      return{
        // accessToken // how to 
        statusCode: HttpStatus.OK,
        message: "login success!",
        data: user
      }
    else
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: "login again!"
      }
  }
}