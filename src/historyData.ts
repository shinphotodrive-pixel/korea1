import {
  HistoricalEvent,
  ComparisonMatrixRow,
  RadarDataPoint,
  SovietOilDataPoint,
  GoldYuanInflationDataPoint,
} from './types';

export const HISTORICAL_EVENTS: Record<string, HistoricalEvent> = {
  rome: {
    id: 'rome',
    era: 'ancient',
    timeframe: 'BC 450 ~ AD 301',
    region: 'europe',
    title: '12표법, 삼두정치 및 디오클레티아누스 사두정치',
    subtitle: '성문법 혁명에서 과두 군벌화, 제국 분할 통치와 가격 통제 칙령',
    summary:
      '귀족의 자의적 형벌권에 맞선 평민 권익의 성문법화(12표법), 군벌 사병화로 귀결된 삼두정치, 그리고 3세기 위기를 극복하려던 디오클레티아누스의 4제 분할 통치(사두정치)와 최고가격통제 칙령의 교훈.',
    detailedText: [
      '12표법(BC 450): 법의 성문화로 귀족 독점 법령 해석을 제한하고 공화정 법치주의의 초석을 놓았습니다. 사법 절차의 투명성은 로마 시민권의 결속력을 다졌습니다.',
      '삼두정치(Triumvirate): 마리우스 군제 개혁 이후 사병화된 군단은 카이사르, 폼페이우스, 크라수스(제1차) 및 옥타비아누스, 안토니우스, 레피두스(제2차)로 이어지며 원로원 공화정을 해체하고 군사 독재로 전환되었습니다.',
      '사두정치(Tetrarchy, 293): 디오클레티아누스는 광대한 제국을 2명의 정제(Augustus)와 2명의 부제(Caesar)로 분할 통치하여 외부 방위력을 극대화했습니다.',
      '301년 최고가격통제 칙령: 은화 감평(화폐 가치 희석)으로 촉발된 초인플레이션을 통제하려 강제 최고가격을 고시했으나, 암시장 팽창과 물자 유통 마비로 이어져 통화 신뢰 붕괴의 전형을 보여주었습니다.',
    ],
    koreanParallels: {
      period: '고조선 위만조선 건국 ~ 한 무제 침공(BC 108) / 삼국 초기',
      description:
        '기원전 2세기 한 무제의 흉노 정벌 및 동아시아 팽창과 맞물려 위만조선이 멸망하고 한사군이 설치되었습니다. 서구 지중해가 삼두정치로 팽창하던 동시기, 한반도는 철기 문화를 본격 흡수하며 삼국 국가 체제로 진입했습니다.',
      causalLink:
        '제국의 군사적 팽창은 변방 완충 국가의 체제 변혁(위만조선의 멸망 및 낙랑군 축출 투쟁)을 연쇄적으로 촉발했습니다.',
    },
    institutionalInsights: {
      governance: '공화정의 견제와 균형 붕괴 후 사두정치를 통한 군사 행정 분권화',
      fiscalPolicy: '화폐 품위 저하와 강제 가격 칙령으로 인한 시장 왜곡 실패',
      militaryDiplomacy: '군벌 사병화가 야기한 원로원 무력화 및 속주 방위 재편',
    },
    keyQuote: '“법률이 명문화되지 않은 국가는 권력자의 변덕에 지배된다.” — 로마 법언',
    tags: ['로마 공화정', '12표법', '사두정치', '위만조선', '한사군', '화폐개혁'],
  },

  justinian: {
    id: 'justinian',
    era: 'medieval',
    timeframe: '527 ~ 7세기',
    region: 'europe',
    title: '유스티니아누스 시민법 대전 & 비잔티움 테마(군관구) 제도',
    subtitle: '대륙법 체계의 집대성과 자영농 둔전병 기반의 천년 방어망',
    summary:
      '트리보니아누스를 위시한 법학자들의 법전 집대성(법학제요, 학설휘찬, 칙법집, 신칙)과 슬라브·이슬람 팽창에 맞서 행정·군사를 일원화한 군관구(Thema) 제도의 탄생.',
    detailedText: [
      '시민법 대전(Corpus Juris Civilis): 1천 년 로마 판례와 칙령을 4부작으로 정비하여 근대 유럽 법률학(대륙법계)과 나폴레옹 법전의 모태가 되었습니다.',
      '군관구(Thema) 제도: 이슬람 제국과 슬라브족의 압박 속에서 이라클리오스 황제 시기 지방을 군관구로 분할하고, 스트라티오테스(자영 둔전병)에게 토지를 지급하여 자발적 향토 방위군을 결성했습니다.',
      '천년 존속의 비결: 테마 제도는 대규모 용병 고용 비용을 절감하고 자영농 계층을 보호함으로써 1453년 콘스탄티노플 함락 때까지 비잔티움 제국의 수명을 1,000년 이상 연장하는 원동력이 되었습니다.',
    ],
    koreanParallels: {
      period: '신라 삼국통일(676) 및 중앙집권 율령 관료제 완성',
      description:
        '동로마가 시민법 대전과 테마 제도로 제국을 재편하던 6~7세기, 한반도에서는 신라가 율령을 반포하고 나당전쟁에서 승리하여 삼국을 통일했습니다. 신라 9서당 10정 및 관료전 지급은 비잔티움 둔전병제와 궤를 같이합니다.',
      causalLink:
        '내부 율령 정비와 토지 기반 군역 제도(관료전/정전제와 테마제)가 동서양 양단에서 7세기 국가 생존과 팽창의 승패를 결정했습니다.',
    },
    institutionalInsights: {
      governance: '황제 교황주의(Caesaropapism)와 법률 정비에 기반한 중앙 행정',
      fiscalPolicy: '자영농 토지 세수 확보 및 둔전병 세습을 통한 안정적 군사비 유지',
      militaryDiplomacy: '군사령관(스트라테고스) 중심의 현지 즉각 방어 및 외교적 이이제이',
    },
    keyQuote: '“정의는 각자에게 그의 정당한 몫을 주려는 확고하고 영구한 의지이다.” — 유스티니아누스 법학제요',
    tags: ['비잔티움', '시민법 대전', '테마 제도', '신라 삼국통일', '율령 체제'],
  },

  frank: {
    id: 'frank',
    era: 'medieval',
    timeframe: '843 / 870',
    region: 'europe',
    title: '프랑크 왕국의 분할 상속: 베르됭 조약과 메르센 조약',
    subtitle: '카롤루스 제국의 해체와 현대 서유럽 국경선의 기원',
    summary:
      '게르만족 고유의 균등 분할 상속 관습이 초래한 형제 내전과 베르됭·메르센 조약에 따른 서프랑크(프랑스), 동프랑크(독일), 중프랑크(이탈리아)의 분립 과정.',
    detailedText: [
      '카롤루스 대제 사후 경직된 게르만식 분할 상속: 장자 단독 상속이 아닌 형제 간 영토 분할 관습은 루트비히 경건왕 사후 세 아들(로타르 1세, 루트비히 2세, 카를 2세) 간 피비린내 나는 내전을 촉발했습니다.',
      '843년 베르됭 조약: 중프랑크, 동프랑크, 서프랑크로 3분 분할하여 통일 제국이 영구히 해체되었습니다.',
      '870년 메르센 조약: 로타르 사후 로렌(로타링기아) 지방을 동·서 프랑크가 재분할하여 현대 유럽 대륙의 프랑스, 독일, 이탈리아 3대 국경선 원형을 형성했습니다.',
    ],
    koreanParallels: {
      period: '통일신라 하대 귀족 내전(원종·애노의 난) 및 후삼국 분열 태동',
      description:
        '9세기 프랑크 왕국이 왕위 계승 분쟁으로 쪼개지던 시기, 통일신라 역시 혜공왕 피살 이후 진골 귀족들의 치열한 왕위 쟁탈전과 호족의 발흥으로 후백제, 후고구려로 분열되었습니다.',
      causalLink:
        '상속 및 왕위 계승 룰의 제도화 실패가 중앙 권력을 급격히 분열시키고 지방 세력 분립을 초래한 동서양의 구조적 유사성.',
    },
    institutionalInsights: {
      governance: '봉건 영주화 및 분할 상속으로 인한 중앙 왕권의 극단적 약화',
      fiscalPolicy: '장원제(Manorialism) 정착과 중앙 조세 수취망의 붕괴',
      militaryDiplomacy: '기사(Knights) 중심의 사적 주종 계약 및 지방 분권적 방위',
    },
    keyQuote: '“형제들의 탐욕과 분할의 관습이 카롤루스의 위대한 영광을 산산조각 내었다.” — 중세 연대기',
    tags: ['프랑크 왕국', '베르됭 조약', '메르센 조약', '통일신라 하대', '후삼국', '봉건제'],
  },

  goldenbull: {
    id: 'goldenbull',
    era: 'medieval',
    timeframe: '1356',
    region: 'europe',
    title: '신성로마제국 카를 4세의 금인칙서 (Golden Bull)',
    subtitle: '7선제후 황제 선출권 확립과 300여 영방국가로의 파편화',
    summary:
      '교황의 황제 임명 개입을 배제하고 7인의 선제후(3대 대주교 + 4대 세속 제후)의 다수결 선출권을 법제화했으나, 영방 제후들에게 배타적 영지 주권을 부여하여 제국 중앙집권화를 가로막은 칙서.',
    detailedText: [
      '황제 선출 규정 명문화: 마인츠·트리어·쾰른 대주교와 보헤미아 국왕, 팔라츠 백작, 작센 공작, 브란덴부르크 변경백 등 7선제후 체제를 공인했습니다.',
      '영방 주권의 허용: 선제후들에게 영지 내 재판권(대심불가권), 화폐 주조권, 관세 징수권을 영구 부여했습니다.',
      '양날의 검: 교황청의 정치 간섭을 완전히 차단하는 데 성공했으나, 독일 지역이 강력한 통일 국민국가로 발전하는 것을 500년간 지연시키고 300여 영방 국가로 파편화되는 족쇄가 되었습니다.',
    ],
    koreanParallels: {
      period: '고려 말 공민왕의 반원 자주 개혁(1356) 및 권문세족 억압',
      description:
        '1356년 카를 4세가 금인칙서를 반포하던 바로 그해, 고려 공민왕은 기철 등 친원 세력을 숙청하고 쌍성총관부를 무력 수복하며 정동행성 이문소를 폐지하는 등 원나라의 간섭을 일소하는 자주 개혁을 전격 단행했습니다.',
      causalLink:
        '14세기 중반 흑사병과 몽골 제국의 쇠퇴 속에서, 서유럽은 황제 권력 약화와 영방 자치화로 나아간 반면, 고려는 몽골 종속을 탈피하여 자주적 왕권 강화를 모색했습니다.',
    },
    institutionalInsights: {
      governance: '입헌적 선거 군주제 확립 및 황제권의 명목화',
      fiscalPolicy: '독립 영방들의 관세선 설치로 인한 광역 내수 시장 형성 저해',
      militaryDiplomacy: '제국군 부재와 제후 간 연합 군사 체제의 비효율',
    },
    keyQuote: '“황제는 선제후들에 의해 선출되며, 교황의 인준은 더 이상 필요치 아니하다.” — 1356 금인칙서',
    tags: ['신성로마제국', '금인칙서', '7선제후', '고려 공민왕', '쌍성총관부', '반원개혁'],
  },

  westphalia: {
    id: 'westphalia',
    era: 'earlymodern',
    timeframe: '1648',
    region: 'europe',
    title: '30년 전쟁 종결과 베스트팔렌 조약 (Westphalia)',
    subtitle: '근대 주권 국가 체제의 탄생과 내정 불간섭 원칙의 정초',
    summary:
      '인구 30%가 희생된 참혹한 30년 종교 전쟁을 끝내며 신성로마제국 황제와 교황의 보편 질서를 해체하고, 영토적 배타 주권과 종교 선택권(칼뱅파 승인), 네덜란드·스위스 독립을 공인한 근대 국제법의 출발점.',
    detailedText: [
      '주권 국가 체제(Westphalian Sovereignty): 국경선 내에서 국가 원수의 최고 배타적 통치권을 확립하고 타국의 내정 간섭을 금지했습니다.',
      '종교의 자유 확대: 1555년 아우크스부르크 화의에서 배제되었던 칼뱅파(개혁교회)를 루터파와 대등하게 공인했습니다.',
      '세력 균형(Balance of Power): 합스부르크 가문의 패권 기도가 좌절되고 프랑스가 유럽 대륙의 주도권을 장악하는 다극 체제가 도래했습니다.',
    ],
    koreanParallels: {
      period: '조선 정묘·병자호란(1636) 전후 복구, 북벌론 및 대동법 전국 확대',
      description:
        '17세기 전반 서유럽이 30년 전쟁으로 초토화될 때, 동아시아에서는 명청 교체기의 대격변 속에 조선이 정묘호란과 병자호란의 참화를 겪었습니다. 1648년 베스트팔렌 조약 직후 조선은 효종의 북벌론, 김육의 대동법 확대, 상평통보 주조 등 국가 재건에 집중했습니다.',
      causalLink:
        '17세기 중반의 전면전 위기 속에서 유럽은 다국간 주권 조약으로 세력 균형을 제도화했고, 조선은 청나라 중심의 조공 책봉 체제에 불가피하게 편입되면서도 내부 제도 개혁(대동법·호포론)을 통한 내치 강화를 꾀했습니다.',
    },
    institutionalInsights: {
      governance: '국경선에 기반한 배타적 영토 주권 및 근대 외교 사절단 상설화',
      fiscalPolicy: '상비군 유지를 위한 중앙 조세 국유화 및 공채 발행 시작',
      militaryDiplomacy: '용병제에서 국왕 직속 상비군 체제로의 급격한 전환',
    },
    keyQuote: '“각 나라의 군주는 자기 영토 안에서 최고의 법률적 황제이다.” — 베스트팔렌 법리',
    tags: ['베스트팔렌 조약', '30년 전쟁', '주권 국가', '병자호란', '대동법', '북벌론'],
  },

  maastricht: {
    id: 'maastricht',
    era: 'modern',
    timeframe: '1992',
    region: 'europe',
    title: '마스트리히트 조약과 유럽연합(EU)의 출범',
    subtitle: '배타적 민족 국가를 넘어서는 초국가적 연대와 유로화 통화 동맹',
    summary:
      '냉전 종식과 독일 통일의 격변 속에서 12개국이 체결한 조약. 3대 기둥 구조(유럽공동체, 공동외교안보, 사법내무)를 확립하고 단일 통화(유로) 도입을 결의하여 주권 양도의 새로운 모델을 제시.',
    detailedText: [
      '유럽연합의 3대 기둥: ①경제·통화동맹(유로화 도입 및 단일 시장 완성), ②공동외교안보정책(CFSP), ③사법·내무협력(JHA)을 통합했습니다.',
      '초국가적 주권 양도: 통화 주권(유럽중앙은행 ECB)과 환경·통상 규제 권한을 초국가 기구에 위임하여 전쟁의 위협을 구조적으로 방지했습니다.',
      '통합의 딜레마: 재정 정책(각국 정부)과 통화 정책(ECB)의 분리로 인해 훗날 2010년 남유럽 재정위기 때 제도적 균열을 노출하기도 했습니다.',
    ],
    koreanParallels: {
      period: '노태우 정부 북방외교 결실, 남북기본합의서(1991), 남북 UN 동시 가입',
      description:
        '베를린 장벽 붕괴(1989)와 소련 해체(1991)로 이어진 탈냉전기, 유럽이 마스트리히트 조약으로 통합의 새 시대를 열 때 한반도에서는 남북기본합의서 체결과 한반도 비핵화 공동선언, 남북 UN 동시 가입이 성사되며 역사적 해빙기를 맞았습니다.',
      causalLink:
        '탈냉전의 메가트렌드 속에서 서유럽은 초국가적 제도 통합(EU)으로 나아간 반면, 한반도는 체제 경쟁 종식 속에서 평화 공존의 첫 제도적 틀을 마련했습니다.',
    },
    institutionalInsights: {
      governance: '유럽이사회, 유럽의회, 유럽사법재판소로 분권화된 초국가 거버넌스',
      fiscalPolicy: '재정적자 3% 미만, 정부부채 60% 미만의 마스트리히트 수렴 기준 설정',
      militaryDiplomacy: 'NATO와의 공조 하에 독자적 위기관리 신속대응군 창설 모색',
    },
    keyQuote: '“유럽은 단번에 이루어지지 않으며, 구체적 연대의 축적을 통해 완성된다.” — 로베르 슈망 구상 계승',
    tags: ['마스트리히트', '유럽연합', '유로화', '남북기본합의서', '탈냉전', '북방외교'],
  },

  umayyad_abbasid: {
    id: 'umayyad_abbasid',
    era: 'medieval',
    timeframe: '661 ~ 1258',
    region: 'islam',
    title: '우마이야 왕조의 차별 vs 아바스 왕조의 학문 황금기',
    subtitle: '아랍 우월주의의 자멸과 다민족 포용, 지혜의 집(바이트 알 히크마)',
    summary:
      '비아랍 무슬림(마왈리)에게도 지즈야를 물리며 아랍 귀족 중심 배타주의를 펴다 90년 만에 멸망한 우마이야와, 마왈리 차별을 철폐하고 페르시아 관료를 중용하며 동서 문명을 융합한 아바스의 번영.',
    detailedText: [
      '우마이야 왕조의 한계: 다마스쿠스를 수도로 삼아 급격한 정복을 이뤘으나, 아랍인에게만 면세 특권을 부여하고 개종한 이민족(마왈리)을 차별했습니다. 680년 카르발라 참극으로 시아파 분열을 영구화하고 민심을 잃었습니다.',
      '아바스 왕조의 포용 혁명: 750년 바그다드로 천도한 아바스는 혈통 대신 신앙에 기초한 만민 평등을 선언하고 페르시아계 바르마크 가문 등 실무 관료를 대거 등용했습니다.',
      '지혜의 집(바이트 알 히크마): 그리스 고전(아리스토텔레스, 플라톤, 유클리드)과 인도 수학(0의 개념, 아라비아 숫자)을 아랍어로 번역하여 르네상스의 지적 횃불을 보존했습니다.',
      '751년 탈라스 전투: 당나라 군대를 격파하고 중앙아시아 이슬람화를 확정지었으며, 당나라 포로로부터 제지술을 획득해 지식의 대량 보급을 혁신했습니다.',
    ],
    koreanParallels: {
      period: '탈라스 전투(751) 고구려 유민 고선지 장군 활약 / 1258년 고려 무신정권 몰락',
      description:
        '아바스 왕조의 군대와 맞붙은 당나라 안서도호부 사령관은 고구려 유민 출신의 명장 고선지 장군이었습니다. 또한 1258년 몽골 훌라구가 아바스 바그다드를 함락하던 해, 고려에서는 최씨 무신정권의 마지막 집권자 최의가 피살되며 몽골과의 강화 및 원 간섭기로 전환되었습니다.',
      causalLink:
        '유라시아 대륙 서단의 이슬람 제국과 동단의 고려가 몽골 기마 군단의 범유라시아적 팽창에 직면해 동시에 왕조적 전환점을 맞이했습니다.',
    },
    institutionalInsights: {
      governance: '아랍 부족 연맹체에서 다민족 관료제 및 칼리프 전제정으로의 진화',
      fiscalPolicy: '지즈야(인두세)와 하라지(토지세)의 체계화로 제국 재정 안정',
      militaryDiplomacy: '맘루크(투르크계 노예 군인) 도입을 통한 전문 기병대 육성',
    },
    keyQuote: '“학자의 먹물은 순교자의 피보다 존귀하다.” — 아바스 학문 부흥 격언',
    tags: ['우마이야', '아바스', '탈라스 전투', '고선지', '지혜의 집', '바그다드 함락'],
  },

  ottoman: {
    id: 'ottoman',
    era: 'earlymodern',
    timeframe: '1299 ~ 1922',
    region: 'islam',
    title: '오스만 제국의 밀레트(Millet) 자치와 탄지마트 개혁의 좌절',
    subtitle: '다종교 공존의 600년 제국, 예니체리의 변질과 차관 누적 모라토리엄',
    summary:
      '그리스 정교, 아르메니아 정교, 유대교 공동체에 사법·종교 자치를 부여한 밀레트 제도와 데브시르메로 징발한 예니체리 친위대로 전성기를 구가했으나, 19세기 서구화 개혁(탄지마트)의 재정 파탄과 외세 종속으로 붕괴한 과정.',
    detailedText: [
      '밀레트(Millet) 시스템: 비무슬림 딤미(Dhimmi)에게 지즈야(인두세)를 징수하는 대가로 교회법에 따른 가족법, 재산 상속, 교육 자치를 보장했습니다. 종교적 다원주의가 제국의 장수 비결이었습니다.',
      '티마르(Timar)와 예니체리: 기병(시파히)에게 군역의 대가로 징세권을 분봉하는 티마르제와 기독교 소년을 선발해 개종·훈련시킨 근위대 예니체리가 제국의 양대 군사 축이었습니다.',
      '쇠퇴와 탄지마트(Tanzimat, 1839): 1683년 제2차 빈 공방전 패배 이후 오스만은 쇠퇴기에 접어들었습니다. 압뒬메지트 1세의 탄지마트 칙령으로 만민 평등과 서구식 사법제도를 도입했으나, 크림전쟁 군비로 인한 막대한 외채를 감당하지 못하고 1875년 국가 모라토리엄을 선언했습니다.',
    ],
    koreanParallels: {
      period: '조선 숙종~고종 개항기, 갑신정변(1884) 및 대한제국 광무개혁',
      description:
        '오스만이 서구 열강의 압박 속에서 탄지마트 개혁과 입헌혁명을 시도하다 외채 위기에 봉착했던 19세기 후반, 조선 역시 개항 이후 갑오개혁, 갑신정변, 광무개혁을 추진했으나 차관 종속과 제국주의 열강(청·일·러)의 간섭으로 국권을 피탈당했습니다.',
      causalLink:
        '내부 산업 기반 없이 외채에 의존한 상층부 중심의 근대화 개혁은 근본적인 재정 자립을 이루지 못하고 제국주의의 경제적 예속으로 귀결되었습니다.',
    },
    institutionalInsights: {
      governance: '술탄-칼리프 체제와 대재상(사드라잠) 중심 관료기구, 밀레트 종교 자치',
      fiscalPolicy: '일티잠(징세 청부제) 남발로 인한 지방 아얀(토호) 득세 및 재정 누수',
      militaryDiplomacy: '예니체리의 특권 계급화와 근대식 군제 개편(니잠 제디드)의 저항',
    },
    keyQuote: '“교회의 종소리와 모스크의 아잔이 한 골목에서 함께 울리는 것이 오스만의 평화였다.”',
    tags: ['오스만 제국', '밀레트 제도', '예니체리', '탄지마트', '빈 공방전', '갑오개혁'],
  },

  russia_soviet: {
    id: 'russia_soviet',
    era: 'modern',
    timeframe: '1565 ~ 1991',
    region: 'russia',
    title: '러시아 제정의 전제 권력에서 소비에트 붕괴까지',
    subtitle: '오프리치니나 공포정치, 표트르 1세의 관등제, 유가 폭락과 연방 해체',
    summary:
      '이반 뇌제의 비밀경찰 통치, 표트르 대제의 14등급 관등제와 서구화, 1917년 볼셰비키 혁명으로 수립된 초강대국 소련이 1980년대 국제 유가 폭락과 중앙 계획경제의 모순 속에 자멸한 거시사.',
    detailedText: [
      '이반 4세의 오프리치니나(1565): 귀족 세력을 분쇄하기 위해 국토를 차르 직할령(오프리치니나)과 일반령으로 양분하고, 검은 옷의 비밀경찰 오프리치니키를 동원해 잔혹한 숙청을 자행했습니다.',
      '표트르 1세의 관등제(Table of Ranks, 1722): 가문 혈통 대신 국가에 대한 복무 능력을 14개 등급으로 규격화하여 서구식 관료제를 이식했습니다.',
      '1917년 볼셰비키 혁명: 차르 전제정과 1차 대전 참화 속에서 레닌의 10월 혁명으로 세계 최초 사회주의 국가 소련이 탄생했습니다.',
      '유가 폭락과 1991년 체제 붕괴: 1970년대 오일쇼크로 번 오일머니에 안주하던 소련은 1980년대 중반 사우디의 증산으로 유가가 배럴당 30달러대에서 10달러대로 붕괴하자 파산했습니다. 고르바초프의 개혁에도 불구하고 1991년 12월 26일 소련은 공식 해체되었습니다.',
    ],
    koreanParallels: {
      period: '조선 후기 삼정의 문란 ~ 일제 강점기 공산주의 운동 및 한러 수교(1990)',
      description:
        '러시아 제정의 농노제 모순은 조선 후기 삼정의 문란과 민란(임술민란)에 필적했습니다. 1917년 러시아 혁명은 식민지 조선 청년들에게 사회주의 독립운동의 강력한 영감을 주었으며, 1990년 한소 수교와 1991년 소련 해체는 한국의 북방외교 완성 및 냉전 종식으로 이어졌습니다.',
      causalLink:
        '소련의 대외 영향력 쇠퇴와 붕괴는 한반도에 평화적 남북 UN 가입의 기회를 제공함과 동시에 북한의 치명적인 고난의 행군 경제난을 초래했습니다.',
    },
    institutionalInsights: {
      governance: '차르 전제정에서 공산당 일당 독재와 노멘클라투라 특권 계급화',
      fiscalPolicy: '단일 자원(석유·천연가스) 수출 의존형 계획경제의 치명적 취약성',
      militaryDiplomacy: '미소 군비 경쟁(스타워즈 계획 등) 과부하로 인한 민생 경제 붕괴',
    },
    keyQuote: '“석유 가격이 폭락한 날, 소비에트 제국의 운명은 이미 결정되었다.” — 예고르 가이다르',
    tags: ['이반 뇌제', '표트르 대제', '볼셰비키 혁명', '오일쇼크', '소련 해체', '한소수교'],
  },

  taiwan_roc: {
    id: 'taiwan_roc',
    era: 'modern',
    timeframe: '1911 ~ 1953+',
    region: 'china_taiwan',
    title: '신해혁명, 금원권 초인플레이션과 대만 3단계 토지개혁',
    subtitle: '아시아 최초의 공화정, 통화 발행 파탄에 따른 국공내전 패배와 대만의 부활',
    summary:
      '청조를 무너뜨린 1911년 신해혁명과 중화민국 수립, 1948년 무분별한 금원권 발행으로 인한 경제 자멸과 국공내전 패배, 그리고 대만 이주 후 철저한 반성 속에 실행된 모범적 3단계 토지개혁과 대만의 기적.',
    detailedText: [
      '신해혁명(1911): 철도 국유화 반대 보로운동에서 촉발된 우창 봉기로 2천 년 전제군주제를 종식시키고 아시아 최초의 민주공화국을 건국했습니다.',
      '1948년 금원권(金圓券) 참사: 국민당 정부는 내전 전비를 충당하려 법폐 300만 위안을 금원권 1위안으로 교환하고 민간 금·외화를 강제 압수했으나, 준비금 없는 무제한 발권으로 10개월 만에 물가가 1,124배 폭등했습니다. 중산층 자산의 증발은 국민당 패망의 결정타가 되었습니다.',
      '국부천대(1949)와 대만 3단계 토지개혁: 대륙에서 농민 지지를 상실한 뼈아픈 교훈을 얻은 장제스 정부는 대만에서 모범적 토지개혁을 전격 단행했습니다.',
      '①삼칠오감조(1949): 최고 소작료를 수확량의 37.5%로 제한.',
      '②공지방령(1951): 일제 적산 국공유지를 영세 소작농에게 분배.',
      '③경자유기전(1953): 지주의 초과 농지를 수용해 자영농에게 유상 분배하고, 지주에게는 대만시멘트 등 4대 공기업 주식을 보상하여 민간 산업 자본가로 체질을 전환시켰습니다.',
    ],
    koreanParallels: {
      period: '대한민국 임시정부(1919) 및 대한민국 농지개혁(1949~1950)',
      description:
        '신해혁명은 3·1 운동과 대한민국 임시정부 수립에 직접적 영감을 주었습니다. 특히 1949년 대만의 삼칠오감조와 대한민국의 농지개혁법(조봉암 주도 유상매수·유상분배)은 놀랍도록 동시기에 전개되어 6·25 전쟁 중 공산화를 막아낸 결정적 방파제가 되었습니다.',
      causalLink:
        '냉전 최전선의 한국과 대만은 성공적인 유상 토지개혁을 통해 농촌 사회를 안정시키고 지주 자본을 공업 자본으로 전환함으로써 1960~80년대 아시아의 네 마리 용으로 도약했습니다.',
    },
    institutionalInsights: {
      governance: '군정·훈정에서 헌정으로의 지연과 백색공포(2·28 사건), 이후 점진적 민주화',
      fiscalPolicy: '초인플레이션 파탄 극복을 위한 신대만달러(New Taiwan Dollar) 개혁 성공',
      militaryDiplomacy: '미 제7함대의 대만해협 중립화 선언 및 미 대만 상호방위조약',
    },
    keyQuote: '“토지를 가진 자만이 자유로운 공화국의 시민이 될 수 있다.” — 쑨원 삼민주의 경자유전',
    tags: ['신해혁명', '금원권', '국부천대', '경자유기전', '조봉암 농지개혁', '아시아의 네 마리 용'],
  },
};

