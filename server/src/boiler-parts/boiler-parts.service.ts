import { Injectable } from '@nestjs/common';
import { IBoilerPartsQuery } from './types';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BoilerPartsService {
  constructor(private prisma: PrismaService) {}

  async paginateAndFilter(query: IBoilerPartsQuery) {
    const limit = +query.limit;
    const offset = +query.offset * limit;
    const count = await this.prisma.boilerparts.count();
    const rows = await this.prisma.boilerparts.findMany({
      take: limit,
      skip: offset,
    });

    return { count, rows };
  }

  async bestsellers() {
    const [rows, count] = await this.prisma.$transaction([
      this.prisma.boilerparts.findMany({
        where: {
          bestsellers: true,
        },
      }),
      this.prisma.boilerparts.count({
        where: { bestsellers: true },
      }),
    ]);

    return { count, rows };
  }

  async new() {
    const [rows, count] = await this.prisma.$transaction([
      this.prisma.boilerparts.findMany({
        where: {
          new: true,
        },
      }),
      this.prisma.boilerparts.count({
        where: { new: true },
      }),
    ]);

    return { count, rows };
  }

  async findOne(id: string) {
    return await this.prisma.boilerparts.findFirst({
      where: {
        id,
      },
    });
  }

  async findOneByName(name: string) {
    return await this.prisma.boilerparts.findFirst({
      where: {
        name,
      },
    });
  }

  async searchByString(str: string) {
    const [rows, count] = await this.prisma.$transaction([
      this.prisma.boilerparts.findMany({
        where: {
          name: {
            startsWith: `%${str}%`,
            mode: 'insensitive'
          },
        },
      }),
      this.prisma.boilerparts.count({
        where: {
          name: {
            startsWith: `%${str}%`,
            mode: 'insensitive'
          },
        },
      }),
    ]);

    return { count, rows };
  }
}
