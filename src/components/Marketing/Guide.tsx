import { FunctionComponent, ReactNode } from "react";
import useMode from "../../hooks/useMode";
import { classNames } from "../../lib/utils/classNames";

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
  const mode = useMode();

  switch (type) {
    case "numbers":
      return (
        <span className="flex rounded-full bg-pink-600 text-white p-4 w-6 h-6 mr-2 items-center">
          <span className="block -ml-1">{num}</span>
        </span>
      );

    case "checks":
      return (
        <span
          className={classNames(
            "mr-2 text-2xl font-black",
            mode("text-slate-800", "text-slate-400")
          )}
        >
          ✔
        </span>
      );

    default:
      return <span className="mr-2">{type}</span>;
  }
};

export const Guide: FunctionComponent<GuideProps> = ({
  title,
  items,
  bullit,
}) => {
  const mode = useMode();

  return (
    <section className="p-0 m-0">
      <div className="container">
        <h2 className="text-4xl font-black tracking-tight font-sans capitalize">
          {title}
        </h2>
        <ul className="flex my-8 space-y-2 flex-col">
          {items.map((item, i) => (
            <li
              className={classNames(
                "flex items-center font-black font-sans text-lg",
                mode("text-slate-400", "text-slate-600")
              )}
              key={i}
            >
              <Bullit type={bullit} num={i + 1} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Guide.defaultProps = {
  bullit: "numbers",
};
