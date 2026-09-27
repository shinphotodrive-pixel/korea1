import React, { useEffect } from 'react';
import { HistoricalEvent } from '../types';

interface DetailModalProps {
  event: HistoricalEvent | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ event, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FBF9F5] border border-stone-300 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 text-lg w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-200 transition-colors"
          aria-label="닫기"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-stone-200 pb-4">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
            <span>{event.timeframe}</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase tracking-wider">
              {event.era === 'ancient'
                ? '고대사'
                : event.era === 'medieval'
                ? '중세사'
                : event.era === 'earlymodern'
                ? '근세사'
                : '근현대사'}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-editorial font-bold text-stone-900 leading-tight">
            {event.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            {event.subtitle}
          </p>
        </div>

        {/* Core Summary */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed">
          {event.summary}
        </div>

        {/* Detailed Points */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
            주요 제도 및 사건 세부 사료
          </h4>
          <div className="space-y-2 text-xs sm:text-sm text-stone-800 leading-relaxed">
            {event.detailedText.map((paragraph, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-amber-800 font-bold shrink-0 mt-0.5">•</span>
                <span>{paragraph}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Korean Peninsula Parallels (Highlight Section) */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-amber-900">
              🇰🇷 동시대 한반도 역사 동조화 및 조응 분석
            </span>
            <span className="text-amber-700 font-mono text-[11px]">
              {event.koreanParallels.period}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
            {event.koreanParallels.description}
          </p>
          <div className="pt-2 border-t border-amber-200/60 text-xs text-amber-950 font-medium">
            <strong>거시사적 인과 고리:</strong> {event.koreanParallels.causalLink}
          </div>
        </div>

        {/* Institutional 3-Pillar Insights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-white border border-stone-200 rounded-lg">
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              통치 거버넌스
            </div>
            <div className="text-stone-800 mt-1">
              {event.institutionalInsights.governance}
            </div>
          </div>
          <div className="p-3 bg-white border border-stone-200 rounded-lg">
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              조세·재정 정책
            </div>
            <div className="text-stone-800 mt-1">
              {event.institutionalInsights.fiscalPolicy}
            </div>
          </div>
          <div className="p-3 bg-white border border-stone-200 rounded-lg">
            <div className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
              군사 및 외교
            </div>
            <div className="text-stone-800 mt-1">
              {event.institutionalInsights.militaryDiplomacy}
            </div>
          </div>
        </div>

        {/* Key Quote */}
        {event.keyQuote && (
          <blockquote className="border-l-2 border-stone-400 pl-4 py-1 italic font-serif text-xs sm:text-sm text-stone-600">
            {event.keyQuote}
          </blockquote>
        )}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
          <div className="flex flex-wrap gap-1 text-stone-400">
            {event.tags.map((t, idx) => (
              <span key={idx}>
                #{t}
                {idx < event.tags.length - 1 && ' '}
              </span>
            ))}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-stone-50 rounded-lg hover:bg-stone-800 transition-colors font-medium cursor-pointer"
          >
            창 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
