"use client";

// import Input from "@material-tailwind/react/components/Input";
import React from "react";

export default function Form(props: {
  fileUploadAction: any;
  formAction: (payload: FormData) => void;
  isPending: boolean;
}) {
  return (
    <div className="w-full ">
      <p className="text-[#101928]  font-semibold text-xl mb-[32px] ">
        Upload your CSV file
      </p>
      <form
        action={props.formAction}
        className="w-full h-[355px] flex flex-col font-manrope border rounded-lg border-[#E1E3E2] pt-8 px-6  "
      >
        <p className="font-semibold text-base mb-6">Basic Information</p>
        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-semibold mb-2 font-manrope"
            >
              Product Name
            </label>

            <input
              type="file"
              name="file"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
        </div>
        <div className="flex  justify-center">
          <button
            type="submit"
            className="flex justify-center items-center w-[135px] bg-[#24A197] text-white rounded-md items-centern h-14 mt-6"
          >
            {props.isPending ? "Loading..." : "Process Data"}
          </button>
        </div>
      </form>
    </div>
  );
}
