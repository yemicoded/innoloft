import { Button } from "components/button";
import { Container } from "components/container";
import React from "react";

const HomepageWrapper: React.FC = () => {
  return (
    <Container className="flex items-center justify-center">
      <Button variant="primary" href="/product">
        Click to View Product
      </Button>
    </Container>
  );
};

export default HomepageWrapper;
