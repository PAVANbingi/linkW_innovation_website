//import ProductBannerSlider from '../components/ProductBannerSlider';
import ProductCart from '../components/ProductCart';
import ProductUseCases from '../components/ProductUseCases';
import ProductBenefits from '../components/ProductBenefits';
import ProductFeatures from '../components/ProductFeatures';
import ProductSoled from '../components/ProductSoled';
import ProductFAQs from '../components/ProductFAQs';
import ProductFeaturesIntro from '../components/ProductFeaturesIntro';
import UseCases from '../components/Usecases';

export default function features() {
  return (
    
    <div className="pt-10"> {/* Padding top to prevent content overlap */}
        {/* <ProductBannerSlider /> */}
        <ProductFeatures />
        <UseCases/>
       
        <ProductFeaturesIntro/>
        <ProductBenefits />
        <ProductCart/>
        <ProductSoled /> 
        <ProductUseCases />
               
          
          <section id="LinkW_FAQs">
            <ProductFAQs />
          </section>
        </div>
      
    
  );
}
