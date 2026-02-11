import Image from 'next/image';
import { MenuCategory } from '../../site.config';

interface MenuSectionProps {
  title: string;
  categories: MenuCategory[];
}

export default function MenuSection({ title, categories }: MenuSectionProps) {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gray-800">
          {title}
        </h2>

        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 sm:mb-8 md:mb-10 text-gray-700 border-b-2 border-gray-300 pb-3 sm:pb-4">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105 overflow-hidden border border-amber-100"
                >
                  {item.image && (
                    <div className="relative h-40 sm:h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      {item.price && (
                        <span className="text-base sm:text-lg font-bold text-amber-600 ml-2 flex-shrink-0">
                          {item.price}
                        </span>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
