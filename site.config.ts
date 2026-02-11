export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface SiteConfig {
  // Restaurant Info
  restaurantName: string;
  tagline: string;
  logo?: string;
  
  // SEO
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  
  // Hero Section
  hero: {
    slides: HeroSlide[];
  };
  
  // About Section
  about: {
    title: string;
    description: string;
    story: string;
    image?: string;
  };
  
  // Menu
  menu: {
    title: string;
    categories: MenuCategory[];
  };
  
  // Contact
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    hours: {
      day: string;
      time: string;
    }[];
    socialMedia: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
  };
  
  // Feedback
  feedback: {
    title: string;
    subtitle: string;
  };
  
  // Theme Colors
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

const siteConfig: SiteConfig = {
  restaurantName: "Sweet Tooth Restaurant",
  tagline: "Authentic Indian Dining Experience",
  
  seo: {
    title: "Sweet Tooth Restaurant - Authentic Indian Restaurant",
    description: "Experience the finest Indian cuisine in town. Fresh ingredients, traditional recipes, and warm hospitality.",
    keywords: ["indian restaurant", "fine dining", "curry", "tandoori", "indian food", "Chinese restaurant", "authentic indian cuisine", "Fast Food Restaurant", "best indian restaurant", "indian food near me"],
  },
  
  hero: {
    // slides: [
    //   {
    //     image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop",
    //     title: "Welcome to Bella Cucina",
    //     subtitle: "Where Every Meal is a Celebration",
    //   },
    //   {
    //     image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop",
    //     title: "Fresh Ingredients",
    //     subtitle: "Authentic Italian Flavors",
    //   },
    //   {
    //     image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
    //     title: "Unforgettable Moments",
    //     subtitle: "Create Memories with Every Bite",
    //   },
    // ],
    slides: [
    {
      image: "/images/hero/hero_4.png", // Note: starts with /
      title: "Welcome to Our Restaurant",
      subtitle: "Experience Fine Dining",
    },
    {
      image: "/images/hero/hero_2.png",
      title: "Fresh Ingredients",
      subtitle: "Farm to Table",
    },
    {
      image: "/images/hero/hero_3.png",
      title: "Pizza Perfection",
      subtitle: "Wood-Fired Oven",
    },
    {
      image: "/images/hero/hero_1.png",
      title: "Spacious Dining",
      subtitle: "Comfortable and Elegant",
    },
  ],
  },
  
  about: {
    title: "Our Story",
    description: "All you can eat · Happy-hour food · Vegan options",
    story: "Sweet Tooth Restaurant brings the heart of India to your table. Our family recipes, passed down through generations, combine with locally-sourced fresh ingredients to create an unforgettable dining experience. Every dish is prepared with love and attention to detail, just like Nonna used to make.",
    image: "/images/about/about_img.png",
  },
  
  menu: {
    title: "Our Menu",
    categories: [
      {
        title: "Tandoori Specialties",
        items: [
          {
            name: "Tandoori Chicken",
            description: "Succulent marinated chicken grilled to perfection in traditional tandoor",
            price: "",
            image: "/images/menu/tandoori.png",
          },
          {
            name: "Paneer Tikka",
            description: "Cottage cheese cubes marinated with aromatic spices and grilled",
            price: "",
            image: "/images/menu/panner_tikka.png",
          },
          {
            name: "Tikka Special",
            description: "Cottage cheese cubes marinated with aromatic spices and grilled",
            price: "",
            image: "/images/menu/tandoori_1.png",
          },
        ],
      },
      {
        title: "Chicken Delights",
        items: [
          {
            name: "Chicken Curry",
            description: "Tender chicken pieces cooked in rich and flavorful gravy",
            price: "",
            image: "/images/menu/Chicken.png",
          },
        ],
      },
      {
        title: "Vegetarian Favorites",
        items: [
          {
            name: "Indian Vegetable Thali",
            description: "Traditional platter with assorted vegetarian dishes and accompaniments",
            price: "",
            image: "/images/menu/indian_veg.png",
          },
        ],
      },
      {
        title: "Special Dishes",
        items: [
          {
            name: "Chef's Special",
            description: "Expertly prepared dish with authentic spices and fresh ingredients",
            price: "",
            image: "/images/menu/special.png",
          },
          {
            name: "Signature Platter",
            description: "Delicious combination of our most popular dishes served together",
            price: "",
            image: "/images/menu/singnature.png",
          },
          {
            name: "House Special",
            description: "Carefully crafted specialty dish with premium ingredients",
            price: "",
            image: "/images/menu/kichen.png",
          },
        ],
      },
    ],
  },
  
  contact: {
    title: "Visit Us",
    address: "Near J P Circle, South To Zero Mile, Beside of NH 219A, Adhaura Road, Bhabua, Bhagwanpur, Bihar 821101",
    phone: "(+91) 077177 72606",
    email: "info@sweethtruth.com",
    hours: [
      { day: "Monday - Thursday", time: "11:00 AM - 10:00 PM" },
      { day: "Friday - Saturday", time: "11:00 AM - 11:00 PM" },
      { day: "Sunday", time: "12:00 PM - 9:00 PM" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/sweethtruth",
      instagram: "https://instagram.com/sweethtruth",
      twitter: "https://twitter.com/sweethtruth",
    },
  },
  
  feedback: {
    title: "We'd Love to Hear From You",
    subtitle: "Share your dining experience with us",
  },
  
  theme: {
    primary: "#8B4513",
    secondary: "#D4AF37",
    accent: "#228B22",
  },
};

export default siteConfig;
