'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, ScanLine, Ticket, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="bg-white border-b-2 border-zinc-900 px-6 h-20 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="font-black text-2xl text-zinc-900 tracking-tighter hover:opacity-70 transition-opacity flex items-center gap-1">
        LUMINEX<span className="text-red-700 text-3xl leading-none">.</span>
      </Link>
      
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <div className="hidden md:flex gap-1 mr-4">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-xs h-10">
                  <Ticket className="w-4 h-4 mr-2"/> DASHBOARD
                </Button>
              </Link>
              <Link href="/scanner">
                <Button variant="ghost" className="text-xs h-10">
                  <ScanLine className="w-4 h-4 mr-2"/> SCANNER
                </Button>
              </Link>
            </div>

            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="h-10 px-4 text-xs border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300"
            >
              <LogOut className="w-4 h-4 mr-2" /> EXIT
            </Button>
          </>
        ) : (
          <Link href="/login">
            <Button className="h-10 px-6 text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              LOGIN AGENT
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}