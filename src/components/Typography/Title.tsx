import { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";

export enum TitleLevel {
  h1 = 1,
  h2,
  h3,
  h4,
}

export type TitleProps = {
  level?: TitleLevel;
  children: React.ReactNode;
};

const H1 = styled.h1(() => [tw`text-5xl font-serif font-black mt-6 mb-2`]);
const H2 = styled.h2(() => [tw`text-3xl font-serif font-black mt-6 mb-2`]);
const H3 = styled.h3(() => [tw`text-xl font-serif font-black mt-6 mb-2`]);
const H4 = styled.h4(() => [tw`text-lg font-serif font-bold mt-6 mb-2`]);

export const Title: FunctionComponent<TitleProps> = ({ level, children }) => {
  switch (level) {
    case TitleLevel.h2:
      return <H2>{children}</H2>;
    case TitleLevel.h3:
      return <H3>{children}</H3>;
    case TitleLevel.h4:
      return <H4>{children}</H4>;
    default:
      return <H1>{children}</H1>;
  }
};
