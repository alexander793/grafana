import { VizOrientation } from '@grafana/data';
import { AxisConfig, GraphGradientMode, HideSeriesConfig } from '../uPlot/config';
import { VizLegendOptions } from '../VizLegend/types';

/**
 * @alpha
 */
export enum BarStackingMode {
  None = 'none',
  Standard = 'standard',
  Percent = 'percent',
}

/**
 * @alpha
 */
export enum BarValueVisibility {
  Auto = 'auto',
  Never = 'never',
  Always = 'always',
}

/**
 * @alpha
 */
export interface BarChartOptions {
  orientation: VizOrientation;
  legend: VizLegendOptions;
  stacking: BarStackingMode;
  showValue: BarValueVisibility;
  barWidth: number;
  groupWidth: number;
}

/**
 * @alpha
 */
export interface BarChartFieldConfig extends AxisConfig {
  lineWidth?: number; // 0
  fillOpacity?: number; // 100
  gradientMode?: GraphGradientMode;
  hideFrom?: HideSeriesConfig;
}

export const defaultBarChartFieldConfig: BarChartFieldConfig = {
  lineWidth: 1,
  fillOpacity: 80,
};
