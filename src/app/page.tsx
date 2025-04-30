'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/formulario');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecionando para o formulário...</h1>
        <p className="text-gray-400">Se o redirecionamento não funcionar, <a href="/formulario" className="text-purple-400 hover:text-purple-300">clique aqui</a></p>
      </div>
    </div>
  );
} 