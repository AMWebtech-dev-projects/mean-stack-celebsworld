import { Color, Colors } from 'ng2-charts';

export interface ChartDataType {
  data?: number[] | string[];
  label?: string;
  backgroundColor?: any[];

  [propName: string]: any;
}

export interface ChartOptions {
  animation?: boolean;
  responsive?: boolean;
  scaleShowVerticalLines?: boolean;
  events?: string[];
  tooltips?: {
    mode: string; // dataset, nearest, point, index
    axis: string;
  };

  [propName: string]: any;
}

export interface ChartDataInterface {
  chartType: string;
  title: string;
  data?: number[] | string[] | ChartDataType[];
  dataset?: number[] | string[] | ChartDataType[];
  labels: string[];
  options?: ChartOptions;
  legend?: boolean;
  colors?: Color[] | Colors[];
  [propName: string]: any;
}

export interface ChartDataResponse {
  status: number;
  message: string;
  data: ChartDataInterface;
}

export const emptyChartData: ChartDataInterface = {
  title: '',
  data: [],
  dataset: [],
  labels: [],
  chartType: '',
  legend: true,
  options: {
    animation: false,
    responsiveAnimationDuration: 1000
  },
  colors: []
};

export interface WidgetDataInterface {
  title?: string;
  count?: string | number;
  color?: string;
}

export interface HealthsInterface {
  mongoRunning?: string;
  serverRunning?: string;
  freeMemory?: number;
  totalMemory?: number;
}
