import { Module } from '@nestjs/common';
import { FilmesModule } from './filmes/filmes.module';
import { SalasModule } from './salas/salas.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { IngressosModule } from './ingressos/ingressos.module';

@Module({
  imports: [FilmesModule, SalasModule, SessoesModule, IngressosModule],
})
export class AppModule {}
