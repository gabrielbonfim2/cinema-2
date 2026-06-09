import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@ApiTags('salas')
@Controller('salas')
export class SalasController {
  constructor(private readonly salasService: SalasService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar sala' })
  create(@Body() dto: CreateSalaDto) {
    return this.salasService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar salas' })
  findAll() {
    return this.salasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar sala por ID' })
  findOne(@Param('id') id: string) {
    return this.salasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar sala' })
  update(@Param('id') id: string, @Body() dto: UpdateSalaDto) {
    return this.salasService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir sala' })
  remove(@Param('id') id: string) {
    return this.salasService.remove(+id);
  }
}
