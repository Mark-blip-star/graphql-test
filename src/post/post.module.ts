import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostEntity, PostSchema } from './schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PostEntity.name, schema: PostSchema }]),
  ],
})
export class PostModule {}
