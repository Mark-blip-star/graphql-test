import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../user.model';
import { PostEntity } from 'src/post/schema/post.schema';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema({ collection: 'User' })
export class UserEntity {
  @Field(() => String, { nullable: true })
  _id: Types.ObjectId;

  @Prop()
  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [Types.ObjectId], ref: PostEntity.name })
  post: Types.ObjectId[];
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
