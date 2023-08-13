import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './state.module';

export function storageMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function (state, action) {
    let nextState = reducer(state, action);

    const storage = localStorage.getItem('__storage__');

    if (storage) {
      const savedState = JSON.parse(storage) ?? null;
      nextState = { ...savedState, ...nextState };
    }

    localStorage.setItem('__storage__', JSON.stringify(nextState));

    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [storageMetaReducer];
