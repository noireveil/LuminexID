'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

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
    <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="font-bold text-xl text-indigo-600 flex items-center gap-2">
        LuminexID
      </Link>
      <div className="flex gap-4">
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="text-sm font-medium text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        ) : (
          <Link 
            href="/login" 
            className="px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
