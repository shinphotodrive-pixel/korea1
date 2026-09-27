import React, { useState } from 'react';
import { SOVIET_OIL_DATA } from '../historyData';

export const SovietOilChart: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // SVG Chart Dimensions
  const width = 640;
  const height = 240;
  const padding = { top: 20, right: 40, bottom: 35, left: 45 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;

  // Scales
  const minYear = 1970;
  const maxYear = 1991;
  const maxOil = 40; // $40/barrel
  const maxHealth = 100; // 100 points

  const getX = (year: number) => {
    return padding.left + ((year - minYear) / (maxYear - minYear)) * innerW;
  };

  const getYOil = (price: number) => {
    return padding.top + innerH - (price / maxOil) * innerH;
  };

  const getYHealth = (score: number) => {
    return padding.top + innerH - (score / maxHealth) * innerH;
  };

  // Build SVG Path strings
  const oilPath = SOVIET_OIL_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYOil(d.oilPriceUSD)}`).join(' ');
  const healthPath = SOVIET_OIL_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(d.year)} ${getYHealth(d.sovietFiscalHealthIndex)}`).join(' ');

  const activeData = hoveredIdx !== null ? SOVIET_OIL_DATA[hoveredIdx] : SOVIET_OIL_DATA[SOVIET_OIL_DATA.length - 1];

  return (
    <div className="space-y-4">
      {/* Chart Legend */}
      <div className="flex flex-wrap items-center justify-between text-xs pb-1 border-b border-stone-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-amber-700 rounded-sm inline-block" />
            <span className="text-stone-700 font-medium">국제 원유 가격 ($/배럴) [좌측 축]</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-stone-800 border-dashed border-t-2 border-stone-800 inline-block" />
            <span className="text-stone-700 font-medium">소련 재정 안정 지수 (100점) [우측 축]</span>
          </div>
        </div>
        <span className="text-stone-500 text-[11px]">포인트를 마우스로 오버해 연도별 사건 확인</span>
      </div>

      {/* Responsive SVG Container */}
      <div className="w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[580px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none">
            {/* Horizontal Grid lines */}
            {[0, 25, 50, 75, 100].map((val) => {
              const y = getYHealth(val);
              return (
                <g key={val}>
                  <line
                    x1={padding.left}
                    y1={y}
                    x2={width - padding.right}
                    y2={y}
                    stroke="#f5f5f4"
                    strokeWidth={1}
                  />
                  <text
                    x={padding.left - 8}
                    y={y + 3}
                    textAnchor="end"
                    className="text-[10px] fill-stone-400 font-mono tabular-nums"
                  >
                    ${((val / 100) * maxOil).toFixed(0)}
                  </text>
                  <text
                    x={width - padding.right + 8}
                    y={y + 3}
                    textAnchor="start"
                    className="text-[10px] fill-stone-400 font-mono tabular-nums"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Vertical Year Guidelines */}
            {SOVIET_OIL_DATA.map((d) => {
              const x = getX(d.year);
              return (
                <g key={d.year}>
                  <line
                    x1={x}
                    y1={padding.top}
                    x2={x}
                    y2={height - padding.bottom}
                    stroke="#fafaf9"
                    strokeWidth={1}
                  />
                  <text
                    x={x}
                    y={height - padding.bottom + 16}
                    textAnchor="middle"
                    className="text-[10px] fill-stone-500 font-mono tabular-nums"
                  >
                    {d.year}
                  </text>
                </g>
              );
            })}

            {/* Shaded Area for 1986 Oil Crash */}
            <rect
              x={getX(1985)}
              y={padding.top}
              width={getX(1987) - getX(1985)}
              height={innerH}
              fill="#fee2e2"
              fillOpacity={0.4}
            />
            <text
              x={(getX(1985) + getX(1987)) / 2}
              y={padding.top + 14}
              textAnchor="middle"
              className="text-[9px] font-bold fill-red-800"
            >
              86년 사우디 증산 폭락
            </text>

            {/* Lines */}
            <path d={oilPath} fill="none" stroke="#b45309" strokeWidth={2.5} />
            <path
              d={healthPath}
              fill="none"
              stroke="#292524"
              strokeWidth={2}
              strokeDasharray="4 3"
            />

            {/* Interactive Data Nodes */}
            {SOVIET_OIL_DATA.map((d, i) => {
              const x = getX(d.year);
              const yOil = getYOil(d.oilPriceUSD);
              const yHealth = getYHealth(d.sovietFiscalHealthIndex);
              const isHovered = hoveredIdx === i;

              return (
                <g
                  key={d.year}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Invisible hit box */}
                  <rect
                    x={x - 12}
                    y={padding.top}
                    width={24}
                    height={innerH}
                    fill="transparent"
                  />

                  {/* Oil Node */}
                  <circle
                    cx={x}
                    cy={yOil}
                    r={isHovered ? 6 : 4}
                    fill="#b45309"
                    stroke="#ffffff"
                    strokeWidth={1.5}
                    className="transition-all"
                  />

                  {/* Health Node */}
                  <circle
                    cx={x}
                    cy={yHealth}
                    r={isHovered ? 6 : 4}
                    fill="#292524"
                    stroke="#ffffff"
                    strokeWidth={1.5}
                    className="transition-all"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Year Inspector Box */}
      <div className="p-3.5 bg-stone-50 border border-stone-200 rounded-lg text-xs space-y-1.5 transition-all">
        <div className="flex items-center justify-between">
          <div className="font-bold text-stone-900 text-sm">
            {activeData.year}년 지표 정밀 분석
          </div>
          <div className="flex gap-3 text-stone-600 font-mono tabular-nums">
            <span>
              원유가: <strong className="text-amber-800">${activeData.oilPriceUSD.toFixed(1)}/배럴</strong>
            </span>
            <span>
              소련 재정 지수: <strong className="text-stone-900">{activeData.sovietFiscalHealthIndex}/100</strong>
            </span>
          </div>
        </div>

        <div className="text-stone-800">
          <strong>소련 제국 동향:</strong> {activeData.sovietEvent}
        </div>
        <div className="text-stone-600">
          <strong>동시대 한반도:</strong> {activeData.koreanContext}
        </div>
      </div>
    </div>
  );
};
