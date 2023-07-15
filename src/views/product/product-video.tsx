import { Container } from "components/container";
import { Text } from "components/typography";
import { StoreContext } from "context/store-context";
import React from "react";
import ReactPlayer from "react-player";
import {useSelector} from "react-redux"
import { RootState } from "store";

const ProductVideo: React.FC = () => {
    const { data, isLoading } = useSelector((state: RootState) => state.apiInfo);

  return (
    <Container className="flex flex-col space-y-6 bg-white w-full border-2 p-4 rounded-[10px]">
      <Text as="h1" fontWeight="semibold" className="text-[18px] text-gray-600">
        Video
      </Text>
      <Container className="w-full lg:w-[650px] h-[250px] md:h-[320px] mx-auto rounded-[10px] overflow-hidden">
        <ReactPlayer
          url={data?.video}
          width="100%"
          height="100%"
          controls
          playIcon={<Text>Play</Text>}
        />
      </Container>
    </Container>
  );
};

export default ProductVideo;
