import { Module } from '@nestjs/common';
// import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from './schema/user.schema';
import { UserResolver } from './user.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  providers: [UserResolver, UserService],
})
export class UserModule {}
