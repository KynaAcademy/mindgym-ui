import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactElement,
  ReactNode,
} from "react";

import { ButtonIcon } from "./ButtonIcon";
import tw from "tailwind-styled-components";

// import { useMode } from "../../hooks/useMode";

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
  href?: string;
  $a?: any;
  textOnly?: boolean;
};

type ButtonPropsForButtonElement = {
  href?: never;
} & SharedButtonProps &
  Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

type ButtonPropsForLink = {
  href: string;
} & SharedButtonProps &
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;

export type ButtonProps = ButtonPropsForButtonElement | ButtonPropsForLink;

export const Button: FC<ButtonProps> = ({
  label,
  icon,
  children,
  size,
  className,
  href,
  ...rest
}) => {
  // todo - decide on darkMode (we have a built-in Tailwind darkmode)
  // const mode = useMode();
  // const darkMode = mode(false, true);

  // todo - fix: "a" button typescript
  if (href) {
    return (
      <ProtoButton
        $as="a"
        label={label}
        icon={icon}
        className={className}
        size={size}
        href={href}
        // {...(rest as Partial<AnchorHTMLAttributes<HTMLAnchorElement>>)}
        {...(rest as any)} //temp fix
      >
        <ButtonIcon tw="-ml-1 mr-2 h-5 w-5" size={size} icon={icon} />
        {children || label}
      </ProtoButton>
    );
  }

  return (
    <ProtoButton
      label={label}
      icon={icon}
      className={className}
      size={size}
      {...(rest as Partial<ButtonHTMLAttributes<HTMLButtonElement>>)}
    >
      <ButtonIcon tw="-ml-1 mr-2 h-5 w-5" size={size} icon={icon} />
      {children || label}
    </ProtoButton>
  );
};

const ProtoButton = tw.button<ButtonProps>`
inline-flex
min-w-min
justify-around
border
border-transparent
rounded-md
hover:shadow-sm
font-bold
uppercase
tracking-wide

${(p) => !p.size && `text-sm px-8 py-3`}

${(p) =>
  p.size === "large"
    ? `px-8 py-3 sm:px-8 text-sm`
    : p.size === "small"
    ? `px-3 py-2 sm:px-4 text-xs`
    : ``}

${(p) =>
  !p.primary && !p.secondary && !p.tertiary && p.darkMode
    ? `bg-slate-800 text-slate-200 border border-slate-200 hover:bg-slate-900`
    : `text-slate-700 bg-transparent border border-slate-700 hover:bg-slate-100`}

${(p) =>
  p.primary &&
  `bg-mg-primary hover:bg-mg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-primary`}

${(p) =>
  p.secondary &&
  `text-white hover:text-mg-slate bg-mg-secondary hover:bg-mg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-secondary`}

${(p) =>
  p.tertiary &&
  `text-mg-subtle border-mg-subtle hover:border-mg-slate hover:text-mg-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-subtle`}
`;
