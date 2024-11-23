import React from "react";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, BarChart, CanvasRenderer]);

export default function BarViz() {
  const chartRef = React.useRef<HTMLDivElement | null>(null);

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        itemStyle: {
          color: "#24A197",
        },
      },
    ],
  };

  React.useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current, undefined, {
        renderer: "canvas",
      });
      myChart?.setOption(option, true);
    }
  }, [chartRef.current]);

  return (
    <div ref={chartRef} id={"container"} className="w-full h-[400px] "></div>
  );
}
