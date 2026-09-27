import React, { useState } from 'react';
import { GOLD_YUAN_INFLATION_DATA } from '../historyData';

export const GoldYuanInflationChart: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(GOLD_YUAN_INFLATION_DATA.length - 1);

  // Log scale calculation for bar heights
  const maxMultiplier = 1124;
  const maxLog = Math.log10(maxMultiplier); // ~3.05

  const getBarHeightPercent = (val: number) => {
    if (val <= 1) return 4;
    const logVal = Math.log10(val);
    return Math.max(6, (logVal / maxLog) * 100);
  };

  const selectedData = GOLD_YUAN_INFLATION_DATA[selectedIdx];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs pb-1 border-b border-stone-200">
        <span className="font-semibold text-stone-800">
          금원권 물가 상승 배율 추이 (로그 스케일 지수)
        </span>
        <span className="text-red-700 font-mono font-bold">1년 만에 1,124배 폭등</span>
      </div>

      {/* Bar Chart Container */}
      <div className="h-48 flex items-end justify-between gap-2 pt-6 pb-2 px-1">
        {GOLD_YUAN_INFLATION_DATA.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          const heightPct = getBarHeightPercent(item.priceIndexMultiplier);

          return (
            <button
              key={item.month}
              onClick={() => setSelectedIdx(idx)}
              className="flex-1 flex flex-col items-center h-full justify-end group focus:outline-none"
            >
              {/* Value Label */}
              <span
                className={`text-[11px] font-mono tabular-nums mb-1 transition-all ${
                  isSelected ? 'font-bold text-red-700 scale-105' : 'text-stone-400 group-hover:text-stone-600'
                }`}
              >
                {item.priceIndexMultiplier === 1 ? '1배' : `${item.priceIndexMultiplier}배`}
              </span>

              {/* Bar */}
              <div
                style={{ height: `${heightPct}%` }}
                className={`w-full max-w-[42px] rounded-t transition-all duration-200 ${
                  isSelected
                    ? 'bg-red-700 shadow-md'
                    : 'bg-stone-300 group-hover:bg-stone-400'
                }`}
              />

              {/* X Axis Label */}
              <span
                className={`text-[10px] mt-2 tracking-tight transition-colors ${
                  isSelected ? 'font-bold text-stone-900' : 'text-stone-500'
                }`}
              >
                {item.month.replace('19', "'")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Month Detail Box */}
      <div className="p-3.5 bg-red-50/50 border border-red-200/80 rounded-lg text-xs space-y-1.5">
        <div className="flex items-center justify-between">
          <span className="font-bold text-stone-900 text-sm">
            {selectedData.month} 현황
          </span>
          <span className="font-mono font-bold text-red-800 bg-red-100/70 px-2 py-0.5 rounded">
            누적 물가: {selectedData.priceIndexMultiplier.toLocaleString()}배
          </span>
        </div>
        <p className="text-stone-800">
          <strong>조치 및 경과:</strong> {selectedData.note}
        </p>
        <p className="text-stone-600">
          <strong>사회적 파급:</strong> {selectedData.socioPoliticalImpact}
        </p>
      </div>

      <div className="text-[11px] text-stone-500 leading-relaxed">
        ※ 1948년 8월 법폐 개혁 당시 발행된 금원권은 준비금 부족과 군비 인쇄 남발로 인해 급속히 붕괴되었으며, 1949년 5월에는 1,000만 위안권 지폐조차 쌀 한 되를 사기 어려운 화폐 불능 상태에 도달했습니다.
      </div>
    </div>
  );
};
