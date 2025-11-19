'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Event } from '@/types';
import EventCard from '@/components/event/EventCard';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get('/events');
        setEvents(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch events", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero */}
      <header className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Discover Extraordinary Events
        </h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          Secure, fast, and reliable ticketing platform powered by LuminexID technology.
        </p>
      </header>

      {/* List */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
          Upcoming Events
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-slate-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-lg">No events found.</p>
            <p className="text-sm text-slate-400 mt-2">Please seed the database via Backend/pgAdmin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
