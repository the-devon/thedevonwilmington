import Image from 'next/image';

export function Hero() {
  // With the syntax `col-[1_/_-1]` we're counting from the end instead of from
  // the start of the columns. We're saying that our grid should start after the
  // first line, and end before the last. This TailwindCSS syntax will give the
  // hero image a full bleed effect.
  return (
    <section className="col-[1_/_-1]">
      <Image
        className="w-full"
        src="/hero.png"
        width={3840}
        height={1008}
        alt="Building of The Devon Wilmington"
      />
    </section>
  );
}
