<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
]);

export default {
  mounted() {
    // 接下来的使用就跟之前一样，初始化图表，设置配置项
    var myChart = echarts.init(document.getElementById("main"));
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: [],
      },
      xAxis: {
        data: [
          "Mar 2, 2021 8:00 AM",
          "Mar 2, 2021 9:00 AM",
          "Mar 2, 2021 10:00 AM",
          "Mar 2, 2021 11:00 AM",
          "Mar 2, 2021 12:00 AM",
          "Mar 2, 2021 1:00 PM",
        ],
        axisPointer: {
          show: true,
          type: "line",
          snap: true,
          label: {
            show: true,
          },
        },
      },
      yAxis: {},
      series: [
        {
          name: "",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
          color: [
            "#000000",
            "#2f4554",
            "#61a0a8",
            "#d48265",
            "#91c7ae",
            "#749f83",
          ],
          // 高亮样式。
          emphasis: {
            itemStyle: {
              // 高亮时点的颜色。
              color: "blue",
            },
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
};
</script>
<style>
#main {
  margin: 0 auto;
  background-color: #f2f2f2;
}
</style>