import { createFeature, createReducer, on } from '@ngrx/store';
import { DashboardItem } from '../../common/models/dashboard.model';
import { DashboardActions } from './dashboard.actions';

export interface DashboardState {
  dashboard: ReadonlyArray<DashboardItem>;
}

const initialState: DashboardState = {
  dashboard: [
    { cols: 2, rows: 1, y: 0, x: 0, widget: { code: 'time' } },
    { cols: 2, rows: 1, y: 0, x: 2, widget: { code: 'date' } },
  ],
};

export const dashboardReducer = createFeature({
  name: 'dashboard',
  reducer: createReducer(
    initialState,
    on(DashboardActions.addWidget, (state, { widget }) => {
      const newWidget: DashboardItem = { cols: 2, rows: 1, y: 0, x: 0, widget };
      const dashboard: DashboardItem[] = [...state.dashboard, newWidget];
      return { ...state, dashboard };
    }),
  ),
});

export const { name, reducer, selectDashboardState, selectDashboard } = dashboardReducer;
