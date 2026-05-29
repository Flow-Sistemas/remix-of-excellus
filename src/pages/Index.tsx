import { useState } from "react";
import HomeHeader from "./home/components/HomeHeader";
import HomeHero from "./home/components/HomeHero";
import HomeDifferentials from "./home/components/HomeDifferentials";
import HomeServices from "./home/components/HomeServices";
import HomeAbout from "./home/components/HomeAbout";
import HomeExperience from "./home/components/HomeExperience";
import HomeGallery from "./home/components/HomeGallery";
import HomeTestimonials from "./home/components/HomeTestimonials";
import HomeCta from "./home/components/HomeCta";
import HomeFooter from "./home/components/HomeFooter";
import QuoteModal from "./home/components/QuoteModal";
import SeoHead from "@/components/SeoHead";
import FloatingSocial from "@/components/FloatingSocial";

export default function Index() {
  const [open, setOpen] = useState(false);
  const onQuote = () => setOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead
        slug="/"
        fallbackTitle="New Creation Home Solutions — Flooring Installation & Finishing in NJ, NY & PA"
        fallbackDescription="Excellence in flooring installation and finishing. 14 years of experience on residential and commercial projects in New Jersey, New York, and Pennsylvania."
      />
      <HomeHeader onQuote={onQuote} />
      <main>
        <HomeHero onQuote={onQuote} />
        <HomeDifferentials />
        <HomeServices onQuote={onQuote} />
        <HomeAbout />
        <HomeExperience />
        <HomeGallery />
        <HomeTestimonials />
        <HomeCta onQuote={onQuote} />
      </main>
      <HomeFooter />
      <QuoteModal open={open} onOpenChange={setOpen} />
      <FloatingSocial onQuote={onQuote} />
    </div>
  );
}