export const COMPARISON_MATRIX_DATA: ComparisonMatrixRow[] = [
  {
    period: 'BC 2C ~ BC 1C',
    eraCategory: 'ancient',
    westernEurope: {
      event: '로마 삼두정치 및 공화정 해체, 아우구스투스 제정',
      institution: '군벌 사병화, 지중해 제국주의 행정망',
      modalId: 'rome',
    },
    islamRussia: {
      event: '사산조 이전 파르티아 대두, 흑해 스키타이',
      institution: '유목 기마 연맹 및 실크로드 교역로',
      modalId: 'rome',
    },
    eastAsiaChina: {
      event: '한 무제 대외 정벌 및 군현제 확대',
      institution: '염철 전매제, 균수법·평준법 관료제',
      modalId: 'rome',
    },
    koreaPeninsula: {
      period: '고조선 ~ 초기 삼국',
      event: '위만조선의 멸망(BC 108)과 한사군 설치',
      synchronicityLesson:
        '제국들의 중앙집권화와 경제 팽창 압력이 주변 완충국의 체제 전환을 강제함.',
    },
  },
  {
    period: '3C ~ 5C',
    eraCategory: 'ancient',
    westernEurope: {
      event: '디오클레티아누스 사두정치(293), 서로마 멸망(476)',
      institution: '2정제 2부제 군관구 분할, 301년 가격칙령',
      modalId: 'rome',
    },
    islamRussia: {
      event: '사산조 페르시아 조로아스터교 국교화',
      institution: '샤한샤 전제 군주정 및 로마와의 소모전',
      modalId: 'rome',
    },
    eastAsiaChina: {
      event: '위진남북조 분열기, 5호 16국 융합',
      institution: '구품중정제 문벌귀족화, 균전제 맹아',
      modalId: 'rome',
    },
    koreaPeninsula: {
      period: '고구려·백제·신라 삼국 전성기',
      event: '광개토대왕·장수왕 남북 팽창, 백제 한성 함락',
      synchronicityLesson:
        '유라시아 양단의 제국 쇠퇴기에 주변부 민족국가들이 독자적 세력권을 형성.',
    },
  },
  {
    period: '6C ~ 9C',
    eraCategory: 'medieval',
    westernEurope: {
      event: '유스티니아누스 법전, 베르됭(843)·메르센(870) 조약',
      institution: '시민법 대전 4부작, 테마제, 분할 상속',
      modalId: 'justinian',
    },
    islamRussia: {
      event: '우마이야/아바스 칼리프, 탈라스 전투(751)',
      institution: '밀레트 원형 지즈야, 지혜의 집 학문 부흥',
      modalId: 'umayyad_abbasid',
    },
    eastAsiaChina: {
      event: '수·당 제국 통일, 3성 6부제 및 과거제',
      institution: '율령 격식 체제, 조용조 세제, 부병제',
      modalId: 'umayyad_abbasid',
    },
    koreaPeninsula: {
      period: '신라 삼국통일(676) 및 남북국 시대',
      event: '나당전쟁 승리, 발해 건국, 고선지 장군 탈라스 활약',
      synchronicityLesson:
        '7세기는 전 유라시아적 율령 및 법치주의 정비가 패권의 성패를 가른 분기점.',
    },
  },
  {
    period: '14C',
    eraCategory: 'medieval',
    westernEurope: {
      event: '신성로마제국 카를 4세 금인칙서(1356)',
      institution: '7선제후 황제 선출권, 영방국가 자치 분권',
      modalId: 'goldenbull',
    },
    islamRussia: {
      event: '몽골 킵차크 칸국 쇠퇴, 모스크바 대공국 성장',
      institution: '타타르의 멍에와 대공의 징세 대행권',
      modalId: 'russia_soviet',
    },
    eastAsiaChina: {
      event: '원나라 북원 축출 및 명나라 주원장 건국',
      institution: '이갑제, 어린도책(토지대장), 승상제 폐지',
      modalId: 'goldenbull',
    },
    koreaPeninsula: {
      period: '고려 말 공민왕 개혁 ~ 조선 건국(1392)',
      event: '공민왕 반원 자주 개혁(1356), 과전법(1391), 위화도 회군',
      synchronicityLesson:
        '1356년은 서구 신성로마의 제후 분권화와 고려의 반원 자주 왕권 회복이 교차한 해.',
    },
  },
  {
    period: '17C',
    eraCategory: 'earlymodern',
    westernEurope: {
      event: '30년 전쟁 종결과 베스트팔렌 조약(1648)',
      institution: '영토적 배타 주권, 칼뱅파 승인, 세력 균형',
      modalId: 'westphalia',
    },
    islamRussia: {
      event: '오스만 2차 빈 공방전(1683), 표트르 1세 관등제(1722)',
      institution: '밀레트제 균열, 14등급 서구화 관료제',
      modalId: 'ottoman',
    },
    eastAsiaChina: {
      event: '명청 교체기, 청조 강희제 치세 개막',
      institution: '팔기군 체제, 지정은제(인두세의 지세 편입)',
      modalId: 'westphalia',
    },
    koreaPeninsula: {
      period: '조선 인조·효종·숙종 연간',
      event: '정묘·병자호란(1636), 대동법 전국 확대, 북벌론',
      synchronicityLesson:
        '전면전의 충격 이후 서양은 다자 주권 조약을, 동양은 대동법 등 내정 복구를 선택.',
    },
  },
  {
    period: '20C 전반 (1910~1949)',
    eraCategory: 'modern',
    westernEurope: {
      event: '제1·2차 세계대전, 베르사유 조약 및 국제연맹',
      institution: '민족자결주의, 총력전 체제, 복지국가 태동',
      modalId: 'maastricht',
    },
    islamRussia: {
      event: '오스만 제국 해체(1922), 러시아 10월 혁명과 소련 수립',
      institution: '아타튀르크 세속 공화정, 코민테른, 5개년 계획',
      modalId: 'russia_soviet',
    },
    eastAsiaChina: {
      event: '신해혁명(1911), 금원권 초인플레이션, 국부천대(1949)',
      institution: '중화민국 공화정, 법폐·금원권 화폐파탄',
      modalId: 'taiwan_roc',
    },
    koreaPeninsula: {
      period: '일제강점기 ~ 광복 및 분단(1948)',
      event: '3·1 운동(1919), 임시정부 수립, 대한민국 건국, 조봉암 농지개혁',
      synchronicityLesson:
        '왕정 붕괴 후 민주공화정 수립과 유상 토지개혁이 아시아 현대사의 생존 열쇠.',
    },
  },
  {
    period: '20C 후반 (1950~1992+)',
    eraCategory: 'modern',
    westernEurope: {
      event: '마스트리히트 조약(1992) 및 유럽연합(EU) 출범',
      institution: '3대 기둥, 단일 통화(유로화), 초국가 사법권',
      modalId: 'maastricht',
    },
    islamRussia: {
      event: '오일쇼크와 소련 유가 붕괴, 소련 공식 해체(1991)',
      institution: '페레스트로이카, 글라스노스트, 탈냉전',
      modalId: 'russia_soviet',
    },
    eastAsiaChina: {
      event: '대만 3단계 토지개혁(경자유기전), 10대 건설, 민주화',
      institution: '수출주도 공업화, TSMC 반도체 산업 생태계',
      modalId: 'taiwan_roc',
    },
    koreaPeninsula: {
      period: '대한민국 전후 복구 ~ 민주화 및 남북 UN 동시 가입',
      event: '한강의 기적, 6월 민주항쟁(1987), 남북기본합의서(1991)',
      synchronicityLesson:
        '성공적 농지개혁-제조업 고도화-민주화의 삼박자가 한국과 대만의 쌍둥이 궤적.',
    },
  },
];

