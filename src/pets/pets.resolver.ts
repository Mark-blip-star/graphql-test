import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petService.findAll();
  }
}