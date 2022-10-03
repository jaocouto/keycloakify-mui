import { FC } from "react";
import { Alert as MUIAlert } from "@mui/material";

export interface Props {
  severity: any;
  message: any;
  [x: string]: any;
}

export const Alert: FC<Props> = (props) => {
  return <MUIAlert severity={props.severity}>{props.message}</MUIAlert>;
};
