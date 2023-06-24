import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { UserEntity } from './schema/user.schema';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => UserEntity)
  async getUserById(@Args('_id', { type: () => String }) _id: string) {
    return await this.userService.findOneById(_id);
  }
}
