import { ServiceItem, DeliverableExample, StatItem } from '../types';

export const COMPANY_INFO = {
  name: 'MapIar',
  concept: 'mapear + IA + ar',
  tagline: 'Agricultura de precisão com drone',
  slogan: 'Do voo ao dado que decide a sua lavoura',
  description: 'Mapeamento, restituição de linhas para piloto automático, acompanhamento de lavoura por imagens multiespectrais, identificação de pragas e doenças e comprovação científica de eficácia de defensivos. Engenheiro Agrônomo (CREA/ART).',
  website: 'mapiar.ia.br',
  instagram: '@mapiar',
  email: 'contato@mapiar.ia.br',
  phone: '(11) 98765-4321',
  phoneRaw: '5511987654321',
  credentials: 'Eng. Agrônomo · CREA/ART',
  defaultWhatsappMessage: 'Olá! Conheci a MapIar pelo site e gostaria de solicitar um orçamento para serviços de agricultura de precisão.'
};

export const INDICATORS = [
  {
    id: 'hectares',
    label: 'Hectares Mapeados',
    value: 185000,
    suffix: '+ ha',
    description: 'Área agrícola mapeada com precisão centimétrica',
    iconName: 'Map'
  },
  {
    id: 'projetos',
    label: 'Projetos Realizados',
    value: 480,
    suffix: '+',
    description: 'Missões entregues para cana, grãos e pesquisa',
    iconName: 'Layers'
  },
  {
    id: 'calibrado',
    label: 'Padrão Científico',
    value: 100,
    suffix: '%',
    prefix: '',
    description: 'Sensores com calibração radiométrica e painel',
    iconName: 'ShieldCheck'
  },
  {
    id: 'acuracia',
    label: 'Precisão Posicional',
    value: 2,
    suffix: ' cm',
    prefix: '< ',
    description: 'Acurácia com GNSS RTK/PPK para piloto automático',
    iconName: 'Crosshair'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'restituicao-linhas',
    title: 'Restituição de linhas',
    description: 'Linhas de plantio prontas para o piloto automático da colhedora, direto do ortomosaico. Menos pisoteio e retrabalho.',
    tag: 'Piloto Automático',
    image: '/assets/images/mapiar_hero_drone_survey_1793886340679.jpg',
    features: [
      'Geração de arquivos compatíveis com John Deere, Trimble e Agres',
      'Minimização do pisoteio em soqueiras e linhas de cana/grãos',
      'Alinhamento milimétrico extraído diretamente do ortomosaico'
    ]
  },
  {
    id: 'projeto-plantio',
    title: 'Projeto de plantio',
    description: 'Linhas de plantio otimizadas pelo relevo e pelo talhão, prontas para o piloto automático — aproveitando melhor cada hectare.',
    tag: 'Otimização de Hectare',
    image: '/assets/images/service_adubacao_plantio_1793886340679.jpg',
    features: [
      'Traçado de linhas em nível para terraceamento e conservação',
      'Eliminação de tiros mortos e manobras excessivas de maquinário',
      'Aproveitamento máximo do potencial produtivo do solo'
    ]
  },
  {
    id: 'projeto-colheita',
    title: 'Projeto de colheita',
    description: 'Linhas de colheita e planejamento operacional para o piloto automático, reduzindo pisoteio e retrabalho.',
    tag: 'Menos Pisoteio',
    image: '/assets/images/hero_agricultural_drone_1793885883894.jpg',
    features: [
      'Roteirização precisa de transbordo e tráfego controlado',
      'Evita compactação sobre linhas principais de rebrota',
      'Economia comprovada de combustível e horas de máquina'
    ]
  },
  {
    id: 'projeto-pulverizacao',
    title: 'Projeto de pulverização',
    description: 'Planejamento de aplicação e mapas de taxa variável (VRT) a partir de imagem multiespectral — a dose certa em cada zona.',
    tag: 'Taxa Variável (VRT)',
    image: '/assets/images/service_pulverizacao_drone_1793885885323.jpg',
    features: [
      'Mapas de prescrição ISOBUS/Shapefile para pulverizadores',
      'Economia de até 30% em defensivos e fertilizantes foliares',
      'Aplicação cirúrgica nos pontos de maior necessidade'
    ]
  },
  {
    id: 'acompanhamento-lavoura',
    title: 'Acompanhamento de lavoura',
    description: 'Monitoramento por índices (NDVI, NDRE) ao longo da safra — vigor, falhas e estresse antes do olho ver.',
    tag: 'Índices Multiespectrais',
    image: '/assets/images/mapiar_orthomosaic_mapping_1793886341697.jpg',
    features: [
      'Voos temporais comparativos ao longo do ciclo fenológico',
      'Detecção prematura de estresse hídrico e desbalanço nutricional',
      'Relatórios com zoneamento de vigor por talhão'
    ]
  },
  {
    id: 'identificacao-pragas-doencas',
    title: 'Identificação de pragas e doenças',
    description: 'Câmera multiespectral mapeia focos de estresse antes de virarem sintoma visível, para agir no ponto certo.',
    tag: 'Manejo Fitossanitário',
    image: '/assets/images/mapiar_ai_geospatial_platform_1793886344021.jpg',
    features: [
      'Mapeamento de reboleiras de nematoides, lagartas e ferrugem',
      'Localização geográfica precisa para checagem direcionada de campo',
      'Intervenção ágil antes da disseminação no talhão inteiro'
    ]
  },
  {
    id: 'pesquisa-eficacia-defensivos',
    title: 'Pesquisa · eficácia de defensivos',
    description: 'Ensaios calibrados, tratado × testemunha, com índices, estatística e laudo (ART). Prova científica do produto.',
    tag: 'Comprovação Científica',
    image: '/assets/images/mapiar_about_geotech_1793886340983.jpg',
    features: [
      'Delineamento em blocos com repetições e testemunha',
      'Painel de reflectância calibrada para dados comparáveis no tempo',
      'Laudo técnico formal assinado por Engenheiro Agrônomo com ART'
    ]
  },
  {
    id: 'mapeamento-ortomosaico',
    title: 'Mapeamento / ortomosaico',
    description: 'Voo com drone e ortomosaico georreferenciado de alta resolução — a base precisa para todos os serviços.',
    tag: 'Base Georreferenciada',
    image: '/assets/images/mapiar_cta_aerial_horizon_1793886343358.jpg',
    features: [
      'Acurácia centimétrica com tecnologia RTK/PPK',
      'Exportação para GeoTIFF, KML, CAD e plataformas agrícolas',
      'GSD submétrico permitindo contagem de plantas individuais'
    ]
  }
];

