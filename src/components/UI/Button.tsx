import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from "react";
import tw, { styled } from "twin.macro";
import useMode from "../../hooks/useMode";

export type ButtonSize = "large" | "small";

type SharedButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  label?: string;
  children?: ReactNode;
  size?: ButtonSize;
  darkMode?: boolean;
};

type ButtonPropsForButtonElement = { href?: string } & SharedButtonProps &
  Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

type ButtonPropsForLink = {
  href: string;
} & SharedButtonProps &
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export type ButtonProps = ButtonPropsForButtonElement | ButtonPropsForLink;

const createStyles = ({
  size,
  primary,
  secondary,
  darkMode,
}: SharedButtonProps) => [
  tw`flex items-center justify-center border border-transparent rounded-sm shadow-sm font-bold uppercase`,
  !size && tw`text-sm px-4 py-3 sm:px-6`,
  size === "large" && tw`px-6 py-4 sm:px-8 text-lg`,
  size === "small" && tw`px-3 py-2 sm:px-4 text-xs`,
  !primary &&
    !secondary &&
    (darkMode
      ? tw`bg-slate-800 text-slate-200 border border-slate-200 hover:bg-slate-900`
      : tw`text-slate-700 bg-white border border-slate-700 hover:bg-slate-100`),
  secondary &&
    tw`rounded text-white tracking-tight bg-pink-600 hover:bg-pink-200`,
  primary &&
    tw`rounded text-slate-800 tracking-tight bg-lime-600 hover:bg-lime-200`,
];

export const AsButton = styled.button((props: SharedButtonProps) =>
  createStyles(props)
);
export const AsAnchor = styled.a((props: SharedButtonProps) =>
  createStyles(props)
);

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const mode = useMode();
  const { label, children, className, href, ...rest } = props;
  const darkMode = mode(false, true);

  if (href) {
    return (
      <AsAnchor
        darkMode={darkMode}
        className={className}
        href={href}
        {...(rest as Partial<AnchorHTMLAttributes<HTMLAnchorElement>>)}
      >
        {children || label}
      </AsAnchor>
    );
  }
  return (
    <AsButton
      darkMode={darkMode}
      className={className}
      {...(rest as Partial<ButtonHTMLAttributes<HTMLButtonElement>>)}
    >
      {children || label}
    </AsButton>
  );
};
