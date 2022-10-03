import { FC } from "react";
import { Checkbox as MUICheckbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export interface Props {
  label: any;
  type: string;
  id: string;
  name: string;
  [x: string]: any;
}

export const CheckBox: FC<Props> = (props) => {
  return (
    <FormGroup>
      <FormControlLabel
        {...props}
        control={<MUICheckbox />}
        label={props.label}
      />
    </FormGroup>
  );
};
