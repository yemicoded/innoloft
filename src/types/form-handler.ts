import { FormikProps } from "formik";
export type TFormHandler<T> = {
  isLoading: boolean;
  isValid: boolean;
  formik: FormikProps<T>;
};
