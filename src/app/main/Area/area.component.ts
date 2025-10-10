import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexAxisChartSeries,
  ApexGrid,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexXAxis,
  ApexNonAxisChartSeries, //sourav code
  ApexResponsive //sourav code
} from 'ng-apexcharts';
import { SseService } from 'src/app/service/sse.servece';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

//sourav code comment
// export type LineChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   stroke: ApexStroke;
//   title: ApexTitleSubtitle;
//   xaxis: ApexXAxis;
//   yaxis: ApexYAxis;
//   grid: ApexGrid;
//   colors: string[];
// };
//sourav code comment


//sourav code
export type RadialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  responsive: ApexResponsive[];
};



export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
};

//sourav code

@Component({
  selector: 'app-dashboard',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  igcaFlow: number = 0;
  igcaPresser: number = 0;
  pgcaFlow: number = 0;
  pgcaPresser: number = 0;
  AI_6_COMP1: number = 0;
  AI_6_COMP2: number = 0;
  AI_6_COMP3: number = 0;
  AI_6_COMP4: number = 0;
  AI_6_COMP5: number = 0;
  AI_6_COMP6: number = 0;

  MOTOR_CURR_COMP1: number = 0;
  MOTOR_CURR_COMP2: number = 0;
  MOTOR_CURR_COMP3: number = 0;
  MOTOR_CURR_COMP4: number = 0;
  MOTOR_CURR_COMP5: number = 0;
  MOTOR_CURR_COMP6: number = 0;

  private sseSub?: Subscription;
  private ssetr?: Subscription;

  active_compath = './../../../assets/on.gif';
  deactive_compath = './../../../assets/off.gif';
  // active_compath = './../../../assets/compressor_running_with_smoke.gif';
  // deactive_compath = './../../../assets/compressor (1).png';
  trendData = [];

  //sourav code
  @ViewChild('chart') chart!: ChartComponent;


  public radialChart1: RadialChartOptions = {
    series: [],
    chart: { type: 'radialBar' },
    labels: [],
    colors: [],
    responsive: []
  };

  public radialChart2: RadialChartOptions = {
    series: [],
    chart: { type: 'radialBar' },
    labels: [],
    colors: [],
    responsive: []
  };

  public lineChart: LineChartOptions = {
    series: [],
    chart: { type: 'line' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    title: { text: '', align: 'left' },
    grid: {},
    xaxis: {},
    yaxis: {},
    colors: []
  };

  //sourav code

  constructor(private sseService: SseService) { }

  ngOnInit(): void {
    //sourav code

    // Radial chart 1
    this.radialChart1 = {
      series: [76],
      chart: { height: 250, type: 'radialBar' },
      labels: ['Compressor 1 Pressure'],
      colors: ['#008080'],
      responsive: [{
        breakpoint: 480,
        options: { chart: { height: 200 } }
      }]
    };

    // Radial chart 2
    this.radialChart2 = {
      series: [45],
      chart: { height: 250, type: 'radialBar' },
      labels: ['Compressor 2 Flow'],
      colors: ['#FF6347'],
      responsive: [{
        breakpoint: 480,
        options: { chart: { height: 200 } }
      }]
    };

    // Line chart
    this.lineChart = {
      series: [
        { name: 'Pressure Trend', data: [10, 15, 25, 18, 30, 40, 35] },
        { name: 'Flow Trend', data: [20, 25, 15, 30, 35, 25, 40] }
      ],
      chart: { height: 300, type: 'line', zoom: { enabled: false } },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      title: { text: 'Compressor Performance Trend', align: 'left' },
      grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
      xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yaxis: { title: { text: 'Values' } },
      colors: ['#1E90FF', '#FF6347']
    };

    //sourav code

  }

  showdata() {
    console.log(this.trendData);
  }
  // Helper method to update chart data

  ngOnDestroy(): void { }
}
