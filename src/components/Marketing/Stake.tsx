import { FC, ReactNode } from "react";

import tw from "tailwind-styled-components";

export type StakeProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export const Stake: FC<StakeProps> = ({ title, subtitle, image, imageAlt }) => {
  return (
    <Section>
      <Header>
        <H2>
          {title}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </H2>
      </Header>
      <div>
        {image && <Image src={image} alt={imageAlt || "background image"} />}
      </div>
    </Section>
  );
};

const Section = tw.section`
w-full
mx-0
max-w-full
px-0
py-6
sm:py-12
bg-slate-100
dark:bg-slate-800
text-slate-900
dark:text-slate-200
`;

const Header = tw.header`
relative
px-4
py-4
sm:px-6
sm:py-6
lg:py-8
lg:px-8
text-center
`;

const H2 = tw.h2`
font-light
tracking-wide
uppercase
text-2xl`;

const Subtitle = tw.section`
block
text-base
capitalize
my-5
p-0
text-slate-700
dark:text-slate-400
`;

const Image = tw.img`
w-full
object-cover
`;
