import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';


@Module({
  imports: [UsersModule, AuthModule, BoilerPartsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
