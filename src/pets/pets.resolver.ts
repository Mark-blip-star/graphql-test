import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { createPetDto } from './dto/create.pet.dto';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}

  @Query((returns) => [Pet])
  async pets(): Promise<Pet[]> {
    return await this.petService.findAll();
  }

  @Mutation((returns) => Pet)
  async createPet(
    @Args('createMutation') createPetDto: createPetDto,
  ): Promise<Pet> {
    return await this.petService.createPet(createPetDto);
  }
}
