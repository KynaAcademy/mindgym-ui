import React, { FC, FunctionComponent, ReactNode } from "react";

import { Button } from "../UI/Button";
import tw from "tailwind-styled-components";
// import tw, { styled } from "twin.macro";
import { useMode } from "../../hooks/useMode";

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

export const Hero: FC<HeroProps> = ({
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
    <HeroWrapper>
      <Inset />
      <div tw="max-w-7xl mx-auto">
        <div tw="relative sm:overflow-hidden">
          <ImageWrapper>
            {image && (
              <>
                <Image src={image} alt={imageAlt || "background image"} />
                <ImageDiv />
              </>
            )}
            {!image && <NoImageDiv />}
          </ImageWrapper>
          {header && <HeaderWrapper>{header}</HeaderWrapper>}
          <LeaderWrapper>
            <LeaderH1>
              {leader && <LeaderSpan>{leader}</LeaderSpan>}
              <TitleSpan>{title}</TitleSpan>
            </LeaderH1>
            {follower && <FollowerParagraph>{follower}</FollowerParagraph>}
            <ButtonWrapper>
              <CTAWrapper grid={!!secondaryCTA}>
                <Button primary size="large" {...primaryCTA} />
                {secondaryCTA && (
                  <Button secondary size="large" {...secondaryCTA} />
                )}
              </CTAWrapper>
            </ButtonWrapper>
          </LeaderWrapper>
        </div>
      </div>
    </HeroWrapper>
  );
};

const CTAWrapper = tw.div<CTAWrapperProps>`
space-y-4

${(p) =>
  p.grid && "sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"}
`;

const HeroWrapper = tw.div`
relative
`;

const Inset = tw.div`
absolute
inset-x-0
bottom-0
h-1/2
bg-slate-100
dark:bg-slate-800
`;

const ImageWrapper = tw.div`
absolute
inset-0
`;

const Image = tw.img`
h-full
w-full
object-cover
`;

const ImageDiv = tw.div`
absolute
inset-0
bg-slate-800
opacity-60
mix-blend-multiply
`;

const NoImageDiv = tw.div`
absolute
inset-0
bg-slate-800
mix-blend-multiply
`;

const HeaderWrapper = tw.div`
z-50
relative
px-4
py-4
-mb-16
`;

const LeaderWrapper = tw.div`
relative
px-4
py-16
sm:px-6
sm:py-24
lg:py-32
lg:px-8
text-center
`;

const LeaderH1 = tw.h1`
text-4xl
md:max-w-2xl
mx-auto
font-bold
font-serif
pb-2
lg:pb-4
tracking-tight
`;

const LeaderSpan = tw.span`
block
font-sans
text-white
text-lg
pb-0
`;

const TitleSpan = tw.span`
block
text-white
font-serif
mt-4
`;

const FollowerParagraph = tw.p`
px-2
italic
font-light
mt-2
max-w-lg
mx-auto
lg:text-center
text-base
text-gray-300
sm:max-w-3xl
`;

const ButtonWrapper = tw.div`
mt-10
max-w-sm
mx-auto
sm:max-w-none
sm:flex
sm:justify-center
`;
