'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import EventList from '@/features/events/EventList';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Ticket, LogIn, QrCode } from 'lucide-react';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Cek status login di client-side
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  return (
    <>
      <Navbar />
      
      <header className="bg-zinc-900 text-stone-50 border-b-4 border-red-700 pattern-grid">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            Luminex<span className="text-red-600">ID</span>
            <span className="block text-2xl md:text-3xl font-mono font-normal text-zinc-400 mt-4 tracking-normal">
              Secure Event Access Protocol
            </span>
          </h1>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <Button className="w-full md:w-auto h-14 text-lg px-8 shadow-[4px_4px_0px_0px_#b91c1c]">
                    <Ticket className="mr-2 w-6 h-6" />
                    MY TICKET QR
                  </Button>
                </Link>
                <Link href="/scanner">
                  <Button variant="outline" className="w-full md:w-auto h-14 text-lg px-8 bg-zinc-100 border-zinc-900 text-zinc-900 hover:bg-white">
                    <QrCode className="mr-2 w-6 h-6" />
                    OPEN SCANNER
                  </Button>
                </Link>
              </>
            ) : (
              <Link href="/login">
                <Button className="w-full md:w-auto h-14 text-lg px-10 shadow-[6px_6px_0px_0px_#fff] border-white">
                  <LogIn className="mr-2 w-6 h-6" />
                  ACCESS PORTAL
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 flex-1 bg-zinc-200"></div>
          <h2 className="text-xl font-bold uppercase tracking-widest text-zinc-500">
            Active Events
          </h2>
          <div className="h-1 flex-1 bg-zinc-200"></div>
        </div>
        <EventList />
      </main>
    </>
  );
}