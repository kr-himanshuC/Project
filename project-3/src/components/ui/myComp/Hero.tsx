import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

function Hero() {
  return (
    <div className="@lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[306px] max-w-full gap-14 mx-auto @max-lg:flex-col @lg:flex flex justify-between">
      {/* Hero-Left */}
      <HeroLeft />
      {/* Hero-Right */}
      <HeroRight />
    </div>
  );
}

export default Hero;