export const RADAR_CHART_DATA: RadarDataPoint[] = [
  {
    axis: '성문 법전화',
    byzantine: 95,
    holyRoman: 50,
    ottoman: 75,
    joseon: 92,
    description: '유스티니아누스 법전 및 경국대전 등 성문화된 율령 수준',
  },
  {
    axis: '지방 분권/유연성',
    byzantine: 88,
    holyRoman: 92,
    ottoman: 85,
    joseon: 65,
    description: '테마 군관구 및 밀레트 자치, 영방국가 자치도',
  },
  {
    axis: '통화/조세 재정력',
    byzantine: 82,
    holyRoman: 42,
    ottoman: 60,
    joseon: 78,
    description: '화폐 신뢰도 및 중앙 조세 징수 수탈 방지 능력',
  },
  {
    axis: '영토 주권 명확성',
    byzantine: 84,
    holyRoman: 88,
    ottoman: 80,
    joseon: 86,
    description: '국경선 개념 및 외교 조약 교섭 능력',
  },
  {
    axis: '다민족 포용성',
    byzantine: 70,
    holyRoman: 55,
    ottoman: 94,
    joseon: 48,
    description: '타민족·타종교 거주민에 대한 자치 허용과 융합도',
  },
];

export const SOVIET_OIL_DATA: SovietOilDataPoint[] = [
  {
    year: 1970,
    oilPriceUSD: 3.2,
    sovietFiscalHealthIndex: 82,
    sovietEvent: '서시베리아 사모틀로르 거대 유전 본격 생산 개시',
    koreanContext: '경부고속도로 개통 및 새마을운동 태동',
  },
  {
    year: 1974,
    oilPriceUSD: 11.6,
    sovietFiscalHealthIndex: 94,
    sovietEvent: '제1차 오일쇼크: 유가 4배 폭등으로 소련에 막대한 경화 유입',
    koreanContext: '제1차 석유파동 충격 극복 및 중동 건설 붐 진출',
  },
  {
    year: 1980,
    oilPriceUSD: 36.8,
    sovietFiscalHealthIndex: 96,
    sovietEvent: '이란 혁명 및 아프간 침공: 최고 유가 누렸으나 경제 체질 개선 지연',
    koreanContext: '제2차 석유파동 및 5공화국 출범',
  },
  {
    year: 1985,
    oilPriceUSD: 27.5,
    sovietFiscalHealthIndex: 78,
    sovietEvent: '고르바초프 서기장 취임, 페레스트로이카(개혁) 착수',
    koreanContext: '3저 호황(저유가·저금리·저달러) 전기 마련',
  },
  {
    year: 1986,
    oilPriceUSD: 14.4,
    sovietFiscalHealthIndex: 45,
    sovietEvent: '사우디 증산으로 국제 유가 60% 폭락, 체르노빌 원전 참사',
    koreanContext: '서울 아시안게임 개최 및 무역수지 흑자 달성',
  },
  {
    year: 1989,
    oilPriceUSD: 18.2,
    sovietFiscalHealthIndex: 28,
    sovietEvent: '동유럽 공산권 붕괴(베를린 장벽 함락), 식량 배급제 마비',
    koreanContext: '노태우 정부 헝가리·폴란드 등 북방외교 본격화',
  },
  {
    year: 1991,
    oilPriceUSD: 20.0,
    sovietFiscalHealthIndex: 6,
    sovietEvent: '소련 국가부도 및 12월 26일 소비에트 연방 공식 해체',
    koreanContext: '남북한 UN 동시 가입 및 남북기본합의서 체결',
  },
];

