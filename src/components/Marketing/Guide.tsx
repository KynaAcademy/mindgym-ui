import { FunctionComponent, ReactNode } from "react";
import useMode from "../../hooks/useMode";
import tw, { styled } from "twin.macro";

type BullitType = "numbers" | "checks" | ReactNode;

export type GuideProps = {
  title: ReactNode;
  items: ReactNode[];
  bullit?: BullitType;
};

type BullitProps = {
  type: BullitType;
  num: string | number;
};

const Bullit: FunctionComponent<BullitProps> = ({ type, num }) => {
  switch (type) {
    case "numbers":
      return (
        <span tw="flex rounded-full bg-pink-600 text-white p-4 w-6 h-6 mr-2 items-center">
          <span tw="block -ml-1">{num}</span>
        </span>
      );

    case "checks":
      return <span tw="mr-2 text-2xl font-black">✔</span>;

    default:
      return <span tw="mr-2">{type}</span>;
  }
};

const Section = styled.section(() => {
  const mode = useMode();
  return [tw`p-0 m-0`, mode(tw`text-slate-900`, tw`text-slate-200`)];
});

export const Guide: FunctionComponent<GuideProps> = ({
  title,
  items,
  bullit,
}) => {
  const mode = useMode();

  return (
    <Section>
      <div tw="container">
        <h2 tw="text-4xl font-black tracking-tight font-sans capitalize">
          {title}
        </h2>
        <ul tw="flex my-8 space-y-2 flex-col">
          {items.map((item, i) => (
            <li tw="flex items-center font-black font-sans text-lg" key={i}>
              <Bullit type={bullit} num={i + 1} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

Guide.defaultProps = {
  bullit: "numbers",
};
