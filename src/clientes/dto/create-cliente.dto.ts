import { IsNotEmpty, IsString, IsNumber } from "class-validator";
export class CreateClienteDto {
    @IsString()
    @IsNotEmpty()
    nome : string

    @IsNumber()
    @IsNotEmpty()
    ano: number
}