export const RESEARCH_DATA = {
  kicker: 'Para empresas de defensivos',
  title: 'Comprovação científica de eficácia',
  description: 'Prova objetiva, no tempo e estatística de que o seu produto funciona — com drone multiespectral calibrado, parcelas tratado × testemunha e laudo assinado por Engenheiro Agrônomo.',
  points: [
    'Ensaio com testemunha e repetições (delineamento estatístico)',
    'Voos em várias datas: o efeito aparece na curva',
    'Reflectância calibrada com painel — dado comparável mês a mês',
    'Índices (NDVI, NDRE, GNDVI) + análise estatística + laudo com ART'
  ],
  badges: ['Cana', 'Soja', 'Milho', 'Método validado (UNESP · UFU · Embrapa)']
};

export const ABOUT_STATS: StatItem[] = [
  {
    value: 'CREA/ART',
    label: 'Responsabilidade técnica de agrônomo'
  },
  {
    value: 'Ponta a ponta',
    label: 'Voo, processamento, análise e laudo'
  },
  {
    value: '100% calibrado',
    label: 'Padrão científico em cada ensaio'
  }
];

export const DELIVERABLE_EXAMPLES: DeliverableExample[] = [
  {
    id: 'ex-linhas',
    type: 'linhas',
    title: 'Restituição de linhas',
    description: 'Linhas prontas para o piloto automático da colhedora.',
    image: '/assets/images/mapiar_hero_drone_survey_1793886340679.jpg'
  },
  {
    id: 'ex-ndvi',
    type: 'ndvi',
    title: 'Mapa NDVI',
    description: 'Vigor e estresse da lavoura por cor com escala radiométrica.',
    image: '/assets/images/mapiar_orthomosaic_mapping_1793886341697.jpg'
  },
  {
    id: 'ex-talhoes',
    type: 'talhoes',
    title: 'Talhões delimitados',
    description: 'Contorno automático de glebas a partir das linhas de voo.',
    image: '/assets/images/mapiar_cta_aerial_horizon_1793886343358.jpg'
  },
  {
    id: 'ex-defensivos',
    type: 'defensivos',
    title: 'Eficácia de defensivos',
    description: 'Tratado × testemunha ao longo do tempo com delineamento.',
    image: '/assets/images/mapiar_ai_geospatial_platform_1793886344021.jpg'
  }
];
