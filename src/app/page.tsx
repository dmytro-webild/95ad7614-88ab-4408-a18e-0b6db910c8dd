"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterCard from '@/components/sections/footer/FooterCard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Book a call", id: "#contact" }
      ]}
      brandName="TABLOID "
    />
  </div>

  <div id="hero" data-section="hero">
      <div className="flex items-center justify-center py-20">
        <h1 className="text-5xl font-bold">We put you on the front page of the For You feed</h1>
      </div>
  </div>

  <div id="results" data-section="results">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "1", value: "10M+", description: "TOTAL VIEWS DELIVERED" },
        { id: "2", value: "25+", description: "CREATORS SERVED" },
        { id: "3", value: "5,000+", description: "CLIPS POSTED" }
      ]}
      title="THE NUMBERS"
      description="High velocity · Proven hooks · Platform native · Algorithm friendly · Maximum reach"
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "1.2M views @creator", price: "TikTok", imageSrc: "http://img.b2bpic.net/free-photo/mockup-mobile-phone-screen_53876-63379.jpg" },
        { id: "2", name: "1.2M views @creator", price: "TikTok", imageSrc: "http://img.b2bpic.net/free-photo/smartphone-device-with-minimalist-monochrome-background_23-2150763340.jpg" },
        { id: "3", name: "1.2M views @creator", price: "TikTok", imageSrc: "http://img.b2bpic.net/free-photo/incoming-call-screen-from-merry-christmas-happy-new-year-close-up_169016-43483.jpg" },
        { id: "4", name: "1.2M views @creator", price: "TikTok", imageSrc: "http://img.b2bpic.net/free-photo/closeup-man-holding-vertical-digital-tablet-with-green-screen-online-conference-group-video-call-home-living-room-person-using-touchscreen-device-with-chroma-key-watching-webinar_482257-43508.jpg" },
        { id: "5", name: "1.2M views @creator", price: "TikTok", imageSrc: "http://img.b2bpic.net/free-photo/front-view-bad-habit-concept_23-2148540770.jpg" },
        { id: "6", name: "1.2M views @creator", price: "TikTok", imageSrc: "http://img.b2bpic.net/free-photo/phone-with-intelligent-software-placed-table-kitchen-with-nobody-controlling-light-with-high-tech-application_482257-2267.jpg" }
      ]}
      title="Recent Work"
      description="Clips that actually moved the needle."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Podcasters", description: "If you're sitting on 50+ hours of long-form audio and video, you're leaving growth on the table.", imageSrc: "http://img.b2bpic.net/free-photo/young-person-with-vertical-green-screen-display-smartphone_482257-15525.jpg" },
        { title: "YouTubers", description: "Every video you've made is a goldmine of 30-second hooks that already proven work.", imageSrc: "http://img.b2bpic.net/free-photo/ebook-reader-green-striped-background_58702-6484.jpg" },
        { title: "Founders", description: "Your long-form interviews are the most credible content you'll ever produce for your brand.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hands-holding-smartphone_23-2150671593.jpg" }
      ]}
      title="Who this is for"
      description="If you're already doing this, you should be clipping."
    />
  </div>

  <div id="process" data-section="process">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "01. You drop your long-form", content: "Send us your podcast feed, YouTube channel, or a Dropbox of past content." },
        { id: "2", title: "02. We clip, caption, and schedule", content: "Our team turns one long-form piece into 30+ vertical clips with hooks, captions, and platform-native edits." },
        { id: "3", title: "03. You watch your views compound", content: "Weekly reports show what's working, what's scaling, and where to point next month's clips." }
      ]}
      sideTitle="HOW IT WORKS"
      sideDescription="Three steps. We do the other 47."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to stop watching your content disappear after one upload? Book a 20-minute call to audit your content."
      buttons={[{ text: "Book a free call →", onClick: () => window.open("https://calendly.com/your-booking-link", "_blank") }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="CLIP AGENCY"
      copyrightText="© 2026 Tabloid Media. All rights reserved. Built for creators who refuse to settle for low engagement."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
