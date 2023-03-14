import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const baseURL = "https://fakestoreapi.com/";

const initialState = {
  user: null,
  isLogged: false,
};
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post(baseURL + "auth/login", user);
    return response.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data);
  }
});

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(baseURL + "users/" + id);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(baseURL + "users", user);
      fetchUserById(response.data.id);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default user.reducer;
