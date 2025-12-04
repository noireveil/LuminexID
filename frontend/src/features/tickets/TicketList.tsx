'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { TicketCard } from './TicketCard';
import { Loader2, AlertCircle } from 'lucide-react';
import { Ticket } from '@/types';

const MOCK_TICKETS: Ticket[] = [
  {
    id: "MOCK-8821",
    eventName: "Neon Cyber Party (Mock)",
    status: "ACTIVE",
    date: "2024-12-31T20:00:00",
    location: "Jakarta Convention Center",
    qrSignaturePayload: "valid_signature_mock_123"
  },
  {
    id: "MOCK-9942",
    eventName: "Tech Developer Summit",
    status: "USED",
    date: "2024-10-15T09:00:00",
    location: "ICE BSD",
    qrSignaturePayload: "used_signature_mock_456"
  }
];

export default function TicketList() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(false);

  useEffect(() => {
    api.get('/tickets/my-tickets')
      .then((res) => setTickets(res.data))
      .catch(() => {
        console.warn("Backend endpoint missing. Switching to Mock Data.");
        setTickets(MOCK_TICKETS);
        setUsingMock(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="flex justify-center py-20">
      <Loader2 className="animate-spin w-8 h-8 text-zinc-400" />
    </div>
  );

  return (
    <div className="space-y-6">
      {usingMock && (
        <div className="bg-yellow-50 border border-yellow-200 p-3 flex items-center gap-2 text-yellow-800 text-xs font-mono">
          <AlertCircle size={14} />
          <span>RUNNING IN SIMULATION MODE (BACKEND NOT CONNECTED)</span>
        </div>
      )}
      
      {tickets.length === 0 ? (
        <div className="text-center py-20 font-mono text-zinc-400 uppercase border-2 border-dashed border-zinc-200">
          No Active Assets Found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} data={ticket} />
          ))}
        </div>
      )}
    </div>
  );
}