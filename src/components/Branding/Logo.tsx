import { FunctionComponent } from "react";
import tw, { styled } from "twin.macro";
import useMode from "../../hooks/useMode";

type SVGProps = {
  mono?: boolean;
  className?: string;
  darkBackground?: boolean;
};

export type LogoProps = {
  variant?: "horizontal" | "pre-horizontal" | "dots" | "default";
} & SVGProps;

export const Logo: FunctionComponent<LogoProps> = ({ variant, ...props }) => {
  switch (variant) {
    case "horizontal":
      return <HLogo {...props} />;
    case "pre-horizontal":
      return <HLogoPre {...props} />;
    case "dots":
      return <LogoDots {...props} />;
    default:
      return <DefaultLogo {...props} />;
  }
};

export const DefaultLogo: FunctionComponent<SVGProps> = ({
  mono,
  darkBackground,
  ...props
}: SVGProps) => {
  const mode = useMode();
  return (
    <svg
      viewBox="0 0 989.69 437.93"
      fill="none"
      {...props}
      aria-labelledby="LogoTitleId"
    >
      <title id="LogoTitleID">Mindgym</title>
      <circle
        cx="126.61"
        cy="114.12"
        r="99.25"
        transform="translate(-65.3 108.09) rotate(-45)"
        style={{ fill: mono ? "currentcolor" : "#e61a1a" }}
      />
      <circle
        cx="373.8"
        cy="130.66"
        r="99.25"
        transform="translate(-4.59 287.72) rotate(-45)"
        style={{ fill: mono ? "currentcolor" : "#e61a62" }}
      />
      <circle
        cx="912.12"
        cy="166.67"
        r="99.25"
        transform="translate(127.61 678.91) rotate(-45)"
        style={{ fill: mono ? "currentcolor" : "#50d926" }}
      />
      <g style={{ isolation: "isolate" }}>
        <path
          d="M21.69,311.9h45.8l31.63,89.66h.39l31.83-89.66H177V449.31H146.67V343.92h-.38l-36.1,105.39H87.09L52.35,343.92H52V449.31H21.69Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M204.51,311.9h30.27V449.31H204.51Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M262.34,311.9h41.14l58.42,95.49h.39V311.9h30.27V449.31H353l-60-97.82h-.39v97.82H262.34Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M420.51,311.9h45.41a129.45,129.45,0,0,1,31.34,3.69,71.84,71.84,0,0,1,25.91,11.93A58.5,58.5,0,0,1,540.74,349q6.5,13.2,6.5,32,0,16.69-6.31,29.4a63.11,63.11,0,0,1-17,21.35,74.93,74.93,0,0,1-24.65,13.1,95.54,95.54,0,0,1-29.3,4.47H420.51Zm30.27,109.46H466.5A84.28,84.28,0,0,0,486,419.22a41.65,41.65,0,0,0,15.62-7.08,33.92,33.92,0,0,0,10.38-13q3.79-8.06,3.79-19.7A38.29,38.29,0,0,0,512,361.88a35.14,35.14,0,0,0-10.18-12.33,44.76,44.76,0,0,0-15.05-7.28,67,67,0,0,0-18.14-2.42H450.78Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M692.21,439.6a109.1,109.1,0,0,1-28,10.09,141.89,141.89,0,0,1-29.69,3.11,84.46,84.46,0,0,1-29.69-5.05,67.86,67.86,0,0,1-23.49-14.46A65.48,65.48,0,0,1,566,410.49a83.52,83.52,0,0,1,0-59.77,65.62,65.62,0,0,1,15.43-22.81,68.16,68.16,0,0,1,23.49-14.46,84.69,84.69,0,0,1,29.69-5,110,110,0,0,1,30.37,4,59.47,59.47,0,0,1,24.36,13.68L668,349.36a42.75,42.75,0,0,0-14-9.71q-7.77-3.28-19.41-3.3a45.12,45.12,0,0,0-17.56,3.3,39.64,39.64,0,0,0-13.49,9.22,40.52,40.52,0,0,0-8.64,14.07,53.6,53.6,0,0,0,0,35.42,40.55,40.55,0,0,0,8.64,14A39.22,39.22,0,0,0,617,421.55a44.94,44.94,0,0,0,17.56,3.3,57.82,57.82,0,0,0,17.08-2.23,64.38,64.38,0,0,0,11.45-4.56V395.74H638.45V367.79h53.76Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M752.57,390.7l-51.63-78.8H738.6l29.11,51.43,30.86-51.43h35.9l-51.63,78.8v58.61H752.57Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M844.56,311.9h45.8L922,401.56h.38l31.83-89.66h45.61V449.31H969.55V343.92h-.39l-36.1,105.39H910L875.22,343.92h-.38V449.31H844.56Z"
          transform="translate(-21.69 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
      </g>
    </svg>
  );
};

