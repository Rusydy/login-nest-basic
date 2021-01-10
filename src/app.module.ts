import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AlienUserModule } from './alien-user/alien-user.module'
@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/login-test-crud'), AlienUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
