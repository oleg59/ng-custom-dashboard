import { createActionGroup, props } from '@ngrx/store';
import { Widget } from '../../common/models/widget.model';
import { DashboardItem, DashboardMod } from '../../common/models/dashboard.model';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    addWidget: props<{ widget: Widget }>(),
    removeWidget: props<{ id: DashboardItem['id'] }>(),
    toggleDashboardMod: props<{ dashboardMod: DashboardMod | null }>(),
  },
});
