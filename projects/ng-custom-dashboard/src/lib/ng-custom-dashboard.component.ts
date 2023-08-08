import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GridsterConfig } from 'angular-gridster2';
import { selectDashboard } from './state/dashboard/dashboard.reducer';
import { Observable, BehaviorSubject } from 'rxjs';
import { selectGridsterConfig } from './state/config/config.reducer';
import { DashboardItem } from './common/models/dashboard.model';

@Component({
  selector: 'ng-custom-dashboard',
  templateUrl: './ng-custom-dashboard.component.html',
  styleUrls: ['./ng-custom-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgCustomDashboardComponent implements OnInit {
  options$: Observable<GridsterConfig> = this.store.select(selectGridsterConfig);
  dashboard$ = new BehaviorSubject<DashboardItem[] | null>(null);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectDashboard).subscribe((v) => {
      this.dashboard$.next(JSON.parse(JSON.stringify(v)) as DashboardItem[]);
    });
  }
}
