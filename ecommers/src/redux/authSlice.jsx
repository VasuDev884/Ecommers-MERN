import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../lib/axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const SignUpUser = createAsyncThunk(
  "auth/SignUpUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/auth/signup", credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axiosInstance.post("/auth/logout");
    return null; // Return null to indicate successful logout
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Logout failed"); // Handle logout error if needed
  }
});

export const checkUser = createAsyncThunk(
  "auth/checkUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/auth/check");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login reducers
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // SignUp reducers
      .addCase(SignUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(SignUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(SignUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Logout reducers
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null; // Clear user data on logout
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Check user reducers
      .addCase(checkUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
