import { FC } from "react";
import { Button as MUIButton } from "@mui/material";

export interface Props {
  value: string;
  type: any;
  fullWidth?: boolean;

  [x: string]: any;
}

export const Button: FC<Props> = (props) => {
  console.log(props);
  return (
    <MUIButton
      variant="contained"
      fullWidth={props.fullWidth}
      type={props.type}
    >
      {props.value}
    </MUIButton>
  );
};
