import { FunctionComponent, ReactNode } from "react";

import tw from "tailwind-styled-components";

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
        <BullitWrapper>
          <NumWrapper>{num}</NumWrapper>
        </BullitWrapper>
      );

    case "checks":
      return <ChecksWrapper>✔</ChecksWrapper>;

    default:
      return <DefaultWrapper>{type}</DefaultWrapper>;
  }
};

export const Guide: FunctionComponent<GuideProps> = ({
  title,
  items,
  bullit,
}) => {
  return (
    <SectionWrapper>
      <div className="container">
        <GuideHeader>{title}</GuideHeader>
        <GuideArticle>
          <GuideUl>
            {items.map((item, i) => (
              <GuideLi key={i}>
                <Bullit type={bullit} num={i + 1} />
                {item}
              </GuideLi>
            ))}
          </GuideUl>
        </GuideArticle>
      </div>
    </SectionWrapper>
  );
};

Guide.defaultProps = {
  bullit: "numbers",
};

const SectionWrapper = tw.section`
p-0
m-0
text-slate-900
dark:text-slate-200
`;

const BullitWrapper = tw.span`
flex
rounded-full
bg-pink-600
text-white
p-4
w-6
h-6
mr-2
items-center
`;

const NumWrapper = tw.span`
block
-ml-1
`;

const ChecksWrapper = tw.span`
mr-2
text-2xl
font-black
`;

const DefaultWrapper = tw.span`
mr-2
`;

const GuideHeader = tw.h1`
text-3xl
font-extrabold
font-serif
capitalize
sm:text-4xl
lg:text-5xl
lg:text-center
`;

const GuideArticle = tw.article`
w-full
lg:mx-16
lg:max-w-lg
`;

const GuideUl = tw.ul`
flex
my-8
space-y-2
flex-col
`;

const GuideLi = tw.li`
flex
items-center
font-black
font-sans
text-lg
`;
