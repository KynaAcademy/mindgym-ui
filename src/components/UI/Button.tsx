import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from "react";
import { classNames } from "../../lib/utils/classNames";
import "/src/main.css";

export type ButtonSize = "large" | "small";

type SharedButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  label?: string;
  children?: ReactNode;
  size?: ButtonSize;
};

type ButtonPropsForButtonElement = { href?: string } & SharedButtonProps &
  Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

type ButtonPropsForLink = {
  href: string;
} & SharedButtonProps &
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export type ButtonProps = ButtonPropsForButtonElement | ButtonPropsForLink;

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    primary,
    secondary,
    size,
    label,
    children,
    className,
    href,
    ...rest
  } = props;
  const klassNames = classNames(
    className || "",
    "flex items-center justify-center",
    "border border-transparent rounded-sm shadow-sm",
    "font-bold uppercase",
    !size ? "text-sm px-4 py-3 sm:px-6" : "",
    size === "large" ? "px-6 py-4 sm:px-8 text-lg" : "",
    size === "small" ? "px-3 py-2 sm:px-4 text-xs" : "",
    !primary && !secondary ? "text-slate-700 bg-white hover:bg-slate-100" : "",
    secondary
      ? "rounded text-white tracking-tight bg-pink-600 hover:bg-pink-200"
      : "",
    primary ? "rounded text-slate-800 tracking-tight bg-lime-600 hover:bg-lime-200" : ""
  );

  if (href) {
    return (
      <a
        className={klassNames}
        href={href}
        {...(rest as Partial<AnchorHTMLAttributes<HTMLAnchorElement>>)}
      >
        {children || label}
      </a>
    );
  }
  return (
    <button
      className={klassNames}
      {...(rest as Partial<ButtonHTMLAttributes<HTMLButtonElement>>)}
    >
      {children || label}
    </button>
  );
};
