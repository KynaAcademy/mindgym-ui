import { FunctionComponent } from "react";
import "/src/main.css";

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

export const Title: FunctionComponent<TitleProps> = ({ level, children }) => {
  switch (level) {
    case TitleLevel.h2:
      return <h2 className="text-3xl font-black mt-6 mb-2">{children}</h2>;
    case TitleLevel.h3:
      return <h3 className="text-xl font-black mt-6 mb-2">{children}</h3>;
    case TitleLevel.h4:
      return <h4 className="text-lg font-bold mt-6 mb-2">{children}</h4>;
    default:
      return <h1 className="text-5xl font-black mt-6 mb-2">{children}</h1>;
  }
};
