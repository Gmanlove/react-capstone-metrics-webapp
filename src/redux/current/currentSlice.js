import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getCryptosData = createAsyncThunk('crypto/getAllData', async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    return data.coins;
  } catch (err) {
    throw new Error(err.message);
  }
});

const initialState = {
  cryptos: [],
  isLoading: false,
  hasError: false,
  isFetched: false,
};

const currentSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptosData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCryptosData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isFetched = true;
        state.cryptos = action.payload;
      })
      .addCase(getCryptosData.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default currentSlice.reducer;
