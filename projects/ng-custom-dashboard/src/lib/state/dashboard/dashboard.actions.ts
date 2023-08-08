import { createActionGroup, props } from '@ngrx/store';
import { Widget } from '../../common/models/widget.model';

export const DashboardActions = createActionGroup({
  source: 'Dashboard',
  events: {
    addWidget: props<{ widget: Widget }>(),
  },
});
