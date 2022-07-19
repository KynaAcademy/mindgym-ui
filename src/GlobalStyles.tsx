import React from "react";
import { Global } from "@emotion/react";
import { Helmet } from "react-helmet";
import tw, { css, styled, theme, GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors[mg-primary-light]`};
    ${tw`antialiased`}
  }
`;

type HtmlProps = { dark: boolean };
const HTML = styled.html<HtmlProps>(({ dark }) => [tw`h-full`, dark && "dark"]);
const BODY = styled.body<HtmlProps>(({ dark }) => [
  tw`h-full`,
  dark ? tw`bg-slate-800 text-slate-200` : tw`text-slate-900`,
]);

export const GlobalStyles = () => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossorigin"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Literata:opsz@7..72&family=Montserrat&family=Permanent+Marker&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);
