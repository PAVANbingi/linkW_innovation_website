import HeroSection from './components/HeroSection';
import ProductIntro from './components/ProductIntro';
import Usecases from './components/Usecases';
import Warrenty from './components/Warrenty';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <div className=" min-h-screen mt-8">
        <HeroSection />

        <div className="pt-8"> {/* Padding top to prevent content overlap */}
          <ProductIntro/>
          <Usecases />
          <Warrenty />
          
          {/* Add an id for the About Us section */}
          <section id="Testimonials">
            <Testimonials />
          </section>
        </div>
      </div>
    </>
  );
}
