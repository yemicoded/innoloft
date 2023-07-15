import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiInfo = createAsyncThunk("api-info/getInfo", async () => {
  const response = await fetch("https://api-test.innoloft.com/product/6781/");
  const data = await response.json();
  return data;
});

export const fetchConfiguration = createAsyncThunk(
  "api-info/getConfig",
  async () => {
    const response = await fetch(
      "https://api-test.innoloft.com/configuration/1/"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  data: {},
  configuration: {},
  isLoading: true,
  isError: false,
} as any;

const apiSlice = createSlice({
  name: "api-info",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchApiInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchApiInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.data.isError = true;
    });
    builder.addCase(fetchConfiguration.fulfilled, (state, action) => {
      state.configuration = action.payload;
    });
  },
});

export default apiSlice.reducer;
