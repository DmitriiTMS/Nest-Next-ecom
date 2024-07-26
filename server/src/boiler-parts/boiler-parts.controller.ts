import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';

@Controller('boiler-parts')
export class BoilerPartsController {
  constructor(private readonly boilerPartsService: BoilerPartsService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  paginateAndFilter(@Query() query) {
    return this.boilerPartsService.paginateAndFilter(query);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('find/:id')
  getOne(@Param('id') id: string) {
    return this.boilerPartsService.findOne(id);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('bestsellers')
  getBestsellers() {
    return this.boilerPartsService.bestsellers();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('new')
  getNew() {
    return this.boilerPartsService.new();
  }

  @UseGuards(AuthenticatedGuard)
  @Post('search')
  search(@Body() {search}: {search: string}) {
    return this.boilerPartsService.searchByString(search)
  }

  @UseGuards(AuthenticatedGuard)
  @Post('name')
  getByName(@Body() {name}: {name: string}) {
    return this.boilerPartsService.findOneByName(name)
  }
}
