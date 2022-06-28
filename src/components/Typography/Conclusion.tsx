import tw, { styled } from "twin.macro";

export type ConclusionProps = {
  primary?: boolean;
  children: string;
};

export const Conclusion = styled.p<ConclusionProps>(({ primary }) => [
  tw`uppercase font-bold font-sans py-4`,
  primary ? tw`text-lime-600` : tw`text-pink-600`,
]);
