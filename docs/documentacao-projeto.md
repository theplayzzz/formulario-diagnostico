# Documentação do Projeto - Plano de Marketing Personalizado

## Sumário
1. [Visão Geral](#visão-geral)
2. [Arquitetura do Projeto](#arquitetura-do-projeto)
3. [Estrutura de Diretórios](#estrutura-de-diretórios)
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)
5. [Fluxo da Aplicação](#fluxo-da-aplicação)
6. [Integrações com IA](#integrações-com-ia)
7. [Endpoints e APIs](#endpoints-e-apis)
8. [Componentes Principais](#componentes-principais)
9. [Formulários e Validações](#formulários-e-validações)
10. [Página de Resultados](#página-de-resultados)
11. [Exportação de Dados](#exportação-de-dados)
12. [Configuração de Ambiente](#configuração-de-ambiente)
13. [Guia para Desenvolvimento](#guia-para-desenvolvimento)

## Visão Geral

O projeto "Plano de Marketing Personalizado" é uma aplicação web que permite aos usuários criar planos de marketing detalhados e personalizados com base em informações específicas sobre sua empresa e setor. A aplicação utiliza inteligência artificial (OpenAI e Google Gemini) para gerar recomendações estratégicas, planos de ação semanais e KPIs relevantes.

A aplicação foi desenvolvida utilizando o framework Next.js e é composta por três telas principais:
- **Página Inicial**: Apresentação do serviço
- **Formulário**: Coleta de informações sobre a empresa
- **Resultado**: Exibição do plano de marketing personalizado

## Arquitetura do Projeto

O projeto segue uma arquitetura moderna baseada em componentes, utilizando React com Next.js. A estrutura principal inclui:

- **Frontend**: Interface de usuário construída com React e estilizada com TailwindCSS
- **API de IA**: Integração com OpenAI GPT-4o e Google Gemini 1.5 Pro para geração de conteúdo
- **Exportação de Dados**: Funcionalidades para exportar os planos em PDF, DOCX e CSV

A aplicação segue os princípios de uma Single Page Application (SPA) com navegação entre rotas gerenciada pelo Next.js.

## Estrutura de Diretórios

```
/
├── public/             # Arquivos estáticos
├── src/
│   ├── app/            # Páginas da aplicação (Next.js App Router)
│   │   ├── formulario/ # Formulário para coleta de dados
│   │   ├── resultado/  # Página de exibição do plano
│   │   └── page.tsx    # Página inicial
│   ├── components/     # Componentes reutilizáveis
│   │   └── ui/         # Componentes de interface do usuário
│   ├── hooks/          # Hooks personalizados
│   └── lib/            # Utilitários e integrações
│       ├── gemini.ts   # Integração com Google Gemini
│       ├── openai.ts   # Integração com OpenAI
│       └── planUtils.ts # Utilitários para manipulação de planos
├── package.json        # Dependências e scripts
└── tailwind.config.ts  # Configuração do Tailwind CSS
```

## Tecnologias Utilizadas

### Frontend
- **Next.js 15.1.4**: Framework React
- **React 19.0.0**: Biblioteca de interface do usuário
- **TailwindCSS**: Framework CSS utilitário
- **Shadcn/ui**: Biblioteca de componentes baseada em Radix UI

### Integrações de IA
- **OpenAI API**: Integração com GPT-4o
- **Google Generative AI**: Integração com Gemini 1.5 Pro

### Utilitários
- **jsPDF**: Geração de arquivos PDF
- **docx**: Geração de arquivos DOCX
- **file-saver**: Facilitador para download de arquivos
- **date-fns**: Manipulação de datas

### Desenvolvimento
- **TypeScript**: Linguagem de programação
- **PNPM**: Gerenciador de pacotes
- **Cloudflare Workers**: Suporte para deploy

## Fluxo da Aplicação

### 1. Entrada do Usuário
O usuário acessa a página inicial e clica em "Começar Plano", sendo direcionado para o formulário.

### 2. Preenchimento do Formulário
No formulário, o usuário preenche informações em várias etapas:
- Qualificação (tamanho da empresa, faturamento)
- Setor de atuação
- Informações específicas do setor
- Maturidade em marketing e comercial
- Desafios e oportunidades

### 3. Processamento
Após o preenchimento, os dados são enviados para:
- Um webhook do n8n (https://n8n.lucasfelix.com/webhook-test/858fe18b-874b-4d6d-a30b-a718568b11e3)
- As APIs de IA (OpenAI ou Gemini) para geração do plano personalizado

### 4. Geração do Resultado
O plano gerado é estruturado com:
- Visão geral estratégica
- Plano de ação semanal (backlog)
- KPIs e métricas para acompanhamento

### 5. Exportação
O usuário pode exportar o plano em diferentes formatos:
- PDF
- DOCX (Word)
- CSV

## Integrações com IA

### OpenAI (GPT-4o)
A integração com OpenAI está implementada no arquivo `src/lib/openai.ts` e utiliza a biblioteca oficial da OpenAI. O sistema gera um prompt estruturado com base nos dados do formulário e envia para o modelo GPT-4o, que retorna um plano completo.

```typescript
// Exemplo de chamada à API
const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [
    {
      role: "system",
      content: "Você é um especialista em marketing e estratégia de crescimento para empresas."
    },
    {
      role: "user",
      content: prompt
    }
  ],
  temperature: 0.7,
  max_tokens: 4000,
});
```

### Google Gemini
A integração com o Google Gemini está implementada no arquivo `src/lib/gemini.ts` e utiliza a biblioteca oficial do Google. Similar à integração com a OpenAI, envia um prompt estruturado e processa a resposta.

```typescript
// Exemplo de chamada à API
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
const result = await model.generateContent(prompt);
const response = await result.response;
const text = response.text();
```

## Endpoints e APIs

### Webhook n8n
O formulário envia dados para um webhook do n8n para processamento:
- URL: `https://n8n.lucasfelix.com/webhook-test/858fe18b-874b-4d6d-a30b-a718568b11e3`
- Método: POST
- Corpo: Dados do formulário em JSON

### APIs de IA
- **OpenAI API**: Utiliza a chave de API definida em variáveis de ambiente
- **Google Gemini API**: Utiliza a chave de API definida no código

## Componentes Principais

### UI Components
A aplicação utiliza a biblioteca Shadcn/ui, que é baseada em Radix UI, oferecendo componentes acessíveis e estilizáveis. Alguns dos principais componentes incluem:

- Button
- Input
- Select
- Textarea
- RadioGroup
- Card
- Tabs
- Progress

### Componentes de Layout
- **Page Layout**: Define a estrutura básica de cada página
- **Form Stepper**: Interface de passo a passo para o formulário
- **Results Display**: Exibição do plano gerado

## Formulários e Validações

O formulário principal está dividido em 11 etapas, com validações e lógica condicional baseada nas respostas do usuário. A estrutura de perguntas é adaptada com base no setor selecionado e no nível de maturidade em marketing e comercial.

Os dados do formulário são gerenciados através do estado React e enviados ao webhook quando o usuário completa todos os passos.

### Estrutura de Perguntas
O sistema possui perguntas específicas para diferentes setores:
- Saúde
- Tecnologia
- Varejo
- Serviços
- Educação
- Indústria
- Construção Civil
- Agronegócio
- Financeiro

E também perguntas adaptadas ao nível de maturidade em marketing e comercial:
- Iniciante
- Intermediário
- Avançado

## Página de Resultados

A página de resultados (`src/app/resultado/page.tsx`) exibe o plano gerado em duas visualizações:

1. **Visão Semanal (Backlog)**: Organiza as tarefas por semana
2. **Resposta Completa**: Exibe o texto completo da resposta da IA

Os dados do plano são recuperados do `localStorage` onde foram armazenados após o processamento do formulário.

## Exportação de Dados

A aplicação permite exportar o plano em três formatos:

1. **PDF**: Utiliza a biblioteca jsPDF
2. **DOCX**: Utiliza a biblioteca docx
3. **CSV**: Gera um arquivo CSV com a estrutura semanal do plano

## Configuração de Ambiente

### Variáveis de Ambiente
- `NEXT_PUBLIC_OPENAI_API_KEY`: Chave de API da OpenAI

### Requisitos do Sistema
- Node.js v16+
- PNPM 7+

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Construir para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

## Guia para Desenvolvimento

### Adicionando um Novo Setor
Para adicionar um novo setor ao formulário:

1. Adicione as perguntas específicas ao objeto `perguntasPorSetor` em `src/app/formulario/page.tsx`
2. Atualize o componente Select com a nova opção de setor

### Modificando a Integração com IA
Para ajustar o prompt ou processamento da resposta da IA:

1. Edite o arquivo `src/lib/openai.ts` ou `src/lib/gemini.ts`
2. Ajuste a função de construção do prompt ou processamento da resposta

### Adicionando Novos Formatos de Exportação
Para adicionar um novo formato de exportação:

1. Adicione a lógica de exportação em `src/lib/planUtils.ts`
2. Adicione o botão e manipulador de evento em `src/app/resultado/page.tsx`