import Image from 'next/image';

const galleryColumns = [
  [
    { source: '/landscape.png', orientation: 'landscape' },
    { source: '/landscape.png', orientation: 'landscape' },
    { source: '/portrait.png', orientation: 'portrait' },
    { source: '/landscape.png', orientation: 'landscape' },
  ],
  [
    { source: '/portrait.png', orientation: 'portrait' },
    { source: '/landscape.png', orientation: 'landscape' },
    { source: '/portrait.png', orientation: 'portrait' },
  ],
  [
    { source: '/landscape.png', orientation: 'landscape' },
    { source: '/portrait.png', orientation: 'portrait' },
    { source: '/landscape.png', orientation: 'landscape' },
    { source: '/landscape.png', orientation: 'landscape' },
  ],
  [
    { source: '/portrait.png', orientation: 'portrait' },
    { source: '/portrait.png', orientation: 'portrait' },
    { source: '/landscape.png', orientation: 'landscape' },
  ],
];

export function Neighborhood() {
  return (
    <section className="my-20">
      <header className="mb-10 mt-20">
        <h1 className="my-4 text-center font-display text-5xl md:text-7xl">
          Neighborhood
        </h1>
      </header>
      <p className="my-4">
        Envelope yourself in the lively city atmosphere of Wilmington, mirroring
        the vibrant lifestyle of The Devon condominium community. Revel in easy
        access to a myriad of shops, restaurants, museums, parks, and
        businesses, creating a dynamic backdrop for your everyday experiences.
        The well-established neighborhoods surrounding The Devon, with their
        tree-lined streets and open green spaces, provide a picturesque setting
        for daily strolls, whether through Rockford Park, engaging in lifelong
        learning at the Osher Lifelong Learning Institute, or appreciating art
        at the Delaware Art Museum.
      </p>

      <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryColumns.map((column, index) => (
          <div key={`${column[index]}${index}`} className="grid gap-4">
            {column.map(image => (
              <Image
                key={image.source}
                className="h-auto max-w-full rounded-lg"
                src={image.source}
                width={image.orientation === 'landscape' ? 1920 : 1280}
                height={image.orientation === 'portrait' ? 1920 : 1280}
                alt=""
              />
            ))}
          </div>
        ))}
      </div>

      <p className="my-4">
        The prime location of The Devon on Pennsylvania Avenue ensures that the
        city&apos;s finest dining, shopping, and recreational venues are within
        your reach. More than just a residence, The Devon is a condominium
        community that offers an extraordinary living experience. Here, friendly
        residents and meticulous attention to detail create an environment where
        you can truly feel at home. Experience the best of both worlds – the
        charm of Wilmington&apos;s neighborhoods and the sophistication of The
        Devon&apos;s city living. Welcome to a life where every detail
        contributes to an exceptional living experience.
      </p>
      <p className="my-4">
        Wilmington, nestled in the northern-most part of Delaware near the
        Pennsylvania border, is the perfect blend of a cozy small-town feel and
        the exhilaration of a big city. Whether you&apos;re young or young at
        heart, Wilmington caters to diverse interests and age groups.
      </p>
    </section>
  );
}
