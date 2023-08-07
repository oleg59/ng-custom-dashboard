import { createFeature, createReducer } from '@ngrx/store';
import { DisplayGrid, GridType, GridsterConfig } from 'angular-gridster2';

export interface ConfigState {
  gridsterConfig: Readonly<GridsterConfig>;
}

const initialState: ConfigState = {
  gridsterConfig: {
    gridType: GridType.Fixed,
    minCols: 22,
    maxCols: 100,
    fixedRowHeight: 55,
    fixedColWidth: 55,
    displayGrid: DisplayGrid.OnDragAndResize,
    draggable: {
      enabled: false,
    },
    resizable: {
      enabled: false,
    },
  },
};

export const configReducer = createFeature({
  name: 'config',
  reducer: createReducer(initialState),
});

export const { name, reducer, selectConfigState, selectGridsterConfig } = configReducer;
