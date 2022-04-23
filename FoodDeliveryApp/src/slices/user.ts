import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// store -> reducer(root, state) -> user slice, order slice
// state.user.email
// state.order
// state.ui

// action: state를 바꾸는 행위/동작
// dispatch: action을 실행하는 함수
// reducer: 액션이 실제로 실행되면 state를 바꾸는 로직
const initialState = {
  name: '',
  email: '',
  accessToken: '',
  money: 0,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMoney(state, action: PayloadAction<number>) {
      state.money = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {}, // 비동기 액션 만들 때
});

export default userSlice;
