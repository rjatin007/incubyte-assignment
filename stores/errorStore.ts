import {
  initErrState,
  negativeError,
  validateIntegerError,
} from "@/constants/error";
import { create } from "zustand";

export const useErrorStore = create(() => ({
  err: initErrState,
}));

export const setNegativeError = (num: number | string) => {
  return useErrorStore.setState((state) => ({
    ...state,
    err: { ...state?.err, isErr: true, errMsg: `${negativeError}${num}` },
  }));
};
export const setValidateIntegerError = () => {
  return useErrorStore.setState((state) => ({
    ...state,
    err: { ...state?.err, isErr: true, errMsg: validateIntegerError },
  }));
};
export const resetErrorStore = () => {
  return useErrorStore.setState({
    err: initErrState,
  });
};
