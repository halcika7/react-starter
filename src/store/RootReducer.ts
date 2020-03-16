import { combineReducers, Reducer } from 'redux';

export interface AppState {
  someState: [];
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  someState: [],
} as any);
