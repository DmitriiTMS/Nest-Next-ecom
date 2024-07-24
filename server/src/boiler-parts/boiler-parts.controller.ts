import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { CreateBoilerPartDto } from './dto/create-boiler-part.dto';
import { UpdateBoilerPartDto } from './dto/update-boiler-part.dto';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  @Post()
  create(@Body() createBoilerPartDto: CreateBoilerPartDto) {
    return this.boilerPartsService.create(createBoilerPartDto);
  }

  @Get()
  findAll() {
    return this.boilerPartsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boilerPartsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoilerPartDto: UpdateBoilerPartDto) {
    return this.boilerPartsService.update(+id, updateBoilerPartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boilerPartsService.remove(+id);
  }
}
