import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';
import { DashboardState } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardStateService {
  private _state$: BehaviorSubject<DashboardState | null> = new BehaviorSubject<DashboardState | null>(null);

  isRemovalState$: Observable<boolean> = this._state$.pipe(
    map((state) => state === DashboardState.Removal),
    distinctUntilChanged(),
  );

  toggleState(state: DashboardState) {
    this._state$.next(this._state$.value ? null : state);
  }
}
