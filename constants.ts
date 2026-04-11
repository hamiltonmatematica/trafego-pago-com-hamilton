import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Layout,
  BarChart,
  MessageCircle,
  Zap
} from 'lucide-react';

export const WHATSAPP_NUMBER = "553884030420";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20Presencial%20de%20Tr%C3%A1fego%20Pago.`;

export const PAYMENT_LINK_CASH = "https://www.asaas.com/c/crjqjh6v1ufc6llm";
export const PAYMENT_LINK_INSTALLMENT = "https://www.asaas.com/c/pfriytvj5mb24523";

export const HERO_DATA = {
  headline: "Curso Presencial de Tráfego Pago (Meta Ads)",
  subheadline: "Aprenda a criar campanhas no Facebook e Instagram e sair do zero para a prática em apenas 1 dia.",
  details: [
    { icon: Calendar, text: "21 de abril" },
    { icon: Clock, text: "8h às 12h e 14h às 19h" },
    { icon: MapPin, text: "Av. Afonso Pena, 197 – Centro – Montes Claros" },
    { icon: Users, text: "Apenas 8 vagas" },
  ]
};

export const INSTRUCTOR_DATA = {
  name: "Hamilton Vinícius",
  role: "Mestre em Modelagem Computacional e Gestor de Tráfego",
  bio: [
    "Hamilton Vinícius é professor há mais de 20 anos, mestre em Modelagem Computacional e Sistemas e gestor de tráfego pago há mais de 6 anos.",
    "Atua ajudando empresas a crescerem por meio de estratégias de anúncios no Facebook e Instagram, com foco em resultado real, previsibilidade e escala.",
    "É membro das duas maiores comunidades de tráfego do Brasil e possui experiência prática na gestão de campanhas próprias e de empresas da região."
  ],
  highlights: [
    "Professor há 20+ anos",
    "Mestre em Modelagem Computacional",
    "Gestor de Tráfego Pago",
    "Especialista em Meta Ads",
    "Experiência prática com negócios locais",
    "Foco em resultado e conversão"
  ]
};

export const COURSE_MODULES = [
  { 
    icon: Target, 
    title: "Fundamentos do Tráfego Pago",
    details: ["O que é tráfego pago", "Estrutura de campanhas", "Como definir objetivos"]
  },
  { 
    icon: Layout, 
    title: "Configuração no Meta Ads",
    details: ["Conta de anúncios", "Página no Facebook", "Instagram profissional", "Pixel básico"]
  },
  { 
    icon: TrendingUp, 
    title: "Criação de Campanhas", 
    details: ["Reconhecimento", "Tráfego", "Engajamento", "Mensagens (WhatsApp)", "Conversão", "Remarketing"] 
  },
  { 
    icon: BarChart, 
    title: "Otimização",
    details: ["Leitura de métricas", "Ajustes práticos", "Como melhorar campanhas"]
  }
];

export const TARGET_AUDIENCE = [
  "Iniciantes que querem começar do zero",
  "Quem já tentou anunciar e não teve resultado",
  "Quem quer vender mais pelo Instagram",
  "Quem quer aprender de forma prática"
];

export const INCLUSIONS = [
  "1 dia de curso presencial",
  "Conteúdo 100% prático",
  "Turma com apenas 8 alunos",
  "Checklists e modelos prontos",
  "Suporte para dúvidas"
];

export const PRICING = {
  value: "R$ 197,00",
  installments: "até 6x"
};

export const NOTEBOOK_INFO = "Curso 100% prático: Todas as atividades serão realizadas no computador. O aluno utilizará seu próprio notebook e, caso não possua, a organização disponibilizará um equipamento para uso durante o curso.";