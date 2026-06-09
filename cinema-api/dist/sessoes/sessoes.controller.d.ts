import { SessoesService } from './sessoes.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
export declare class SessoesController {
    private readonly sessoesService;
    constructor(sessoesService: SessoesService);
    create(dto: CreateSessaoDto): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        criadoEm: Date;
        id: number;
        filmeId: number;
        salaId: number;
        dataHora: string;
        preco: number;
        idioma: string;
        formato: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        filme: {
            titulo: string;
            genero: string;
            descricao: string;
            classificacao: string;
            duracao: number;
            dataEstreia: string;
            criadoEm: Date;
            id: number;
        };
        sala: {
            criadoEm: Date;
            id: number;
            nome: string;
            capacidade: number;
            tipo: string;
        };
    } & {
        criadoEm: Date;
        id: number;
        filmeId: number;
        salaId: number;
        dataHora: string;
        preco: number;
        idioma: string;
        formato: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SessaoClient<({
        filme: {
            titulo: string;
            genero: string;
            descricao: string;
            classificacao: string;
            duracao: number;
            dataEstreia: string;
            criadoEm: Date;
            id: number;
        };
        sala: {
            criadoEm: Date;
            id: number;
            nome: string;
            capacidade: number;
            tipo: string;
        };
    } & {
        criadoEm: Date;
        id: number;
        filmeId: number;
        salaId: number;
        dataHora: string;
        preco: number;
        idioma: string;
        formato: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, dto: UpdateSessaoDto): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        criadoEm: Date;
        id: number;
        filmeId: number;
        salaId: number;
        dataHora: string;
        preco: number;
        idioma: string;
        formato: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SessaoClient<{
        criadoEm: Date;
        id: number;
        filmeId: number;
        salaId: number;
        dataHora: string;
        preco: number;
        idioma: string;
        formato: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
