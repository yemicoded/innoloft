import { Container } from "components/container";
import React from "react";
import ProductOverview from "./overview";
import ProductVideo from "./product-video";
import ProductOfferDetails from "./offer-details";
import { Button, UnstyledButton } from "components/button";

const ProductPageWrapper: React.FC = () => {
  return (
    <Container className="flex flex-col space-y-[20px] md:space-y-[30px]">
      <Container className="flex justify-end">
        <UnstyledButton
          className="py-[8px] px-4 bg-primary rounded-[10px] text-white"
          href="/product/edit"
        >
          Edit
        </UnstyledButton>
      </Container>
      <ProductOverview />
      <ProductVideo />
      <ProductOfferDetails />
    </Container>
  );
};

export default ProductPageWrapper;
