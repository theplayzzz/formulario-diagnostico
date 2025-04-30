// Definição das perguntas por setor
export const perguntasPorSetor: { [key: string]: { label: string; field: string; type: string; options?: string[] }[] } = {
  "Saúde": [
    { label: "Quais especialidades médicas ou serviços de saúde são o foco principal?", field: "saude_foco", type: "text" },
    { label: "Vocês atendem pacientes particulares, convênios ou ambos?", field: "saude_convenio", type: "radio", options: ["Particular", "Convênios", "Ambos"] },
    { label: "Qual o volume médio de pacientes atendidos por mês?", field: "saude_volume_pacientes", type: "number" },
    { label: "Como é feita a captação de novos pacientes atualmente?", field: "saude_captacao", type: "textarea" },
    { label: "Quais são os principais desafios na gestão da clínica ou consultório?", field: "saude_desafios_gestao", type: "textarea" },
  ],
  "Tecnologia": [
    { label: "Qual é o principal produto ou serviço de tecnologia oferecido? (SaaS, App, Hardware, Consultoria, etc.)", field: "tec_produto_servico", type: "text" },
    { label: "Qual é o modelo de receita principal? (Assinatura, Venda única, Publicidade, etc.)", field: "tec_modelo_receita", type: "text" },
    { label: "Quem são seus principais concorrentes diretos e indiretos?", field: "tec_concorrentes", type: "textarea" },
    { label: "Qual o ciclo de vida médio de um cliente?", field: "tec_ciclo_cliente", type: "text" },
    { label: "Quais métricas chave (KPIs) vocês acompanham? (MRR, CAC, LTV, Churn, etc.)", field: "tec_kpis", type: "textarea" },
  ],
  "Varejo": [
    { label: "Qual o tipo de produto vendido? (Moda, Eletrônicos, Alimentos, etc.)", field: "varejo_tipo_produto", type: "text" },
    { label: "A operação é física, online (e-commerce) ou ambos?", field: "varejo_operacao", type: "radio", options: ["Física", "Online", "Ambos"] },
    { label: "Qual o ticket médio por compra?", field: "varejo_ticket_medio", type: "number" },
    { label: "Quais são os principais canais de venda?", field: "varejo_canais_venda", type: "textarea" },
    { label: "Como vocês gerenciam o estoque e a logística?", field: "varejo_estoque_logistica", type: "textarea" },
  ],
  "Serviços": [
    { label: "Qual tipo de serviço é oferecido? (Consultoria, Marketing, Contabilidade, Advocacia, etc.)", field: "servicos_tipo", type: "text" },
    { label: "Como os serviços são precificados? (Hora, Projeto, Retainer Mensal, etc.)", field: "servicos_precificacao", type: "text" },
    { label: "Qual o perfil do cliente ideal (ICP)?", field: "servicos_icp", type: "textarea" },
    { label: "Como é o processo de aquisição de novos clientes?", field: "servicos_aquisicao", type: "textarea" },
    { label: "Qual a taxa de retenção de clientes?", field: "servicos_retencao", type: "text" },
  ],
  "Educação": [
    { label: "Quais cursos ou programas têm mais procura ou são mais lucrativos?", field: "edu_cursos_procura", type: "text" },
    { label: "Vocês costumam oferecer serviços ou pacotes complementares?", field: "edu_servicos_complementares", type: "textarea" },
    { label: "A instituição é presencial, online ou híbrida?", field: "edu_modalidade", type: "radio", options: ["Presencial", "Online", "Híbrida"] },
    { label: "Qual o ticket médio por aluno?", field: "edu_ticket_medio", type: "number" },
    { label: "Quantos alunos estão ativos atualmente?", field: "edu_alunos_ativos", type: "number" },
    { label: "Como vocês atraem novos alunos hoje?", field: "edu_atracao_alunos", type: "textarea" },
    { label: "Como lidam com evasão?", field: "edu_evasao", type: "textarea" },
  ],
  "Indústria": [
    { label: "Qual o principal produto fabricado?", field: "ind_produto", type: "text" },
    { label: "Quais são os principais mercados atendidos? (B2B, B2C, Governo)", field: "ind_mercados", type: "text" },
    { label: "Como funciona a cadeia de suprimentos?", field: "ind_suprimentos", type: "textarea" },
    { label: "Quais são os principais desafios de produção?", field: "ind_desafios_producao", type: "textarea" },
    { label: "Vocês possuem certificações de qualidade ou ambientais?", field: "ind_certificacoes", type: "textarea" },
  ],
  "Construção Civil": [
    { label: "Qual o foco principal da empresa? (Residencial, Comercial, Infraestrutura, Reformas)", field: "cc_foco", type: "text" },
    { label: "Qual o tamanho médio dos projetos executados?", field: "cc_tamanho_projeto", type: "text" },
    { label: "Como a empresa adquire novos projetos/clientes?", field: "cc_aquisicao_projetos", type: "textarea" },
    { label: "Quais são os principais desafios na gestão de obras?", field: "cc_desafios_obras", type: "textarea" },
    { label: "A empresa utiliza alguma tecnologia específica na construção ou gestão?", field: "cc_tecnologia", type: "textarea" },
  ],
  "Agronegócio": [
    { label: "Qual o principal produto agrícola ou pecuário?", field: "agro_produto", type: "text" },
    { label: "Qual o tamanho da área de produção?", field: "agro_area", type: "text" },
    { label: "Quais tecnologias são utilizadas na produção? (Agricultura de precisão, etc.)", field: "agro_tecnologia", type: "textarea" },
    { label: "Para quem vocês vendem a produção? (Cooperativas, Indústria, Exportação, Consumidor final)", field: "agro_venda", type: "text" },
    { label: "Quais são os principais desafios enfrentados? (Clima, Pragas, Logística, Mercado)", field: "agro_desafios", type: "textarea" },
  ],
  "Financeiro": [
    { label: "Qual o principal serviço financeiro oferecido? (Crédito, Investimento, Seguros, Meios de Pagamento, etc.)", field: "fin_servico", type: "text" },
    { label: "Qual o público-alvo principal? (Pessoa Física, Pessoa Jurídica, Segmento específico)", field: "fin_publico", type: "text" },
    { label: "Quais são os principais canais de distribuição ou atendimento?", field: "fin_canais", type: "textarea" },
    { label: "Como a empresa se diferencia da concorrência?", field: "fin_diferencial", type: "textarea" },
    { label: "Quais são as principais regulamentações que impactam o negócio?", field: "fin_regulamentacao", type: "textarea" },
  ],
};

