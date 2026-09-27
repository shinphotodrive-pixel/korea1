export interface HistoricalEvent {
  id: string;
  era: 'ancient' | 'medieval' | 'earlymodern' | 'modern';
  timeframe: string;
  region: 'europe' | 'islam' | 'russia' | 'china_taiwan' | 'korea';
  title: string;
  subtitle: string;
  summary: string;
  detailedText: string[];
  koreanParallels: {
    period: string;
    description: string;
    causalLink: string;
  };
  institutionalInsights: {
    governance: string;
    fiscalPolicy: string;
    militaryDiplomacy: string;
  };
  keyQuote?: string;
  tags: string[];
}

export interface ComparisonMatrixRow {
  period: string;
  eraCategory: 'ancient' | 'medieval' | 'earlymodern' | 'modern';
  westernEurope: {
    event: string;
    institution: string;
    modalId: string;
  };
  islamRussia: {
    event: string;
    institution: string;
    modalId: string;
  };
  eastAsiaChina: {
    event: string;
    institution: string;
    modalId: string;
  };
  koreaPeninsula: {
    period: string;
    event: string;
    synchronicityLesson: string;
  };
}

export interface RadarDataPoint {
  axis: string;
  byzantine: number;
  holyRoman: number;
  ottoman: number;
  joseon: number;
  description: string;
}

export interface SovietOilDataPoint {
  year: number;
  oilPriceUSD: number;
  sovietFiscalHealthIndex: number;
  sovietEvent: string;
  koreanContext: string;
}

export interface GoldYuanInflationDataPoint {
  month: string;
  priceIndexMultiplier: number;
  note: string;
  socioPoliticalImpact: string;
}

export interface EmpireLifespan {
  id: string;
  name: string;
  region: 'europe' | 'islam' | 'russia' | 'china_taiwan' | 'korea';
  startYear: number;
  endYear: number;
  peakPeriod: string;
  color: string;
  accentColor: string;
  description: string;
  turningPoint: string;
}

export interface TimelineHistoricalPoint {
  id: string;
  year: number;
  yearDisplay: string;
  title: string;
  region: 'europe' | 'islam' | 'russia' | 'china_taiwan' | 'korea';
  empireId: string;
  era: 'ancient' | 'medieval' | 'earlymodern' | 'modern';
  significance: 'rise' | 'peak' | 'crisis' | 'fall' | 'reform';
  modalId?: string;
  koreanConnection: string;
}
