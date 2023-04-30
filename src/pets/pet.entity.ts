import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  name: string;
}
