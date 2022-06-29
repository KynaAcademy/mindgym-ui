import { useContext } from "react";
import { Theme } from "../contexts/Theme";

export type ModeResolveFunction = <L, D>(light: L, dark: D) => L | D;

export function useMode(): ModeResolveFunction {
  const { resolvedMode } = useContext(Theme);
  const resolver: ModeResolveFunction = (light, dark) =>
    resolvedMode === "light" ? light : dark;
  return resolver;
}
