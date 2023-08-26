import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardState } from '../../common/models/dashboard.model';
import { DashboardStateService } from '../../common/services/dashboard-state.service';

@Component({
  selector: 'ngcd-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  isOpenWidgets = false;
  isRemovalState$ = this.dashboardStateService.isRemovalState$;

  constructor(private readonly dashboardStateService: DashboardStateService) {}

  toglleWidgets() {
    this.isOpenWidgets = !this.isOpenWidgets;
  }

  toggleRemovalState() {
    this.dashboardStateService.toggleState(DashboardState.Removal);
  }
}
