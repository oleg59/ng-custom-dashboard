import { GridsterItem } from 'angular-gridster2';
import { Widget } from './widget.model';

export type DashboardWidget = Pick<Widget, 'code' | 'props'>;

export interface DashboardItem extends GridsterItem {
  widget: DashboardWidget;
}
