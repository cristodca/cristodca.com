import React from "react";
import Image from "next/image";
import IconCraeteReactApp from "./icons/CraeteReactApp";
import IconJavascript from "./icons/Javascript";
import IconReact from "./icons/React";
import IconTailwind from "./icons/Tailwind";

const PortfolioCard = () => {
  return (
    <div className="border-2 rounded-2xl p-4">
      <div className="mb-4">
        <Image
          src="https://source.unsplash.com/random/1280×720"
          alt="test"
          className="rounded-xl"
          width={1280}
          height={720}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <p className="normal-text text-2xl font-semibold mb-4">
        Gepesa E-Commerce
      </p>
      <div className="flex items-center gap-4">
        <IconJavascript /> <IconReact /> <IconCraeteReactApp /> <IconTailwind />
      </div>
    </div>
  );
};

export default PortfolioCard;
