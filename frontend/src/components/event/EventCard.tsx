import { Event } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition group cursor-pointer">
      <div className="h-40 bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 transition">
        <span className="text-4xl">🎫</span>
      </div>
      <div className="p-5">
        <div className="text-xs font-semibold text-indigo-600 mb-2 uppercase tracking-wider">
          {new Date(event.date).toLocaleDateString('id-ID', { dateStyle: 'full' })}
        </div>
        <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-1">
          {event.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4 flex items-center gap-1">
          📍 {event.location}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
          <span className="font-bold text-slate-900">
            {formatCurrency(event.price)}
          </span>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
            {event.availableQuota} left
          </span>
        </div>
      </div>
    </div>
  );
}
