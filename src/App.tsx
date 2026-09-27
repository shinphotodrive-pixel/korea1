import React, { useState } from 'react';
import {
  HISTORICAL_EVENTS,
} from './historyData';
import { RadarComparisonChart } from './components/RadarComparisonChart';
import { SovietOilChart } from './components/SovietOilChart';
import { GoldYuanInflationChart } from './components/GoldYuanInflationChart';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { LinearTimelineVisualizer } from './components/LinearTimelineVisualizer';
import { MacroInsightsModal } from './components/MacroInsightsModal';
import { DetailModal } from './components/DetailModal';

// Local generated archival image paths
const HERO_IMAGE = '/src/assets/images/eurasia_empires_hero_1790493699990.jpg';
const ROMAN_IMAGE = '/src/assets/images/roman_corpus_juris_1790493717760.jpg';
const OTTOMAN_IMAGE = '/src/assets/images/ottoman_millet_archive_1790493735357.jpg';
const LAND_REFORM_IMAGE = '/src/assets/images/east_asia_land_reform_1790493753565.jpg';

export default function App() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isMacroInsightsOpen, setIsMacroInsightsOpen] = useState<boolean>(false);
  const [globalSearch, setGlobalSearch] = useState<string>('');

  const selectedEvent = selectedEventId ? HISTORICAL_EVENTS[selectedEventId] ?? null : null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* 1. TOP BAR CONTRACT: Zone 1 (Wordmark) — Zone 2 (4-6 links) — Zone 3 (Action) */}
      <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="text-lg font-bold tracking-tight text-stone-900 font-editorial shrink-0"
          >
            유라시아·한반도 거시사 아카이브
          </a>

          {/* Zone 2: clean text navigation links */}
          <nav className="hidden md:flex items-center gap-5 text-xs lg:text-sm font-medium text-stone-600">
            <button
              onClick={() => scrollTo('timeline')}
              className="text-amber-900 font-bold hover:text-amber-700 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1"
            >
              <span>⏳</span>
              <span>선형 타임라인</span>
            </button>
            <button
              onClick={() => scrollTo('europe')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              유럽 법제와 EU
            </button>
            <button
              onClick={() => scrollTo('islam')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              이슬람·오스만 밀레트
            </button>
            <button
              onClick={() => scrollTo('russia')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              러시아·소련 유가
            </button>
            <button
              onClick={() => scrollTo('taiwan')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              중화민국·대만
            </button>
            <button
              onClick={() => scrollTo('matrix')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              연대기 매트릭스
            </button>
          </nav>

          {/* Zone 3: Search input & quick trigger */}
          <div className="flex items-center gap-2">
            <div className="relative w-40 sm:w-52">
              <input
                type="text"
                value={globalSearch}
                onChange={(e) => setGlobalSearch(e.target.value)}
                placeholder="인물, 조약, 연대 검색..."
                className="w-full text-xs pl-7 pr-3 py-1.5 rounded-md bg-stone-100 border border-stone-200 focus:outline-none focus:border-stone-400 text-stone-800 placeholder-stone-400"
              />
              <span className="absolute left-2.5 top-2 text-[10px] text-stone-400">🔍</span>
            </div>
            {/* Macro History Insights Modal Launch Button */}
            <button
              onClick={() => setIsMacroInsightsOpen(true)}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-950 rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              <span>💡</span>
              <span className="hidden sm:inline">거시사 비교 통찰</span>
              <span className="sm:hidden">통찰</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* HERO SECTION: Editorial Museum Style with Archival Focal Visual */}
        <section id="hero" className="border-b border-stone-200 pb-12 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                <span>동서양 거시사 비교 사료 총서</span>
                <span aria-hidden="true">·</span>
                <span>기원전 3세기 — 서기 20세기</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-editorial font-bold text-stone-900 leading-[1.15] text-balance">
                유라시아 제국의 흥망과<br />
                동시대 한반도 역사의 심층 조응
              </h1>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl text-justify sm:text-left">
                로마의 12표법과 사두정치에서 EU 초국가 연대까지, 우마이야·오스만의 다민족 밀레트 통치에서 소련의 유가 충격 자멸 및 중화민국·대만의 농지개혁까지—
                세계사적 거대 체제의 흥망성쇠를 행정 법제, 통화·조세 재정, 영토 주권의 시각에서 조망하고,
                동시대 한반도가 맞닥뜨린 지정학적 나비효과와 제도 동조화를 입체적으로 탐색합니다.
              </p>

              {/* Action Buttons: Fast access to Modal and Visualizer */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => setIsMacroInsightsOpen(true)}
                  className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-50 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-sm transition-all"
                >
                  <span>💡 거시사 비교 통찰(Macro Insights) 보고서 열기</span>
                  <span className="text-amber-300">→</span>
                </button>
                <button
                  onClick={() => scrollTo('timeline')}
                  className="px-3.5 py-2 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg text-xs font-semibold text-stone-800 cursor-pointer transition-colors"
                >
                  ⏳ 제국 수명 선형 타임라인 보기
                </button>
              </div>

              {/* Curatorial Metric Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="border-l-2 border-stone-300 pl-3">
                  <div className="text-[11px] text-stone-500">분석 문명권</div>
                  <div className="text-lg font-bold font-editorial text-stone-900 mt-0.5">4대 권역</div>
                  <div className="text-[10px] text-stone-400">유럽·중동·러시아·동아시아</div>
                </div>
                <div className="border-l-2 border-stone-300 pl-3">
                  <div className="text-[11px] text-stone-500">비교 시간축</div>
                  <div className="text-lg font-bold font-editorial text-stone-900 mt-0.5">2,400+ 년</div>
                  <div className="text-[10px] text-stone-400">BC 450 ~ AD 1992+</div>
                </div>
                <div className="border-l-2 border-stone-300 pl-3">
                  <div className="text-[11px] text-stone-500">한반도 동조점</div>
                  <div className="text-lg font-bold font-editorial text-stone-900 mt-0.5">7대 전기</div>
                  <div className="text-[10px] text-stone-400">고조선 ~ 현대 대한민국</div>
                </div>
                <div
                  onClick={() => setIsMacroInsightsOpen(true)}
                  className="border-l-2 border-amber-800 pl-3 cursor-pointer group hover:bg-amber-50/50 rounded-r transition-colors"
                >
                  <div className="text-[11px] text-amber-900 font-semibold flex items-center justify-between">
                    <span>체제 거시 교훈</span>
                    <span className="text-[10px] text-amber-700">열기 ↗</span>
                  </div>
                  <div className="text-lg font-bold font-editorial text-amber-800 mt-0.5 group-hover:text-amber-950">
                    3대 법칙
                  </div>
                  <div className="text-[10px] text-stone-400">법제·재정·외교 주권</div>
                </div>
              </div>
            </div>

            {/* Hero Archival Visual */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 shadow-sm bg-stone-100 aspect-16/10">
                <img
                  src={HERO_IMAGE}
                  alt="유라시아 제국과 한반도 거시사 사료 모음"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-stone-100 text-xs">
                  <span className="font-editorial italic">Archival Crossroads</span>
                  <p className="text-[11px] text-stone-300">
                    로마 성문법, 이슬람 아라베스크, 소련 계획경제와 조선 성리학의 문명사적 조우
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: LINEAR TIMELINE VISUALIZER (NEW COMPONENT) */}
        <section id="timeline" className="space-y-4 pt-2">
          <div className="border-l-2 border-amber-700 pl-3">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-mono">
              00. Universal Linear Chronology
            </div>
            <h2 className="text-2xl font-editorial font-bold text-stone-900 mt-0.5">
              유라시아 전 제국 흥망성쇠 단일 선형 연대기
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              고대 로마, 동로마(비잔티움), 프랑크·신성로마, 우마이야·아바스, 오스만, 제정 러시아·소련, 중화권 및 한반도 왕조의 존속 기간(Lifespan)과 결정적 분기점을 동일한 연대 축선상에서 입체적으로 조망합니다.
            </p>
          </div>

          <LinearTimelineVisualizer
            onSelectEvent={(eventId) => setSelectedEventId(eventId)}
            searchQuery={globalSearch}
          />
        </section>

        {/* SECTION 1: EUROPEAN INSTITUTIONAL EVOLUTION */}
        <section id="europe" className="space-y-6">
          <div className="border-l-2 border-amber-800 pl-3">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-mono">01. Institutional Evolution</div>
            <h2 className="text-2xl font-editorial font-bold text-stone-900 mt-0.5">
              유럽 통치 체제의 진화: 로마 법제에서 베스트팔렌과 EU로
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              12표법과 디오클레티아누스 사두정치, 비잔티움 시민법 대전, 프랑크 왕국의 분할 상속(베르됭·메르센), 신성로마제국 금인칙서(1356), 베스트팔렌 주권 조약(1648), 그리고 마스트리히트 조약(1992)에 이르는 제도적 이정표를 분석합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 6 Milestone Interactive Stack */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500 pb-1 border-b border-stone-200">
                <span>핵심 역사적 조약 및 제도 (클릭 시 상세 모달 오픈)</span>
                <span>사료 원문 해설</span>
              </div>

              {/* Milestone 1: Rome */}
              <div
                onClick={() => setSelectedEventId('rome')}
                className="p-4 bg-white hover:bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">BC 450 ~ AD 301</span>
                  <span className="text-stone-400">고대 로마 공화정·제정</span>
                </div>
                <h3 className="text-sm font-bold font-editorial text-stone-900">
                  12표법, 삼두정치 및 디오클레티아누스 사두정치
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  성문법으로 평민 권리를 보장했으나 군벌 사병화로 공화정이 붕괴되었으며, 293년 사두정치 분할 통치와 301년 가격통제 칙령으로 제국 연장을 시도했습니다.
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded inline-block font-medium">
                  🇰🇷 동시대 한반도: BC 108년 위만조선 멸망과 한사군 설치 / 삼국 초기 국가 형성
                </div>
              </div>

              {/* Milestone 2: Justinian */}
              <div
                onClick={() => setSelectedEventId('justinian')}
                className="p-4 bg-white hover:bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">527 ~ 7세기</span>
                  <span className="text-stone-400">동로마 비잔티움</span>
                </div>
                <h3 className="text-sm font-bold font-editorial text-stone-900">
                  유스티니아누스 시민법 대전 & 테마(군관구) 제도
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  로마 판례 4부작을 집대성해 대륙법의 모태가 되었으며, 자영 둔전병 중심의 테마 제도로 1천 년 방어망을 구축했습니다.
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded inline-block font-medium">
                  🇰🇷 동시대 한반도: 676년 신라 삼국 통일 완수 및 율령 관료제 확립
                </div>
              </div>

              {/* Milestone 3: Frankish Treaties */}
              <div
                onClick={() => setSelectedEventId('frank')}
                className="p-4 bg-white hover:bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">843 / 870년</span>
                  <span className="text-stone-400">게르만 중세</span>
                </div>
                <h3 className="text-sm font-bold font-editorial text-stone-900">
                  프랑크 왕국의 분할 상속: 베르됭 조약과 메르센 조약
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  게르만식 분할 상속 관습으로 프랑크 제국이 서프랑크(프랑스), 동프랑크(독일), 중프랑크(이탈리아)로 쪼개지며 현대 유럽 국경의 기초가 성립되었습니다.
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded inline-block font-medium">
                  🇰🇷 동시대 한반도: 9세기 통일신라 하대 귀족 내전 및 후삼국 분열 태동
                </div>
              </div>

              {/* Milestone 4: Golden Bull */}
              <div
                onClick={() => setSelectedEventId('goldenbull')}
                className="p-4 bg-white hover:bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">1356년</span>
                  <span className="text-stone-400">신성로마제국</span>
                </div>
                <h3 className="text-sm font-bold font-editorial text-stone-900">
                  카를 4세의 금인칙서 (Golden Bull)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  7선제후의 황제 선출권과 영방 내 배타적 재판·조세권을 공인하여 교황의 간섭을 배제했으나, 300여 영방국가로의 파편화를 고착화했습니다.
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded inline-block font-medium">
                  🇰🇷 동시대 한반도: 1356년 고려 공민왕의 반원 자주 개혁(쌍성총관부 탈환)
                </div>
              </div>

              {/* Milestone 5: Westphalia */}
              <div
                onClick={() => setSelectedEventId('westphalia')}
                className="p-4 bg-white hover:bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">1648년</span>
                  <span className="text-stone-400">근대 유럽</span>
                </div>
                <h3 className="text-sm font-bold font-editorial text-stone-900">
                  30년 전쟁 종결과 베스트팔렌 조약 (Westphalian Sovereignty)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  교황·황제의 보편 지배를 끝내고 영토적 배타 주권과 내정 불간섭 원칙을 정립한 근대 국제법과 주권 국가 체제의 탄생점입니다.
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded inline-block font-medium">
                  🇰🇷 동시대 한반도: 1636년 병자호란 직후 조선의 전후 복구, 북벌론 및 대동법 확대
                </div>
              </div>

              {/* Milestone 6: Maastricht */}
              <div
                onClick={() => setSelectedEventId('maastricht')}
                className="p-4 bg-white hover:bg-stone-50 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">1992년</span>
                  <span className="text-stone-400">현대 유럽</span>
                </div>
                <h3 className="text-sm font-bold font-editorial text-stone-900">
                  마스트리히트 조약과 유럽연합(EU) 출범
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  3대 기둥(경제통화, 외교안보, 사법내무) 체계를 구축하고 유로화 도입에 합의하여 개별 민족국가를 넘어선 자발적 초국가 주권 연대를 구현했습니다.
                </p>
                <div className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1 rounded inline-block font-medium">
                  🇰🇷 동시대 한반도: 1991년 남북기본합의서 체결, 남북 UN 동시 가입 및 탈냉전 해빙
                </div>
              </div>
            </div>

            {/* Right: Radar Chart Visualization & Institutional Analysis */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs">
                <div className="space-y-1 mb-4">
                  <h3 className="text-sm font-bold font-editorial text-stone-900">
                    🏛️ 4대 제국 행정 거버넌스 레이더 비교
                  </h3>
                  <p className="text-xs text-stone-500">
                    동로마, 신성로마, 오스만, 그리고 조선 왕조의 법제·분권·재정·주권·포용성 5개 축 비교
                  </p>
                </div>

                <RadarComparisonChart />
              </div>

              {/* Archival Roman Image Asset Spotlight */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
                <div className="aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={ROMAN_IMAGE}
                    alt="로마 시민법 대전 사료 디스플레이"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3.5 space-y-1">
                  <div className="text-[11px] text-stone-400 font-mono">Fig 1. Corpus Juris Civilis & Legal Artifacts</div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    유스티니아누스 법전은 11세기 볼로냐 대학에서 재발견된 이후 근대 서유럽과 동아시아의 율령 수용에 결정적 영향을 미쳤습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ISLAMIC & OTTOMAN EMPIRES */}
        <section id="islam" className="space-y-6">
          <div className="border-l-2 border-emerald-800 pl-3">
            <div className="text-xs uppercase tracking-widest text-emerald-900 font-mono">02. Islamic Governance</div>
            <h2 className="text-2xl font-editorial font-bold text-stone-900 mt-0.5">
              중동 이슬람 제국의 흥망과 오스만 제국의 다민족 통치
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              아랍 배타주의로 90년 만에 좌초한 우마이야와 학문 번영의 아바스, 그리고 종교 자치(밀레트)와 군사 징발(데브시르메)로 600년을 지속했으나 외채 누적으로 붕괴한 오스만의 교훈.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Umayyad vs Abbasid & Ottoman Triple Pillar */}
            <div className="md:col-span-7 space-y-4">
              {/* Umayyad vs Abbasid Contrast Box */}
              <div
                onClick={() => setSelectedEventId('umayyad_abbasid')}
                className="bg-white p-5 rounded-xl border border-stone-200 hover:border-emerald-600 transition-colors cursor-pointer shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-900 font-editorial text-sm">
                    우마이야(배타주의) vs 아바스(포용과 지혜의 집)
                  </span>
                  <span className="font-mono text-stone-400 text-[11px]">750년 천도</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-red-50/60 rounded-lg border border-red-100 space-y-1">
                    <span className="font-bold text-red-900">우마이야 왕조 (661~750)</span>
                    <ul className="list-disc list-inside text-stone-700 space-y-0.5 text-[11px]">
                      <li>아랍인 귀족 우대 및 마왈리(비아랍 무슬림) 차별</li>
                      <li>680년 카르발라 참극으로 시아파 분열 영구화</li>
                      <li>피정복민 지즈야 강요로 민심 이반 자브강 패배</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-100 space-y-1">
                    <span className="font-bold text-emerald-900">아바스 왕조 (750~1258)</span>
                    <ul className="list-disc list-inside text-stone-700 space-y-0.5 text-[11px]">
                      <li>마왈리 차별 철폐, 페르시아 관료 대거 기용</li>
                      <li>바그다드 '지혜의 집' 고전 번역 학문 르네상스</li>
                      <li>751년 탈라스 전투(고선지와 제지술 서방 전파)</li>
                    </ul>
                  </div>
                </div>

                <div className="text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded">
                  🔗 <strong>한반도 조응:</strong> 751년 탈라스 전투의 고구려 유민 고선지 장군 활약 / 1258년 아바스 바그다드 함락과 고려 최씨 무신정권 몰락(1258년 최의 암살)은 몽골 팽창에 따른 동서양의 동시 격변이었습니다.
                </div>
              </div>

              {/* Ottoman Millet System Deep Dive */}
              <div
                onClick={() => setSelectedEventId('ottoman')}
                className="bg-white p-5 rounded-xl border border-stone-200 hover:border-emerald-600 transition-colors cursor-pointer shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-900 font-editorial text-sm">
                    오스만 제국의 3대 통치 축: 밀레트, 티마르, 예니체리
                  </span>
                  <span className="font-mono text-stone-400 text-[11px]">1299~1922</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200/70">
                    <strong className="text-emerald-900">1. 밀레트(Millet) 종교 자치:</strong> 비무슬림(그리스정교, 아르메니아인, 유대인)에게 지즈야 납부 조건으로 교회법에 따른 가족·상속 자치권을 부여하여 600년간 반란을 억제했습니다.
                  </div>
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200/70">
                    <strong className="text-emerald-900">2. 티마르(Timar)와 시파히 기병:</strong> 지방 토지 수조권을 군역과 결합하여 상시 군사력을 유지했습니다. 후기 일티잠(징세 청부제) 도입으로 지방 토호(아얀)가 득세했습니다.
                  </div>
                  <div className="p-2.5 bg-stone-50 rounded border border-stone-200/70">
                    <strong className="text-emerald-900">3. 예니체리와 탄지마트의 비극:</strong> 데브시르메로 양성한 친위대였으나 기득권화되어 개혁을 가로막았습니다. 1839년 탄지마트 서구화 개혁은 외채 누적으로 1875년 모라토리엄을 맞았습니다.
                  </div>
                </div>

                <div className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded">
                  🇰🇷 <strong>한반도 조응:</strong> 오스만 탄지마트 개혁의 재정 좌절은 조선 말 개항기 갑신정변(1884) 및 광무개혁이 내부 산업 기반 없이 외세 차관에 종속되어 국권을 피탈당한 궤적과 일치합니다.
                </div>
              </div>
            </div>

            {/* Right: Ottoman Visual & Curatorial Commentary */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
                <div className="aspect-4/3 overflow-hidden bg-stone-100">
                  <img
                    src={OTTOMAN_IMAGE}
                    alt="오스만 제국 밀레트 조약 칙령 사료"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-[11px] text-stone-400 font-mono">Fig 2. Imperial Ottoman Firman & Diplomatic Seals</div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    술탄의 투그라(Tughra) 인장이 찍힌 칙령들은 콘스탄티노플 총대주교와 유대교 랍비에게 자치권을 부여했습니다. 그러나 종교별 분리는 19세기 근대 민족주의가 도래했을 때 제국 해체의 직격탄이 되었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: RUSSIA & USSR OIL SHOCK */}
        <section id="russia" className="space-y-6">
          <div className="border-l-2 border-stone-800 pl-3">
            <div className="text-xs uppercase tracking-widest text-stone-700 font-mono">03. Petro-Empire & Autocracy</div>
            <h2 className="text-2xl font-editorial font-bold text-stone-900 mt-0.5">
              러시아 제정의 극단적 권력과 소비에트 체제 붕괴
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              이반 뇌제의 비밀경찰 통치, 표트르 1세의 관등제, 볼셰비키 혁명, 그리고 1970년대 오일머니 착시에서 1980년대 유가 폭락으로 직결된 소련의 파산 거시사.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Soviet Oil Interactive Dual-Axis Visualizer */}
            <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                <div>
                  <h3 className="text-sm font-bold font-editorial text-stone-900">
                    📈 소련 유가 변동과 체제 재정 위기 (1970~1991)
                  </h3>
                  <p className="text-xs text-stone-500">
                    자원의 저주: 계획경제의 비효율을 오일머니로 가리다 유가 붕괴로 파산한 궤적
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEventId('russia_soviet')}
                  className="text-xs font-semibold text-amber-800 hover:underline cursor-pointer text-left sm:text-right"
                >
                  소련 붕괴 사료 전문 보기 →
                </button>
              </div>

              <SovietOilChart />
            </div>

            {/* Right: Autocracy Progression Timeline */}
            <div className="lg:col-span-5 space-y-3">
              <div
                onClick={() => setSelectedEventId('russia_soviet')}
                className="bg-white p-4 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">1565년</span>
                  <span className="text-stone-400">제정 러시아</span>
                </div>
                <h4 className="text-sm font-bold font-editorial text-stone-900">
                  이반 4세(뇌제): 오프리치니나 공포정치
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  국토를 분할하고 비밀경찰 오프리치니키 6천 명을 가동해 귀족을 숙청했으나, 군사력 붕괴로 리보니아 전쟁 패배와 동란 시대를 초래했습니다.
                </p>
                <div className="text-[11px] text-stone-500">
                  → 동시대 한반도: 조선 선조 즉위 및 임진왜란(1592) 직전 군비 이완기
                </div>
              </div>

              <div
                onClick={() => setSelectedEventId('russia_soviet')}
                className="bg-white p-4 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">1722년</span>
                  <span className="text-stone-400">서구화 개혁</span>
                </div>
                <h4 className="text-sm font-bold font-editorial text-stone-900">
                  표트르 1세: 14등급 관등제 (Table of Ranks)
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  혈통 대신 기술 능력에 기초한 서구식 엘리트 관료를 양성했으나, 농민을 농노로 결박하여 극단적 사회 계급 모순을 누적시켰습니다.
                </p>
                <div className="text-[11px] text-stone-500">
                  → 1825년 데카브리스트 혁명 및 1917년 볼셰비키 혁명의 온상이 됨
                </div>
              </div>

              <div
                onClick={() => setSelectedEventId('russia_soviet')}
                className="bg-white p-4 rounded-xl border border-stone-200 hover:border-stone-400 cursor-pointer transition-all shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">1917 ~ 1991년</span>
                  <span className="text-stone-400">소비에트 연방</span>
                </div>
                <h4 className="text-sm font-bold font-editorial text-stone-900">
                  볼셰비키 혁명과 1991년 소비에트 공식 해체
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  레닌의 10월 혁명으로 세계 최초 사회주의 국가를 세웠으나, 단일 자원 의존 및 노멘클라투라 부패로 인해 1991년 12월 26일 공식 해체되었습니다.
                </p>
                <div className="text-[11px] text-stone-500">
                  → 동시대 한반도: 일제강점기 사회주의 독립운동 촉발 및 1990년 한소수교
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: ROC & TAIWAN TRANSPLANTATION */}
        <section id="taiwan" className="space-y-6">
          <div className="border-l-2 border-amber-700 pl-3">
            <div className="text-xs uppercase tracking-widest text-amber-900 font-mono">04. Republic & Land Reform</div>
            <h2 className="text-2xl font-editorial font-bold text-stone-900 mt-0.5">
              아시아 공화국 수립과 대만으로의 체제 이식
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              신해혁명(1911), 1948년 금원권 남발에 따른 초인플레이션과 국공내전 패망, 그리고 대만 이주 후 철저한 반성으로 성취한 3단계 토지개혁과 한국과의 데칼코마니 비교.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Gold Yuan Hyperinflation Chart */}
            <div className="lg:col-span-6 bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold font-editorial text-stone-900">
                    💥 1948~1949 중화민국 금원권 초인플레이션
                  </h3>
                  <p className="text-xs text-stone-500">
                    화폐 준비금 없는 무제한 발권이 초래한 민심 붕괴와 국부천대의 경제적 원인
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEventId('taiwan_roc')}
                  className="text-xs font-semibold text-red-800 hover:underline cursor-pointer"
                >
                  사료 보기 →
                </button>
              </div>

              <GoldYuanInflationChart />
            </div>

            {/* Right: 3-Stage Land Reform in Taiwan & Korean Parallels */}
            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-stone-900 font-editorial text-sm">
                    대만 3단계 토지 개혁 (1949~1953)
                  </span>
                  <span className="text-emerald-700 font-mono font-semibold">농민 자본화 모델</span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-lg">
                    <span className="font-bold text-emerald-900 block">
                      1단계: 삼칠오감조 (三七五減租, 1949)
                    </span>
                    <p className="text-stone-700 mt-1">
                      소작료를 주요 수확량의 최고 37.5% 이하로 강제 제한하고 6년 임차권을 보장해 소작농의 잉여 농산물 축적을 지원했습니다.
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-lg">
                    <span className="font-bold text-emerald-900 block">
                      2단계: 공지방령 (公地放領, 1951)
                    </span>
                    <p className="text-stone-700 mt-1">
                      일제 적산 농지를 몰수하여 영세 소작농에게 수확량의 2.5배 가격으로 10년 분할 상환 방식으로 우선 불하했습니다.
                    </p>
                  </div>

                  <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-lg">
                    <span className="font-bold text-emerald-900 block">
                      3단계: 경자유기전 (耕者有其田, 1953)
                    </span>
                    <p className="text-stone-700 mt-1">
                      지주의 초과 농지를 수용해 농민에게 매각했습니다. 지주에게는 토지채권(70%)과 대만시멘트 등 4대 공기업 주식(30%)을 교부하여 전통 지주를 근대 산업 자본가로 체질 전환시켰습니다.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50/80 rounded-lg border border-amber-200 text-xs space-y-1">
                  <div className="font-bold text-amber-950 flex items-center gap-1.5">
                    <span>🔄 한국 농지개혁(1949~1950)과의 데칼코마니</span>
                  </div>
                  <p className="text-stone-800 leading-relaxed text-justify">
                    이승만 정부 농림부 장관 조봉암이 주도한 유상매수·유상분배 농지개혁은 대만의 경자유기전과 쌍둥이처럼 일치합니다. 두 나라 모두 6·25 전쟁과 대만해협 위기 속에서 농촌의 공산화 침투를 사전 차단하고 자영농 기반의 초고속 산업화(한강의 기적 / 대만의 기적)를 달성하는 결정적 디딤돌이 되었습니다.
                  </p>
                </div>
              </div>

              {/* Archival Land Reform Image */}
              <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex items-center gap-4 p-3">
                <div className="w-28 h-20 shrink-0 rounded-lg overflow-hidden bg-stone-100">
                  <img
                    src={LAND_REFORM_IMAGE}
                    alt="동아시아 농지개혁 사료 문서"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-stone-600">
                  <strong className="text-stone-900 block">동아시아 농지 소유권 문서 사료</strong>
                  지주-소작인 관계의 해체는 한국과 대만에서 지주 자본의 교육 투자 및 경공업·중화학공업 진출을 가능케 한 현대사의 숨은 엔진이었습니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPREHENSIVE COMPARISON MATRIX & LESSONS */}
        <section id="matrix" className="space-y-6">
          <div className="border-l-2 border-stone-900 pl-3">
            <div className="text-xs uppercase tracking-widest text-stone-600 font-mono">05. Macro Synchronicity Matrix</div>
            <h2 className="text-2xl font-editorial font-bold text-stone-900 mt-0.5">
              거시적 연대기 비교: 유라시아 제국과 한반도의 궤적
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              BC 2세기부터 20세기 후반까지, 서양 유럽, 중동·러시아, 중화권 및 동시대 한반도의 체제 변천과 제도적 동조화를 한눈에 교차 검증합니다.
            </p>
          </div>

          {/* Interactive Matrix Component */}
          <ComparisonMatrix
            searchQuery={globalSearch}
            onSelectEvent={(eventId) => setSelectedEventId(eventId)}
          />

          {/* 3 Core Macro Lessons (Anti-Slop Editorial Design) */}
          <div className="pt-6 border-t border-stone-200 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-500">
              거시사 비교 연구의 3대 핵심 테제
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lesson 1 */}
              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
                <div className="text-xs font-mono font-bold text-amber-800">
                  01. 행정 포용성과 다민족 자치
                </div>
                <h3 className="text-base font-bold font-editorial text-stone-900">
                  제국 수명은 배타성이 아닌 관용이 결정한다
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed text-justify">
                  아랍 혈통을 고집한 우마이야는 90년 만에 단명했으나, 다민족 마왈리를 평등하게 품은 아바스와 비무슬림 밀레트 자치를 인정한 오스만, 둔전병 테마제를 가동한 동로마는 600~1,000년의 놀라운 지속성을 보여주었습니다.
                </p>
              </div>

              {/* Lesson 2 */}
              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
                <div className="text-xs font-mono font-bold text-red-800">
                  02. 통화·재정 건전성과 체제 안정
                </div>
                <h3 className="text-base font-bold font-editorial text-stone-900">
                  재정 관료의 실책은 전선 패배보다 빠르다
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed text-justify">
                  1948년 금원권 남발은 1년 만에 물가를 1,124배 폭등시켜 중산층을 등돌리게 해 국민당 패망의 도화선이 되었고, 소련은 석유 단일 자원에 기대다 1986년 사우디의 증산 유가 폭락 한 번에 국가 파산을 피하지 못했습니다.
                </p>
              </div>

              {/* Lesson 3 */}
              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-xs">
                <div className="text-xs font-mono font-bold text-indigo-900">
                  03. 주권 체제의 진화와 동조화
                </div>
                <h3 className="text-base font-bold font-editorial text-stone-900">
                  배타적 주권에서 자발적 초국가 연대로
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed text-justify">
                  1648년 베스트팔렌 조약이 배타적 국경선과 내정 불간섭의 근대 주권 체제를 열었다면, 1992년 마스트리히트 조약(EU)은 전쟁 방지를 위한 초국가적 주권 양도를 성취했습니다. 한반도는 냉전의 최전선에서 한국과 대만의 유상 농지개혁을 통해 공산화를 막아내고 산업화와 민주화를 동시 달성했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-10 border-t border-stone-800 mt-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-editorial text-stone-200 text-sm font-bold">
              유라시아 제국과 한반도 거시사 아카이브
            </span>
            <p className="text-[11px] text-stone-500">
              동서양 체제 변천 비교 연구 보고서 기반 인터랙티브 분석 플랫폼
            </p>
          </div>
          <div className="text-center sm:text-right text-[11px] text-stone-500">
            <span>로마 시민법 대전 · 베스트팔렌 · 마스트리히트 · 밀레트 · 소련 오일쇼크 · 대만 농지개혁</span>
          </div>
        </div>
      </footer>

      {/* DYNAMIC DETAIL MODAL */}
      <DetailModal
        event={selectedEvent}
        onClose={() => setSelectedEventId(null)}
      />

      {/* MACRO HISTORY INSIGHTS COMPREHENSIVE MODAL */}
      <MacroInsightsModal
        isOpen={isMacroInsightsOpen}
        onClose={() => setIsMacroInsightsOpen(false)}
        onSelectEventDetail={(eventId) => {
          setIsMacroInsightsOpen(false);
          setSelectedEventId(eventId);
        }}
      />
    </div>
  );
}
