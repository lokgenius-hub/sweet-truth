import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import ContactSection from '@/components/ContactSection';
import FeedbackSection from '@/components/FeedbackSection';
import Footer from '@/components/Footer';
import siteConfig from '../../site.config';

export default function Home() {
  return (
    <main>
      <Navbar 
        restaurantName={siteConfig.restaurantName}
        tagline={siteConfig.tagline}
      />
      
      <div id="home">
        <HeroSlider slides={siteConfig.hero.slides} />
      </div>

      <AboutSection
        title={siteConfig.about.title}
        description={siteConfig.about.description}
        story={siteConfig.about.story}
        image={siteConfig.about.image}
      />

      <MenuSection
        title={siteConfig.menu.title}
        categories={siteConfig.menu.categories}
      />

      <ContactSection
        title={siteConfig.contact.title}
        address={siteConfig.contact.address}
        phone={siteConfig.contact.phone}
        email={siteConfig.contact.email}
        hours={siteConfig.contact.hours}
        socialMedia={siteConfig.contact.socialMedia}
      />

      <FeedbackSection
        title={siteConfig.feedback.title}
        subtitle={siteConfig.feedback.subtitle}
      />

      <Footer restaurantName={siteConfig.restaurantName} />
    </main>
  );
}
