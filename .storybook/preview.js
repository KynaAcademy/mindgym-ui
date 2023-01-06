import "../styles/globals.css";

// import React, { Children, useContext } from "react";
// import { Theme, ThemeProvider } from "../src";
// import tw, { css } from "twin.macro";

// import { GlobalStyles } from "../src/GlobalStyles";
// import { useDarkMode } from "storybook-dark-mode";

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };

// const backgroundColor = css`
//   html {
//     background-color: ${tw`bg-white`};

//     &.dark {
//       background-color: ${tw`bg-slate-800`};
//     }
//   }
// `;

// const StoryWrapper = ({ children }) => {
//   const dark = useDarkMode();
//   const { overrideMode } = useContext(Theme);
//   overrideMode(dark ? "dark" : "light");
//   return <>{children}</>;
// };

// export const decorators = [
//   (Story) => {
//     return (
//       <StoryWrapper>
//         <Story />
//       </StoryWrapper>
//     );
//   },
// ];
