import { SalasService } from './salas.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
export declare class SalasController {
    private readonly salasService;
    constructor(salasService: SalasService);
    create(dto: CreateSalaDto): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, dto: UpdateSalaDto): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
