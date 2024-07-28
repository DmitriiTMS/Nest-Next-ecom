import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateShoppingCartDto {
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  partId: string;
}
