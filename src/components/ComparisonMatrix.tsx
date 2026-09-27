import React, { useState } from 'react';
import { COMPARISON_MATRIX_DATA } from '../historyData';

interface ComparisonMatrixProps {
  onSelectEvent: (eventId: string) => void;
  searchQuery: string;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  onSelectEvent,
  searchQuery,
}) => {
  const [activeEra, setActiveEra] = useState<'all' | 'ancient' | 'medieval' | 'earlymodern' | 'modern'>('all');

  const filteredRows = COMPARISON_MATRIX_DATA.filter((row) => {
    // Era filter
    if (activeEra !== 'all' && row.eraCategory !== activeEra) return false;

    // Search query filter across all fields
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const content = [
      row.period,
      row.westernEurope.event,
      row.westernEurope.institution,
      row.islamRussia.event,
      row.islamRussia.institution,
      row.eastAsiaChina.event,
      row.eastAsiaChina.institution,
      row.koreaPeninsula.period,
      row.koreaPeninsula.event,
      row.koreaPeninsula.synchronicityLesson,
    ]
      .join(' ')
      .toLowerCase();

    return content.includes(query);
  });

  return (
    <div className="space-y-4">
      {/* Era Tabs & Information Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2 border-b border-stone-200">
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
          {(
            [
              { key: 'all', label: '전체 시대' },
              { key: 'ancient', label: '고대·삼국' },
              { key: 'medieval', label: '중세·고려' },
              { key: 'earlymodern', label: '근세·조선' },
              { key: 'modern', label: '근현대' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveEra(tab.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeEra === tab.key
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-xs text-stone-500">
          표의 서양·동양 사건을 클릭하면 심층 사료 모달이 열립니다.
        </div>
      </div>

      {/* Matrix Table */}
      <div className="w-full overflow-x-auto custom-scrollbar border border-stone-200 rounded-xl bg-white shadow-xs">
        <table className="w-full text-left text-xs border-collapse min-w-[840px]">
          <thead>
            <tr className="bg-stone-100/90 text-stone-900 border-b border-stone-200 font-semibold">
              <th className="py-3 px-4 w-32 shrink-0">시기 / 연대</th>
              <th className="py-3 px-4 w-56">서양 & 유럽 체제</th>
              <th className="py-3 px-4 w-56">중동 이슬람 & 러시아</th>
              <th className="py-3 px-4 w-52">중화권 & 대만</th>
              <th className="py-3 px-4 bg-amber-50/70 text-stone-900 border-l border-stone-200">
                동시대 한반도 거시사 & 동조화 교훈
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-stone-400">
                  일치하는 역사적 사건이 없습니다. 검색어를 변경해보세요.
                </td>
              </tr>
            ) : (
              filteredRows.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-stone-50/80 transition-colors group"
                >
                  {/* Period */}
                  <td className="py-3.5 px-4 font-mono font-bold text-stone-800 align-top">
                    {row.period}
                  </td>

                  {/* Western Europe */}
                  <td className="py-3.5 px-4 align-top space-y-1">
                    <button
                      onClick={() => onSelectEvent(row.westernEurope.modalId)}
                      className="text-left font-semibold text-stone-900 hover:text-amber-800 transition-colors group-hover:underline block"
                    >
                      {row.westernEurope.event}
                    </button>
                    <div className="text-[11px] text-stone-500">
                      {row.westernEurope.institution}
                    </div>
                  </td>

                  {/* Islam & Russia */}
                  <td className="py-3.5 px-4 align-top space-y-1">
                    <button
                      onClick={() => onSelectEvent(row.islamRussia.modalId)}
                      className="text-left font-semibold text-stone-900 hover:text-emerald-800 transition-colors group-hover:underline block"
                    >
                      {row.islamRussia.event}
                    </button>
                    <div className="text-[11px] text-stone-500">
                      {row.islamRussia.institution}
                    </div>
                  </td>

                  {/* East Asia / China / Taiwan */}
                  <td className="py-3.5 px-4 align-top space-y-1">
                    <button
                      onClick={() => onSelectEvent(row.eastAsiaChina.modalId)}
                      className="text-left font-semibold text-stone-900 hover:text-blue-900 transition-colors group-hover:underline block"
                    >
                      {row.eastAsiaChina.event}
                    </button>
                    <div className="text-[11px] text-stone-500">
                      {row.eastAsiaChina.institution}
                    </div>
                  </td>

                  {/* Korea Peninsula */}
                  <td className="py-3.5 px-4 align-top bg-amber-50/40 border-l border-stone-200 space-y-1">
                    <div className="font-bold text-amber-950 flex items-center gap-1.5">
                      <span className="text-[10px] bg-amber-200/60 px-1.5 py-0.5 rounded text-amber-900">
                        {row.koreaPeninsula.period}
                      </span>
                      <span>{row.koreaPeninsula.event}</span>
                    </div>
                    <div className="text-[11px] text-stone-700 leading-relaxed">
                      💡 {row.koreaPeninsula.synchronicityLesson}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
