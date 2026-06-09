import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFilmeDto {
  @ApiProperty({ example: 'Inception' })
  @IsString() @IsNotEmpty()
  titulo: string;

  @ApiProperty({ example: 'Ficção Científica' })
  @IsString() @IsNotEmpty()
  genero: string;

  @ApiProperty({ example: 'Um ladrão que rouba segredos...' })
  @IsString() @IsNotEmpty()
  descricao: string;

  @ApiProperty({ example: '14+' })
  @IsString() @IsNotEmpty()
  classificacao: string;

  @ApiProperty({ example: 148 })
  @IsNumber()
  duracao: number;

  @ApiProperty({ example: '2024-01-15' })
  @IsString() @IsNotEmpty()
  dataEstreia: string;
}
