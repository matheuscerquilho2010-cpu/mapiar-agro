export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  image?: string;
  icon?: string;
  features?: string[];
}

export interface ResearchItem {
  title: string;
  description: string;
  points: string[];
  badges: string[];
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface DeliverableExample {
  id: string;
  title: string;
  description: string;
  type: 'linhas' | 'ndvi' | 'talhoes' | 'defensivos';
  image?: string;
}

export interface ProposalFormData {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  cultura: string;
  areaHa: string;
  municipioUf: string;
  servico: string;
  mensagem: string;
}
