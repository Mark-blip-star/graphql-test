import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createPetDto {
  @Field()
  name: string;
}
