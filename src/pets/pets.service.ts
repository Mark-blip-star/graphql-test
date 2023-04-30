import { Injectable } from '@nestjs/common';
import { Pet } from './pet.entity';
import { createPetDto } from './dto/create.pet.dto';

@Injectable()
export class PetsService {
  async findAll(): Promise<Pet[]> {
    const pet = new Pet();
    pet.id = 2;
    pet.name = 'Alexandr';
    return [pet];
  }

  async createPet(dto: createPetDto): Promise<Pet> {
    const pet = new Pet();
    pet.id = 2;
    pet.name = 'Alexandr';
    console.log(dto);
    return pet;
  }
}
