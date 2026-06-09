import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';
export declare class SalasService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, dto: UpdateSalaDto): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SalaClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        capacidade: number;
        tipo: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
