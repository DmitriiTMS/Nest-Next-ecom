import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {

    @ApiProperty({example: 'Ivan'})
    @IsNotEmpty()
    username: string

    @ApiProperty({example: 'ivan@mail.ru'})
    @IsNotEmpty()
    @IsEmail({},{message: 'Поле не соответсвует типу email'})
    email: string

    @ApiProperty({example: '12345'})
    @IsNotEmpty()
    password: string

}
