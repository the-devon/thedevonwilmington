import Image from 'next/image';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/react';

const amenityCards = [
  {
    title: 'Outdoor Pool',
    image: '/landscape.png',
    description:
      'Experience the epitome of leisure in our community, boasting a seasonal, picturesque L-shaped outdoor pool.',
    longDescription:
      'Experience the epitome of leisure in our community, boasting a seasonal, picturesque L-shaped outdoor pool. Nestled in the heart of our grounds, the in-ground pool beckons residents to unwind in style, complemented by inviting cabanas and a sun-soaked deck—an ideal oasis for relaxation. Open from late Spring to mid-Fall, weather permitting, these amenities are exclusively tailored for the enjoyment of our residents and their guests.',
  },
  {
    title: 'Off Street Parking',
    image: '/landscape.png',
    description:
      'Elevate your living experience with our convenient off-street parking.',
    longDescription:
      'Elevate your living experience with our convenient off-street parking, providing direct access from the building to ensure both ease and security for you and your vehicle. Enjoy the added luxury of hassle-free parking within the comfort of your community.',
  },
  {
    title: 'EV Chargers',
    image: '/landscape.png',
    description:
      'Step into a future of sustainable living within our progressive community.',
    longDescription:
      'Step into a future of sustainable living within our progressive community, where four dedicated EV chargers for the condominium redefine convenience. Seamlessly integrate electric vehicle charging into your daily routine, showcasing our commitment to environmental consciousness and contemporary living.',
  },
  {
    title: 'Pet Friendly',
    image: '/landscape.png',
    description:
      'Welcome your furry friends to our pet-friendly community, where tails wag and paws are embraced.',
    longDescription:
      'Welcome your furry friends to our pet-friendly community, where tails wag and paws are embraced.',
  },
  {
    title: '24/7 Front Door Staff',
    image: '/landscape.png',
    description: 'Embrace worry-free living with our 24/7 front door staff.',
    longDescription:
      'Embrace worry-free living with our 24/7 front door staff, offering a warm welcome and expertly managing your packages in our elegantly decorated lobby. Say goodbye to stress over deliveries and weather concerns—our dedicated front door staff is here to assist, ensuring a seamless experience for you.',
  },
  {
    title: 'On-site Management',
    image: '/landscape.png',
    description:
      'Experience worry-free living with our on-site management taking care of the details.',
    longDescription:
      'Experience worry-free living with our on-site management taking care of the details. Rest easy knowing that our 24/7 maintenance support is dedicated to ensuring your peace of mind and addressing any needs promptly.',
  },
  {
    title: 'Grounds and Gardens',
    image: '/landscape.png',
    description:
      'Discover serenity in our beautiful private green space adjacent to the building.',
    longDescription:
      'Discover serenity in our beautiful private green space adjacent to the building. The commons are perfect for a leisurely stroll, tossing a frisbee, or simply relaxing and enjoying the view. Immerse yourself in the vibrant colors of spring with over 1900 bulbs planted, while native specimens and plants anchor our beds. Multiple peaceful and tranquil gathering areas await, providing the ideal setting to unwind and connect with nature.',
  },
  {
    title: 'Smoke Free Community',
    image: '/landscape.png',
    description:
      'Indulge in a breath of fresh air – The Devon proudly stands as a 100% smoke-free community.',
    longDescription:
      'Indulge in a breath of fresh air – The Devon proudly stands as a 100% smoke-free community. Breathe easy and relish in a living environment that prioritizes clean, healthy living for all residents.',
  },
];

export function Amenities() {
  return (
    <section className="my-20">
      <header className="mb-10 mt-20">
        <h1 className="my-4 text-center font-display text-5xl md:text-7xl">
          Amenities
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {amenityCards.map(({ title, image, description }) => (
          <Card className="p-0" isHoverable key={title} shadow="none">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
              <h3 className="text-xl font-normal">{title}</h3>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                className="rounded-xl object-cover"
                src="/landscape.png"
                width={1920}
                height={1280}
                alt="Card background"
              />
              <p className="mt-4">{description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
