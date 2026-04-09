import React from "react";
import PricingCard from './pricing-card';

const Pricing = () => {
  return (
    <div className="py-20 max-w-[85%] mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl lg:text-5xl font-extrabold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 font-medium leading-relaxed">
          Choose the plan that fits your needs. Upgrade or downgrade anytime
          with ease.
        </p>
      </div>
    <PricingCard></PricingCard>
    </div>
  );
};

export default Pricing;