export const GOLD_YUAN_INFLATION_DATA: GoldYuanInflationDataPoint[] = [
  {
    month: '1948년 8월',
    priceIndexMultiplier: 1,
    note: '금원권 신규 공포: 법폐 300만 위안을 금원권 1위안으로 강제 교환',
    socioPoliticalImpact: '상하이 등 주요 도시에서 민간 금·외화 강제 몰수',
  },
  {
    month: '1948년 10월',
    priceIndexMultiplier: 5,
    note: '장징궈의 상하이 상업 단속 실패 및 경제 경찰 후퇴',
    socioPoliticalImpact: '상점들이 물건 판매를 거부하고 매점매석 급증',
  },
  {
    month: '1948년 12월',
    priceIndexMultiplier: 45,
    note: '화이하이 전역 참패로 군비 조달을 위해 윤전기 무제한 인쇄 가동',
    socioPoliticalImpact: '월급을 받으면 1시간 내에 쌀을 사지 않으면 굶는 사태',
  },
  {
    month: '1949년 2월',
    priceIndexMultiplier: 210,
    note: '베이핑(베이징) 공산군 무혈입성, 장제스 총통 사임',
    socioPoliticalImpact: '화폐에 대한 신뢰가 0으로 수렴, 은화와 물물교환 성행',
  },
  {
    month: '1949년 5월',
    priceIndexMultiplier: 680,
    note: '상하이 공산군 수복, 500만 위안권·1000만 위안권 초고액 지폐 남발',
    socioPoliticalImpact: '도시 중산층과 노동자의 국민당 지지 완전 상실',
  },
  {
    month: '1949년 8월',
    priceIndexMultiplier: 1124,
    note: '금원권 사실상 폐지 선언 (발행 1년 만에 1,124배 폭등 기록)',
    socioPoliticalImpact: '10월 중화인민공화국 수립 및 12월 국부천대(대만 이전)',
  },
];

