import { useContext } from "react";
import { Theme } from "../contexts/Theme";

function useMode() {
  const { resolvedMode } = useContext(Theme);
  return <L, D>(light: L, dark: D): L | D =>
    resolvedMode === "light" ? light : dark;
}

export default useMode;
