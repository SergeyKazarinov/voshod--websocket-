export interface IData {
  fname: string;
  lname: string;
  birthday: string;
  height: string;
  address: string;
  city: string;
  index: string;
}

export interface IStatus {
  fname: boolean;
  lname: boolean;
  birthday: boolean;
  height: boolean;
  address: boolean;
  city: boolean;
  index: boolean;
}

export interface ISendMessage {
  command: string;
  block: string;
  valueType: string;
  value: string | number;
}

export interface IWebSocketInitialState {
  block: string;
  data: IData;
  status: IStatus;
  errorConnect: boolean;
  isButtonInactive: boolean;
}