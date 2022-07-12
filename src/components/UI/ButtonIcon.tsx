import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";

import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FunctionComponent,
  ReactNode,
} from "react";

interface Props {
  icon?: string;
  color?: string;
  size?: number;
}

export const ButtonIcon = (props: Props): JSX.Element => {
  const { icon, color, size } = props;

  {
    React.cloneElement(icon, { tw: "..." });
  }

  const classes = [
    `${color ? color : "text-black"}`,
    size ? "h-12" : "h-6",
    size ? "w-12" : "w-6",
  ];

  return (
    // @ts-ignore
    <Icon className={classes.join(" ")} />
  );
};
