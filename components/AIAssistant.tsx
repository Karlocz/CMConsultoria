
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from './IconComponents';

// Componente simples para formatar o texto da IA (Markdown básico)
const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  // Converte **texto** em negrito e lida com quebras de linha
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return (
    <div className="whitespace-pre-wrap">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </div>
  );
};

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da **CM Consultoria**. Como posso ajudar você a entender o poder dos dados no seu negócio hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMessage }].map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Você é o assistente virtual da CM Consultoria de Dados, fundada por Carlos Eduardo Maximino. 
          Seu objetivo é atuar como um Consultor de Estratégia de Dados para PMEs.
          
          DIRETRIZES DE FORMATAÇÃO:
          - Use **negrito** para destacar termos importantes, benefícios ou valores.
          - Use listas com hífen (-) para enumerar passos ou vantagens.
          - Mantenha parágrafos curtos para facilitar a leitura.
          
          CONTEÚDO:
          - Explique como BI e IA aumentam lucros e reduzem desperdícios.
          - Seja profissional, didático e focado em resultados de negócio.
          - Se perguntarem sobre preços, explique que cada projeto é personalizado e convide o usuário para um **Diagnóstico Gratuito** através do formulário de contato.
          - Mencione que a CM Consultoria traz clareza para a tomada de decisão.`,
          maxOutputTokens: 600,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua pergunta. Pode tentar novamente?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Estou passando por uma manutenção rápida. Que tal entrar em contato direto pelo **WhatsApp** no botão abaixo do formulário?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-brand-blue text-white p-4 rounded-full shadow-2xl shadow-brand-blue/40 hover:scale-110 transition-transform duration-300 animate-bounce-slow"
        >
          <ChatBubbleLeftRightIcon className="w-8 h-8" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-neutral-medium w-[350px] sm:w-[400px] h-[550px] rounded-2xl shadow-2xl flex flex-col border border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-brand-navy p-4 flex justify-between items-center border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-sm">Consultor IA - CM Consultoria</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-light hover:text-white">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-neutral-dark/30 scrollbar-thin scrollbar-thumb-gray-700">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-brand-blue text-white rounded-tr-none shadow-md' 
                    : 'bg-neutral-medium text-neutral-light border border-gray-700 rounded-tl-none'
                }`}>
                  <FormattedMessage text={m.text} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-medium p-3 rounded-2xl rounded-tl-none border border-gray-700">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-neutral-dark border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Digite sua dúvida sobre dados..."
              className="flex-grow bg-neutral-medium border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-blue transition-colors placeholder-gray-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-brand-blue text-white p-2 rounded-lg disabled:opacity-50 hover:bg-opacity-80 transition-all flex-shrink-0"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
