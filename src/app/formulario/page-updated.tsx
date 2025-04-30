'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { generateMarketingPlan, PlanData } from '@/lib/openai';

export default function FormularioPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Inicialização dos campos com valores vazios
    // (Mantendo o mesmo objeto de estado do formulário)
    qtd_pessoas: '',
    faturamento_mensal: '',
    setor: 'outro',
    setor_outro: '',
    // ... outros campos
  });

  // Recuperar dados do formulário do localStorage ao carregar a página
  useEffect(() => {
    const savedData = localStorage.getItem('marketingFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Erro ao carregar dados salvos:', error);
      }
    }
  }, []);

  // Salvar dados do formulário no localStorage quando houver alterações
  useEffect(() => {
    localStorage.setItem('marketingFormData', JSON.stringify(formData));
  }, [formData]);

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    // Lógica de manipulação de campos (mantida igual)
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target;
      const isChecked = checkbox.checked;
      
      setFormData(prev => {
        const fieldName = name.split('-')[0];
        const fieldValue = name.split('-')[1];
        
        if (isChecked) {
          return {
            ...prev,
            [fieldName]: [...(prev[fieldName] || []), fieldValue]
          };
        } else {
          return {
            ...prev,
            [fieldName]: (prev[fieldName] || []).filter(item => item !== fieldValue)
          };
        }
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Função para avançar para o próximo passo
  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  // Função para voltar ao passo anterior
  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      // Armazenar os dados do formulário para uso na página de resultados
      localStorage.setItem('marketingFormData', JSON.stringify(formData));
      
      // Gerar o plano de marketing usando a API da OpenAI
      const planData = await generateMarketingPlan(formData);
      
      // Armazenar o plano gerado para uso na página de resultados
      localStorage.setItem('marketingPlanData', JSON.stringify(planData));
      
      // Redirecionar para a página de resultados
      router.push('/resultado');
    } catch (error) {
      console.error('Erro ao processar o formulário:', error);
      alert('Ocorreu um erro ao gerar o plano de marketing. Por favor, tente novamente.');
      setIsProcessing(false);
    }
  };

  // Resto do componente permanece igual
  // ...
}
