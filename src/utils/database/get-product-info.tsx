import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const getProductInfo = () => {
  const query = axios.get("https://api-test.innoloft.com/product/6781/");

  React.useEffect(() => {});
  const response = useQuery("product-info", () =>
    axios.get("https://api-test.innoloft.com/product/6781/")
  );

  return response;
};

export default getProductInfo;
