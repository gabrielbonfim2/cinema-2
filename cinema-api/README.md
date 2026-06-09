# Cinema RapiDEX - API (Back End)

## Stack
- NestJS + Prisma ORM + PostgreSQL

## Como rodar

### 1. Configure o banco de dados
Abra o arquivo `.env` e ajuste com seus dados do PostgreSQL:
```
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/NOME_DO_BANCO?schema=public"
```

### 2. Crie as tabelas no banco
```bash
npx prisma migrate dev --name init
```

### 3. Inicie o servidor
```bash
npm run start:dev
```

A API estará disponível em: http://localhost:3000
Documentação Swagger em: http://localhost:3000/api

## Endpoints
- GET/POST /filmes
- GET/PATCH/DELETE /filmes/:id
- GET/POST /salas
- GET/PATCH/DELETE /salas/:id
- GET/POST /sessoes
- GET/PATCH/DELETE /sessoes/:id
- GET/POST /ingressos
- GET/PATCH/DELETE /ingressos/:id
