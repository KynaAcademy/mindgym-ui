import tw from "tailwind-styled-components";

export type ConclusionProps = {
  primary?: boolean;
};

export const Conclusion = tw.p<ConclusionProps>`
uppercase
font-bold
font-sans
py-4

${(p) => (p.primary ? `text-lime-600` : `text-pink-600`)}
`;

Conclusion.displayName = "Conclusion";
