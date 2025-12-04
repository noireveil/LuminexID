import Link from 'next/link';
import LoginForm from '@/features/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4 pattern-paper">
      <div className="w-full max-w-md bg-white border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-zinc-900 tracking-tighter uppercase mb-2">
            Luminex<span className="text-red-700">ID</span>
          </h1>
          <p className="text-zinc-500 font-mono text-sm">GATEKEEPER ACCESS</p>
        </div>

        <LoginForm />

        <div className="mt-8 text-center border-t border-zinc-100 pt-6">
          <Link href="/" className="text-xs font-mono text-zinc-400 hover:text-zinc-900 transition-colors">
            ← ABORT MISSION (BACK TO HOME)
          </Link>
        </div>
      </div>
    </div>
  );
}