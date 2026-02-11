# How to Add Images to Your Restaurant Website

## 🖼️ Image Options

You have **3 ways** to add images to your restaurant website:

---

## Option 1: External URLs (Current Setup)

Use images hosted on external services like Unsplash, your own CDN, or cloud storage.

### ✅ Pros
- No storage needed in your project
- Fast to set up
- Great for testing/demo

### ❌ Cons
- Requires internet connection
- External service must stay online
- Need to configure hostnames in `next.config.ts`

### How to Use

**1. Add the hostname to `next.config.ts`:**

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Already configured
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'your-cdn.com', // Add your own CDN
        pathname: '/**',
      },
    ],
  },
};
```

**2. Use URLs in `site.config.ts`:**

```typescript
hero: {
  slides: [
    {
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop",
      title: "Welcome",
      subtitle: "Great Food",
    },
  ],
},
```

---

## Option 2: Local Images in `/public` Folder (Recommended)

Store images directly in your project for full control.

### ✅ Pros
- No external dependencies
- Faster loading
- Full control
- No configuration needed

### ❌ Cons
- Increases project size
- Need to manage image files

### How to Use

**1. Create image folders:**

```bash
mkdir -p public/images/hero
mkdir -p public/images/menu
mkdir -p public/images/about
```

**2. Add your images:**

```
public/
├── images/
│   ├── hero/
│   │   ├── hero-1.jpg
│   │   ├── hero-2.jpg
│   │   └── hero-3.jpg
│   ├── menu/
│   │   ├── pasta-carbonara.jpg
│   │   ├── pizza-margherita.jpg
│   │   └── tiramisu.jpg
│   └── about/
│       └── restaurant.jpg
```

**3. Update `site.config.ts` with local paths:**

```typescript
hero: {
  slides: [
    {
      image: "/images/hero/hero-1.jpg", // Note: starts with /
      title: "Welcome to Our Restaurant",
      subtitle: "Experience Fine Dining",
    },
    {
      image: "/images/hero/hero-2.jpg",
      title: "Fresh Ingredients",
      subtitle: "Farm to Table",
    },
  ],
},

menu: {
  categories: [
    {
      title: "Pasta",
      items: [
        {
          name: "Spaghetti Carbonara",
          description: "Classic Roman pasta",
          price: "$22",
          image: "/images/menu/pasta-carbonara.jpg", // Local image
        },
      ],
    },
  ],
},

about: {
  title: "Our Story",
  description: "Family Tradition Since 1985",
  story: "...",
  image: "/images/about/restaurant.jpg", // Local image
},
```

**4. No configuration needed!** Next.js automatically serves files from `/public`.

---

## Option 3: Cloud Storage (AWS S3, Cloudinary, etc.)

Upload images to cloud storage and use their URLs.

### ✅ Pros
- Scalable
- Built-in CDN
- Image optimization features
- Professional solution

### ❌ Cons
- Costs money
- Requires setup
- Need to configure hostname

### Popular Services

**Cloudinary (Free tier available)**
```typescript
// In next.config.ts
{
  protocol: 'https',
  hostname: 'res.cloudinary.com',
  pathname: '/**',
}
```

**AWS S3 + CloudFront**
```typescript
{
  protocol: 'https',
  hostname: 'your-bucket.s3.amazonaws.com',
  pathname: '/**',
}
```

**Vercel Blob Storage**
```typescript
{
  protocol: 'https',
  hostname: 'your-project.public.blob.vercel-storage.com',
  pathname: '/**',
}
```

---

## 📸 Image Best Practices

### Recommended Sizes

```typescript
// Hero images
1920x1080px (Full HD)

// Menu item images
400x300px (4:3 ratio)

// About section image
800x600px

// General guidelines:
- Use JPEG for photos
- Use PNG for logos/graphics
- Optimize before uploading (use TinyPNG, ImageOptim, etc.)
- Keep file sizes under 500KB for fast loading
```

### Image Optimization Tools

- **[TinyPNG](https://tinypng.com/)** - Compress images online
- **[Squoosh](https://squoosh.app/)** - Google's image optimizer
- **ImageOptim** - Mac app for optimization

---

## 🚀 Quick Start: Switch to Local Images

**1. Download sample images or use your own**

**2. Create the folder structure:**
```bash
mkdir -p public/images/{hero,menu,about}
```

**3. Add your images to the folders**

**4. Update `site.config.ts`:**
```typescript
hero: {
  slides: [
    {
      image: "/images/hero/slide-1.jpg",
      title: "Your Title",
      subtitle: "Your Subtitle",
    },
  ],
},
```

**5. Restart the dev server:**
```bash
npm run dev
```

---

## 🔧 Currently Configured Hostnames

Your `next.config.ts` currently allows images from:
- ✅ `images.unsplash.com` (for demo purposes)

**To add more external sources**, edit [next.config.ts](next.config.ts) and add to `remotePatterns`.

---

## ❓ Troubleshooting

**Error: "hostname not configured"**
→ Add the hostname to `remotePatterns` in `next.config.ts`

**Images not loading from `/public`**
→ Make sure path starts with `/` (e.g., `/images/photo.jpg`)
→ Restart dev server after adding new images

**Images are slow to load**
→ Optimize/compress your images before adding them
→ Use appropriate image sizes (don't use 4K images for thumbnails)

---

**Recommendation:** For a production restaurant website, use **Option 2 (Local Images)** for reliability and speed! 🎯
