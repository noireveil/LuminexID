'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { LoginResponse } from '@/types';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    try {
      // Backend hanya return { token, expiresIn }
      const { data } = await api.post<LoginResponse>('/auth/login', payload);
      
      // Simpan token saja
      localStorage.setItem('token', data.token);
      document.cookie = `token=${data.token}; path=/; max-age=${data.expiresIn}`;
      
      router.push('/dashboard');
    } catch (err: any) {
      console.error(err);
      setError('Login gagal. Coba: email sembarang & password sembarang.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-50 border-l-4 border-red-700 text-red-900 text-xs font-mono">
          ERROR: {error}
        </div>
      )}
      <Input name="email" label="Identity" placeholder="user@luminex.id" required />
      <Input name="password" label="Passcode" type="password" placeholder="••••••••" required />
      <Button type="submit" className="w-full" isLoading={loading}>
        Enter System
      </Button>
    </form>
  );
}