import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  weather: null,
  isLoading: false,
};

export const getWeather = createAsyncThunk(
  "weatherInfo/getWeather",
  async (city, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=098feb0cca5b5b0181f4325cbb0a14e1&units=metric`,
      );
      console.log(res.data);
      return [res.data];
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  },
);

export const weatherSlice = createSlice({
  name: "weatherInfo",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weatherData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.weatherData = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
