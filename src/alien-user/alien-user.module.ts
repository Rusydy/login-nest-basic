import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';
import { alienUserSchema } from 'src/users/schemas/alien-user.schema';
import { AlienUserController } from './alien-user.controller';
import { AlienUserService } from './alien-user.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'AlienUser', schema: alienUserSchema}])],
  controllers: [AlienUserController],
  providers: [AlienUserService]
})
export class AlienUserModule {}