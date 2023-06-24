import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class PostEntity {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop()
  title: string;
}

export type PostDocument = PostEntity & Document;

export const PostSchema = SchemaFactory.createForClass(PostEntity);
