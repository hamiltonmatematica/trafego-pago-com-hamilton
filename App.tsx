import React from 'react';
import {
  WHATSAPP_LINK,
  PAYMENT_LINK_CASH,
  PAYMENT_LINK_INSTALLMENT,
  HERO_DATA,
  INSTRUCTOR_DATA,
  COURSE_MODULES,
  AI_DIFFERENTIALS,
  TARGET_AUDIENCE,
  INCLUSIONS,
  PRICING,
  NOTEBOOK_INFO
} from './constants';
import { Check, ArrowRight, MessageCircle, CheckCircle, Users, Laptop } from 'lucide-react';

const ButtonCTA: React.FC<{ type: 'cash' | 'installment'; className?: string }> = ({ type, className = "" }) => {
  const isCash = type === 'cash';
  const baseClasses = "flex flex-col items-center justify-center px-6 py-4 rounded-lg font-bold text-white transition-transform hover:scale-105 shadow-lg w-full md:w-auto min-w-[260px]";
  const colorClasses = isCash
    ? "bg-green-600 hover:bg-green-500"
    : "bg-blue-600 hover:bg-blue-500";

  const text = isCash ? "Quero pagar à vista" : "Quero parcelar";
  const subtext = isCash ? "PIX ou Dinheiro" : `Cartão em ${PRICING.installments}`;

  const link = isCash ? PAYMENT_LINK_CASH : PAYMENT_LINK_INSTALLMENT;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${colorClasses} ${className}`}
    >
      <span className="text-xl">{text}</span>
      <span className="text-sm font-normal opacity-90">{subtext}</span>
    </a>
  );
};

const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}> = ({ children, className = "", id, dark = false }) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-4 md:px-8 ${dark ? 'bg-brand-black text-white' : 'bg-white text-brand-black'} ${className}`}
  >
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const Title: React.FC<{ children: React.ReactNode; dark?: boolean; center?: boolean }> = ({ children, dark = false, center = false }) => (
  <h2 className={`text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight ${center ? 'text-center' : ''} ${dark ? 'text-white' : 'text-black'}`}>
    {children}
  </h2>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-orange selection:text-white overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1 border border-brand-orange text-brand-orange rounded-full text-sm font-bold tracking-wider mb-6 animate-pulse">
            VAGAS LIMITADAS: APENAS 8
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Curso Presencial de <span className="text-brand-orange">Tráfego Pago</span> <br className="hidden md:block" />
            + <span className="text-brand-orange">Inteligência Artificial</span> <span className="text-white">(Montes Claros)</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {HERO_DATA.subheadline}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {HERO_DATA.details.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <item.icon className="w-8 h-8 text-brand-orange mb-2" />
                <span className="text-sm font-medium text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <ButtonCTA type="cash" />
            <ButtonCTA type="installment" />
          </div>

          <div className="flex justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm md:text-base"
            >
              <MessageCircle size={20} className="text-green-500" />
              <span>Dúvidas? Fale no WhatsApp: <strong>+55 38 8403-0420</strong></span>
            </a>
          </div>
        </div>
      </section>

      {/* 2 & 3. INSTRUCTOR & HIGHLIGHTS */}
      <Section className="" dark={false}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Placeholder for Instructor Image */}
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                src="/hamilton.JPG"
                alt={INSTRUCTOR_DATA.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">{INSTRUCTOR_DATA.name}</h3>
                  <p className="text-brand-orange font-medium">{INSTRUCTOR_DATA.role}</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange z-[-1] rounded-full opacity-20"></div>
          </div>

          <div>
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-2 block">Seu Mentor</span>
            <Title>Quem será seu instrutor</Title>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              {INSTRUCTOR_DATA.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-brand-orange">
              <h4 className="font-bold text-xl mb-4 text-black">Destaques Rápidos</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INSTRUCTOR_DATA.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-800 font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. GALLERY (Social Proof) */}
      <Section dark={true} className="bg-brand-gray">
        <div className="text-center mb-12">
          <Title center dark>Turmas Presenciais Anteriores</Title>
          <p className="text-gray-400">Um ambiente focado em aprendizado prático e networking.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden border border-white/10 group hover:border-brand-orange transition-colors">
              <img
                src={`/turma${i}.jpg`}
                alt={`Turma anterior ${i}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 5, 6 & 7. ABOUT COURSE, CONTENT & AI */}
      <Section dark={false} className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Title>O Essencial para Vender Online</Title>
          <p className="text-xl text-gray-600 mb-8">
            Um curso presencial, intensivo e <span className="font-bold text-brand-orange">100% prático</span>,
            focado em tráfego pago no Facebook e Instagram e uso de Inteligência Artificial para criação de conteúdos que convertem.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row items-center gap-5 max-w-3xl mx-auto shadow-md">
            <div className="bg-brand-orange/10 p-4 rounded-full text-brand-orange shrink-0">
              <Laptop size={28} />
            </div>
            <p className="text-gray-800 text-left md:text-left text-base md:text-lg font-medium leading-relaxed">
              {NOTEBOOK_INFO}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-black text-white p-2 rounded-lg"><ArrowRight size={24} /></span>
              Conteúdo do Curso
            </h3>
            <div className="space-y-6">
              {COURSE_MODULES.map((module, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                  <div className="flex items-start gap-4">
                    <module.icon className="text-brand-orange shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{module.title}</h4>
                      {module.details && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {module.details.map((d, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                              {d}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Differentiator */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Abstract Orange Circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full blur-[80px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10">
              <span className="bg-brand-orange text-white p-2 rounded-lg"><Check size={24} /></span>
              Diferencial: Inteligência Artificial
            </h3>
            <p className="text-gray-400 mb-8 relative z-10">
              Não basta saber apertar botões. Você vai aprender a usar a IA para acelerar sua produção e criatividade.
            </p>
            <ul className="space-y-5 relative z-10">
              {AI_DIFFERENTIALS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-full text-brand-orange">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. TARGET AUDIENCE */}
      <Section dark={true}>
        <div className="text-center mb-12">
          <Title dark center>Para quem é este curso?</Title>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((audience, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors text-center flex flex-col items-center">
              <Check className="text-brand-orange mb-4 w-10 h-10" />
              <p className="font-semibold text-lg">{audience}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. INCLUSIONS */}
      <Section className="bg-brand-orange">
        <div className="max-w-4xl mx-auto text-center mb-10 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que está incluso</h2>
          <p className="opacity-90 text-lg">Tudo que você precisa para sair do zero e ter resultados.</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {INCLUSIONS.map((inc, i) => (
            <div key={i} className="bg-white text-black px-6 py-5 rounded-xl font-bold shadow-lg flex items-center gap-3 w-full md:w-auto md:min-w-[300px] hover:scale-105 transition-transform">
              <CheckCircle className="text-green-600 shrink-0" size={24} />
              <span className="text-lg">{inc}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. INVESTMENT & FINAL CTA */}
      <Section dark={true} className="pb-32">
        <div className="max-w-4xl mx-auto bg-white text-black rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-2">Investimento</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Garanta sua vaga agora</h3>

            <div className="flex flex-col items-center justify-center mb-8">
              <span className="text-gray-400 line-through text-xl">Valor normal: {PRICING.original}</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-6xl font-black text-black">{PRICING.promo}</span>
              </div>
              <p className="text-red-600 font-bold mt-2 bg-red-100 px-4 py-1 rounded-full">
                Promoção válida {PRICING.deadline}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <ButtonCTA type="cash" className="w-full md:w-80" />
              <ButtonCTA type="installment" className="w-full md:w-80" />
            </div>

            <div className="text-gray-500 text-sm">
              <p className="flex items-center justify-center gap-1">
                <Users size={16} /> Apenas 8 vagas disponíveis para esta turma.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 text-center border-t border-gray-200">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-brand-orange font-medium"
            >
              <MessageCircle size={20} />
              Precisa de ajuda? Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Hamilton Vinícius. Todos os direitos reservados.</p>
          <p className="mt-2">Montes Claros - MG</p>
        </div>
      </footer>
    </div>
  );
}