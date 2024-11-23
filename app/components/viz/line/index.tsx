import React from "react";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, LineChart, CanvasRenderer]);

export default function LineViz() {
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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
        lineStyle: {
          color: "#24A197",
        },
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

  return <div ref={chartRef} className="w-full h-[400px] "></div>;
}
