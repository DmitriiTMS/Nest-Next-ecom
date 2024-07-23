import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: '12345' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      userId: 'clyx05blz0001i01ytw04r0jp',
      username: 'Ivan',
      email: 'ivan@mail.ru',
    },
  })
  user: {
    userId: string;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Logger in' })
  message: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session end' })
  message: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: 'clyx05blz0001i01ytw04r0jp' })
  userId: string;

  @ApiProperty({ example: 'Ivan' })
  username: string;

  @ApiProperty({ example: 'ivan@mail.ru' })
  email: string;
}

export class SigneupResponse {
  @ApiProperty({
    example: {
      id: 'clyx05blz0001i01ytw04r0jp',
      username: 'Ivan',
      email: 'ivan@mail.ru',
    },
  })
  user: {
    id: string;
    username: string;А
    email: string;
  };
}
