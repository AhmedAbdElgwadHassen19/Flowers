import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection"
import FlowerPackagesSection from "../components/FlowerPackagesSection";
import FlowerShopServices from "../components/FlowerShopServices";
import FlowerGallery from "../components/FlowerGallery"
import FoodDrinkSection from "../components/FoodDrinkSection";
import SpecialOffersSection from "../components/SpecialOffersSection";
import FlowerTestimonial from "../components/FlowerTestimonial";
import FlowerStaffSection from "../components/FlowerStaffSection";
import FlowerIconsSection from "../components/FlowerIconsSection";
import FlowerNewsSection from "../components/FlowerNewsSection";
import ImageSlider from "../components/ImageGallery";
import Footer from "../pages/footer"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <FlowerPackagesSection />
      <FlowerShopServices />
      <FlowerGallery />
      <FoodDrinkSection />
      <SpecialOffersSection />
      <FlowerTestimonial />
      <FlowerStaffSection />
      <FlowerIconsSection />
      <FlowerNewsSection />
      <ImageSlider/> 
      <Footer/>
    </>
  );
}
