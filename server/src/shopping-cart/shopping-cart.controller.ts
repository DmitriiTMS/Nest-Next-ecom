import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { AuthenticatedGuard } from 'src/auth/guards/authenticated.guard';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @UseGuards(AuthenticatedGuard)
  @Get(':id')
  findAll(@Param('id') userId: string) {
    return this.shoppingCartService.findAll(userId);
  }

  @Post('/add')
  create(@Body() createShoppingCartDto: CreateShoppingCartDto) {
    return this.shoppingCartService.add(createShoppingCartDto);
  }

  @Patch('/count/:id')
  updateCount(
    @Body() { count }: { count: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateCount(count, partId);
  }

  @Patch('/total-price/:id')
  updateTotalPrice(
    @Body() { totalPrice }: { totalPrice: number },
    @Param('id') partId: string,
  ) {
    return this.shoppingCartService.updateTotalPrice(totalPrice, partId);
  }

  @Delete('/one/:id')
  deleteOne(@Param('id') partId: string) {
    return this.shoppingCartService.remove(partId);
  }

  @Delete('/all/:id')
  deleteAll(@Param('id') userId: string) {
    return this.shoppingCartService.removeAll(userId);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.shoppingCartService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateShoppingCartDto: UpdateShoppingCartDto) {
  //   return this.shoppingCartService.update(+id, updateShoppingCartDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.shoppingCartService.remove(+id);
  // }
}
