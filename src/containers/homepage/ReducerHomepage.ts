import { AnyAction } from 'redux';

interface AppState {
  modules: [any];
}

const initialState: AppState = {
  modules: [] as any,
};

export const appState: (state: AppState, action: AnyAction) => AppState = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
