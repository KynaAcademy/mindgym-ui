import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from "react";
import tw, { styled } from "twin.macro";
import { ButtonIcon } from "./ButtonIcon";

export type ButtonSize = "large" | "small";

type SharedButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  label?: string;
  icon?: ReactElement;
  children?: ReactNode;
  size?: ButtonSize;
};

type ButtonPropsForButtonElement = { href?: never } & SharedButtonProps &
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
  tertiary,
}: SharedButtonProps) => [
  tw`inline-flex items-center border border-transparent rounded-md hover:shadow-sm font-bold uppercase tracking-wide`,
  !size && tw`text-sm px-8 py-3`,
  size === "large" && tw`px-8 py-3 sm:px-8 text-sm`,
  size === "small" && tw`px-3 py-2 sm:px-4 text-xs`,
  !primary &&
    !secondary &&
    !tertiary &&
    tw`dark:bg-slate-800 dark:text-slate-200 dark:border dark:border-slate-200 dark:hover:bg-slate-900 text-slate-700 bg-transparent border border-slate-700 hover:bg-slate-100`,
  tertiary &&
    tw`text-mg-subtle border-mg-subtle hover:border-mg-slate hover:text-mg-slate focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-subtle`,
  secondary &&
    tw`text-white hover:text-mg-slate bg-mg-secondary hover:bg-mg-secondary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-secondary`,
  primary &&
    tw`bg-mg-primary hover:bg-mg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mg-primary`,
];

export const AsButton = styled.button((props: SharedButtonProps) =>
  createStyles(props)
);
export const AsAnchor = styled.a((props: SharedButtonProps) =>
  createStyles(props)
);

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  size,
  icon,
  children,
  className,
  href,
  ...rest
}) => {
  if (href) {
    return (
      <AsAnchor
        className={className}
        icon={icon}
        href={href}
        {...(rest as Partial<AnchorHTMLAttributes<HTMLAnchorElement>>)}
      >
        <ButtonIcon tw="-ml-1 mr-2 h-5 w-5" size={size} icon={icon} />
        {children || label}
      </AsAnchor>
    );
  }
  return (
    <AsButton
      className={className}
      icon={icon}
      {...(rest as Partial<ButtonHTMLAttributes<HTMLButtonElement>>)}
    >
      <ButtonIcon tw="-ml-1 mr-2 h-5 w-5" size={size} icon={icon} />
      {children || label}
    </AsButton>
  );
};
