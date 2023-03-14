import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://fakestoreapi.com/";
const initialState = {
  products: [],
  product: null,
  carts: [],
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseURL + "products");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(baseURL + "products/" + id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.carts.findIndex(
        (cart) => cart.id == action.payload.id
      );
      if (index < 0) state.carts.push(action.payload);
    },
    deleteItemFromCart: (state, { payload }) => {
      let carts = [...state.carts];
      state.carts = carts.filter((cart) => cart.id != payload);
    },
    changeCartItemQuantity: (state, { payload }) => {
      let carts = [...state.carts];
      const index = carts.findIndex((cart) => cart.id == payload.id);
      if (index > -1) carts[index].quantity = payload.quantity;
      state.carts = [...carts];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export const { addToCart, deleteItemFromCart, changeCartItemQuantity } =
  product.actions;
export default product.reducer;
