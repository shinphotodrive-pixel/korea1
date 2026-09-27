import React, { useState, useMemo } from 'react';
import { EMPIRES_TIMELINE_DATA, TIMELINE_POINTS_DATA } from '../historyData';
import { EmpireLifespan, TimelineHistoricalPoint } from '../types';

interface LinearTimelineVisualizerProps {
  onSelectEvent: (eventId: string) => void;
  searchQuery?: string;
}

// Civilization and Region definition for global multi-toggle filter
interface RegionDefinition {
  id: string;
  name: string;
  badgeLabel: string;
  color: string;
  accent: string;
  defaultIncluded: boolean;
}

const CIVILIZATION_REGIONS: RegionDefinition[] = [
  { id: 'europe', name: '유럽·로마·EU', badgeLabel: '유럽', color: '#b45309', accent: '#fef3c7', defaultIncluded: true },
  { id: 'islam', name: '중동 이슬람·오스만', badgeLabel: '중동', color: '#047857', accent: '#d1fae5', defaultIncluded: true },
  { id: 'russia', name: '러시아 제정·소련', badgeLabel: '러시아', color: '#3f3f46', accent: '#f4f4f5', defaultIncluded: true },
  { id: 'china_taiwan', name: '중화 제국·대만', badgeLabel: '중화권', color: '#831843', accent: '#fce7f3', defaultIncluded: true },
  { id: 'korea', name: '한반도 (고조선~대한민국)', badgeLabel: '한반도', color: '#991b1b', accent: '#fee2e2', defaultIncluded: true },
];

