import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IData, IStatus, IWebSocketInitialState } from "../../types/IWebSocketData";
import { IBlurGetData, IFocusGetData } from "../../types/webSocketSlice";

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
    setConnectData(state, action: PayloadAction<IWebSocketInitialState>) {
      for (let property in action.payload.data) {
        state.data = {...state.data, [property]: action.payload.data[property as keyof IData]};
      }

      for (let property in action.payload.status) {
        state.status = {...state.status, [property]: action.payload.status[property as keyof IStatus]};
      }
    },
    setFocusStatus(state, action: PayloadAction<IFocusGetData>) {
      state.status = {...state.status, [action.payload.focus]: true};
    },
    setBlurStatus(state, action: PayloadAction<IBlurGetData>) {
      state.status = {...state.status, [action.payload.blur]: false};
    },
    setErrorConnect(state, action: PayloadAction<boolean>) {
      state.errorConnect = action.payload;
    },
    setIsButtonInactive(state, action: PayloadAction<boolean>) {
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