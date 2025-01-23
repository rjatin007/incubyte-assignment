export const validateIntegerError =
  "Please enter a string in format stated above";
export const negativeError = "Negative numbers not allowed ";

export const initErrState = {
  errMsg: "",
  isErr: false,
};
export type errStateType = {
  errMsg: string;
  isErr: boolean;
};
