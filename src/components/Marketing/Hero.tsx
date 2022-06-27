import React, { FunctionComponent, ReactNode } from "react";
import { Button } from "../UI/Button";
import tw, { styled } from "twin.macro";
import useMode from "../../hooks/useMode";

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

type CTAWrapperProps = { grid?: boolean };

const CTAWrapper = styled.div<CTAWrapperProps>(({ grid }) => [
  tw`space-y-4`,
  grid && tw`sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5`,
]);

const Inset = styled.div(() => {
  const mode = useMode();

  return [tw`absolute inset-x-0 bottom-0 h-1/2`, mode(tw`bg-slate-100`, "")];
});

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
    <div tw="relative">
      <Inset />
      <div tw="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div tw="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div tw="absolute inset-0">
            {image && (
              <>
                <img
                  tw="h-full w-full object-cover"
                  src={image}
                  alt={imageAlt || "background image"}
                />
                <div tw="absolute inset-0 bg-slate-800 opacity-60 mix-blend-multiply" />
              </>
            )}
            {!image && (
              <div tw="absolute inset-0 bg-slate-800 mix-blend-multiply" />
            )}
          </div>
          {header && <div tw="z-50 relative px-4 py-4 -mb-16">{header}</div>}
          <div tw="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 tw="text-4xl font-extrabold lg:text-center sm:text-5xl lg:text-6xl">
              {leader && <span tw="block text-gray-200 text-sm">{leader}</span>}
              <span tw="block text-white font-serif mt-4 tracking-tight">
                {title}
              </span>
            </h1>
            {follower && (
              <p tw="px-2 italic font-light mt-2 max-w-lg mx-auto lg:text-center text-base text-gray-300 sm:max-w-3xl">
                {follower}
              </p>
            )}
            <div tw="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <CTAWrapper grid={!!secondaryCTA}>
                <Button primary size="large" {...primaryCTA} />
                {secondaryCTA && (
                  <Button secondary size="large" {...secondaryCTA} />
                )}
              </CTAWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
