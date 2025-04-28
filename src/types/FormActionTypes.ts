export type ActionStateType = {
  message: string;
  payload?: FormData;
  fieldErrors?: Record<string, string[] | undefined>;
};
