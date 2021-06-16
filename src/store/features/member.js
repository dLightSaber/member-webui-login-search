import {  createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import MemberService from "../../api/member";

export const doLogin = createAsyncThunk(
  "member/doLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await MemberService.loginProvider(payload);
      console.log(" response >> " + response);
      alert(response);
      return response;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

const initialState = {
  memberWrapper: '',
  isLoggedin: '',
  userName:'',
  error: "",
  loginResponse:'',
  loading: true,
};

const { reducer } = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [doLogin.fulfilled]: (state, { meta, payload }) => {
      // Add user to the state array
      console.log(" meta >> " + payload);
      state.memberWrapper = payload;
      console.log(" state >> " + state.memberWrapper);
      state.loading = false;
    },
    [doLogin.pending]: (state, { meta }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.loading = true;
    },
    [doLogin.rejected]: (state, { meta, payload, error }) => {
      // Add user to the state array
      console.log(" meta >> " + meta);
      state.loading = false;
      state.memberWrapper = {};
      state.error = error;
    },
  },
});


export default reducer;

