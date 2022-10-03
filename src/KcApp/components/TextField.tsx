import { FC } from "react";
import { TextField as MUITextField } from "@mui/material";

export interface Props {
  label: any;
  type: string;
  id: string;
  name: string;
  [x: string]: any;
}

export const TextField: FC<Props> = (props) => {
  return <MUITextField fullWidth {...props} variant="outlined" />;
};
