import { createFeature, createReducer, on } from '@ngrx/store';
import { GridsterItem } from 'angular-gridster2';

export interface DashboardState {
  dashboard: ReadonlyArray<GridsterItem>;
}

const initialState: DashboardState = {
  dashboard: [
    { cols: 2, rows: 1, y: 0, x: 0 },
    { cols: 2, rows: 3, y: 0, x: 2 },
  ],
};

export const dashboardReducer = createFeature({
  name: 'dashboard',
  reducer: createReducer(initialState),
});

export const { name, reducer, selectDashboardState, selectDashboard } =
  dashboardReducer;
