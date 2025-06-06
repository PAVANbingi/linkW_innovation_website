import HeroSection from './components/HeroSection';
import ProductIntro from './components/ProductIntro';
import Usecases from './components/Usecases';
import Warrenty from './components/Warrenty';
import Testimonials from './components/Testimonials';
import AboutLinW from './components/AboutLinW';
import OurIdentity from './components/OurIdentity';
import ContactUs from './contactUs/page';
// import MeetTheTeam from './components/MeetTheTeam';
// import OurPartners from './components/OurPartners';
//import ProductFeatures from './components/ProductFeatures';
import ProductBenefits from './components/ProductBenefits';
import ProductSoled from './components/ProductSoled';
import ProductUseCases from './components/ProductUseCases';
import Order from './order/page';
//import ProductFAQs from './components/ProductFAQs';


export default function Home() {
  return (
    <>
      <div className=" min-h-screen mt-4">
        <HeroSection />

        <div className="pt-8"> {/* Padding top to prevent content overlap */}
          <AboutLinW/>
          <OurIdentity/>
          <ProductIntro/>

          {/* <MeetTheTeam/> */}

        {/* <OurPartners/> */}
       

        {/* <ProductFeatures/> */}
        <Usecases />

        

       

          <ProductBenefits/>

          <ProductSoled/>

          <ProductUseCases/>
         
          <section id="Testimonials">
            <Testimonials />
          </section>


          <Order/>
            <Warrenty />
           


          {/* <ProductFAQs/> */}


         
          
          
          
          {/* Add an id for the About Us section */}
         
          <ContactUs/>
        </div>
      </div>
    </>
  );
}
