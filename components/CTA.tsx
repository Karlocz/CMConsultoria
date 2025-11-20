
import React, { useState } from 'react';
import { EnvelopeIcon, ChatBubbleOvalLeftEllipsisIcon, ExclamationCircleIcon } from './IconComponents';
import ScrollReveal from './ScrollReveal';

const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    challenge: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    company: ''
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', company: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, digite seu nome.';
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Por favor, digite o nome da sua empresa.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleContact = (type: 'whatsapp' | 'email') => {
    if (!validate()) return;

    const message = `Olá! Meu nome é ${formData.name}, da empresa ${formData.company}.${
      formData.challenge ? ` Meu principal desafio hoje é: ${formData.challenge}.` : ''
    } Gostaria de solicitar o diagnóstico gratuito de dados.`;

    if (type === 'whatsapp') {
      // Replace SEUNUMERO with the actual phone number
      const url = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      // Replace seuemail@dominio.com with the actual email
      const subject = `Solicitação de Diagnóstico - ${formData.company}`;
      const url = `mailto:seuemail@dominio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contato" className="py-20 bg-neutral-medium relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-navy rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Sales Copy */}
          <div className="text-left">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Pronto para transformar sua empresa?
              </h2>
              <p className="mt-6 text-lg text-neutral-light">
                Não deixe para depois. A diferença entre crescer e estagnar está nas decisões que você toma hoje.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center text-neutral-light">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3 text-brand-blue">✓</div>
                  <span>Diagnóstico inicial 100% gratuito</span>
                </li>
                <li className="flex items-center text-neutral-light">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3 text-brand-blue">✓</div>
                  <span>Plano de ação personalizado</span>
                </li>
                <li className="flex items-center text-neutral-light">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center mr-3 text-brand-blue">✓</div>
                  <span>Retorno rápido sobre o investimento</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal delay={200}>
            <div className="bg-neutral-dark p-8 rounded-2xl shadow-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Fale com um Especialista</h3>
              
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-light mb-1">
                    Seu Nome <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-medium border ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-blue focus:ring-brand-blue'
                    } text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all`}
                    placeholder="Ex: João Silva"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <ExclamationCircleIcon className="w-4 h-4 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Company Input */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-light mb-1">
                    Nome da Empresa <span className="text-brand-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => {
                      setFormData({ ...formData, company: e.target.value });
                      if (errors.company) setErrors({ ...errors, company: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-medium border ${
                      errors.company ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:border-brand-blue focus:ring-brand-blue'
                    } text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all`}
                    placeholder="Ex: Silva Comércio Ltda"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400 flex items-center">
                      <ExclamationCircleIcon className="w-4 h-4 mr-1" /> {errors.company}
                    </p>
                  )}
                </div>

                {/* Challenge Input (Optional) */}
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-neutral-light mb-1">
                    Principal Desafio (Opcional)
                  </label>
                  <textarea
                    id="challenge"
                    rows={3}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-medium border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
                    placeholder="Ex: Preciso organizar meu estoque..."
                  />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button
                    onClick={() => handleContact('whatsapp')}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                  
                  <button
                    onClick={() => handleContact('email')}
                    className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>E-mail</span>
                  </button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Ao clicar, você será redirecionado para o app escolhido com uma mensagem pré-preenchida.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
