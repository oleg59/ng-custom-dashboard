import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardActions } from '../../state/dashboard/dashboard.actions';
import { DashboardMod } from '../../common/models/dashboard.model';
import { selectIsRemovalMod } from '../../state/dashboard/dashboard.selectors';

@Component({
  selector: 'ngcd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  isOpenWidgets = false;
  isRemovalMod$ = this.store.select(selectIsRemovalMod);

  constructor(private readonly store: Store) {}

  toglleWidgets() {
    this.isOpenWidgets = !this.isOpenWidgets;
  }

  toggleRemovalState() {
    this.store.dispatch(DashboardActions.toggleDashboardMod({ dashboardMod: DashboardMod.Removal }));
  }
}
