import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.coinstats.app/public/v1/coins/';

export const getDetailsData = createAsyncThunk('detail/getDetail', async (id) => {
  try {
    const response = await fetch(`${baseUrl}${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    return data.coin;
  } catch (err) {
    throw new Error(err.message);
  }
});

const initialState = {
  details: null,
  isLoading: false,
  hasError: false,
  error: null,
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
