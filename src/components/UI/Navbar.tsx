import { KLogo, Logo } from "../Branding/Logo";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";

import { Disclosure } from "@headlessui/react";
import { useMode } from "../../hooks/useMode";

type NavbarLink = {
  href: string;
  label: string;
  active?: boolean;
};

type NavbarLinkProps = {
  darkBackground?: boolean;
  current?: boolean;
};

type NavWrapperProps = {
  transparent?: boolean;
};

export type NavbarProps = {
  links: NavbarLink[];
  darkBackground?: boolean;
  transparent?: boolean;
};

const NavbarLinkElement = styled.a(
  ({ current, darkBackground }: NavbarLinkProps) => [
    tw`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold uppercase tracking-widest`,
    current && darkBackground && tw`border-mg-primary text-white`,
    current && !darkBackground && tw`border-mg-primary text-gray-900`,
    !darkBackground &&
      !current &&
      tw`border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700`,
    darkBackground &&
      !current &&
      tw`text-gray-200 hover:text-gray-100 border-transparent hover:border-gray-300`,
  ]
);

const NavWrapper = styled.div<NavWrapperProps>(({ transparent }) => [
  transparent ? "" : tw`bg-white dark:bg-mg-onyx shadow`,
]);

export const Navbar: FunctionComponent<NavbarProps> = ({
  darkBackground,
  transparent,
  links,
}) => {
  const mode = useMode();
  return (
    <NavWrapper {...{ transparent }}>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div tw="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div tw="flex justify-between h-16">
                <div
                  tw="flex items-center"
                  css={[darkBackground && tw`text-mg-light`]}
                >
                  <a href="/">
                    <Logo variant="dots" mono={darkBackground} tw="block h-8" />
                  </a>
                </div>
                <div tw="hidden sm:ml-6 sm:flex sm:space-x-8 justify-end">
                  {links.map(({ href, label, active }) => {
                    const current =
                      active ||
                      (typeof window !== "undefined" &&
                        window.location.pathname === href);

                    return (
                      <NavbarLinkElement
                        key={label}
                        {...{
                          current,
                          darkBackground: mode(darkBackground, true),
                          href,
                        }}
                      >
                        {label}
                      </NavbarLinkElement>
                    );
                  })}
                </div>
                <div tw="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mg-primary-light">
                    <span tw="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon tw="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon tw="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel tw="sm:hidden">
              <div tw="pt-2 pb-3 space-y-1">
                {/* Current: "bg-lime-50 border-lime-400 text-lime-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                {links.map(({ href, label, active }) => {
                  const current =
                    active ||
                    (typeof window !== "undefined" &&
                      window.location.pathname === href);

                  return current ? (
                    <Disclosure.Button
                      key={label}
                      as="a"
                      href={href}
                      tw="bg-mg-primary-light border-mg-primary-light text-gray-800 hover:bg-mg-primary block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      {label}
                    </Disclosure.Button>
                  ) : (
                    <Disclosure.Button
                      key={label}
                      as="a"
                      href={href}
                      tw="border-transparent text-gray-500 hover:bg-mg-accent hover:border-mg-subtle hover:text-mg-onyx block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      {label}
                    </Disclosure.Button>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </NavWrapper>
  );
};

Navbar.defaultProps = {
  transparent: true,
};
