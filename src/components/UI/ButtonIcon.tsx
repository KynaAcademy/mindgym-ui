import React, { FC, ReactElement } from "react";
import { ButtonSize } from "./Button";

interface Props {
  icon?: ReactElement;
  color?: string;
  size?: ButtonSize;
}

export const ButtonIcon: FC<Props> = ({ icon, ...props }) => {
  if (!icon) return null;
  return React.cloneElement(icon, { ...props, ariaHidden: true }, null);
};
