import AboutLinW from '../components/AboutLinW';
import OurIdentity from '../components/OurIdentity';
import OurPartners from '../components/OurPartners';
import MeetTheTeam from '../components/MeetTheTeam';
import LinkW_FAQs from '../components/LinkW_FAQs';

export default function aboutUs() {
  return (
    
    <div className="pt-10 relative w-full overflow-hidden mt-[calc(4rem+10px)]"> {/* Padding top to prevent content overlap */}
        <AboutLinW />

       
          <OurIdentity/>
          <OurPartners />
          <MeetTheTeam />
          
          
          <section id="LinkW_FAQs">
            <LinkW_FAQs />
          </section>
        </div>
      
    
  );
}
