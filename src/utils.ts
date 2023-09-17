import { useEffect, useRef } from "react";

export const useInterval: (callback: () => {}, delay: number) => void = (
  callback: () => {},
  delay: number
) => {
  const savedCallback = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
};

export const getTimeDifferenceText = (
  dateInISO: string,
  diffDate = new Date()
) => {
  const lastSeen = new Date(dateInISO);
  const currentDate = diffDate;
  const timeDiff = currentDate.getTime() - lastSeen.getTime();
  let timeDiffWithSuffix = "";
  if (timeDiff > 1000 * 3600 * 24) {
    timeDiffWithSuffix = `${Math.round(timeDiff / (1000 * 3600 * 24))} days`;
  } else if (timeDiff > 1000 * 60 * 60) {
    timeDiffWithSuffix = `${Math.round(timeDiff / (1000 * 60 * 60))} hours`;
  } else if (timeDiff > 1000 * 60) {
    timeDiffWithSuffix = `${Math.round(timeDiff / (1000 * 60))} minutes`;
  } else if (timeDiff > 1000) {
    timeDiffWithSuffix = `${Math.round(timeDiff / 1000)} seconds`;
  }
  return timeDiffWithSuffix
};
