import { Button } from "components/button";
import { Container } from "components/container";
import Input from "components/input/base-input";
import { Text } from "components/typography";
import { StoreContext } from "context/store-context";
import React from "react";
import { BsCheckLg } from "react-icons/bs";

const EditProductVideo: React.FC = () => {
  const store = React.useContext(StoreContext);

  return (
    <Container className="flex flex-col space-y-6 bg-white w-full border-2 p-4 rounded-[10px]">
      <Container className="flex items-center justify-between">
        <Text
          as="h1"
          fontWeight="semibold"
          className="text-[18px] text-gray-600"
        >
          Video{" "}
          <Text
            as="span"
            fontWeight="medium"
            className="text-gray-400 text-base"
          >
            (Add a youtube embed link)
          </Text>
        </Text>
        <Button variant="primary" className="hidden lg:flex">
          Update URL
        </Button>
      </Container>
      <Input placeholder={store?.videoUrl} />
      <Button variant="primary" className="lg:hidden">
        Update URL
      </Button>
    </Container>
  );
};

export default EditProductVideo;
