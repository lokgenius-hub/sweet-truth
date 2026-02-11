import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  description: string;
  story: string;
  image?: string;
}

export default function AboutSection({ title, description, story, image }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {title}
            </h2>
            <p className="text-xl text-amber-600 mb-6 font-semibold">
              {description}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {story}
            </p>
          </div>
          {image && (
            <div className="order-1 lg:order-2 relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
