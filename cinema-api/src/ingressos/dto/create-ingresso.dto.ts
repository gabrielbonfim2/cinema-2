import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIngressoDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  sessaoId: number;

  @ApiProperty({ example: 'João Silva' })
  @IsString() @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '123.456.789-00' })
  @IsString() @IsNotEmpty()
  cpf: string;

  @ApiProperty({ example: 'A10' })
  @IsString() @IsNotEmpty()
  assento: string;

  @ApiProperty({ example: 'Pix' })
  @IsString() @IsNotEmpty()
  pagamento: string;
}
