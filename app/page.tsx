"use client";
import Image from "next/image";
import Form from "@/app/components/form";
import Table from "@/app/components/table";
import Visualisation from "@/app/components/viz";
import Logo from "../public/assets/logo.svg";
import React, { useActionState } from "react";
import { fileUploadAction } from "./actions/fileUploadAction";

const initialState = {
  message: "",
  data: {},
};
function Page() {
  const [state, formAction, isPending] = useActionState(
    fileUploadAction,
    initialState
  );
  const [viewAnalytics, setViewAnalytics] = React.useState<boolean>(false);
  return (
    <>
      <div className="px-[7%] font-manrope ">
        <div className="h-[100px] flex items-center">
          <Image src={Logo} alt="logo" />
        </div>
        <h1 className="py-2 text-[#009254] border-b border-[#009254] w-max mb-[60px] ">
          Sales record for the year 2024
        </h1>
        <Table
          viewAnalytics={viewAnalytics}
          setViewAnalytics={setViewAnalytics}
          tableData={state.data}
        />
        <div className="h-7" />
        {viewAnalytics && <Visualisation setViewAnalytics={setViewAnalytics} />}
        <div className="flex justify-center items-start mb-7">
          <Form
            fileUploadAction={fileUploadAction}
            formAction={formAction}
            isPending={isPending}
          />
        </div>
      </div>
    </>
  );
}

export default Page;
