# Restaurant Website Template

A fully reusable single-restaurant website template built with Next.js (App Router) and Tailwind CSS. Easily rebrand by editing just one config file!

## 🚀 Features

- **Hero Image Slider** - Auto-rotating hero section with smooth transitions
- **Menu Sections** - Organized by category with images and descriptions
- **About Section** - Share your restaurant's story
- **Contact Section** - Address, hours, phone, email, and social media
- **Feedback Form** - Static UI for customer feedback
- **SEO Optimized** - Meta tags, keywords, and Open Graph support
- **Fully Responsive** - Mobile-first design that works on all devices
- **Zero Hardcoded Data** - All content from `site.config.ts`

## 📦 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

## 🛠️ Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your restaurant website.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Easy Rebranding

**All restaurant content is controlled by a single file: `site.config.ts`**

Simply edit this file to completely rebrand the website for any restaurant:

```typescript
// site.config.ts
const siteConfig: SiteConfig = {
  restaurantName: "Your Restaurant Name",
  tagline: "Your Tagline",
  
  seo: {
    title: "Your SEO Title",
    description: "Your meta description",
    keywords: ["keyword1", "keyword2"],
  },
  
  hero: {
    slides: [
      {
        image: "your-hero-image-url",
        title: "Your Hero Title",
        subtitle: "Your Hero Subtitle",
      },
    ],
  },
  
  // ... customize all sections
};
```

### What You Can Customize

✅ Restaurant name and tagline  
✅ SEO metadata (title, description, keywords)  
✅ Hero slider images and text  
✅ About section content and images  
✅ Complete menu with categories, items, prices, and images  
✅ Contact information (address, phone, email, hours)  
✅ Social media links  
✅ Feedback form titles  
✅ Theme colors  

### No Code Changes Required

The components are fully reusable and automatically adapt to your config data. Just edit `site.config.ts` and you're done!

## 📂 Project Structure

```
restaurant-website/
├── site.config.ts          # Single source of truth for all content
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Main page composition
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navbar.tsx      # Navigation bar
│       ├── HeroSlider.tsx  # Hero image slider
│       ├── AboutSection.tsx
│       ├── MenuSection.tsx
│       ├── ContactSection.tsx
│       ├── FeedbackSection.tsx
│       └── Footer.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎯 Component Features

### HeroSlider
- Auto-rotating slides (5s intervals)
- Manual navigation (arrows + dots)
- Smooth transitions
- Responsive images

### MenuSection
- Category-based organization
- Optional item images
- Price display
- Responsive grid layout

### AboutSection
- Image + story layout
- Responsive two-column design
- Optional restaurant image

### ContactSection
- Address with location icon
- Phone and email with icons
- Business hours
- Social media links (Facebook, Instagram, Twitter)

### FeedbackSection
- Name and email inputs
- Star rating selector
- Message textarea
- Form validation (static UI)

## 🚢 Deployment

This is a standard Next.js application and can be deployed to:

- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Works out of the box
- **AWS**, **Google Cloud**, etc.

## 📝 License

MIT License - feel free to use this template for any restaurant!

## 🤝 Contributing

This is a template project. Fork it and customize it for your needs!

## 📧 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ and great food in mind**
