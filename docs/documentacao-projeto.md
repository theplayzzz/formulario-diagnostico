# Documentação do Projeto: Formulário de Diagnóstico

## Visão Geral
Este projeto é um formulário de diagnóstico empresarial desenvolvido com Next.js e TypeScript. O formulário coleta informações detalhadas sobre empresas em diferentes setores, avaliando sua maturidade em marketing e área comercial.

## Tecnologias Utilizadas
- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/UI (componentes)

## Estrutura do Projeto

### Principais Arquivos
- `src/app/formulario/page.tsx`: Componente principal do formulário
- `src/lib/formConfig.ts`: Configurações e perguntas do formulário
- `src/components/ui/*`: Componentes reutilizáveis da UI

### Funcionalidades Implementadas

#### 1. Formulário Multi-etapas
O formulário é dividido em 5 etapas:
1. Informações Básicas
   - Seleção do setor
   - Nível de maturidade em marketing
   - Nível de maturidade comercial

2. Perguntas Específicas do Setor
   - Perguntas personalizadas baseadas no setor selecionado

3. Perguntas de Marketing
   - Perguntas baseadas no nível de maturidade em marketing

4. Perguntas Comerciais
   - Perguntas baseadas no nível de maturidade comercial

5. Revisão dos Dados
   - Visualização final dos dados coletados
   - Geração de arquivo JSON

#### 2. Interface do Usuário
- Design responsivo
- Tema escuro
- Barra de progresso
- Navegação intuitiva entre etapas
- Validação de campos
- Diferentes tipos de inputs (texto, número, área de texto, radio buttons)

#### 3. Gerenciamento de Estado
- Utilização do useState para gerenciar dados do formulário
- Estado persistente entre as etapas
- Manipulação dinâmica de perguntas baseada nas seleções do usuário

#### 4. Exportação de Dados
- Geração automática de arquivo JSON
- Inclusão de timestamp na exportação
- Download automático dos dados preenchidos

## Configuração do Formulário
O arquivo `formConfig.ts` contém as configurações para:
- Perguntas por setor
- Perguntas por nível de maturidade em marketing
- Perguntas por nível de maturidade comercial

Cada setor e nível de maturidade possui seu próprio conjunto de perguntas customizadas.

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
# ou
yarn
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse `http://localhost:3000` no navegador

## Últimas Atualizações
- Implementação do tema escuro
- Correção de estilos e cores para melhor contraste
- Ajustes na responsividade
- Melhorias na acessibilidade dos componentes

## Próximos Passos
- Implementar validação de campos obrigatórios
- Adicionar persistência de dados no localStorage
- Implementar sistema de autenticação
- Adicionar suporte para múltiplos idiomas
- Implementar dashboard para visualização dos dados coletados