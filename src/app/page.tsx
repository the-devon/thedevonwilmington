import Image from 'next/image';
import { Navigation } from '@/components/navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}
