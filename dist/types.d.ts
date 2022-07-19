import React, { FunctionComponent, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement } from "react";
type SVGProps = {
    mono?: boolean;
    className?: string;
    darkBackground?: boolean;
};
export type LogoProps = {
    variant?: "horizontal" | "pre-horizontal" | "dots" | "default";
} & SVGProps;
export const Logo: FunctionComponent<LogoProps>;
export const DefaultLogo: FunctionComponent<SVGProps>;
export const HLogo: ({ mono, darkBackground, ...props }: SVGProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export const HLogoPre: ({ mono, darkBackground, ...props }: SVGProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export const LogoDots: ({ mono, ...props }: SVGProps) => import("@emotion/react/jsx-runtime").JSX.Element;
type BullitType = "numbers" | "checks" | ReactNode;
export type GuideProps = {
    title: ReactNode;
    items: ReactNode[];
    bullit?: BullitType;
};
export const Guide: FunctionComponent<GuideProps>;
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
type ButtonPropsForButtonElement = {
    href?: never;
} & SharedButtonProps & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;
type ButtonPropsForLink = {
    href: string;
} & SharedButtonProps & Partial<AnchorHTMLAttributes<HTMLAnchorElement>>;
export type ButtonProps = ButtonPropsForButtonElement | ButtonPropsForLink;
export const AsButton: any;
export const AsAnchor: any;
export const Button: FunctionComponent<ButtonProps>;
export type HeroProps = {
    title: string;
    leader?: string;
    follower?: string;
    image?: string;
    imageAlt?: string;
    primaryCTA: {
        label: string;
        href: string;
    };
    secondaryCTA?: {
        label: string;
        href: string;
    };
    header?: ReactNode;
};
export const Hero: FunctionComponent<HeroProps>;
export function classNames(...classes: string[]): string;
export type StakeProps = {
    title: ReactNode;
    subtitle?: ReactNode;
    image?: string;
    imageAlt?: string;
};
export const Stake: FunctionComponent<StakeProps>;
export type ConclusionProps = {
    primary?: boolean;
};
export const Conclusion: any;
export type HighlightProps = {
    primary?: boolean;
    children: ReactNode;
};
export const Highlight: FunctionComponent<HighlightProps>;
export enum TitleLevel {
    h1 = 1,
    h2 = 2,
    h3 = 3,
    h4 = 4
}
export type TitleProps = {
    level?: TitleLevel;
    children: React.ReactNode;
};
export const Title: FunctionComponent<TitleProps>;
type NavbarLink = {
    href: string;
    label: string;
    active?: boolean;
};
export type NavbarProps = {
    links: NavbarLink[];
    darkBackground?: boolean;
    transparent?: boolean;
};
export const Navbar: FunctionComponent<NavbarProps>;
export type ThemeProviderProps = {
    colorScheme?: any;
    children: ReactNode;
};
type UIMode = "light" | "dark" | "os";
export type ThemeContext = {
    mode: UIMode;
    colorScheme: any;
    resolvedMode: "light" | "dark";
    overrideMode: (mode: UIMode) => void;
    resetMode: () => void;
};
export const Theme: React.Context<ThemeContext>;
export const ThemeProvider: ({ children, colorScheme, }: ThemeProviderProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export const GlobalStyles: () => import("@emotion/react/jsx-runtime").JSX.Element;

//# sourceMappingURL=types.d.ts.map
