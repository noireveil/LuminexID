'use client';

import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode';
import api from '@/lib/api';
import { Loader2, ShieldCheck, ShieldAlert } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface ScanResult {
  status: string;
  message: string;
  ticketOwner?: string;
  ticketType?: string;
}

export default function QRScanner() {
  const [result, setResult] = useState<ScanResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (!scannerRef.current) {
      const scanner = new Html5QrcodeScanner(
        "reader",
        { 
          fps: 10, 
          qrbox: { width: 250, height: 250 },
          formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE]
        },
        false
      );
      scanner.render(onScan, (err) => console.warn(err));
      scannerRef.current = scanner;
    }
    return () => {
      scannerRef.current?.clear().catch(console.error);
      scannerRef.current = null;
    };
  }, []);

  const onScan = async (decodedText: string) => {
    if (isProcessing) return;
    setIsProcessing(true);
    scannerRef.current?.pause(true);

    try {
      const { data } = await api.post('/tickets/validate', {
        qr_payload: decodedText,
        device_id: 'WEB_CLIENT',
        location_gate: 'MAIN'
      });
      setResult(data);
    } catch (err: any) {
      setResult({
        status: 'INVALID',
        message: err.response?.data?.message || 'Scan Failed'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setResult(null);
    scannerRef.current?.resume();
  };

  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="bg-zinc-900 p-1 border-b-4 border-red-700 relative">
        {!result && <div id="reader" className="w-full [&>div]:border-none!" />}
        
        {isProcessing && (
          <div className="absolute inset-0 bg-zinc-900/90 flex items-center justify-center z-10">
            <Loader2 className="animate-spin text-white w-10 h-10" />
          </div>
        )}
      </div>

      {result && (
        <Card className={result.status === 'VALID' ? 'border-zinc-900' : 'border-red-600 bg-red-50'}>
          <div className="flex flex-col items-center text-center">
            {result.status === 'VALID' ? 
              <ShieldCheck className="w-12 h-12 text-zinc-900 mb-2" /> : 
              <ShieldAlert className="w-12 h-12 text-red-600 mb-2" />
            }
            <h3 className="text-xl font-black uppercase">{result.status}</h3>
            <p className="font-mono text-sm mb-4">{result.message}</p>
            
            {result.ticketOwner && (
              <div className="w-full bg-white/50 p-2 mb-4 border-2 border-zinc-200 text-sm text-left">
                <div>NAME: {result.ticketOwner}</div>
                <div>TYPE: {result.ticketType}</div>
              </div>
            )}
            
            <Button onClick={reset} className="w-full">Scan Next</Button>
          </div>
        </Card>
      )}
    </div>
  );
}