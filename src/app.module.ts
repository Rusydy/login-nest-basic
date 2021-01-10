import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AlienUserController } from './alien-user/alien-user.controller';
import { AlienUserService } from './alien-user/alien-user.service';
import { AlienUserModule } from './alien-user/alien-user.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/login-test-crud'), AlienUserModule],
  controllers: [AppController, AlienUserController],
  providers: [AppService, AlienUserService],
})
export class AppModule {}
