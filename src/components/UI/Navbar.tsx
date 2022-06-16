import { FunctionComponent } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { classNames } from "../../lib/utils/classNames";
import { Logo, HLogoPre } from "../Branding/Logo";

type NavbarLink = {
  href: string;
  label: string;
  active?: boolean;
};

export type NavbarProps = {
  onDarkBackground?: boolean;
  transparent?: boolean;
  links: NavbarLink[];
};

export const Navbar: FunctionComponent<NavbarProps> = ({
  onDarkBackground,
  transparent,
  links,
}) => {
  return (
    <Disclosure
      as="nav"
      className={classNames(transparent ? "" : "bg-white shadow")}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <HLogoPre
                    onDarkBackground={onDarkBackground}
                    className="block lg:hidden h-8 w-auto"
                  />
                  <Logo
                    onDarkBackground={onDarkBackground}
                    className="hidden lg:block h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {links.map(({ href, label, active }) => {
                    const current = active || window.location.pathname === href;

                    return (
                      <a
                        key={href}
                        href={href}
                        className={classNames(
                          "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium uppercase",
                          current && onDarkBackground
                            ? "border-lime-400 text-white"
                            : "",
                          current && !onDarkBackground
                            ? "border-lime-400 text-gray-900"
                            : "",
                          !onDarkBackground && !current
                            ? "border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700"
                            : "",
                          onDarkBackground && !current
                            ? "text-gray-200 hover:text-gray-100 border-transparent hover:border-gray-300"
                            : ""
                        )}
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-lime-50 border-lime-400 text-lime-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-lime-50 border-lime-400 text-lime-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

Navbar.defaultProps = {
  transparent: true,
};
