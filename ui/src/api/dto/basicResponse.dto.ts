import { NOTIFY_TYPES } from "../constants/basicResponse.constants";

export default interface BasicResponseDTO {
  statusCode: number;
  message?: string;
  error?: string;
}

export type NotifyTypes = typeof NOTIFY_TYPES[keyof typeof NOTIFY_TYPES];

export interface Notification {
  type: NotifyTypes;
  shortMsg: string;
  longMsg?: string;
  id?: number;
  url?: any[];
  timestamp?: number;
}