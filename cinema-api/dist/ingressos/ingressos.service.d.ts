import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';
export declare class IngressosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateIngressoDto): import(".prisma/client").Prisma.Prisma__IngressoClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        sessaoId: number;
        cpf: string;
        assento: string;
        pagamento: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        sessao: {
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
        };
    } & {
        criadoEm: Date;
        id: number;
        nome: string;
        sessaoId: number;
        cpf: string;
        assento: string;
        pagamento: string;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__IngressoClient<({
        sessao: {
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
        };
    } & {
        criadoEm: Date;
        id: number;
        nome: string;
        sessaoId: number;
        cpf: string;
        assento: string;
        pagamento: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, dto: UpdateIngressoDto): import(".prisma/client").Prisma.Prisma__IngressoClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        sessaoId: number;
        cpf: string;
        assento: string;
        pagamento: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__IngressoClient<{
        criadoEm: Date;
        id: number;
        nome: string;
        sessaoId: number;
        cpf: string;
        assento: string;
        pagamento: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
