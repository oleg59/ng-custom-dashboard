import { createFeature, createReducer } from '@ngrx/store';
import { DashboardItem } from '../../common/models/dashboard.model';

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
  reducer: createReducer(initialState),
});

export const { name, reducer, selectDashboardState, selectDashboard } = dashboardReducer;
