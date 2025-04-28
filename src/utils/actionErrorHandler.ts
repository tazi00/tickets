import { ZodError } from 'zod';

import type { ActionStateType } from '@/types/FormActionTypes';

export function actionErrorHandler(error: unknown, formData: FormData): ActionStateType {
  if (error instanceof ZodError) {
    return {
      message: error.errors[0].message,
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
      payload: formData,
    };
  }
  return {
    message: 'An Unknown Error Occured',
    fieldErrors: {},
    payload: formData,
  };
}
