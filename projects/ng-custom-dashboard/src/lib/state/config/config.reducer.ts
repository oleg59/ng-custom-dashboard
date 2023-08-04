import { createFeature, createReducer, on } from '@ngrx/store';
import { DisplayGrid, GridType, GridsterConfig, GridsterItem } from 'angular-gridster2';

export interface ConfigState {
  gridsterConfig: Readonly<GridsterConfig>;
}

const initialState: ConfigState = {
  gridsterConfig: {
    gridType: GridType.VerticalFixed,
    minCols: 22,
    maxCols: 100,
    fixedRowHeight: 60,
    displayGrid: DisplayGrid.Always,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
  }
};

export const configReducer = createFeature({
  name: 'config',
  reducer: createReducer(
    initialState,
  ),
});

export const {
  name,
  reducer,
  selectConfigState,
  selectGridsterConfig
} = configReducer;