export const LinearTimelineVisualizer: React.FC<LinearTimelineVisualizerProps> = ({
  onSelectEvent,
  searchQuery = '',
}) => {
  // Global civilization multi-toggle filter (Set of enabled region IDs)
  const [enabledRegions, setEnabledRegions] = useState<Set<string>>(
    () => new Set(CIVILIZATION_REGIONS.map((r) => r.id))
  );

  // Individual empire visibility toggle within active regions
  const [disabledEmpireIds, setDisabledEmpireIds] = useState<Set<string>>(new Set());

  // Additional filter states
  const [selectedSignificance, setSelectedSignificance] = useState<string>('all');
  const [activePointId, setActivePointId] = useState<string | null>(null);
  const [activeEmpireId, setActiveEmpireId] = useState<string | null>(null);
  const [timelineZoom, setTimelineZoom] = useState<'full' | 'ancient' | 'medieval' | 'modern'>('full');

  // Timeline time range configuration
  const timeRanges = {
    full: { start: -550, end: 2026, label: '전체 (BC 500 ~ 현대)' },
    ancient: { start: -550, end: 500, label: '고대기 (BC 500 ~ AD 500)' },
    medieval: { start: 450, end: 1500, label: '중세기 (AD 500 ~ 1500)' },
    modern: { start: 1450, end: 2026, label: '근현대 (AD 1500 ~ 현대)' },
  };

  const { start: minYear, end: maxYear } = timeRanges[timelineZoom];
  const totalYears = maxYear - minYear;

  // Region Toggle Handlers
  const toggleRegion = (regionId: string) => {
    setEnabledRegions((prev) => {
      const next = new Set(prev);
      if (next.has(regionId)) {
        // Prevent disabling all regions completely if only one is left
        if (next.size <= 1) return prev;
        next.delete(regionId);
      } else {
        next.add(regionId);
      }
      return next;
    });
  };

  const selectOnlyRegion = (regionId: string) => {
    setEnabledRegions(new Set([regionId]));
  };

  const enableAllRegions = () => {
    setEnabledRegions(new Set(CIVILIZATION_REGIONS.map((r) => r.id)));
    setDisabledEmpireIds(new Set());
  };

  const toggleEmpire = (empireId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDisabledEmpireIds((prev) => {
      const next = new Set(prev);
      if (next.has(empireId)) {
        next.delete(empireId);
      } else {
        next.add(empireId);
      }
      return next;
    });
  };

  // Convert year to percentage for linear position
  const getLinearPercent = (year: number) => {
    const clampedYear = Math.max(minYear, Math.min(maxYear, year));
    return ((clampedYear - minYear) / totalYears) * 100;
  };

  // Major historical ticks to render along the axis
  const tickYears = useMemo(() => {
    if (timelineZoom === 'full') {
      return [-500, -300, -100, 100, 300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2000];
    } else if (timelineZoom === 'ancient') {
      return [-500, -400, -300, -200, -100, 0, 100, 200, 300, 400, 500];
    } else if (timelineZoom === 'medieval') {
      return [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500];
    } else {
      return [1500, 1600, 1700, 1800, 1900, 1950, 2000];
    }
  }, [timelineZoom]);

  // Filter empires based on region set and individual empire toggles
  const filteredEmpires = useMemo(() => {
    return EMPIRES_TIMELINE_DATA.filter((emp) => {
      if (!enabledRegions.has(emp.region)) return false;
      if (disabledEmpireIds.has(emp.id)) return false;
      // Overlap check with current zoom
      return emp.endYear >= minYear && emp.startYear <= maxYear;
    });
  }, [enabledRegions, disabledEmpireIds, minYear, maxYear]);

  // Filter timeline milestone points based on region set and criteria
  const filteredPoints = useMemo(() => {
    return TIMELINE_POINTS_DATA.filter((pt) => {
      if (!enabledRegions.has(pt.region)) return false;
      if (disabledEmpireIds.has(pt.empireId)) return false;
      if (selectedSignificance !== 'all' && pt.significance !== selectedSignificance) return false;
      if (pt.year < minYear || pt.year > maxYear) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const str = `${pt.title} ${pt.yearDisplay} ${pt.koreanConnection}`.toLowerCase();
        return str.includes(q);
      }
      return true;
    });
  }, [enabledRegions, disabledEmpireIds, selectedSignificance, minYear, maxYear, searchQuery]);

  // Helper for significance badge style
  const getSignificanceStyle = (sig: TimelineHistoricalPoint['significance']) => {
    switch (sig) {
      case 'rise':
        return { label: '창건·발흥', color: 'bg-emerald-600 text-white border-emerald-700', dot: '#059669' };
      case 'peak':
        return { label: '황금기·전성', color: 'bg-amber-600 text-white border-amber-700', dot: '#d97706' };
      case 'reform':
        return { label: '법제·개혁', color: 'bg-indigo-700 text-white border-indigo-800', dot: '#4338ca' };
      case 'crisis':
        return { label: '위기·전란', color: 'bg-orange-600 text-white border-orange-700', dot: '#ea580c' };
      case 'fall':
        return { label: '붕괴·멸망', color: 'bg-stone-900 text-white border-black', dot: '#1c1917' };
    }
  };

  const activePoint = TIMELINE_POINTS_DATA.find((p) => p.id === activePointId) || filteredPoints[0] || null;
  const activeEmpire = EMPIRES_TIMELINE_DATA.find((e) => e.id === activeEmpireId) || null;

  const allSelected = enabledRegions.size === CIVILIZATION_REGIONS.length && disabledEmpireIds.size === 0;

  return (
    <div className="space-y-5 bg-white p-5 sm:p-7 rounded-2xl border border-stone-200 shadow-xs">
      {/* 1. Header & Controller Strip */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-700 animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold font-editorial text-stone-900">
              유라시아 제국 흥망성쇠 단일 선형 연대기 (Linear Imperial Chronology)
            </h3>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            기원전 5세기부터 현대까지 문명권별 제국의 존속 수명 띠(Lifespan Bar)와 핵심 분기점 사건을 동일 시간선상에서 비교합니다.
          </p>
        </div>

        {/* Zoom & Range Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center p-1 bg-stone-100 rounded-lg text-xs">
            {(['full', 'ancient', 'medieval', 'modern'] as const).map((z) => (
              <button
                key={z}
                onClick={() => setTimelineZoom(z)}
                className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap font-medium cursor-pointer ${
                  timelineZoom === z
                    ? 'bg-white text-stone-900 shadow-xs font-bold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {timeRanges[z].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. GLOBAL CIVILIZATION / REGION MULTI-TOGGLE FILTER (De-clutter System) */}
      <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
              <span>🌐 문명권 표시 토글 (Civilization Filter)</span>
            </span>
            <span className="text-[11px] text-stone-500">
              {enabledRegions.size} / {CIVILIZATION_REGIONS.length} 개 권역 활성
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!allSelected && (
              <button
                onClick={enableAllRegions}
                className="text-[11px] font-semibold text-amber-800 hover:text-amber-950 underline cursor-pointer"
              >
                전체 초기화 (모든 문명 복원)
              </button>
            )}
          </div>
        </div>

        {/* Civilization Interactive Toggle Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {CIVILIZATION_REGIONS.map((region) => {
            const isEnabled = enabledRegions.has(region.id);
            const countEmpires = EMPIRES_TIMELINE_DATA.filter((e) => e.region === region.id).length;

            return (
              <div
                key={region.id}
                onClick={() => toggleRegion(region.id)}
                className={`group relative p-2.5 rounded-lg border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                  isEnabled
                    ? 'bg-white border-stone-300 shadow-xs ring-1 ring-stone-900/5'
                    : 'bg-stone-100/70 border-dashed border-stone-300 opacity-50 hover:opacity-75'
                }`}
              >
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 truncate">
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-transform ${isEnabled ? 'scale-100' : 'scale-75'}`}
                      style={{ backgroundColor: isEnabled ? region.color : '#a8a29e' }}
                    />
                    <span className={`text-xs font-bold truncate ${isEnabled ? 'text-stone-900' : 'text-stone-500 line-through'}`}>
                      {region.name}
                    </span>
                  </div>

                  {/* Toggle Checkbox Badge */}
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded transition-colors ${
                      isEnabled
                        ? 'bg-stone-900 text-stone-100 font-bold'
                        : 'bg-stone-200 text-stone-500'
                    }`}
                  >
                    {isEnabled ? 'ON' : 'OFF'}
                  </span>
                </div>

                {/* Subtext and Quick 'Only' Button */}
                <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-100 text-[10px]">
                  <span className="text-stone-400 font-mono">
                    {countEmpires}개 제국
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      selectOnlyRegion(region.id);
                    }}
                    className="text-stone-500 hover:text-amber-800 hover:font-bold transition-colors cursor-pointer"
                    title={`${region.name}만 단독 표시`}
                  >
                    [이것만 보기]
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Summary & Secondary Phase Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-stone-200 text-xs">
          <div className="text-[11px] text-stone-500">
            💡 문명 카드를 클릭해 켜고 끄거나, [이것만 보기]로 특정 제국권만 남겨 타임라인을 정리(De-clutter)할 수 있습니다.
          </div>

          {/* Significance Phase Filter */}
          <div className="flex flex-wrap items-center gap-1 text-xs">
            <span className="font-semibold text-stone-600 mr-1 text-[11px]">사건 유형:</span>
            {[
              { id: 'all', name: '전체' },
              { id: 'rise', name: '창건' },
              { id: 'peak', name: '전성' },
              { id: 'reform', name: '개혁' },
              { id: 'crisis', name: '전란' },
              { id: 'fall', name: '멸망' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSignificance(s.id)}
                className={`px-2 py-0.5 rounded text-[11px] border transition-colors cursor-pointer ${
                  selectedSignificance === s.id
                    ? 'bg-amber-800 text-white border-amber-900 font-semibold'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Linear Timeline Canvas Viewport */}
      <div className="relative border border-stone-200 rounded-xl bg-[#FCFAF7] p-4 sm:p-6 overflow-x-auto custom-scrollbar">
        <div className="min-w-[860px] relative pb-4">
          {/* Top Chronological Ruler */}
          <div className="relative h-9 border-b border-stone-300 mb-6">
            {tickYears.map((yr) => {
              const leftPct = getLinearPercent(yr);
              if (leftPct < 0 || leftPct > 100) return null;
              const yrLabel = yr < 0 ? `BC ${Math.abs(yr)}` : yr === 0 ? 'AD 1' : `${yr}`;

              return (
                <div
                  key={yr}
                  style={{ left: `${leftPct}%` }}
                  className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                >
                  <span className="text-[10px] font-mono font-medium text-stone-500">{yrLabel}</span>
                  <div className="w-px h-3 bg-stone-300 mt-1" />
                </div>
              );
            })}
          </div>

          {/* Empire Lifespan Span Bars */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-400 uppercase tracking-widest px-1">
              <span>활성 제국 수명 띠 ({filteredEmpires.length}개 표시 중)</span>
              <span>수명 바 클릭 시 상세 정보 고정</span>
            </div>

            {filteredEmpires.length === 0 ? (
              <div className="p-8 text-center text-xs text-stone-400 bg-white rounded-lg border border-dashed border-stone-300">
                선택된 조건에 부합하는 제국이 없습니다. 상단 문명 토글 필터에서 원하는 문명권을 켜주세요.
              </div>
            ) : (
              filteredEmpires.map((emp) => {
                const startPct = getLinearPercent(emp.startYear);
                const endPct = getLinearPercent(emp.endYear);
                const widthPct = Math.max(1.5, endPct - startPct);
                const isHovered = activeEmpireId === emp.id;

                return (
                  <div
                    key={emp.id}
                    className="relative group flex items-center"
                    onMouseEnter={() => setActiveEmpireId(emp.id)}
                    onMouseLeave={() => setActiveEmpireId(null)}
                  >
                    {/* Left Label with Individual Hide Action */}
                    <div className="w-48 shrink-0 text-xs font-medium text-stone-800 pr-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 truncate">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: emp.color }}
                        />
                        <span className="truncate" title={emp.name}>{emp.name}</span>
                      </div>
                      <button
                        onClick={(e) => toggleEmpire(emp.id, e)}
                        className="text-[10px] text-stone-300 hover:text-stone-700 opacity-0 group-hover:opacity-100 transition-opacity ml-1"
                        title="이 제국만 타임라인에서 숨기기"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Lifespan Track Area */}
                    <div className="flex-1 relative h-6 bg-stone-100/80 rounded-md overflow-hidden">
                      {/* Empire Lifespan Bar */}
                      <div
                        style={{
                          left: `${startPct}%`,
                          width: `${widthPct}%`,
                          backgroundColor: emp.color,
                        }}
                        className={`absolute top-0.5 bottom-0.5 rounded transition-all duration-200 cursor-pointer shadow-xs flex items-center px-2 ${
                          isHovered ? 'ring-2 ring-stone-900 ring-offset-1 z-10 brightness-110' : 'opacity-90'
                        }`}
                        onClick={() => setActiveEmpireId(emp.id)}
                      >
                        <span className="text-[10px] font-medium text-white truncate drop-shadow-xs hidden sm:inline">
                          {emp.startYear < 0 ? `BC ${Math.abs(emp.startYear)}` : emp.startYear} ~{' '}
                          {emp.endYear === 2026 ? '현재' : emp.endYear}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Central Horizontal Axis Line */}
          <div className="relative my-6 py-2">
            <div className="w-full h-1 bg-stone-300 rounded-full relative">
              {/* Tick marker pointers */}
              {tickYears.map((yr) => {
                const pct = getLinearPercent(yr);
                return (
                  <div
                    key={`dot-${yr}`}
                    style={{ left: `${pct}%` }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-stone-400"
                  />
                );
              })}
            </div>
          </div>

          {/* Milestone Historical Pinpoint Nodes on the Linear Timeline */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold text-stone-400 uppercase tracking-widest px-1">
              <span>핵심 역사적 분기점 노드 ({filteredPoints.length}개 사건)</span>
              <span>마우스 오버 및 클릭 시 상세 사료 오픈</span>
            </div>

            {/* Visual Node Pin Map */}
            <div className="relative h-20 w-full mt-2">
              {filteredPoints.length === 0 ? (
                <div className="text-center py-4 text-xs text-stone-400">
                  표시할 사건 핀이 없습니다.
                </div>
              ) : (
                filteredPoints.map((pt, index) => {
                  const leftPct = getLinearPercent(pt.year);
                  const isSelected = activePointId === pt.id;
                  const sigInfo = getSignificanceStyle(pt.significance);
                  // Stagger vertical pins to avoid overlapping
                  const topOffset = (index % 3) * 24;

                  return (
                    <div
                      key={pt.id}
                      style={{ left: `${leftPct}%`, top: `${topOffset}px` }}
                      className="absolute -translate-x-1/2 z-20 group"
                    >
                      <button
                        onClick={() => {
                          setActivePointId(pt.id);
                          if (pt.modalId) onSelectEvent(pt.modalId);
                        }}
                        onMouseEnter={() => setActivePointId(pt.id)}
                        className={`flex items-center gap-1 px-1.5 py-0.5 rounded-full border text-[10px] font-mono whitespace-nowrap transition-all duration-150 cursor-pointer shadow-xs ${
                          isSelected
                            ? 'scale-110 ring-2 ring-stone-900 bg-stone-900 text-white font-bold z-30'
                            : 'bg-white hover:bg-stone-50 border-stone-300 text-stone-800'
                        }`}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: sigInfo.dot }}
                        />
                        <span>{pt.yearDisplay}</span>
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Active Selection Focus Card (Dynamic Live Inspector) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2">
        {/* Active Point Detail */}
        {activePoint ? (
          <div className="lg:col-span-7 p-4 sm:p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                  {activePoint.yearDisplay} ({activePoint.year > 0 ? `${activePoint.year}년` : `기원전 ${Math.abs(activePoint.year)}년`})
                </span>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded border ${
                    getSignificanceStyle(activePoint.significance).color
                  }`}
                >
                  {getSignificanceStyle(activePoint.significance).label}
                </span>
              </div>

              {activePoint.modalId && (
                <button
                  onClick={() => onSelectEvent(activePoint.modalId!)}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 underline flex items-center gap-1 cursor-pointer"
                >
                  <span>심층 사료 모달 원문 열기</span>
                  <span>→</span>
                </button>
              )}
            </div>

            <h4 className="text-sm sm:text-base font-bold font-editorial text-stone-900">
              {activePoint.title}
            </h4>

            {/* Synchronicity with Korean History */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-lg text-xs space-y-1">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <span>🇰🇷 동시대 한반도 조응 상황:</span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                {activePoint.koreanConnection}
              </p>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-7 p-4 sm:p-5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-center text-xs text-stone-400">
            사건 핀을 선택하면 세부 사료와 한반도 조응 분석이 표시됩니다.
          </div>
        )}

        {/* Active Empire Lifespan Info */}
        <div className="lg:col-span-5 p-4 sm:p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
          {activeEmpire ? (
            <>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-editorial text-stone-900 flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: activeEmpire.color }}
                  />
                  {activeEmpire.name}
                </span>
                <span className="font-mono text-[11px] text-stone-500">
                  {activeEmpire.startYear < 0 ? `BC ${Math.abs(activeEmpire.startYear)}` : activeEmpire.startYear} ~{' '}
                  {activeEmpire.endYear === 2026 ? '현대' : `${activeEmpire.endYear}년`}
                </span>
              </div>
              <div className="text-xs text-stone-600 leading-relaxed">
                <strong>제국 개요:</strong> {activeEmpire.description}
              </div>
              <div className="text-[11px] text-stone-500">
                <strong>전성기:</strong> {activeEmpire.peakPeriod}
              </div>
              <div className="text-[11px] text-amber-900 font-medium">
                <strong>체제 분기점:</strong> {activeEmpire.turningPoint}
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center text-xs text-stone-400 py-4">
              <span>위 제국 띠(Longevity Bar)에 마우스를 올리면</span>
              <span>각 제국의 전성기 및 결정적 체제 분기점 사료가 표시됩니다.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
