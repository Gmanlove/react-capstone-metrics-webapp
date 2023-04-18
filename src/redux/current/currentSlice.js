import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.coinstats.app/public/v1/coins/';

const initialState = {
  cryptos: [],
  isLoading: false,
  hasError: false,
  isFetched: false,
};

export const getCryptosData = createAsyncThunk('crypto/getAllData', async () => {
  try {
    const dataStream = await fetch(baseUrl);
    const data = await dataStream.json();
    return data.coins;
  } catch (err) {
    return err;
  }
});

const currentSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptosData.pending, (state) => {
      const isLoading = true;
      return {
        ...state,
        isLoading,
      };
    });
    builder.addCase(getCryptosData.fulfilled, (state, action) => {
      const isLoading = false;
      const isFetched = true;
      const cryptos = action.payload;
      return {
        ...state,
        cryptos,
        isLoading,
        isFetched,
      };
    });
    builder.addCase(getCryptosData.rejected, (state) => {
      const isLoading = false;
      const hasError = true;
      return {
        ...state,
        isLoading,
        hasError,
      };
    });
  },
});

export default currentSlice.reducer;
