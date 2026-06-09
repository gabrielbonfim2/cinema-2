import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSalaDto {
  @ApiProperty({ example: 'Sala 1' })
  @IsString() @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  capacidade: number;

  @ApiProperty({ example: '2D' })
  @IsString() @IsNotEmpty()
  tipo: string;
}