export const EMPIRES_TIMELINE_DATA: import('./types').EmpireLifespan[] = [
  {
    id: 'rome_west',
    name: '고대 로마 (공화정 ~ 서로마)',
    region: 'europe',
    startYear: -509,
    endYear: 476,
    peakPeriod: 'BC 27 ~ AD 180 (팍스 로마나)',
    color: '#9a3412', // orange-800
    accentColor: '#fdba74',
    description: '12표법 성문법과 군단병으로 지중해를 장악했으나 군벌 사병화와 게르만 침입으로 476년 붕괴',
    turningPoint: 'AD 293 디오클레티아누스 사두정치 및 AD 476 서로마 멸망',
  },
  {
    id: 'byzantine',
    name: '동로마 (비잔티움 제국)',
    region: 'europe',
    startYear: 330,
    endYear: 1453,
    peakPeriod: '6세기 유스티니아누스 ~ 10세기 마케도니아 왕조',
    color: '#b45309', // amber-700
    accentColor: '#fcd34d',
    description: '시민법 대전과 둔전병 군관구(테마제)로 1천 년 이상 존속한 정교회 황제교황주의 제국',
    turningPoint: '1204년 4차 십자군 약탈 및 1453년 오스만 메흐메트 2세에 콘스탄티노플 함락',
  },
  {
    id: 'frankish_holy_roman',
    name: '프랑크 왕국 ~ 신성로마제국',
    region: 'europe',
    startYear: 800,
    endYear: 1806,
    peakPeriod: '9세기 카롤루스 대제 ~ 16세기 카를 5세',
    color: '#1e3a8a', // blue-900
    accentColor: '#93c5fd',
    description: '베르됭·메르센 조약 분할 상속과 1356년 금인칙서로 300여 영방국가로 영구 분권화된 제국',
    turningPoint: '1648년 베스트팔렌 조약으로 제후 영방 주권 공인 및 1806년 나폴레옹에 해체',
  },
  {
    id: 'islamic_caliphates',
    name: '중동 이슬람 제국 (우마이야·아바스)',
    region: 'islam',
    startYear: 661,
    endYear: 1258,
    peakPeriod: '8~10세기 바그다드 학문 황금기 (하룬 알 라시드)',
    color: '#065f46', // emerald-800
    accentColor: '#6ee7b7',
    description: '우마이야의 아랍 배타주의 실패 후 아바스의 다민족 융합과 바이트 알 히크마 학문 황금기',
    turningPoint: '751년 탈라스 전투 승리 및 1258년 몽골 훌라구에 바그다드 함락',
  },
  {
    id: 'ottoman',
    name: '오스만 제국',
    region: 'islam',
    startYear: 1299,
    endYear: 1922,
    peakPeriod: '16세기 쉴레이만 1세 (장엄제)',
    color: '#047857', // emerald-700
    accentColor: '#a7f3d0',
    description: '밀레트 종교 자치와 예니체리로 3개 대륙을 600년간 통치했으나 탄지마트 외채 위기로 해체',
    turningPoint: '1683년 제2차 빈 공방전 패배 및 1922년 술탄제 폐지',
  },
  {
    id: 'russian_empire_soviet',
    name: '러시아 제정 및 소비에트 연방',
    region: 'russia',
    startYear: 1547,
    endYear: 1991,
    peakPeriod: '18세기 예카테리나 대제 ~ 1970년대 소련 냉전 초강대국',
    color: '#3f3f46', // zinc-700
    accentColor: '#d4d4d8',
    description: '이반 뇌제의 차르 전제정, 표트르 1세의 관등제, 볼셰비키 혁명을 거쳐 1980년대 유가 폭락으로 붕괴',
    turningPoint: '1917년 러시아 혁명 및 1991년 12월 26일 소련 공식 해체',
  },
  {
    id: 'china_imperial_republic',
    name: '중화 제국 ~ 중화민국·대만',
    region: 'china_taiwan',
    startYear: -221,
    endYear: 2026,
    peakPeriod: '한·당·명·청 번영기 및 현대 대만의 반도체·민주화',
    color: '#831843', // pink-900 / wine
    accentColor: '#fbcfe8',
    description: '진시황 통일 후 2천 년 군현 율령제, 1911년 신해혁명 공화정 수립, 1949년 국부천대와 토지개혁',
    turningPoint: '1911년 신해혁명, 1948년 금원권 파탄, 1949년 대만 국부천대 및 1953년 경자유기전',
  },
  {
    id: 'korea_dynasties',
    name: '한반도 왕조 연대 (고조선 ~ 대한민국)',
    region: 'korea',
    startYear: -300,
    endYear: 2026,
    peakPeriod: '삼국 전성기(5C), 고려 문화(11~12C), 조선 세종(15C), 현대 한강의 기적',
    color: '#991b1b', // red-800
    accentColor: '#fca5a5',
    description: '위만조선 멸망 후 삼국 율령 체제, 신라 통일, 고려 반원 개혁, 조선 대동법, 현대 농지개혁과 민주화',
    turningPoint: '676년 삼국통일, 1356년 공민왕 자주 개혁, 1636년 병자호란, 1949년 농지개혁, 1991년 UN 동시 가입',
  },
];

