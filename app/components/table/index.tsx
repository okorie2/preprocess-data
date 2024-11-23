import React from "react";
import { ISalesRecord, salesRecords } from "./data";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  RowData,
} from "@tanstack/react-table";
import ViewIcon from "../../../public/assets/eye-icon.svg";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";

declare module "@tanstack/react-table" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    width: string;
    justify: "center" | "left" | "right" | string;
    justifyRow: "center" | "left" | "right" | string;
  }
}

export default function Table(props: {
  viewAnalytics: boolean;
  setViewAnalytics: React.Dispatch<React.SetStateAction<boolean>>;
  tableData: any;
}) {
  const tableData = props.tableData ?? [];
  console.log(tableData, "tableData");
  const getColumns = () => {
    if (isEmpty(tableData)) return [];
    const t = Object.keys(tableData?.dataTypes).map((d: any) => {
      return {
        header: d,
        accessorKey: d,
        meta: {
          width: "125px",
          justify: "center",
          justifyRow: "center",
        },
      };
    });
    return t;
  };

  const table = useReactTable({
    columns: getColumns(),
    data: tableData?.dataset?.slice(0, 30),
    getCoreRowModel: getCoreRowModel(),
  });

  if (isEmpty(tableData)) return "No data available";

  return (
    <div className="border-[1.47px] border-[#E1E3E2] rounded-lg w-full ">
      <div className="flex justify-between items-center px-[29px] pb-[23px] pt-[29px] ">
        <p>Product Sales</p>
        {!props.viewAnalytics && (
          <button
            onClick={() => props.setViewAnalytics(true)}
            className="border-[#24A197] border rounded-lg h-14 w-[226px] flex items-center justify-center gap-[5px]  "
          >
            <Image src={ViewIcon} alt="view analytics" />
            View Analytics
          </button>
        )}
      </div>
      <table className="w-full">
        <thead className="bg-[#FAFBFB] h-[66px] border-b border-[#E1E3E2] ">
          {table?.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map(
                  (
                    header // map over the headerGroup headers array
                  ) => (
                    <th
                      align={header.column.columnDef.meta?.justify}
                      key={header.id}
                      colSpan={header.colSpan}
                      className={`h-full  ${
                        header.column.columnDef.meta?.width && `w-auto`
                      }`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  )
                )}
              </tr>
            );
          })}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              className={`${
                index !== table.getRowModel().rows.length - 1 &&
                "border-b border-[#E1E3E2]"
              } cursor-pointer hover:bg-[#FAFBFB] `}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  align={cell.column.columnDef.meta?.justifyRow}
                  className="h-[66px] "
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