export const HLogo = ({ mono, darkBackground, ...props }: SVGProps) => {
  const mode = useMode();
  return (
    <svg
      viewBox="0 0 974.81 134.58"
      fill="none"
      {...props}
      aria-labelledby="HLogoTitleId"
    >
      <title id="HLogoTitleID">Mindgym</title>
      <circle
        cx="53.01"
        cy="53.01"
        r="53.01"
        style={{ fill: mono ? "currentcolor" : "#e61a1a" }}
      />
      <circle
        cx="185.02"
        cy="61.84"
        r="53.01"
        style={{
          fill: mono ? "currentcolor" : "#e61a62",
        }}
      />
      <circle
        cx="921.8"
        cy="81.07"
        r="53.01"
        style={{ fill: mono ? "currentcolor" : "#50d926" }}
      />
      <g style={{ isolation: "isolate" }}>
        <path
          d="M314.22,74.2h24.46l16.9,47.89h.21l17-47.89h24.35v73.38H381V91.3h-.2l-19.28,56.28H349.15L330.6,91.3h-.21v56.28H314.22Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M411.86,74.2H428v73.38H411.86Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M442.75,74.2h22l31.2,51h.21v-51H512.3v73.38H491.15l-32-52.24h-.2v52.24H442.75Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M527.22,74.2h24.25a69.3,69.3,0,0,1,16.74,2,38.36,38.36,0,0,1,13.84,6.37A31.3,31.3,0,0,1,591.43,94q3.47,7.05,3.47,17.1a34.82,34.82,0,0,1-3.37,15.7,33.61,33.61,0,0,1-9.07,11.4,40,40,0,0,1-13.16,7,51.06,51.06,0,0,1-15.65,2.38H527.22Zm16.17,58.46h8.39a45.15,45.15,0,0,0,10.42-1.14,22.15,22.15,0,0,0,8.34-3.79,18.12,18.12,0,0,0,5.55-6.94,24.58,24.58,0,0,0,2-10.52,20.49,20.49,0,0,0-2-9.38,18.8,18.8,0,0,0-5.44-6.58,23.92,23.92,0,0,0-8-3.89,35.89,35.89,0,0,0-9.7-1.29h-9.53Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M672.33,142.4a58.33,58.33,0,0,1-14.93,5.39,75.5,75.5,0,0,1-15.86,1.66,45.18,45.18,0,0,1-15.86-2.7A36.18,36.18,0,0,1,613.14,139a35,35,0,0,1-8.24-12.18,41.37,41.37,0,0,1-2.95-16,41.44,41.44,0,0,1,2.95-16,35,35,0,0,1,8.24-12.18A36.48,36.48,0,0,1,625.68,75a45.18,45.18,0,0,1,15.86-2.7,58.51,58.51,0,0,1,16.22,2.13,31.75,31.75,0,0,1,13,7.31L659.37,94.2A22.81,22.81,0,0,0,651.91,89a26.72,26.72,0,0,0-10.37-1.76A24.12,24.12,0,0,0,632.16,89,21,21,0,0,0,625,94a21.45,21.45,0,0,0-4.61,7.51,28.6,28.6,0,0,0,0,18.92,21.69,21.69,0,0,0,4.61,7.46,20.88,20.88,0,0,0,7.2,4.92,23.94,23.94,0,0,0,9.38,1.76,30.67,30.67,0,0,0,9.12-1.19,34,34,0,0,0,6.12-2.43V119H643.62V104.05h28.71Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M704.56,116.28,677,74.2H697.1l15.55,27.47L729.13,74.2H748.3l-27.57,42.08v31.3H704.56Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M753.69,74.2h24.46l16.9,47.89h.2l17-47.89h24.36v73.38H820.44V91.3h-.21L801,147.58H788.62L770.07,91.3h-.21v56.28H753.69Z"
          transform="translate(-24.19 -14.87)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
      </g>
    </svg>
  );
};

