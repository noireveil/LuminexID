'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { formatCurrency } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Loader2, MapPin, Calendar } from 'lucide-react';
import { Event } from '@/types';

export default function EventList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/events')
      .then((res) => {
        // Backend return { data: [], total: 0, page: 1 }
        setEvents(res.data.data || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-zinc-400"/></div>;

  if (events.length === 0) return (
    <div className="text-center py-16 border-2 border-dashed border-zinc-200 text-zinc-400 font-mono">
      NO EVENTS DETECTED
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="group hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer flex flex-col justify-between">
          <div>
            <div className="h-40 bg-zinc-100 group-hover:bg-zinc-800 flex items-center justify-center mb-4 border-2 border-zinc-200 group-hover:border-zinc-700">
                <span className="text-4xl">🎫</span>
            </div>
            <h3 className="font-bold text-lg mb-2 leading-tight">{event.name}</h3>
            <div className="space-y-2 text-sm opacity-70 font-mono">
                <div className="flex items-center gap-2">
                    <Calendar size={14}/>
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={14}/>
                    <span>{event.location}</span>
                </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center border-t-2 border-zinc-100 group-hover:border-zinc-800 pt-4 mt-4">
            <span className="font-black text-lg">{formatCurrency(event.price)}</span>
            <span className="text-xs bg-zinc-200 text-zinc-900 px-2 py-1 group-hover:bg-white font-bold">
              AVAILABLE
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}