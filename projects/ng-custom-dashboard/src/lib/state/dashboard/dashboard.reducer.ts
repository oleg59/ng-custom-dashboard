import { createFeature, createReducer, on } from '@ngrx/store';
import { DashboardItem, DashboardMod } from '../../common/models/dashboard.model';
import { DashboardActions } from './dashboard.actions';

export interface DashboardState {
  dashboard: ReadonlyArray<DashboardItem>;
  dashboardMod: DashboardMod | null;
}

const initialState: DashboardState = {
  dashboard: [
    { id: 1, cols: 2, rows: 1, y: 0, x: 0, widget: { code: 'time' } },
    { id: 2, cols: 2, rows: 1, y: 0, x: 2, widget: { code: 'date' } },
  ],
  dashboardMod: null,
};

export const dashboardReducer = createFeature({
  name: 'dashboard',
  reducer: createReducer(
    initialState,
    on(DashboardActions.addWidget, (state, { widget }) => {
      const id = state.dashboard.length + 1;
      const newWidget: DashboardItem = { id, cols: 2, rows: 1, y: 0, x: 0, widget };
      const dashboard: DashboardItem[] = [...state.dashboard, newWidget];
      return { ...state, dashboard };
    }),
    on(DashboardActions.toggleDashboardMod, (state, { dashboardMod }) => {
      return { ...state, dashboardMod: dashboardMod === state.dashboardMod ? null : dashboardMod };
    }),
    on(DashboardActions.removeWidget, (state, { id }) => {
      const dashboard: DashboardItem[] = state.dashboard.filter((widget) => widget.id !== id);
      return { ...state, dashboard };
    }),
  ),
});

export const { name, reducer, selectDashboardState, selectDashboard, selectDashboardMod } = dashboardReducer;
