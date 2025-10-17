import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ChartComponent,
  ApexTooltip
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: string[];
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-mills',
  templateUrl: './mills.component.html',
  styleUrls: ['./mills.component.scss']
})
export class MillsComponent implements OnInit {

  public chartOptions: ChartOptions;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "Gas Flow (Nm³)",
          // data: [4000, 6000, 20000, 2000, 1000, 60000]
          data: [60000, 60000, 60000, 60000, 60000, 60000]

        }
      ],
      chart: {
        type: "bar",
        height: 400,
        foreColor: 'var(--bar-text)', // <-- Sets text color globally
        stacked: false
      },
      title: {
        text: "MILL'S Gas Flow",
        align: "center",
        style: {
          fontSize: '18px',
          color: 'var(--bar-text)' // Title text color
        }
      },
      xaxis: {
        categories: ["CBM", "COG", "BOF", "BF", "N2", "MG"],
        labels: {
          style: {
            colors: 'var(--bar-text)',
            fontSize: '14px'
          }
        }
      },
      yaxis: {
        title: {
          text: "Nm³",
          style: {
            color: 'var(--bar-text)',
            fontSize: '14px'
          }
        },
        labels: {
          style: {
            colors: 'var(--bar-text)',
            fontSize: '14px'
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['var(--bar-text)'] // Data label color
        }
      },
      colors: [
        '#1778b9ff', // CBM - Red
        '#078f34ff', // COG - Orange
        '#c4c005ff', // BOF - Green
        '#6d29adff', // BF - Blue
        '#3745afff', // N2 - Gray
        '#c22e4eff'  // MG - Purple
      ],
      plotOptions: {
        bar: {
          distributed: true,
          columnWidth: '55%'
        }
      },
      legend: {
        labels: {
          colors: 'var(--bar-text)',
          useSeriesColors: false
        }
      }, tooltip: {
        theme: 'dark',                  // dark background theme
        style: {
          fontSize: '12px'              // ✅ only fontSize allowed
        },
        marker: { show: true }
      }
    };
  }

  ngOnInit(): void {
  }

}
