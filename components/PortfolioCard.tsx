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

const PortfolioCard = ({ slug, title, description, imageUrl, icons }: any) => {
  return (
    <Link href={slug}>
      <a>
        <div className="group border-2 rounded-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border-dark transition-all duration-300 dark:border-light hover:-translate-x-2 hover:-translate-y-2 hover:border-b-8 hover:border-r-8 hover:border-primary dark:hover:border-secondary">
          <div className="w-full">
            <Image
              src={imageUrl}
              alt={title}
              width={1280}
              height={720}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between p-4">
            <h3 className="normal-text text-3xl font-semibold mb-4 group-hover:text-primary dark:group-hover:text-secondary">{title}</h3>
            <p className="normal-text">{description}</p>
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
              {icons.js && <IconJavascript />}
              {icons.react && <IconReact />}
              {icons.next && <IconNext />}
              {icons.gatsby && <IconGatsby />}
              {icons.createReactApp && <IconCraeteReactApp />}
              {icons.bootstrap && <IconBootstrap />}
              {icons.tailwind && <IconTailwind />}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PortfolioCard;
