import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactElement,
  ReactNode,
} from "react";

import { ButtonIcon } from "./ButtonIcon";
import tw from "tailwind-styled-components";
import { useMode } from "../../hooks/useMode";

// import tw, { styled } from "twin.macro";

export type ButtonSize = "large" | "small";

type SharedButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  label?: string;
  icon?: ReactElement;
  children?: ReactNode;
  size?: ButtonSize;
  darkMode?: boolean;
};

type ButtonPropsForButtonElement = { href?: never } & SharedButtonProps &
  Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

type ButtonPropsForLink = {
  href: string;
} & SharedButtonProps &
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export type ButtonProps = ButtonPropsForButtonElement | ButtonPropsForLink;

// const createStyles = ({
//   size,
//   primary,
//   secondary,
//   tertiary,
//   darkMode,
// }: SharedButtonProps) => [
//   tw`inline-flex items-center border border-transparent rounded-md hover:shadow-sm font-bold uppercase tracking-wide`,
//   !size && tw`text-sm px-8 py-3`,
//   size === "large" && tw`px-8 py-3 sm:px-8 text-sm`,
//   size === "small" && tw`px-3 py-2 sm:px-4 text-xs`,
//   !primary &&
//     !secondary &&
//     !tertiary &&
//     (darkMode
//       ? tw`bg-slate-800 text-slate-200 border border-slate-200 hover:bg-slate-900`
//       : tw`text-slate-700 bg-transparent border border-slate-700 hover:bg-slate-100`),
//   tertiary &&
//     tw`text-mg-subtle border-mg-subtle hover:border-mg-slate hover:text-mg-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-subtle`,
//   secondary &&
//     tw`text-white hover:text-mg-slate bg-mg-secondary hover:bg-mg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-secondary`,
//   primary &&
//     tw`bg-mg-primary hover:bg-mg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-primary`,
// ];

// export const AsButton = styled.button((props: SharedButtonProps) =>
//   createStyles(props)
// );
// export const AsAnchor = styled.a((props: SharedButtonProps) =>
//   createStyles(props)
// );

export const Button: FC<ButtonProps> = ({
  label,
  size,
  icon,
  children,
  className,
  href,
  ...rest
}) => {
  const mode = useMode();
  const darkMode = mode(false, true);

  if (href) {
    return (
      <ProtoButton
        darkMode={darkMode}
        className={className}
        icon={icon}
        href={href}
        {...(rest as Partial<AnchorHTMLAttributes<HTMLAnchorElement>>)}
      >
        <ButtonIcon tw="-ml-1 mr-2 h-5 w-5" size={size} icon={icon} />
        {children || label}
      </ProtoButton>
    );
  }
  return (
    // <AsButton
    //   darkMode={darkMode}
    //   className={className}
    //   icon={icon}
    //   {...(rest as Partial<ButtonHTMLAttributes<HTMLButtonElement>>)}
    // >
    //   <ButtonIcon tw="-ml-1 mr-2 h-5 w-5" size={size} icon={icon} />
    //   {children || label}
    // </AsButton>
    null
  );
};

const ProtoButton = tw.button<ButtonProps>`
inline-flex
items-center
border
border-transparent
rounded-md
hover:shadow-sm
font-bold
uppercase
tracking-wide

${(p) => !p.size && "text-sm px-8 py-3"}
${(p) => p.size === "large" && "px-8 py-3 sm:px-8 text-sm"}
${(p) => p.size === "small" && "px-3 py-2 sm:px-4 text-xs"}
${(p) =>
  !p.primary && !p.secondary && !p.tertiary && p.darkMode
    ? "bg-slate-800 text-slate-200 border-slate-200 hover:bg-slate-900"
    : "text-slate-700 bg-transparent border-slate-700 hover:bg-slate-100"}
${(p) =>
  p.tertiary &&
  "text-mg-subtle border-mg-subtle hover:border-mg-slate hover:text-mg-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-subtle"}
${(p) =>
  p.secondary &&
  "text-white hover:text-mg-slate bg-mg-secondary hover:bg-mg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-secondary"}
${(p) =>
  p.primary &&
  "bg-mg-primary hover:bg-mg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-primary"}
`;
