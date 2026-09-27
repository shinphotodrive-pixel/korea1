import React, { useState, useEffect } from 'react';
import { MACRO_INSIGHTS_DATA, MACRO_COMPARATIVE_THEMES } from '../historyData';
import { EmpireMacroInsight } from '../types';

interface MacroInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEventDetail?: (eventId: string) => void;
}

export const MacroInsightsModal: React.FC<MacroInsightsModalProps> = ({
  isOpen,
  onClose,
  onSelectEventDetail,
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'theses' | 'scorecard'>('comparison');
  const [selectedEmpireId, setSelectedEmpireId] = useState<string>(MACRO_INSIGHTS_DATA[0].id);
  const [regionFilter, setRegionFilter] = useState<string>('all');

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEmpires = MACRO_INSIGHTS_DATA.filter((item) => {
    if (regionFilter === 'all') return true;
    return item.region === regionFilter;
  });

  const selectedEmpire =
    MACRO_INSIGHTS_DATA.find((e) => e.id === selectedEmpireId) || MACRO_INSIGHTS_DATA[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F5] border border-stone-300 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-stone-200 flex items-start justify-between bg-white shrink-0">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest font-mono text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded font-bold">
                Macro History Synthesis
              </span>
              <span className="text-xs text-stone-400 font-mono">기원전 5세기 — 현대</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-editorial font-bold text-stone-900 leading-tight">
              거시사 비교 통찰 (Macro History Insights)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-3xl leading-relaxed">
              세계사적 대제국들의 발흥과 멸망의 결정적 원인을 분석하고, 동시대 한반도 왕조(고조선·삼국·고려·조선·대한민국)의 흥망성쇠와 비교·교차 검증한 종합 통찰 보고서입니다.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-800 text-lg w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors shrink-0 cursor-pointer"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-stone-200 bg-stone-50/80 text-xs shrink-0 overflow-x-auto custom-scrollbar">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'comparison'
                ? 'bg-stone-900 text-stone-50 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <span>🏛️</span>
            <span>제국별 흥망원인 & 한반도 교훈</span>
          </button>
          <button
            onClick={() => setActiveTab('theses')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'theses'
                ? 'bg-stone-900 text-stone-50 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <span>📜</span>
            <span>거시사 3대 흥망 절대법칙</span>
          </button>
          <button
            onClick={() => setActiveTab('scorecard')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'scorecard'
                ? 'bg-stone-900 text-stone-50 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
          >
            <span>📊</span>
            <span>제도 안정성 스코어보드</span>
          </button>
        </div>

        {/* Modal Body: Scrollable Content Area */}
        <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          {/* TAB 1: EMPIRE BY EMPIRE COMPARISON & KOREAN LESSON */}
          {activeTab === 'comparison' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Empire Selector List */}
              <div className="lg:col-span-4 space-y-3">
                {/* Region Filter for Selector */}
                <div className="flex flex-wrap gap-1 text-[11px]">
                  {[
                    { id: 'all', name: '전체' },
                    { id: 'europe', name: '유럽' },
                    { id: 'islam', name: '중동' },
                    { id: 'russia', name: '러시아' },
                    { id: 'china_taiwan', name: '중화권' },
                    { id: 'korea', name: '한반도' },
                  ].map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRegionFilter(r.id)}
                      className={`px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                        regionFilter === r.id
                          ? 'bg-stone-800 text-white border-stone-800 font-bold'
                          : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {r.name}
                    </button>
                  ))}
                </div>

                <div className="space-y-1.5 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
                  {filteredEmpires.map((emp) => {
                    const isSelected = selectedEmpireId === emp.id;
                    return (
                      <div
                        key={emp.id}
                        onClick={() => setSelectedEmpireId(emp.id)}
                        className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? 'bg-white border-amber-800 ring-2 ring-amber-800/10 shadow-xs'
                            : 'bg-white/60 hover:bg-white border-stone-200 text-stone-700'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] mb-1">
                          <span
                            className={`font-mono ${
                              isSelected ? 'text-amber-900 font-bold' : 'text-stone-400'
                            }`}
                          >
                            {emp.lifespan}
                          </span>
                          {emp.region === 'korea' && (
                            <span className="text-[10px] bg-red-100 text-red-900 px-1 rounded font-bold">
                              KOREA
                            </span>
                          )}
                        </div>
                        <h4
                          className={`text-xs sm:text-sm font-bold font-editorial ${
                            isSelected ? 'text-stone-900' : 'text-stone-800'
                          }`}
                        >
                          {emp.empireName}
                        </h4>
                        <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                          {emp.synthesisThesis}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Detailed Case Study Card */}
              <div className="lg:col-span-8 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5">
                {/* Header of selected empire */}
                <div className="border-b border-stone-200 pb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-stone-400">
                      {selectedEmpire.lifespan}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-editorial text-stone-900">
                      {selectedEmpire.empireName}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <span className="text-stone-500 font-medium">거버넌스:</span>
                    <span className="font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {selectedEmpire.governanceScore}점
                    </span>
                  </div>
                </div>

                {/* Rise vs Fall Parallel Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  {/* Rise */}
                  <div className="p-3.5 bg-emerald-50/60 border border-emerald-200/80 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-bold font-editorial text-sm">
                      <span>🌱 발흥과 전성 원인 (Rise & Zenith)</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">
                      {selectedEmpire.riseCause}
                    </p>
                  </div>

                  {/* Fall */}
                  <div className="p-3.5 bg-red-50/60 border border-red-200/80 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-red-900 font-bold font-editorial text-sm">
                      <span>🍂 쇠퇴와 멸망 원인 (Decline & Fall)</span>
                    </div>
                    <p className="text-stone-700 leading-relaxed">
                      {selectedEmpire.fallCause}
                    </p>
                  </div>
                </div>

                {/* Institutional Legacy */}
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                  <div className="font-bold text-stone-800 flex items-center gap-1.5">
                    <span>📜 문명사적 제도 유산 (Institutional Legacy):</span>
                  </div>
                  <p className="text-stone-600 leading-relaxed">
                    {selectedEmpire.institutionalLegacy}
                  </p>
                </div>

                {/* Korean History Parallel & Lesson Box (Key requirement) */}
                <div className="p-4 bg-amber-50/80 border border-amber-200/90 rounded-xl text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
                      <span>🇰🇷 동시대 한반도 역사 동조화 & 흥망의 교훈</span>
                    </div>
                    <span className="font-mono text-[11px] text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                      {selectedEmpire.koreanParallelPeriod}
                    </span>
                  </div>
                  <p className="text-stone-800 leading-relaxed text-justify">
                    {selectedEmpire.koreanDynastyLesson}
                  </p>
                </div>

                {/* Synthesis Thesis Quote */}
                <blockquote className="border-l-3 border-amber-700 pl-4 py-1 italic font-editorial text-xs sm:text-sm text-stone-800 bg-stone-50/60 p-2.5 rounded-r">
                  💡 <strong>거시사 핵심 테제:</strong> “{selectedEmpire.synthesisThesis}”
                </blockquote>
              </div>
            </div>
          )}

          {/* TAB 2: 3 CORE MACRO LAWS & CROSS-COMPARISON */}
          {activeTab === 'theses' && (
            <div className="space-y-6">
              <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                2,400년 유라시아 대륙과 한반도 역사를 교차 분석했을 때 도출되는 <strong>체제 지속과 멸망의 3대 절대 법칙</strong>입니다. 동서양을 막론하고 이 원칙을 지킨 체제는 번영을 누렸고, 어긴 정권은 예외 없이 자멸했습니다.
              </div>

              <div className="space-y-4">
                {MACRO_COMPARATIVE_THEMES.map((theme, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-stone-900 text-white font-bold text-xs flex items-center justify-center font-mono">
                        0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold font-editorial text-stone-900">
                        {theme.themeTitle}
                      </h3>
                    </div>

                    <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs font-editorial font-medium text-amber-950">
                      {theme.keyMotto}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                        <strong className="text-stone-800 block">🏛️ 서양·유라시아 대륙 사례:</strong>
                        <p className="text-stone-600 leading-relaxed">
                          {theme.westernEurasianCase}
                        </p>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                        <strong className="text-amber-900 block">🇰🇷 동시대 한반도 조응 사례:</strong>
                        <p className="text-stone-600 leading-relaxed">
                          {theme.koreanParallelsCase}
                        </p>
                      </div>
                    </div>

                    <div className="pt-1 text-[11px] font-semibold text-stone-800 flex items-center gap-1.5">
                      <span className="text-emerald-700">✓ 거시 결론:</span>
                      <span>{theme.takeawayRule}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INSTITUTIONAL STABILITY SCORECARD */}
          {activeTab === 'scorecard' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 pb-1">
                <span>역사적 제국의 3대 핵심 생존 축(법제 거버넌스, 경제 재정력, 대외 주권력) 정밀 비교</span>
                <span className="text-amber-800 font-mono font-semibold">100점 만점 기준 사료 환산</span>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto custom-scrollbar">
                <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-stone-100/90 text-stone-900 border-b border-stone-200 font-semibold">
                      <th className="p-3.5 w-44">제국 및 문명권</th>
                      <th className="p-3.5 w-28 font-mono">존속 기간</th>
                      <th className="p-3.5 w-32">법제 거버넌스</th>
                      <th className="p-3.5 w-32">경제·재정 안정성</th>
                      <th className="p-3.5 w-32">대외 주권력</th>
                      <th className="p-3.5">체제 종합 통찰</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {MACRO_INSIGHTS_DATA.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-stone-50 transition-colors cursor-pointer"
                        onClick={() => {
                          setSelectedEmpireId(item.id);
                          setActiveTab('comparison');
                        }}
                      >
                        <td className="p-3.5 font-bold font-editorial text-stone-900">
                          {item.empireName}
                        </td>
                        <td className="p-3.5 font-mono text-[11px] text-stone-500">
                          {item.lifespan.split(' ')[0]}
                        </td>
                        <td className="p-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-stone-100 rounded-full overflow-hidden">
                              <div
                                style={{ width: `${item.governanceScore}%` }}
                                className="h-full bg-amber-700 rounded-full"
                              />
                            </div>
                            <span className="font-mono font-bold text-stone-800">
                              {item.governanceScore}
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-stone-100 rounded-full overflow-hidden">
                              <div
                                style={{ width: `${item.economicStabilityScore}%` }}
                                className={`h-full rounded-full ${
                                  item.economicStabilityScore < 60 ? 'bg-red-600' : 'bg-emerald-700'
                                }`}
                              />
                            </div>
                            <span className="font-mono font-bold text-stone-800">
                              {item.economicStabilityScore}
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-stone-100 rounded-full overflow-hidden">
                              <div
                                style={{ width: `${item.externalSovereigntyScore}%` }}
                                className="h-full bg-indigo-700 rounded-full"
                              />
                            </div>
                            <span className="font-mono font-bold text-stone-800">
                              {item.externalSovereigntyScore}
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5 text-stone-600 text-[11px] leading-relaxed">
                          {item.synthesisThesis}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-white flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs">
          <span className="text-stone-500 text-[11px]">
            ※ 사료 근거: 로마 시민법 대전, 신라 율령, 조선 경국대전, 오스만 탄지마트 칙령, 소련 해체 문서, 대만 3단계 토지개혁령
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-stone-50 rounded-lg hover:bg-stone-800 transition-colors font-medium cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
