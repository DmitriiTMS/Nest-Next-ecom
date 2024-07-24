import { Module } from '@nestjs/common';
import { BoilerPartsService } from './boiler-parts.service';
import { BoilerPartsController } from './boiler-parts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService, PrismaService],
})
export class BoilerPartsModule {}
