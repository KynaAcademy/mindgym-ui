/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createContext, ReactNode, useEffect, useState } from "react";

export type ThemeProviderProps = {
  colorScheme?: any;
  children: ReactNode;
};

type UIMode = "light" | "dark" | "os";

const initialUIMode: UIMode = "os";

const defaultOverride = () => initialUIMode;
const defaultReset = () => initialUIMode;

export type ThemeContext = {
  mode: UIMode;
  colorScheme: any;
  resolvedMode: "light" | "dark";
  overrideMode: (mode: UIMode) => void;
  resetMode: () => void;
};

export const Theme = createContext<ThemeContext>({
  mode: "os",
  colorScheme: "lime",
  resolvedMode: "light",
  overrideMode: defaultOverride,
  resetMode: defaultReset,
});

export const ThemeProvider = ({
  children,
  colorScheme,
}: ThemeProviderProps) => {
  const resolveMode = () => {
    if (typeof window === "undefined") return "light";

    return localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  };

  const overrideMode = (mode: UIMode) => {
    dispatch(mode);
    mode === "os" ? resetMode() : (localStorage.theme = mode);
    updateMode();
  };

  const resetMode = () => {
    dispatch("os");
    localStorage.removeItem("theme");
    updateMode();
  };

  const updateMode = () => {
    const currentMode = resolveMode();
    dispatch(currentMode);
    currentMode === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  const [modeState, dispatch] = useState<UIMode>(resolveMode());

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        updateMode();
      });
  });

  return (
    <Theme.Provider
      value={{
        mode: modeState,
        colorScheme: colorScheme || "lime",
        resolvedMode: resolveMode(),
        overrideMode,
        resetMode,
      }}
    >
      {children}
    </Theme.Provider>
  );
};
