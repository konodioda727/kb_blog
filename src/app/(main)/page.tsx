'use client';

import RegisterModule from '@/modules/auth/register';

export default function Home() {
  return (
    <main className="h-full w-full">
      <RegisterModule></RegisterModule>
    </main>
  );
}
