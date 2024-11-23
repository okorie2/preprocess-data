"use cliient";
import React from "react";
import CloseIcon from "../../../public/assets/close-icon.svg";
import SelectDefault from "./dropdown";
import BarViz from "./bar";
import LineViz from "./line";
import Image from "next/image";

export default function Visualisation(props: {
  setViewAnalytics: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [selected, setSelected] = React.useState<string>("Line Chart");

  return (
    <div className="border-[1.47px] border-[#E1E3E2] rounded-lg w-full p-6 ">
      <div className="flex justify-between">
        <div>Product Sales</div>
        <button onClick={() => props.setViewAnalytics(false)}>
          <Image src={CloseIcon} alt="Close" />
        </button>
      </div>
      <div className="flex justify-end mt-7 ">
        <SelectDefault selected={selected} setSelected={setSelected} />
      </div>
      <div className="h-2" />
      {selected === "Bar Chart" ? <BarViz /> : <LineViz />}
    </div>
  );
}
