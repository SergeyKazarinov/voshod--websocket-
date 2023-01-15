import { IConnect, ISendMessage } from "./IWebSocketData";
import { IFocusData } from "./webSocketSlice";

export interface IBlockProps {
  title: string;
  children: React.ReactNode;
  subscribe: ({command, block}: IConnect) => void;
  unsubscribe: ({command, block}: IConnect) => void;
}

export interface IButtonProps {
  title: 'Блок 1' | 'Блок 2' | 'Блок 3';
  isActiveButton: boolean;
}

export interface IInputProps {
  title: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  pattern?: string;
  min?: number;
  max?: number;
  minLength?: number;
  onFocus: ({command, block, field}: IFocusData) => void;
  onBlur: ({command, block, field}: IFocusData) => void;
  onSendData: ({command, block, valueType, value}: ISendMessage) => void;
}