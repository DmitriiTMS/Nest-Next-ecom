import { Module } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCartController } from './shopping-cart.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { BoilerPartsModule } from 'src/boiler-parts/boiler-parts.module';
import { UsersService } from 'src/users/users.service';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';

@Module({
  imports: [UsersModule, BoilerPartsModule],
  controllers: [ShoppingCartController],
  providers: [
    ShoppingCartService,
    UsersService,
    BoilerPartsService,
    PrismaService,
  ],
})
export class ShoppingCartModule {}
