import { Injectable } from '@nestjs/common';
import { CreateBoilerPartDto } from './dto/create-boiler-part.dto';
import { UpdateBoilerPartDto } from './dto/update-boiler-part.dto';

@Injectable()
export class BoilerPartsService {
  create(createBoilerPartDto: CreateBoilerPartDto) {
    return 'This action adds a new boilerPart';
  }

  findAll() {
    return `This action returns all boilerParts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boilerPart`;
  }

  update(id: number, updateBoilerPartDto: UpdateBoilerPartDto) {
    return `This action updates a #${id} boilerPart`;
  }

  remove(id: number) {
    return `This action removes a #${id} boilerPart`;
  }
}
