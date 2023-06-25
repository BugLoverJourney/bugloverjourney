import React, { useEffect, useRef, useState } from "react";
import { getApi, isNotification } from "@/api/calls";
import BasicResponseDTO, { Notification } from "@/api/dto/basicResponse.dto";

interface Data<T> extends BasicResponseDTO {
  data: T;
}

const useGet = <T, P extends Data<T>>(
  api: string,
  optionalErrorProps: Notification,
  deps: ReadonlyArray<unknown>,
  init: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>, boolean, AbortController | undefined] => {
  const [data, setData] = useState<T>(init);
  const [loading, setLoading] = useState(true);
  const controller = useRef<AbortController>();

  useEffect(() => {
    setLoading(true);
    if (controller.current)
      controller.current.abort();

    controller.current = new AbortController();
    const getData = async () => {
      const respons = await getApi<P>(api, optionalErrorProps);

      setLoading(false);
      if (isNotification<P>(respons))
        return;

      setData(respons.data);
    }

    getData();
    return () => controller.current && controller.current.abort();
  }, deps);

  return [data, setData, loading, controller.current];
}

export default useGet;