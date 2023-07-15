import { Button } from "components/button";
import { Container } from "components/container";
import React from "react";

const HomepageWrapper: React.FC = () => {
  return (
    <Container>
      <Button variant="primary" href="/product">
        View Product
      </Button>
    </Container>
  );
};

export default HomepageWrapper;
