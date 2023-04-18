import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getDetailsData = createAsyncThunk('detail/getDetail', async (id) => {
  try {
    const dataStream = await fetch(`${baseUrl}${id}`);
    const data = await dataStream.json();
    return data.coin;
  } catch (err) {
    throw new Error(err);
  }
});

const initialState = {
  details: null,
  isLoading: false,
  hasError: false,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetailsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.details = action.payload;
      })
      .addCase(getDetailsData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
        state.error = action.error.message;
      });
  },
});

export default detailSlice.reducer;
