import QRCode from 'react-qr-code';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Ticket } from '@/types';

export const TicketCard = ({ data }: { data: Ticket }) => {
  const dateDisplay = data.date ? new Date(data.date).toLocaleDateString() : 'TBA';
  const locationDisplay = data.location || 'Venue TBA';
  const qrValue = data.qrSignaturePayload || `TICKET-${data.id}`;

  return (
    <Card className="p-0 overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] group">
      {/* Header */}
      <div className="px-6 py-3 border-b-2 border-zinc-900 bg-zinc-50 flex justify-between items-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
        <span className="font-mono text-xs">ID: {data.id.substring(0, 8)}</span>
        <Badge variant={data.status === 'ACTIVE' ? 'success' : 'neutral'}>
          {data.status}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-center mb-6 bg-stone-100 p-4 border-2 border-dashed border-zinc-300">
          <QRCode value={qrValue} size={120} fgColor="#18181b" />
        </div>

        <h3 className="text-xl font-black uppercase leading-tight mb-4 text-zinc-900">{data.eventName}</h3>
        
        <div className="space-y-2 text-sm font-mono text-zinc-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar size={14} /> <span>{dateDisplay}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> <span>{locationDisplay}</span>
          </div>
        </div>

        <Button variant="outline" className="w-full text-xs h-10">
          <Download size={14} className="mr-2" /> Download Ticket
        </Button>
      </div>
    </Card>
  );
};