export const HLogoPre = ({ mono, darkBackground, ...props }: SVGProps) => {
  const mode = useMode();
  return (
    <svg
      viewBox="0 0 839.81 228.3"
      fill="none"
      {...props}
      aria-labelledby="HLogoPreTitleId"
    >
      <title id="HLogoPreTitleID">Mindgym</title>
      <circle
        cx="68.08"
        cy="183.13"
        r="47.89"
        transform="translate(-143.95 209.41) rotate(-80.52)"
        style={{
          fill: mono ? "currentcolor" : "#e61a1a",
        }}
      />
      <circle
        cx="187.36"
        cy="191.11"
        r="47.89"
        transform="translate(-52.19 333.72) rotate(-80.52)"
        style={{ fill: mono ? "currentcolor" : "#e61a62" }}
      />
      <circle
        cx="172.5"
        cy="58.6"
        r="47.89"
        transform="translate(66.1 208.39) rotate(-80.52)"
        style={{ fill: mono ? "currentcolor" : "#50d926" }}
      />
      <g style={{ isolation: "isolate" }}>
        <path
          d="M283.07,90.44h27l18.66,52.89H329l18.77-52.89h26.9v81.05H356.79V109.33h-.23l-21.29,62.16H321.65l-20.49-62.16h-.23v62.16H283.07Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M390.9,90.44h17.86v81.05H390.9Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M425,90.44h24.26l34.46,56.32H484V90.44h17.86v81.05H478.47l-35.37-57.7h-.23v57.7H425Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M518.31,90.44h26.78a76.47,76.47,0,0,1,18.49,2.18,42.17,42.17,0,0,1,15.28,7,34.49,34.49,0,0,1,10.36,12.65q3.84,7.78,3.84,18.88a38.56,38.56,0,0,1-3.72,17.35,37.38,37.38,0,0,1-10,12.59,44.27,44.27,0,0,1-14.54,7.72,56.26,56.26,0,0,1-17.28,2.64H518.31ZM536.17,155h9.27a49.85,49.85,0,0,0,11.5-1.26,24.57,24.57,0,0,0,9.22-4.17,20.17,20.17,0,0,0,6.12-7.67,27.18,27.18,0,0,0,2.23-11.62,22.63,22.63,0,0,0-2.23-10.36,20.72,20.72,0,0,0-6-7.27,26.25,26.25,0,0,0-8.87-4.29,39.21,39.21,0,0,0-10.7-1.43H536.17Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M678.56,165.76a64.47,64.47,0,0,1-16.48,6,83.73,83.73,0,0,1-17.51,1.83,50,50,0,0,1-17.52-3A39.9,39.9,0,0,1,613.2,162a38.71,38.71,0,0,1-9.1-13.45,49.27,49.27,0,0,1,0-35.25,38.71,38.71,0,0,1,9.1-13.45,40,40,0,0,1,13.85-8.53,49.8,49.8,0,0,1,17.52-3,64.63,64.63,0,0,1,17.91,2.35,35,35,0,0,1,14.37,8.07l-12.59,13.73a25.28,25.28,0,0,0-8.25-5.72,29.28,29.28,0,0,0-11.44-1.94,26.46,26.46,0,0,0-10.36,1.94,23.25,23.25,0,0,0-8,5.44,23.86,23.86,0,0,0-5.09,8.3,31.54,31.54,0,0,0,0,20.89,24,24,0,0,0,5.09,8.24,23.25,23.25,0,0,0,8,5.44,26.46,26.46,0,0,0,10.36,1.94,34,34,0,0,0,10.07-1.31,38.75,38.75,0,0,0,6.75-2.69V139.89H646.86V123.41h31.7Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M714.17,136.92,683.72,90.44h22.2l17.17,30.34,18.2-30.34h21.18L732,136.92v34.57H714.17Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
        <path
          d="M768.42,90.44h27l18.66,52.89h.23L833.1,90.44H860v81.05H842.14V109.33h-.23l-21.29,62.16H807l-20.49-62.16h-.23v62.16H768.42Z"
          transform="translate(-20.19 -10.7)"
          fill={
            mono
              ? "currentcolor"
              : darkBackground
              ? "#ffffff"
              : mode("#000", "currentcolor")
          }
        />
      </g>
    </svg>
  );
};

export const LogoDots = ({ mono, ...props }: SVGProps) => {
  return (
    <svg viewBox="0 0 936.37 993.99" fill="none" {...props}>
      <circle
        cx="252.34"
        cy="765.73"
        r="208.52"
        transform="translate(-511.36 387.7) rotate(-45)"
        style={{ fill: mono ? "currentcolor" : "#e61a1a" }}
      />
      <circle
        cx="771.66"
        cy="800.47"
        r="208.52"
        transform="translate(-383.82 765.09) rotate(-45)"
        style={{ fill: mono ? "currentcolor" : "#e61a62" }}
      />
      <circle
        cx="706.98"
        cy="223.53"
        r="208.52"
        transform="translate(5.2 550.37) rotate(-45)"
        style={{ fill: mono ? "currentcolor" : "#50d926" }}
      />
    </svg>
  );
};
