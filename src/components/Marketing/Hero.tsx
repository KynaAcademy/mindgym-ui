import { FunctionComponent, ReactNode } from "react";
import { classNames } from "../../lib/utils/classNames";
import { Button } from "../UI/Button";
import "/src/main.css";

export type HeroProps = {
  title: string;
  leader?: string;
  follower?: string;
  image?: string;
  imageAlt?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  header?: ReactNode;
};

export const Hero: FunctionComponent<HeroProps> = ({
  header,
  title,
  leader,
  follower,
  image,
  imageAlt,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            {image && (
              <>
                <img
                  className="h-full w-full object-cover"
                  src={image}
                  alt={imageAlt || "background image"}
                />
                <div className="absolute inset-0 bg-slate-800 opacity-60 mix-blend-multiply" />
              </>
            )}
            {!image && (
              <div className="absolute inset-0 bg-slate-800 mix-blend-multiply" />
            )}
          </div>
          {header && (
            <div className="z-50 relative px-4 py-4 -mb-16">{header}</div>
          )}
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-4xl font-extrabold lg:text-center sm:text-5xl lg:text-6xl">
              {leader && (
                <span className="block text-gray-200 text-sm">{leader}</span>
              )}
              <span className="block text-white font-serif mt-4 tracking-tight">
                {title}
              </span>
            </h1>
            {follower && (
              <p className="px-2 italic font-light mt-2 max-w-lg mx-auto lg:text-center text-base text-gray-300 sm:max-w-3xl">
                {follower}
              </p>
            )}
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div
                className={classNames(
                  "space-y-4",
                  secondaryCTA
                    ? "sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
                    : ""
                )}
              >
                <Button primary size="large" {...primaryCTA} />
                {secondaryCTA && (
                  <Button secondary size="large" {...secondaryCTA} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
