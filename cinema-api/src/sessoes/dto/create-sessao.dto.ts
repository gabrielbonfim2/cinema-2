import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSessaoDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  filmeId: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  salaId: number;

  @ApiProperty({ example: '2024-06-10T19:00' })
  @IsString() @IsNotEmpty()
  dataHora: string;

  @ApiProperty({ example: 25.0 })
  @IsNumber()
  preco: number;

  @ApiProperty({ example: 'Dublado' })
  @IsString() @IsNotEmpty()
  idioma: string;

  @ApiProperty({ example: '2D' })
  @IsString() @IsNotEmpty()
  formato: string;
}
