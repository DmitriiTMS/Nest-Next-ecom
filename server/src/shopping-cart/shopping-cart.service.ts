import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping-cart.dto';
import { UpdateShoppingCartDto } from './dto/update-shopping-cart.dto';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from 'src/users/users.service';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';

@Injectable()
export class ShoppingCartService {
  constructor(
    private prisma: PrismaService,
    private readonly usersService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async add(createShoppingCartDto: CreateShoppingCartDto) {
    const user = await this.usersService.findOne({
      where: { username: createShoppingCartDto.username },
    });

    const part = await this.boilerPartsService.findOne(
      createShoppingCartDto.partId,
    );

    const elemCart = await this.prisma.cart.create({
      data: {
        userId: user.id,
        partId: part.id,
        boilerManufacture: part.boilerManufacture,
        partsManufacture: part.partsManufacture,
        price: part.price,
        inStock: part.inStock,
        image: JSON.parse(part.images)[0],
        name: part.name,
        totalPrice: part.price,
      },
    });

    return elemCart;
  }

  async findAll(userId: string) {
    return await this.prisma.cart.findMany({
      where: {
        userId,
      },
    });
  }

  async updateCount(count: number, partId: string) {
    const elemCart = await this.prisma.cart.findFirst({
      where: {
        partId,
      },
    });
    const countResult = await this.prisma.cart.update({
      where: {
        id: elemCart.id,
      },
      data: {
        count,
      },
    });

    return { count: countResult.count };
  }

  async updateTotalPrice(totalPrice: number, partId: string) {
    const elemCart = await this.prisma.cart.findFirst({
      where: {
        partId,
      },
    });
    const countResult = await this.prisma.cart.update({
      where: {
        id: elemCart.id,
      },
      data: {
        totalPrice,
      },
    });

    return { totalPrice: countResult.totalPrice };
  }

  async remove(partId: string) {
    const elemCart = await this.prisma.cart.findFirst({
      where: {
        partId,
      },
    });
    await this.prisma.cart.delete({
      where: {
        id: elemCart.id,
      },
    });

    return { message: 'Один товар удалён' };
  }

  async removeAll(userId: string) {
    await this.prisma.cart.deleteMany({
      where: {
        userId,
      },
    });

    return { message: 'Все товары удалёны' };
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} shoppingCart`;
  // }

  // update(id: number, updateShoppingCartDto: UpdateShoppingCartDto) {
  //   return `This action updates a #${id} shoppingCart`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} shoppingCart`;
  // }
}
