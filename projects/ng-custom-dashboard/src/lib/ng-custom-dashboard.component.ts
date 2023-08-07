import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GridsterConfig } from 'angular-gridster2';
import { selectDashboard } from './state/dashboard/dashboard.reducer';
import { Observable } from 'rxjs';
import { selectGridsterConfig } from './state/config/config.reducer';
import { DashboardItem } from './common/models/dashboard.model';

@Component({
  selector: 'ng-custom-dashboard',
  templateUrl: './ng-custom-dashboard.component.html',
  styleUrls: ['./ng-custom-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgCustomDashboardComponent {
  options$: Observable<GridsterConfig> = this.store.select(selectGridsterConfig);
  dashboard$: Observable<ReadonlyArray<DashboardItem>> = this.store.select(selectDashboard);

  constructor(private store: Store) {}
}
