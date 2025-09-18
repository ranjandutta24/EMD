import { Component, OnInit, ViewChild } from '@angular/core';
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
  ApexNonAxisChartSeries,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

export type ChartROptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-compressor4',
  templateUrl: './compressor4.component.html',
  styleUrls: ['./compressor4.component.scss'],
})
export class Compressor4Component implements OnInit {
  @ViewChild('chart1') chart1!: ChartComponent;
  @ViewChild('chart2') chart2!: ChartComponent;
  @ViewChild('chart3') chart3!: ChartComponent;
  @ViewChild('chart4') chart4!: ChartComponent;
  @ViewChild('chart5') chart5!: ChartComponent;
  @ViewChild('chart6') chart6!: ChartComponent;
  @ViewChild('chart7') chart7!: ChartComponent;
  @ViewChild('chart8') chart8!: ChartComponent;

  activeSection: string = 'section1';
  public chartOptions1: ChartOptions;
  public chartOptions2: ChartOptions;
  public chartOptions3: ChartOptions;
  public chartOptions4: ChartOptions;
  public chartOptions5: ChartOptions;
  public chartOptions6: ChartOptions;
  public chartOptions7: ChartOptions;
  public chartOptions8: ChartOptions;

  // public chartROptions1: ChartOptions;
  public chartROptions1: ChartROptions;
  public chartROptions2: ChartROptions;
  public chartROptions3: ChartROptions;
  public chartROptions4: ChartROptions;

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
  constructor() {
    const baseChartOptions = {
      chart: {
        height: 90,
        // width: 300,
        type: 'bar',
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
        animations: {
          enabled: false,
        },
      } as ApexChart,
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#208705'],
      dataLabels: {
        formatter: function (val: any, opts: any) {
          const goals =
            opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        position: 'right',
        showForSingleSeries: true,
        customLegendItems: ['Current', 'Limit'],
        markers: {
          fillColors: ['#208705', '#775DD0'],
        },
      } as ApexLegend,
    };

    this.chartOptions1 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions2 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: 200,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions3 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 134,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions4 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 100,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions5 = {
      ...baseChartOptions,

      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Temp DegC',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions6 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Temp DegC',
              y: 200,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions7 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Temp DegC',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 134,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions8 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Temp DegC',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 100,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };

    const value1 = 0.14;
    const max1 = 10;
    const percent1 = (value1 / max1) * 100;

    this.chartROptions1 = {
      series: [percent1], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        // width: 300,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value1} / ${max1}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent1 > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };

    const value2 = 51.53;
    const max2 = 10;
    const percent2 = (value2 / max2) * 100;

    this.chartROptions2 = {
      series: [percent2], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        // width: 300,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value2} / ${max2}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent2 > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };

    const value3 = 376;
    const max3 = 3200;
    const percent3 = (value3 / max3) * 100;
    this.chartROptions3 = {
      series: [percent3], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        // width: 300,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value3} / ${max3}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent3 > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };

    const value = 10;
    const max = 100000;
    const percent = (value / max) * 100;

    this.chartROptions4 = {
      series: [percent], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        // width: 300,
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value} / ${max}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };
  }

  ngOnInit(): void {}
}
