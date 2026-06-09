import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateFilmeDto): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        genero: string;
        descricao: string;
        classificacao: string;
        duracao: number;
        dataEstreia: string;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        titulo: string;
        genero: string;
        descricao: string;
        classificacao: string;
        duracao: number;
        dataEstreia: string;
        criadoEm: Date;
        id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        genero: string;
        descricao: string;
        classificacao: string;
        duracao: number;
        dataEstreia: string;
        criadoEm: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, dto: UpdateFilmeDto): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        genero: string;
        descricao: string;
        classificacao: string;
        duracao: number;
        dataEstreia: string;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        genero: string;
        descricao: string;
        classificacao: string;
        duracao: number;
        dataEstreia: string;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