export const TIMELINE_POINTS_DATA: import('./types').TimelineHistoricalPoint[] = [
  {
    id: 'tp_12tables',
    year: -450,
    yearDisplay: 'BC 450',
    title: '로마 12표법 제정',
    region: 'europe',
    empireId: 'rome_west',
    era: 'ancient',
    significance: 'rise',
    modalId: 'rome',
    koreanConnection: '고조선 비파형 동검 문화 및 8조법 금법 운영기',
  },
  {
    id: 'tp_wiman_han',
    year: -108,
    yearDisplay: 'BC 108',
    title: '한 무제 침공과 위만조선 멸망',
    region: 'korea',
    empireId: 'korea_dynasties',
    era: 'ancient',
    significance: 'crisis',
    modalId: 'rome',
    koreanConnection: '한사군 설치와 한반도 철기 문화의 본격 확산',
  },
  {
    id: 'tp_tetrarchy',
    year: 293,
    yearDisplay: 'AD 293',
    title: '디오클레티아누스 사두정치(제국 4분할)',
    region: 'europe',
    empireId: 'rome_west',
    era: 'ancient',
    significance: 'reform',
    modalId: 'rome',
    koreanConnection: '고구려 봉상왕·미천왕 낙랑군 축출기',
  },
  {
    id: 'tp_rome_fall',
    year: 476,
    yearDisplay: 'AD 476',
    title: '서로마 제국 멸망 (오도아케르 쿠데타)',
    region: 'europe',
    empireId: 'rome_west',
    era: 'ancient',
    significance: 'fall',
    modalId: 'rome',
    koreanConnection: '고구려 장수왕 한성 함락(475) 및 한반도 삼국 최전성기',
  },
  {
    id: 'tp_corpus_juris',
    year: 529,
    yearDisplay: 'AD 529',
    title: '유스티니아누스 시민법 대전 편찬',
    region: 'europe',
    empireId: 'byzantine',
    era: 'medieval',
    significance: 'peak',
    modalId: 'justinian',
    koreanConnection: '신라 법흥왕 율령 반포(520) 및 불교 공인',
  },
  {
    id: 'tp_silla_unification',
    year: 676,
    yearDisplay: 'AD 676',
    title: '신라 삼국통일 완수 (기벌포 승리)',
    region: 'korea',
    empireId: 'korea_dynasties',
    era: 'medieval',
    significance: 'peak',
    modalId: 'justinian',
    koreanConnection: '나당전쟁 종결 및 단일 민족 율령 국가 도약',
  },
  {
    id: 'tp_talas_battle',
    year: 751,
    yearDisplay: 'AD 751',
    title: '탈라스 전투 (아바스 vs 당 고선지)',
    region: 'islam',
    empireId: 'islamic_caliphates',
    era: 'medieval',
    significance: 'peak',
    modalId: 'umayyad_abbasid',
    koreanConnection: '고구려 유민 고선지 장군 활약 및 제지술의 서방 전파',
  },
  {
    id: 'tp_verdun_treaty',
    year: 843,
    yearDisplay: 'AD 843',
    title: '베르됭 조약 (프랑크 제국 3분할)',
    region: 'europe',
    empireId: 'frankish_holy_roman',
    era: 'medieval',
    significance: 'crisis',
    modalId: 'frank',
    koreanConnection: '통일신라 하대 장보고의 난(846) 및 왕위 쟁탈 분열',
  },
  {
    id: 'tp_baghdad_fall',
    year: 1258,
    yearDisplay: 'AD 1258',
    title: '몽골 훌라구의 바그다드 함락 (아바스 멸망)',
    region: 'islam',
    empireId: 'islamic_caliphates',
    era: 'medieval',
    significance: 'fall',
    modalId: 'umayyad_abbasid',
    koreanConnection: '고려 최씨 무신정권 붕괴(최의 피살) 및 원 강화 협상',
  },
  {
    id: 'tp_golden_bull',
    year: 1356,
    yearDisplay: 'AD 1356',
    title: '신성로마 카를 4세 금인칙서 (7선제후제)',
    region: 'europe',
    empireId: 'frankish_holy_roman',
    era: 'medieval',
    significance: 'reform',
    modalId: 'goldenbull',
    koreanConnection: '1356년 고려 공민왕 반원 자주 개혁 (쌍성총관부 탈환)',
  },
  {
    id: 'tp_constantinople_fall',
    year: 1453,
    yearDisplay: 'AD 1453',
    title: '콘스탄티노플 함락 (비잔티움 멸망)',
    region: 'islam',
    empireId: 'ottoman',
    era: 'earlymodern',
    significance: 'rise',
    modalId: 'ottoman',
    koreanConnection: '조선 세조 계유정난(1453) 및 집현전 경국대전 기획',
  },
  {
    id: 'tp_oprichnina',
    year: 1565,
    yearDisplay: 'AD 1565',
    title: '러시아 이반 뇌제 오프리치니나 공포정치',
    region: 'russia',
    empireId: 'russian_empire_soviet',
    era: 'earlymodern',
    significance: 'crisis',
    modalId: 'russia_soviet',
    koreanConnection: '조선 16세기 훈구-사림 사화 및 임진왜란 직전 방위 이완',
  },
  {
    id: 'tp_westphalia',
    year: 1648,
    yearDisplay: 'AD 1648',
    title: '베스트팔렌 조약 (근대 주권 국가 탄생)',
    region: 'europe',
    empireId: 'frankish_holy_roman',
    era: 'earlymodern',
    significance: 'reform',
    modalId: 'westphalia',
    koreanConnection: '병자호란(1636) 전후 복구, 김육의 대동법 확대 및 북벌론',
  },
  {
    id: 'tp_vienna_battle',
    year: 1683,
    yearDisplay: 'AD 1683',
    title: '제2차 빈 공방전 오스만 패배',
    region: 'islam',
    empireId: 'ottoman',
    era: 'earlymodern',
    significance: 'crisis',
    modalId: 'ottoman',
    koreanConnection: '조선 숙종 환국 정치 및 상평통보 전국 유통',
  },
  {
    id: 'tp_table_ranks',
    year: 1722,
    yearDisplay: 'AD 1722',
    title: '표트르 1세 14등급 관등제 서구화',
    region: 'russia',
    empireId: 'russian_empire_soviet',
    era: 'earlymodern',
    significance: 'peak',
    modalId: 'russia_soviet',
    koreanConnection: '조선 영조 탕평책 및 균역법(1750) 시행',
  },
  {
    id: 'tp_sinhae_revolution',
    year: 1911,
    yearDisplay: 'AD 1911',
    title: '신해혁명과 중화민국 수립 (아시아 최초 공화정)',
    region: 'china_taiwan',
    empireId: 'china_imperial_republic',
    era: 'modern',
    significance: 'rise',
    modalId: 'taiwan_roc',
    koreanConnection: '일제 강점기 초기 및 1919년 대한민국 임시정부 수립의 영감',
  },
  {
    id: 'tp_bolshevik_revolution',
    year: 1917,
    yearDisplay: 'AD 1917',
    title: '러시아 볼셰비키 10월 혁명 (소련 성립)',
    region: 'russia',
    empireId: 'russian_empire_soviet',
    era: 'modern',
    significance: 'rise',
    modalId: 'russia_soviet',
    koreanConnection: '식민지 조선 독립운동에 사회주의 계열 유입',
  },
  {
    id: 'tp_gold_yuan_crisis',
    year: 1948,
    yearDisplay: 'AD 1948',
    title: '금원권 초인플레이션과 국민당 패망',
    region: 'china_taiwan',
    empireId: 'china_imperial_republic',
    era: 'modern',
    significance: 'fall',
    modalId: 'taiwan_roc',
    koreanConnection: '1948년 대한민국 정부 수립 및 조봉암 농지개혁법 입안',
  },
  {
    id: 'tp_taiwan_land_reform',
    year: 1953,
    yearDisplay: 'AD 1953',
    title: '대만 3단계 토지개혁 완성 (경자유기전)',
    region: 'china_taiwan',
    empireId: 'china_imperial_republic',
    era: 'modern',
    significance: 'peak',
    modalId: 'taiwan_roc',
    koreanConnection: '한국 휴전협정(1953) 체결 및 전후 농지개혁 기반 자영농 정착',
  },
  {
    id: 'tp_soviet_oil_crash',
    year: 1986,
    yearDisplay: 'AD 1986',
    title: '사우디 증산으로 국제 유가 60% 폭락',
    region: 'russia',
    empireId: 'russian_empire_soviet',
    era: 'modern',
    significance: 'crisis',
    modalId: 'russia_soviet',
    koreanConnection: '대한민국 3저 호황(저유가·저금리·저달러) 및 86 아시안게임',
  },
  {
    id: 'tp_soviet_dissolution',
    year: 1991,
    yearDisplay: 'AD 1991',
    title: '소비에트 연방 공식 해체 및 탈냉전',
    region: 'russia',
    empireId: 'russian_empire_soviet',
    era: 'modern',
    significance: 'fall',
    modalId: 'russia_soviet',
    koreanConnection: '1991년 남북한 UN 동시 가입 및 남북기본합의서 채택',
  },
  {
    id: 'tp_maastricht_treaty',
    year: 1992,
    yearDisplay: 'AD 1992',
    title: '마스트리히트 조약 (유럽연합 EU 출범)',
    region: 'europe',
    empireId: 'frankish_holy_roman',
    era: 'modern',
    significance: 'peak',
    modalId: 'maastricht',
    koreanConnection: '한국-중국 수교(1992) 및 문민정부 출범',
  },
];
