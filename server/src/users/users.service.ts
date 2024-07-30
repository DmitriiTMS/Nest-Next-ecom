import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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

    
    if (userName) {
      return {
        warningMessage: `Пользователь с ${userName.username} уже существует`,
      };
    }
    if (userEmail) {
      return {
        warningMessage: `Пользователь с ${userEmail.email} уже существует`,
      };
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: hashPassword,
      },
    });

    return {
      id: user.id,
      username: user.username,
      email: user.email,
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
