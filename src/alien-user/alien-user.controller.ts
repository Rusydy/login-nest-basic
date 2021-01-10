import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common'
import { LoginUserDto } from './dto/login-user.dto';
import { AlienUserService } from './alien-user.service';


@Controller('alienusers')
export class AlienUserController {
  constructor(private AlienUserService:AlienUserService){}
  
  @Get()
  async getUsers(){
    const users = await this.AlienUserService.getUsers()
    return users
  }

  @Post('/alien/register')
  async createUser(
    @Body('name') userName: string,
    @Body('type') userType: number,
    @Body('email') userEmail: string,
    @Body('password') userPass: string
  ){
    const user = await this.AlienUserService.createUser(
      userName,
      userType,
      userEmail,
      userPass
    )
    return {
      statusCode: HttpStatus.OK,
      message: "register success!",
      data: user
    }
  }

  @Post('alien/login')
  async login(
    @Body('email') userEmail: string,
    @Body('password') userPass: string
  ) {
    const user = await this.AlienUserService.login(
      userEmail,
      userPass
    )
    if (user != null)
      return{
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