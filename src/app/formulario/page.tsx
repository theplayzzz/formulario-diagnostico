"use client";

import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { perguntasPorSetor, perguntasPorMaturidadeMarketing, perguntasPorMaturidadeComercial } from "@/lib/formConfig";

type FormData = {
  setor: string;
  maturidadeMarketing: string;
  maturidadeComercial: string;
  [key: string]: string;
};

export default function FormularioPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    setor: "",
    maturidadeMarketing: "",
    maturidadeComercial: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Criar um objeto com os dados do formulário
    const dadosFormulario = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Criar um blob com os dados em formato JSON
    const blob = new Blob([JSON.stringify(dadosFormulario, null, 2)], {
      type: "application/json",
    });

    // Criar um link para download
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dados-formulario.json";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Informações Básicas</h2>
            <div className="space-y-2">
              <Label htmlFor="setor" className="text-white">Setor da Empresa</Label>
              <Select value={formData.setor} onValueChange={(value) => handleInputChange("setor", value)}>
                <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Selecione um setor" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  {Object.keys(perguntasPorSetor).map((setor) => (
                    <SelectItem key={setor} value={setor} className="hover:bg-gray-700">
                      {setor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maturidadeMarketing" className="text-white">Maturidade em Marketing</Label>
              <Select value={formData.maturidadeMarketing} onValueChange={(value) => handleInputChange("maturidadeMarketing", value)}>
                <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Selecione o nível" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  {Object.keys(perguntasPorMaturidadeMarketing).map((nivel) => (
                    <SelectItem key={nivel} value={nivel} className="hover:bg-gray-700">
                      {nivel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="maturidadeComercial" className="text-white">Maturidade Comercial</Label>
              <Select value={formData.maturidadeComercial} onValueChange={(value) => handleInputChange("maturidadeComercial", value)}>
                <SelectTrigger className="bg-gray-800 text-white border-gray-700">
                  <SelectValue placeholder="Selecione o nível" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  {Object.keys(perguntasPorMaturidadeComercial).map((nivel) => (
                    <SelectItem key={nivel} value={nivel} className="hover:bg-gray-700">
                      {nivel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Perguntas do Setor</h2>
            {formData.setor && perguntasPorSetor[formData.setor].map((pergunta) => (
              <div key={pergunta.field} className="space-y-2">
                <Label htmlFor={pergunta.field} className="text-white">{pergunta.label}</Label>
                {pergunta.type === "textarea" ? (
                  <Textarea
                    id={pergunta.field}
                    value={formData[pergunta.field] || ""}
                    onChange={(e) => handleInputChange(pergunta.field, e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                ) : pergunta.type === "radio" ? (
                  <RadioGroup
                    value={formData[pergunta.field] || ""}
                    onValueChange={(value) => handleInputChange(pergunta.field, value)}
                    className="space-y-2"
                  >
                    {pergunta.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`${pergunta.field}-${option}`} className="border-gray-700" />
                        <Label htmlFor={`${pergunta.field}-${option}`} className="text-white">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Input
                    id={pergunta.field}
                    type={pergunta.type}
                    value={formData[pergunta.field] || ""}
                    onChange={(e) => handleInputChange(pergunta.field, e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                )}
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Perguntas de Marketing</h2>
            {formData.maturidadeMarketing && perguntasPorMaturidadeMarketing[formData.maturidadeMarketing].map((pergunta) => (
              <div key={pergunta.field} className="space-y-2">
                <Label htmlFor={pergunta.field} className="text-white">{pergunta.label}</Label>
                {pergunta.type === "textarea" ? (
                  <Textarea
                    id={pergunta.field}
                    value={formData[pergunta.field] || ""}
                    onChange={(e) => handleInputChange(pergunta.field, e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                ) : pergunta.type === "radio" ? (
                  <RadioGroup
                    value={formData[pergunta.field] || ""}
                    onValueChange={(value) => handleInputChange(pergunta.field, value)}
                    className="space-y-2"
                  >
                    {pergunta.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`${pergunta.field}-${option}`} className="border-gray-700" />
                        <Label htmlFor={`${pergunta.field}-${option}`} className="text-white">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Input
                    id={pergunta.field}
                    type={pergunta.type}
                    value={formData[pergunta.field] || ""}
                    onChange={(e) => handleInputChange(pergunta.field, e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                )}
              </div>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Perguntas Comerciais</h2>
            {formData.maturidadeComercial && perguntasPorMaturidadeComercial[formData.maturidadeComercial].map((pergunta) => (
              <div key={pergunta.field} className="space-y-2">
                <Label htmlFor={pergunta.field} className="text-white">{pergunta.label}</Label>
                {pergunta.type === "textarea" ? (
                  <Textarea
                    id={pergunta.field}
                    value={formData[pergunta.field] || ""}
                    onChange={(e) => handleInputChange(pergunta.field, e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                ) : pergunta.type === "radio" ? (
                  <RadioGroup
                    value={formData[pergunta.field] || ""}
                    onValueChange={(value) => handleInputChange(pergunta.field, value)}
                    className="space-y-2"
                  >
                    {pergunta.options?.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`${pergunta.field}-${option}`} className="border-gray-700" />
                        <Label htmlFor={`${pergunta.field}-${option}`} className="text-white">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Input
                    id={pergunta.field}
                    type={pergunta.type}
                    value={formData[pergunta.field] || ""}
                    onChange={(e) => handleInputChange(pergunta.field, e.target.value)}
                    className="bg-gray-800 text-white border-gray-700"
                  />
                )}
              </div>
            ))}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Revisão dos Dados</h2>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto border border-gray-700">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-white">Formulário de Diagnóstico</h1>
        
        <Progress value={(step / 5) * 100} className="mb-8" />
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              disabled={step === 1}
              className="border-gray-700 text-white hover:bg-gray-700"
            >
              Voltar
            </Button>
            
            {step < 5 ? (
              <Button 
                onClick={() => setStep((prev) => Math.min(5, prev + 1))}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Próximo
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Gerar JSON
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
