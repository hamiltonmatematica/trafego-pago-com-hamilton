import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle, 
  Target, 
  TrendingUp, 
  Brain, 
  Layout, 
  Image as ImageIcon, 
  Video, 
  MessageCircle,
  Award,
  BarChart,
  Zap
} from 'lucide-react';

export const WHATSAPP_NUMBER = "553884030420";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20de%20Tr%C3%A1fego%20e%20IA.`;

export const PAYMENT_LINK_CASH = "https://www.asaas.com/c/f2dxxlh0bs0vqown";
export const PAYMENT_LINK_INSTALLMENT = "https://www.asaas.com/c/q426y08qnvsgnrdb";

export const HERO_DATA = {
  headline: "Curso Presencial de Tráfego Pago + Inteligência Artificial",
  subheadline: "Aprenda a criar campanhas no Facebook e Instagram e produzir conteúdos com IA para vender mais em apenas 2 dias, de forma 100% prática.",
  details: [
    { icon: Calendar, text: "17 e 18 de janeiro" },
    { icon: Clock, text: "8h às 18h (almoço 12h às 14h)" },
    { icon: MapPin, text: "Av. Afonso Pena, 197 – Centro – Montes Claros" },
    { icon: Users, text: "Apenas 8 vagas" },
  ]
};

export const INSTRUCTOR_DATA = {
  name: "Hamilton Vinícius",
  role: "Mestre em Modelagem Computacional e Gestor de Tráfego",
  bio: [
    "Professor há mais de 20 anos, mestre em Modelagem Computacional e Sistemas e gestor de tráfego pago e inteligência artificial há mais de 6 anos.",
    "Atua na interseção entre educação, dados, marketing digital e IA, ajudando empresas a crescerem por meio de estratégias de tráfego pago no Facebook, Instagram e Google.",
    "É membro das duas maiores comunidades de tráfego do Brasil e possui experiência prática na gestão de campanhas próprias e de empresas da região, sempre com foco em resultado real, previsibilidade e escala."
  ],
  highlights: [
    "Professor há 20+ anos",
    "Mestre em Modelagem Computacional",
    "Gestor de Tráfego Pago e IA",
    "Especialista em Meta Ads",
    "Experiência prática com negócios locais",
    "Foco em dados, conversão e crescimento"
  ]
};

export const COURSE_MODULES = [
  { icon: Target, title: "Fundamentos do Tráfego Pago" },
  { icon: Layout, title: "Configurações Iniciais (Meta Ads)" },
  { icon: TrendingUp, title: "Criação de Campanhas na Prática", details: ["Reconhecimento", "Tráfego", "Leads", "Engajamento", "Mensagens (WhatsApp)", "Conversão", "Remarketing"] },
  { icon: BarChart, title: "Leitura e Otimização de Resultados" }
];

export const AI_DIFFERENTIALS = [
  { icon: MessageCircle, text: "Geração de copys persuasivas" },
  { icon: ImageIcon, text: "Criação de imagens com IA" },
  { icon: Video, text: "Criação e edição de vídeos com IA" },
  { icon: Zap, text: "Roteiros rápidos para anúncios" },
  { icon: Brain, text: "IA aplicada ao dia a dia do gestor" }
];

export const TARGET_AUDIENCE = [
  "Iniciantes do zero",
  "Quem já anuncia sem resultado",
  "Quem quer vender mais no Instagram",
  "Quem quer independência para rodar anúncios"
];

export const INCLUSIONS = [
  "2 dias de curso presencial",
  "Conteúdo 100% prático",
  "Turma com 8 alunos",
  "Checklists e modelos prontos",
  "Grupo de suporte por 30 dias"
];

export const PRICING = {
  original: "R$ 497",
  promo: "R$ 397",
  deadline: "até 31 de Dezembro",
  installments: "até 6x"
};

export const NOTEBOOK_INFO = "Curso 100% prático: todas as atividades serão realizadas no computador. O aluno utilizará seu próprio notebook e, caso não possua, a organização disponibilizará um equipamento para uso durante o curso.";