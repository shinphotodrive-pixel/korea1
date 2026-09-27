import React, { useState } from 'react';
import { RADAR_CHART_DATA } from '../historyData';

export const RadarComparisonChart: React.FC = () => {
  const [selectedEmpire, setSelectedEmpire] = useState<'byzantine' | 'holyRoman' | 'ottoman' | 'joseon'>('byzantine');

  // Radar geometry configuration
  const size = 320;
  const center = size / 2;
  const radius = 110;
  const numAxes = RADAR_CHART_DATA.length;
  const angleStep = (Math.PI * 2) / numAxes;

  // Calculate coordinates on radar
  const getCoordinates = (index: number, value: number) => {
    const angle = index * angleStep - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const getPointsString = (empireKey: 'byzantine' | 'holyRoman' | 'ottoman' | 'joseon') => {
    return RADAR_CHART_DATA.map((d, i) => {
      const { x, y } = getCoordinates(i, d[empireKey]);
      return `${x},${y}`;
    }).join(' ');
  };

  const empireConfig = {
    byzantine: {
      name: '동로마 (비잔티움 제국)',
      color: '#b45309', // amber-700
      fill: 'rgba(180, 83, 9, 0.25)',
      desc: '시민법 대전과 둔전병 군관구(테마제)로 1천 년을 버텨낸 중앙집권 법치 제국',
    },
    holyRoman: {
      name: '신성로마 제국',
      color: '#1e3a8a', // blue-900
      fill: 'rgba(30, 58, 138, 0.2)',
      desc: '1356년 금인칙서로 7선제후 자치를 승인했으나 300여 영방국가로 영구 분권화',
    },
    ottoman: {
      name: '오스만 제국',
      color: '#047857', // emerald-700
      fill: 'rgba(4, 120, 87, 0.25)',
      desc: '비무슬림 종교 공동체(밀레트) 자치와 지즈야 징수로 600년을 통치한 다민족 제국',
    },
    joseon: {
      name: '조선 왕조 (한반도)',
      color: '#991b1b', // red-800
      fill: 'rgba(153, 27, 27, 0.22)',
      desc: '경국대전 성문화와 대동법, 과거 관료제 및 조공·사대교린으로 500년 안정을 유지한 유교 국가',
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Chart Canvas Area */}
      <div className="relative w-[320px] h-[320px] shrink-0">
        <svg width={size} height={size} className="overflow-visible">
          {/* Concentric Polygons */}
          {[20, 40, 60, 80, 100].map((level) => {
            const polygonPoints = RADAR_CHART_DATA.map((_, i) => {
              const { x, y } = getCoordinates(i, level);
              return `${x},${y}`;
            }).join(' ');
            return (
              <polygon
                key={level}
                points={polygonPoints}
                fill="none"
                stroke="#e7e5e4"
                strokeWidth={1}
                strokeDasharray={level === 100 ? 'none' : '3 3'}
              />
            );
          })}

          {/* Radial Axis Lines & Labels */}
          {RADAR_CHART_DATA.map((d, i) => {
            const { x, y } = getCoordinates(i, 100);
            const labelCoord = getCoordinates(i, 122);
            return (
              <g key={d.axis}>
                <line x1={center} y1={center} x2={x} y2={y} stroke="#d6d3d1" strokeWidth={1} />
                <text
                  x={labelCoord.x}
                  y={labelCoord.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[11px] font-medium fill-stone-700 font-sans"
                >
                  {d.axis}
                </text>
              </g>
            );
          })}

          {/* Baseline reference (All comparative faint polygons) */}
          {(['byzantine', 'holyRoman', 'ottoman', 'joseon'] as const).map((key) => {
            if (key === selectedEmpire) return null;
            return (
              <polygon
                key={key}
                points={getPointsString(key)}
                fill="none"
                stroke={empireConfig[key].color}
                strokeWidth={1.2}
                strokeOpacity={0.35}
              />
            );
          })}

          {/* Active Highlighted Empire Polygon */}
          <polygon
            points={getPointsString(selectedEmpire)}
            fill={empireConfig[selectedEmpire].fill}
            stroke={empireConfig[selectedEmpire].color}
            strokeWidth={2.5}
            className="transition-all duration-300"
          />

          {/* Points on Active Polygon */}
          {RADAR_CHART_DATA.map((d, i) => {
            const { x, y } = getCoordinates(i, d[selectedEmpire]);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r={4}
                fill={empireConfig[selectedEmpire].color}
                stroke="#ffffff"
                strokeWidth={1.5}
              />
            );
          })}
        </svg>
      </div>

      {/* Controller & Curatorial Insights */}
      <div className="flex-1 space-y-4 text-xs">
        <div>
          <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">제국 비교 선택</span>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {(['byzantine', 'holyRoman', 'ottoman', 'joseon'] as const).map((key) => {
              const active = selectedEmpire === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedEmpire(key)}
                  className={`text-left px-3 py-2 rounded border transition text-xs ${
                    active
                      ? 'border-stone-800 bg-stone-900 text-stone-50 font-semibold shadow-xs'
                      : 'border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: empireConfig[key].color }}
                    />
                    <span className="truncate">{empireConfig[key].name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Empire Detailed Metric Bar */}
        <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
          <div className="font-semibold text-stone-900 text-sm">
            {empireConfig[selectedEmpire].name} 평가 지표
          </div>
          <p className="text-stone-600 leading-relaxed text-xs">
            {empireConfig[selectedEmpire].desc}
          </p>

          <div className="grid grid-cols-5 gap-1.5 pt-2 border-t border-stone-200 text-center">
            {RADAR_CHART_DATA.map((d) => (
              <div key={d.axis} className="bg-white p-1.5 rounded border border-stone-100">
                <div className="text-[10px] text-stone-500 truncate">{d.axis}</div>
                <div className="text-xs font-bold text-stone-900 font-mono tabular-nums mt-0.5">
                  {d[selectedEmpire]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[11px] text-stone-500 leading-relaxed">
          ※ 5대 거시사 평가 척도(100점 만점): 각 문명의 중앙 법제화 정도, 지방 자치 유연성, 조세 수취 안전성, 영토 주권 명확성, 다민족 포용성을 비교 사료에 근거해 산출했습니다.
        </div>
      </div>
    </div>
  );
};
