import { FunctionComponent, ReactNode } from "react";
import useMode from "../../hooks/useMode";
import { classNames } from "../../lib/utils/classNames";
import tw, { styled } from "twin.macro";

export type StakeProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
};

const Section = styled.section(() => {
  const mode = useMode();
  return [
    tw`w-full mx-0 max-w-full px-0 py-6 sm:py-12`,
    mode(tw`bg-slate-100 text-slate-900`, tw`bg-slate-800 text-slate-200`),
  ];
});

const Subtitle = styled.section(() => {
  const mode = useMode();
  return [
    tw`block text-base capitalize my-5 p-0`,
    mode(tw`text-slate-700`, tw`text-slate-400`),
  ];
});

export const Stake: FunctionComponent<StakeProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
}) => {
  const mode = useMode();

  return (
    <Section>
      <header tw="relative px-4 py-4 sm:px-6 sm:py-6 lg:py-8 lg:px-8 text-center">
        <h2 tw="font-light tracking-wide uppercase text-2xl">
          {title}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </h2>
      </header>
      <div>
        {image && (
          <img
            tw="w-full object-cover"
            src={image}
            alt={imageAlt || "background image"}
          />
        )}
      </div>
    </Section>
  );
};
