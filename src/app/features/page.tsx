import ProductBannerSlider from '../components/ProductBannerSlider';
import ProductCart from '../components/ProductCart';
import ProductUseCases from '../components/ProductUseCases';
import ProductBenefits from '../components/ProductBenefits';
import ProductFeatures from '../components/ProductFeatures';
import ProductLifeCycle from '../components/ProductLifeCycle';
import ProductFAQs from '../components/ProductFAQs';

export default function features() {
  return (
    
    <div className="pt-10"> {/* Padding top to prevent content overlap */}
        <ProductBannerSlider />

       
          <ProductCart/>
          <ProductUseCases />
          <ProductBenefits />
          <ProductFeatures />
          <ProductLifeCycle />
          
          
          <section id="LinkW_FAQs">
            <ProductFAQs />
          </section>
        </div>
      
    
  );
}
