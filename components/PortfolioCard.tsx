import React from "react";
import Image from "next/image";
import IconCraeteReactApp from "./icons/CraeteReactApp";
import IconJavascript from "./icons/Javascript";
import IconReact from "./icons/React";
import IconTailwind from "./icons/Tailwind";
import Link from "next/link";
import IconNext from "./icons/Next";
import IconGatsby from "./icons/Gatsby";
import IconBootstrap from "./icons/Bootstrap";
import IconAngular from "./icons/Angular";

const PortfolioCard = ({ slug, title, description, imageUrl, icons }: any) => {
  return (
    <Link href={slug}>
      <a>
        <div className="group h-full border-2 rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border-dark transition-all duration-300 dark:border-light hover:-translate-x-2 hover:-translate-y-2 hover:border-b-8 hover:border-r-8 hover:border-primary dark:hover:border-secondary">
          <div className="w-full relative">
              <Image
                src={imageUrl}
                alt={title}
                className="block md:hidden"
                width={1280}
                height={720}
                layout="responsive"
                objectFit="cover"
              />
              <Image
                src={imageUrl}
                alt={title}
                className="hidden md:block"
                width={1280}
                height={720}
                layout="fill"
                objectFit="cover"
              />
          </div>
          <div className="flex flex-col justify-between p-4">
            <h3 className="normal-text text-3xl font-semibold mb-4 group-hover:text-primary dark:group-hover:text-secondary line-clamp-1">{title}</h3>
            <p className="normal-text line-clamp-5">{description}</p>
            <div className="flex items-center justify-start gap-4">
              {icons.js && <div className="h-12 w-12 flex items-center"><IconJavascript /></div>}
              {icons.angular && <div className="h-12 w-12 flex items-center"><IconAngular /></div>}
              {icons.react && <div className="h-12 w-12 flex items-center"><IconReact /></div>}
              {icons.next && <div className="h-12 w-12 flex items-center"><IconNext /></div>}
              {icons.gatsby && <div className="h-12 w-12 flex items-center"><IconGatsby /></div>}
              {icons.createReactApp && <div className="h-12 w-12 flex items-center"><IconCraeteReactApp /></div>}
              {icons.bootstrap && <div className="h-12 w-12 flex items-center"><IconBootstrap /></div>}
              {icons.tailwind && <div className="h-12 w-12 flex items-center"><IconTailwind /></div>}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PortfolioCard;
