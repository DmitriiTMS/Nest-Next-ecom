import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const userEmail = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    const userName = await this.prisma.user.findUnique({
      where: {
        username: createUserDto.username,
      },
    });

    if (userEmail)
      throw new BadRequestException(
        `Пользователь с ${userEmail.email} уже существует`,
      );
    if (userName)
      throw new BadRequestException(
        `Пользователь с ${userName.username} уже существует`,
      );

    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashPassword,
      },
    });

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    };
  }

  async findOne(filter: {
    where: { id?: string; username?: string; email?: string };
  }) {
    return await this.prisma.user.findFirst({ ...filter });
  }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
