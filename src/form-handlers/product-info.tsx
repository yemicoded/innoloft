import { useFormik } from "formik";
import { TFormHandler } from "types/form-handler";
import React from "react";

export interface IProductInfoFormValues {
  title: string;
  description: string;
}

const ProductInfoFormHander = (): TFormHandler<IProductInfoFormValues> => {
  const [isLoading, setLoading] = React.useState(false);
  const [isValid, setValid] = React.useState(false);
  const initialValues: IProductInfoFormValues = {} as IProductInfoFormValues;

  const onSubmit = async (values: IProductInfoFormValues) => {
    console.log("form", values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
//   React.useEffect(() => {
//     const notPassed = Object.keys(formik.values).some(
//       (value: string) =>
//         formik.values[value as unknown as keyof IProductInfoFormValues] === ""
//     );
//     if (notPassed) {
//       setValid(false);
//     } else {
//       setValid(true);
//     }
//     console.log("isValid", isValid);
//     // for (let i in initialValues) {
//     //   if (formik.values[i as unknown as keyof IProductInfoFormValues] === "") {
//     //     setValid(false);
//     //   }
//     // }
//     // setValid(true);
//   }, [formik.values]);

  return { isLoading, isValid, formik };
};

export default ProductInfoFormHander;
