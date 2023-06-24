import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UserEntity } from './schema/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity.name) private userModel: Model<UserDocument>,
  ) {}

  async findOneById(_id: string) {
    const user = await this.userModel.findById(_id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID '${_id}' not found`);
    }
    return user;
  }
}
