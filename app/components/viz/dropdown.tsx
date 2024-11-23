import Select from "@material-tailwind/react/components/Select";
import Option from "@material-tailwind/react/components/Select/SelectOption";
import React from "react";

interface Props {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
const SelectDefault: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className="w-22">
        <Select
          size="md"
          label="Select Version"
          placeholder={"Choose Visiualisation"}
          value={props.selected}
          onChange={(e) => {
            console.log(e, "e");
            props.setSelected(e as string);
          }}
        >
          <Option value="Bar Chart">Bar Chart</Option>
          <Option value="Line Chart">Line Chart</Option>
        </Select>
      </div>
    </React.Fragment>
  );
};
export default SelectDefault;