// Definição das perguntas por nível de maturidade em marketing
export const perguntasPorMaturidadeMarketing: { [key: string]: { label: string; field: string; type: string; options?: string[] }[] } = {
  "Iniciante": [
    { label: "Quais são os 3 principais objetivos que você espera alcançar com marketing nos próximos 6 meses?", field: "maturidade_iniciante_objetivos", type: "textarea" },
    { label: "Qual o orçamento mensal disponível para investir em marketing?", field: "maturidade_iniciante_orcamento", type: "number" },
    { label: "Você já possui alguma presença online? (Website, Redes Sociais)", field: "maturidade_iniciante_presenca", type: "radio", options: ["Sim", "Não"] },
  ],
  "Intermediário": [
    { label: "Quais canais de marketing vocês utilizam atualmente e qual o retorno percebido de cada um?", field: "maturidade_inter_canais", type: "textarea" },
    { label: "Qual o Custo de Aquisição de Cliente (CAC) atual?", field: "maturidade_inter_cac", type: "number" },
    { label: "Vocês possuem uma base de leads ou clientes? Como se comunicam com ela?", field: "maturidade_inter_base", type: "textarea" },
  ],
  "Avançado": [
    { label: "Quais ferramentas de automação de marketing e CRM vocês utilizam?", field: "maturidade_avancado_ferramentas", type: "textarea" },
    { label: "Qual o Lifetime Value (LTV) médio de um cliente?", field: "maturidade_avancado_ltv", type: "number" },
    { label: "Como vocês mensuram o ROI das ações de marketing?", field: "maturidade_avancado_roi", type: "textarea" },
  ],
};

// Definição das perguntas por nível de maturidade comercial
export const perguntasPorMaturidadeComercial: { [key: string]: { label: string; field: string; type: string; options?: string[] }[] } = {
  "Iniciante": [
    { label: "Como vocês captam novos clientes atualmente?", field: "comercial_iniciante_captacao", type: "textarea" },
    { label: "Qual o ciclo médio de vendas (tempo entre primeiro contato e fechamento)?", field: "comercial_iniciante_ciclo", type: "text" },
    { label: "Quais são os principais obstáculos no processo de vendas?", field: "comercial_iniciante_obstaculos", type: "textarea" },
  ],
  "Intermediário": [
    { label: "Vocês possuem um funil de vendas estruturado? Descreva as etapas.", field: "comercial_inter_funil", type: "textarea" },
    { label: "Qual a taxa de conversão média entre cada etapa do funil?", field: "comercial_inter_conversao", type: "text" },
    { label: "Vocês utilizam algum sistema de CRM? Qual?", field: "comercial_inter_crm", type: "text" },
  ],
  "Avançado": [
    { label: "Como é estruturada a equipe comercial? (Papéis, responsabilidades, metas)", field: "comercial_avancado_equipe", type: "textarea" },
    { label: "Quais métricas de vendas vocês acompanham regularmente?", field: "comercial_avancado_metricas", type: "textarea" },
    { label: "Vocês possuem estratégias de upsell/cross-sell? Como funcionam?", field: "comercial_avancado_upsell", type: "textarea" },
  ],
}; 