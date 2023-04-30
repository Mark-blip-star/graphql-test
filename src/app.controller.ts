import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { Resolver, Query } from '@nestjs/graphql';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  async hello() {
    return 'Hello, world!';
  }
}
