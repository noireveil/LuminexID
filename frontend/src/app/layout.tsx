import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata = {
  title: 'LuminexID - Enterprise Ticketing',
  description: 'Secure Event Access System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
