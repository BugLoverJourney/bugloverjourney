export default interface BasicResponseDTO {
  statusCode: number;
  message?: string;
  error?: string;
}

export enum NotifTypes {
  INFO = "Info",
  ERROR = "Error",
  WARNING = "Warning",
  CRITICAL = "Critical",
}

export interface Notification {
  type: NotifTypes;
  shortMsg: string;
  longMsg?: string;
  id?: number;
  url?: any[];
  timestamp?: number;
}