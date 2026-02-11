interface FooterProps {
  restaurantName: string;
}

export default function Footer({ restaurantName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-2">&copy; {currentYear} {restaurantName}. All rights reserved.</p>
        <p className="text-gray-400 text-sm">
          Made with love and the finest ingredients
        </p>
      </div>
    </footer>
  );
}
