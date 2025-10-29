import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';


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
  ApexResponsive,//sourav code
  ApexTooltip //sourav code
} from 'ng-apexcharts';
import { SseService } from 'src/app/service/sse.servece';

//sourav code comment
// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   legend: ApexLegend;
//   colors: string[];
// };
//sourav code comment

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  colors: string[];
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  grid?: ApexGrid;
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
  legend: ApexLegend;
  title: {}
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
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

//sourav code

@Component({
  selector: 'app-dashboard',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {

  trendData = [
    { name: 'COB_BPP_GAS_G_F', min: 40123.49, max: 46199.06, avg: 43873.27, stdDev: 1211.64 },
    { name: 'COB_BPP_GAS_P', min: 847.95, max: 909.18, avg: 891.21, stdDev: 21.61 },
    { name: 'COB_C_BF_F', min: 0, max: 50951.41, avg: 39938.99, stdDev: 6203.45 },
    { name: 'PBS_C_B1_COG_F', min: 4206.00, max: 7579.40, avg: 7406.91, stdDev: 74.00 },
    { name: 'FS_C_BFG_F', min: 24435.10, max: 181416.89, avg: 91558.55, stdDev: 31145.27 },
  ];


  chartSeries: ApexAxisChartSeries = [
    { name: 'COB_BPP_GAS_G_F', data: [41000, 42000, 43000, 43500, 44000, 43800, 43900] },
    { name: 'COB_BPP_GAS_P', data: [850, 870, 890, 900, 880, 910, 905] },
    { name: 'COB_C_BF_F', data: [20000, 25000, 27000, 30000, 29000, 31000, 30500] },
    { name: 'PBS_C_B1_COG_F', data: [5000, 6000, 6500, 7000, 6800, 6900, 7100] },
    { name: 'FS_C_BFG_F', data: [25000, 50000, 75000, 90000, 85000, 95000, 100000] },
  ];

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
  // trendData = []; //sourav code comment

  //sourav code
  @ViewChild('chart') chart!: ChartComponent;


  public radialChart1: RadialChartOptions = {
    series: [],
    chart: { type: 'radialBar' },
    labels: [],
    colors: [],
    responsive: [],
    legend: {},
    title: {}
  };

  public radialChart2: RadialChartOptions = {
    series: [],
    chart: { type: 'radialBar' },
    labels: [],
    colors: [],
    responsive: [],
    legend: {},
    title: {}
  };

  public radialChart3: RadialChartOptions = {
    series: [],
    chart: { type: 'radialBar' },
    labels: [],
    colors: [],
    responsive: [],
    legend: {},
    title: {}
  };

  public radialChart4: RadialChartOptions = {
    series: [],
    chart: { type: 'radialBar' },
    labels: [],
    colors: [],
    responsive: [],
    legend: {},
    title: {}
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
    colors: [],
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      labels: { colors: 'var(--bar-text)', useSeriesColors: false },

    }, tooltip: {
      theme: 'dark',                  // dark background theme
      style: {
        fontSize: '12px'              // ✅ only fontSize allowed
      },
      marker: { show: true }
    }

  };

  //sourav code
  chartOptions!: Partial<ChartOptions>;

  constructor(private sseService: SseService) { }

  splitLetters(text: string): string[] {
    return text.split('').map((c) => (c === ' ' ? '\u00A0' : c));
  }

  ngOnInit(): void {
    //sourav code

    // Radial chart 1 (Compressor 1 Pressure)
    this.radialChart1 = {
      series: [76],
      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: { show: false }
      },
      labels: ['Pressure (psi)'],
      colors: ['var(--header-text)'],
      responsive: [{
        breakpoint: 480,
        options: { chart: { height: 200 } }
      }],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        labels: {
          colors: 'var(--bar-text)',
          useSeriesColors: true
        },
        formatter: (seriesName, opts) => {
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${seriesName}: ${value}%`; // Legend will show "Pressure (psi): 76%"
        },
        onItemClick: {
          toggleDataSeries: true
        }
      },
      title: {
        text: 'Compressor 1 Pressure',
        align: 'center',
        style: { fontSize: '16px', color: '#333' }
      }
    };


    // Radial chart 2 (Compressor 2 Flow)
    this.radialChart2 = {
      series: [45],
      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: { show: false }
      },
      labels: ['Flow (m³/min)'],
      colors: ['var(--header-text)'],
      responsive: [{
        breakpoint: 480,
        options: { chart: { height: 200 } }
      }],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        labels: {
          colors: 'var(--bar-text)',
          useSeriesColors: true
        },
        formatter: (seriesName, opts) => {
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${seriesName}: ${value}%`; // Legend will show "Flow (m³/min): 45%"
        },
        onItemClick: {
          toggleDataSeries: true
        }
      },
      title: {
        text: 'Compressor 2 Flow',
        align: 'center',
        style: { fontSize: '16px', color: '#333' }
      }
    };



    // Radial chart 3 (Compressor 3 Pressure)
    this.radialChart3 = {
      series: [60],
      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: { show: false }
      },
      labels: ['Pressure (psi)'],
      colors: ['var(--header-text)'],
      responsive: [{
        breakpoint: 480,
        options: { chart: { height: 200 } }
      }],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        labels: {
          colors: 'var(--bar-text)',
          useSeriesColors: true
        },
        formatter: (seriesName, opts) => {
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${seriesName}: ${value}%`; // Legend will show "Pressure (psi): 60%"
        },
        onItemClick: {
          toggleDataSeries: true
        }
      },
      title: {
        text: 'Compressor 3 Pressure',
        align: 'center',
        style: { fontSize: '16px', color: '#333' }
      }
    };


    // Radial chart 4 (Compressor 4 Flow)
    this.radialChart4 = {
      series: [50],
      chart: {
        height: 250,
        type: 'radialBar',
        toolbar: { show: false }
      },
      labels: ['Flow (m³/min)'],
      colors: ['var(--header-text)'],
      responsive: [{
        breakpoint: 480,
        options: { chart: { height: 200 } }
      }],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        labels: {
          colors: 'var(--bar-text)',
          useSeriesColors: true
        },
        formatter: (seriesName, opts) => {
          // opts.seriesIndex gives the index of the series
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${seriesName}: ${value}%`; // legend will show "Flow (m³/min): 50"
        },
        onItemClick: {
          toggleDataSeries: true
        }
      },
      title: {
        text: 'Compressor 4 Flow',
        align: 'center',
        style: { fontSize: '16px', color: '#333' }
      }
    };






    // Line chart
    // this.lineChart = {
    //   series: [
    //     { name: 'Pressure Trend', data: [10, 15, 25, 18, 30, 40, 35] },
    //     { name: 'Flow Trend', data: [20, 25, 15, 30, 35, 25, 40] }
    //   ],
    //   chart: { height: 300, type: 'line', zoom: { enabled: false } },
    //   dataLabels: { enabled: false },
    //   stroke: { curve: 'smooth' },
    //   title: {
    //     text: 'Compressor Performance Trend',
    //     align: 'left',
    //     style: { color: 'var(--header-text)', fontSize: '16px', fontWeight: 'bold' } // Title text yellow
    //   },
    //   grid: { row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 } },
    //   xaxis: {
    //     categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //     labels: { style: { colors: 'var(--header-text)', fontSize: '12px' } } // X-axis labels yellow
    //   },
    //   yaxis: {
    //     title: {
    //       text: 'Values',
    //       style: { color: 'var(--bar-text)', fontSize: '12px', fontWeight: 'bold' } // Y-axis title yellow
    //     },
    //     labels: { style: { colors: 'var(--bar-text)', fontSize: '12px' } } // Y-axis labels yellow
    //   },
    //   colors: ['#1E90FF', '#FF6347'], // Line colors
    //   legend: {
    //     labels: { colors: 'var(--header-text)', useSeriesColors: false } // Legend text yellow
    //   },
    //   tooltip: {
    //     theme: 'dark',                  // dark background theme
    //     style: {
    //       fontSize: '12px'              // ✅ only fontSize allowed
    //     },
    //     marker: { show: true }
    //   }

    // };

    this.chartOptions = {
      chart: {
        type: 'line',
        height: 500,
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true
          }
        },
        zoom: { enabled: true },
        background: 'linear-gradient(180deg, #001a33 0%, #002855 100%)'
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      colors: [
        '#00ff00', // COB_BPP_GAS_G_F
        '#ff00ff', // COB_BPP_GAS_P
        '#ff9900', // COB_C_BF_F
        '#00ffff', // PBS_C_B1_COG_F
        '#ff3333'  // FS_C_BFG_F
      ],
      xaxis: {
        categories: ['10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30'],
        labels: {
          style: {
            colors: '#99ccff',
            fontSize: '12px'
          }
        },
        axisBorder: { color: '#355b8c' },
        axisTicks: { color: '#355b8c' },
        tooltip: { enabled: false }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#99ccff',
            fontSize: '12px'
          }
        },
        axisBorder: { color: '#355b8c' },
        axisTicks: { color: '#355b8c' },
        min: 0,
        forceNiceScale: true
      },
      grid: {
        show: true,
        borderColor: '#355b8c',
        strokeDashArray: 2,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } },
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        labels: { colors: '#ffffff' },
        markers: {
          width: 10, height: 10, radius: 2,
          offsetX: -5 // move marker slightly left or right
        },
        itemMargin: {
          horizontal: 15,
          vertical: 50   // <-- adds vertical gap between legend and chart
        }
      },
      dataLabels: { enabled: false },
      tooltip: {
        theme: 'dark',
        x: { show: true },
        y: { formatter: (val) => val.toFixed(2) }
      }
    };

    //sourav code

  }

  showdata() {
    console.log(this.trendData);
  }
  // Helper method to update chart data

  ngOnDestroy(): void { }
}
