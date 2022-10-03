import { FC } from "react";
import { Link as MUILink } from "@mui/material";

export interface Props {
  href: string;
  text: any;
  [x: string]: any;
}

export const Link: FC<Props> = (props) => {
  return <MUILink href={props.href}>{props.text}</MUILink>;
};
