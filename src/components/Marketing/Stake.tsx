import { FunctionComponent, ReactNode } from "react";
import useMode from "../../hooks/useMode";
import { classNames } from "../../lib/utils/classNames";

export type StakeProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export const Stake: FunctionComponent<StakeProps> = ({
  title,
  subtitle,
  image,
  imageAlt,
}) => {
  const mode = useMode();

  return (
    <section
      className={classNames(
        mode("bg-slate-100", "bg-slate-800"),
        "w-full mx-0 max-w-full px-0 py-6 sm:py-12"
      )}
    >
      <header className="relative px-4 py-4 sm:px-6 sm:py-6 lg:py-8 lg:px-8 text-center">
        <h2 className="font-light tracking-wide uppercase text-2xl">
          {title}
          {subtitle && (
            <span className="block text-base capitalize my-4">{subtitle}</span>
          )}
        </h2>
      </header>
      <div className="">
        {image && (
          <img
            className="w-full object-cover"
            src={image}
            alt={imageAlt || "background image"}
          />
        )}
      </div>
    </section>
  );
};
