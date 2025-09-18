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

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  colors: string[];
};

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

  constructor(private sseService: SseService) {}

  ngOnInit(): void {}
  showdata() {
    console.log(this.trendData);
  }
  // Helper method to update chart data

  ngOnDestroy(): void {}
}
