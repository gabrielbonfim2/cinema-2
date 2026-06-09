import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { IngressosService } from './ingressos.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@ApiTags('ingressos')
@Controller('ingressos')
export class IngressosController {
  constructor(private readonly ingressosService: IngressosService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar venda de ingresso' })
  create(@Body() dto: CreateIngressoDto) {
    return this.ingressosService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar ingressos vendidos' })
  findAll() {
    return this.ingressosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar ingresso por ID' })
  findOne(@Param('id') id: string) {
    return this.ingressosService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar ingresso' })
  update(@Param('id') id: string, @Body() dto: UpdateIngressoDto) {
    return this.ingressosService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir ingresso' })
  remove(@Param('id') id: string) {
    return this.ingressosService.remove(+id);
  }
}
