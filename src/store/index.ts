import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/api-slice'
export function makeStore() {
  return configureStore({
    reducer: {
        apiInfo: userReducer
    },
  });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export default configureStore({
//   reducer: {
//     product: productReducer,
//   },
// });
