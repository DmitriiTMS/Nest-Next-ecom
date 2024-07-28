import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';


@Module({
  imports: [UsersModule, AuthModule, BoilerPartsModule, ShoppingCartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
