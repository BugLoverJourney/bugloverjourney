import BasicResponseDTO, { Notification, NotifyTypes } from "@dto/basicResponse.dto";
import { NOTIFY_TYPES } from '@const/basicResponse.constants';


export const isNotification = <T>(obj: Notification | T): obj is Notification => ((obj as Notification).type !== undefined);

export async function getApi<ResponseData extends BasicResponseDTO>(url: string, optionalErrorProps: any, config?: any): Promise<ResponseData | Notification> {
  try {
    const response = await fetch(`${import.meta.env.VITE_SERVER}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`,);

    return await response.json();
  } catch (error) {
    const isError = (error: unknown): error is Error => ((error as Error).message !== undefined);
    if (!isError(error))
      return { type: NOTIFY_TYPES.ERROR, shortMsg: "Woops... something wrong!" };

    return {
      type: NOTIFY_TYPES.ERROR,
      shortMsg: error.message,
    };
  }
}
