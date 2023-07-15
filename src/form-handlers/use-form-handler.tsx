import React from "react";
import ProductInfoFormHander, { IProductInfoFormValues } from "./product-info";
import { TFormHandler } from "types/form-handler";

interface IFormHandlerType {
  type: "product-info";
}

const useFormHandler = ({ type }: IFormHandlerType) => {
  switch (type) {
    case "product-info":
      return ProductInfoFormHander();
    default:
      return;
  }
};

export default useFormHandler;
