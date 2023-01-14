import { createSlice } from "@reduxjs/toolkit";
import { IData, IStatus } from "../../types/IWebSocketData";

export interface IWebSocketInitialState {
  block: string;
  data: IData;
  status: IStatus;
  errorConnect: boolean;
  isButtonInactive: boolean;
}

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState: {
    block: '',
    data: {
      fname: '',
      lname: '',
      birthday: '',
      height: '',
      address: '',
      city: '',
      index: '',
    },
    status: {
      fname: false,
      lname: false,
      birthday: false,
      height: false,
      address: false,
      city: false,
      index: false,
    },
    errorConnect: false,
    isButtonInactive: true,
  } as IWebSocketInitialState,
  reducers: {
    setConnectData(state, action) {
      for (let property in action.payload.data) {
        state.data = {...state.data, [property]: action.payload.data[property]};
      }

      for (let property in action.payload.status) {
        state.status = {...state.status, [property]: action.payload.status[property]};
      }
    },
    setFocusStatus(state, action) {
      state.status = {...state.status, [action.payload.focus]: true};
    },
    setBlurStatus(state, action) {
      state.status = {...state.status, [action.payload.blur]: false};
    },
    setErrorConnect(state, action) {
      state.errorConnect = action.payload;
    },
    setIsButtonInactive(state, action) {
      state.isButtonInactive = action.payload;
    }
  }
});

export default webSocketSlice.reducer;
export const { 
  setConnectData,
  setFocusStatus,
  setBlurStatus,
  setErrorConnect,
  setIsButtonInactive,
} = webSocketSlice.actions;