import { Injectable } from '@angular/core';
import { Observable, interval, map, shareReplay, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  time$: Observable<Date> = interval(1000).pipe(
    startWith(new Date()),
    map(() => new Date()),
    shareReplay(1),
  );
}
