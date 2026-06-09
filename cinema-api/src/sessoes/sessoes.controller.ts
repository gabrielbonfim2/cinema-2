import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SessoesService } from './sessoes.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@ApiTags('sessoes')
@Controller('sessoes')
export class SessoesController {
  constructor(private readonly sessoesService: SessoesService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar sessão' })
  create(@Body() dto: CreateSessaoDto) {
    return this.sessoesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar sessões com filme e sala' })
  findAll() {
    return this.sessoesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar sessão por ID' })
  findOne(@Param('id') id: string) {
    return this.sessoesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar sessão' })
  update(@Param('id') id: string, @Body() dto: UpdateSessaoDto) {
    return this.sessoesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir sessão' })
  remove(@Param('id') id: string) {
    return this.sessoesService.remove(+id);
  }
}
