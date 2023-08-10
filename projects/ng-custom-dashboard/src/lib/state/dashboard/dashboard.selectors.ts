import { createSelector } from '@ngrx/store';
import { selectDashboardState } from './dashboard.reducer';
import { DashboardMod } from '../../common/models/dashboard.model';

export const selectIsRemovalMod = createSelector(selectDashboardState, (state) => {
  return state.dashboardMod === DashboardMod.Removal;
});
