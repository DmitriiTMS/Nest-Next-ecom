import { IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {

    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    @IsEmail({},{message: 'Поле не соответсвует типу email'})
    email: string

    @IsNotEmpty()
    password: string

}
