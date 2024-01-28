import React from "react";
import HeroSection from "./herosection"; // Adjust the import path as needed
import ProblemSolution from "./problemsolution";
import HowItWorks from "./howitworks";
import FeaturesAndBenefits from "./featuresandbenefits";
import Testimonials from "./testimonials";
import Pricing from "./pricing";
import FAQs from "./faqs";
import CallToActionReinforced from "./calltoaction";
import Footer from "./footer";
import Header from "./header";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <FeaturesAndBenefits />
      <Testimonials />
      <Pricing />
      <FAQs />
      <CallToActionReinforced />
      <Footer />

      {/* Other sections of your landing page */}
    </div>
  );
};

export default LandingPage;
