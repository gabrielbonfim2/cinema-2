import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@ApiTags('filmes')
@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar filme' })
  create(@Body() dto: CreateFilmeDto) {
    return this.filmesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar filmes' })
  findAll() {
    return this.filmesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar filme por ID' })
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar filme' })
  update(@Param('id') id: string, @Body() dto: UpdateFilmeDto) {
    return this.filmesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir filme' })
  remove(@Param('id') id: string) {
    return this.filmesService.remove(+id);
  }
}
