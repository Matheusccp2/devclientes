# Backend - Sistema de Cadastro de Clientes

API REST para gerenciamento de cadastro de clientes, desenvolvida com Node.js, TypeScript, MongoDB, Prisma ORM e Fastify.

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **Fastify** - Framework web de alta performance
- **MongoDB** - Banco de dados NoSQL
- **Prisma ORM** - ORM moderno para Node.js e TypeScript

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [MongoDB](https://www.mongodb.com/) (rodando localmente ou em nuvem)

## 🔧 Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd <nome-da-pasta>
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```env
DATABASE_URL="mongodb+srv://matheusccp2:Matheus22@matheusccp2.ekpc8.mongodb.net/matheusccp2?appName=matheusccp2"
PORT=3333
```

4. Execute as migrations do Prisma
```bash
npx prisma generate
npx prisma db push
```

## ▶️ Como Executar

### Modo Desenvolvimento
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3333` (ou na porta configurada no .env)

## 📡 Rotas da API

### Criar Cliente
- **Método:** `POST`
- **Rota:** `/customer`
- **Descrição:** Cria um novo cliente no sistema
- **Body (exemplo):**
```json
{
  "name": "Matheus Costa",
  "email": "matheus@exemplo.com"
}
```

### Listar Clientes
- **Método:** `GET`
- **Rota:** `/customers`
- **Descrição:** Retorna a lista de todos os clientes cadastrados

### Deletar Cliente
- **Método:** `DELETE`
- **Rota:** `/customer`
- **Descrição:** Remove um cliente do sistema
- **Query Params ou Body:** 
```json
{
  "id": "id_do_cliente"
}
```

## 🗂️ Estrutura do Projeto

```
src/
├── controllers/     # Controladores das rotas
├── services/         # Lógica de negócio
├── prisma/           # Configuração do Prisma Client
├── routes.ts         # Definição das rotas
└── server.ts         # Arquivo principal
```

## 🛠️ Scripts Úteis

```bash
# Executar em desenvolvimento com hot reload
npm run dev

# Gerar Prisma Client
npx prisma generate

# Visualizar banco de dados (Prisma Studio)
npx prisma studio

## 📝 Observações

- Certifique-se de que o MongoDB está rodando antes de iniciar o servidor
- As variáveis de ambiente são essenciais para o funcionamento correto
- O Prisma Schema está localizado em `prisma/schema.prisma`

## 🐛 Troubleshooting

**Erro de conexão com MongoDB:**
- Verifique se o MongoDB está rodando
- Confirme se a URL de conexão no `.env` está correta

**Erro ao executar migrations:**
- Execute `npx prisma generate` novamente
- Verifique as permissões do banco de dados

**Porta já em uso:**
- Altere a porta no arquivo `.env`
- Ou finalize o processo que está usando a porta atual