import { Hero, Navigation, Neighborhood, Overview } from '@/components';

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_min(75ch,_calc(100%_-_2rem))_1fr] gap-8 text-lg font-light leading-6 tracking-wide">
      <Navigation />

      <Hero />

      <main className="col-span-1 col-start-2">
        <Overview />

        <Neighborhood />
      </main>
    </div>
  );
}
