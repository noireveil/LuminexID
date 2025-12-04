import Navbar from '@/components/layout/Navbar';
import TicketList from '@/features/tickets/TicketList';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-stone-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-b-2 border-zinc-900 pb-6 mb-8 flex justify-between items-end">
            <h1 className="text-3xl font-black uppercase tracking-tighter">My Assets</h1>
            <span className="font-mono text-xs bg-zinc-900 text-white px-2 py-1">SYNCED</span>
          </div>
          <TicketList />
        </div>
      </main>
    </>
  );
}