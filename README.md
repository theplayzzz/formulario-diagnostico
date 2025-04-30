# Plano de Marketing Personalizado

Aplicação para geração de planos de marketing personalizados utilizando inteligência artificial.

## Sobre o Projeto

O Plano de Marketing Personalizado é uma aplicação web que permite aos usuários criar planos de marketing detalhados e personalizados com base em informações específicas sobre sua empresa e setor. Utilizamos as APIs da OpenAI (GPT-4o) e Google Gemini para gerar recomendações estratégicas, planos de ação semanais e KPIs relevantes.

## Documentação

A documentação completa do projeto está disponível em [docs/documentacao-projeto.md](docs/documentacao-projeto.md).

## Funcionalidades

- **Formulário Interativo**: Coleta de informações em múltiplas etapas adaptadas ao setor da empresa
- **Geração de IA**: Criação de planos de marketing personalizados utilizando modelos avançados de IA
- **Exportação**: Possibilidade de exportar os planos em PDF, DOCX e CSV

## Tecnologias

- **Frontend**: Next.js, React, TailwindCSS, Shadcn UI
- **IA**: OpenAI API (GPT-4o), Google Generative AI (Gemini 1.5 Pro)
- **Exportação**: jsPDF, docx, file-saver
- **Outros**: TypeScript, PNPM

## Instalação

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

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
NEXT_PUBLIC_OPENAI_API_KEY=sua_chave_api_openai
```

## Licença

Este projeto é proprietário e confidencial.