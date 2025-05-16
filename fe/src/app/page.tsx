import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogListSection from "@/components/BlogListSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogListSection />
      <Footer />
    </div>
  )
}
