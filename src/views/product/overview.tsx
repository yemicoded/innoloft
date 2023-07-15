import Avatar from "components/avatar";
import { Container } from "components/container";
import { Text } from "components/typography";
import { StoreContext } from "context/store-context";
import Image from "next/image";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "store";
import GoogleMap from "./google-map";

const ProductOverview: React.FC = () => {
  const store = React.useContext(StoreContext);
  const { data, isLoading, configuration } = useSelector(
    (state: RootState) => state.apiInfo
  );

  return (
    <Container className="flex flex-col lg:flex-row border-2 rounded-[10px] overflow-hidden bg-white">
      <Container className="flex-1">
        <Container className="relative">
          <Container className="absolute top-0 left-0 w-full flex justify-between">
            <Container className="w-fit bg-white rounded-br-[10px] flex items-center">
              <Container className="w-[40px] h-[40px] bg-primary rounded-br-[10px] flex items-center justify-center">
                <FaAward size={16} color="white" />
              </Container>
              <Container className="px-3">
                <Text fontWeight="semibold" className="text-primary">
                  Patent
                </Text>
              </Container>
            </Container>
          </Container>
          {/* Hold Image */}
          <Container className="h-[250px] md:h-[350px] w-full">
            <Image
              src={data?.picture}
              width="1500"
              height="1500"
              className="w-full h-full object-cover"
              alt="logo"
            />
          </Container>
        </Container>
        <Container className="p-4 flex flex-col space-y-2">
          <Text
            as="h1"
            fontWeight="semibold"
            className="text-[18px] text-gray-600"
          >
            {data?.name}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
          </Text>
          <Text
            as="h1"
            fontWeight="medium"
            className="text-[16px] text-gray-500"
          >
            {data?.description}
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            perferendis quisquam deserunt sapiente adipisci saepe, voluptates
            aliquid similique cupiditate aliquam quam veniam dolore numquam
            quae, ducimus amet dolores, voluptatum eos! Fugiat blanditiis
            sapiente iure placeat, dolorum beatae cum dolor officia vitae
            voluptatum rerum! Veritatis commodi maxime ipsum numquam officiis
            eos praesentium nam quo, dolorum laudantium laborum eveniet
            voluptates impedit totam. */}
          </Text>
        </Container>
      </Container>
      {configuration?.hasUserSection && (
        <Container className="lg:w-[350px] lg:border-l-2 p-4 flex flex-col space-y-3">
          <Text
            as="h1"
            fontWeight="semibold"
            className="text-[18px] text-gray-600"
          >
            Offered By
          </Text>
          <Container className="w-[200px] h-[50px]">
            <Image
              src="/assets/images/logo2.svg"
              width="1500"
              height="1500"
              className="w-full h-full object-fill"
              alt="logo"
            />
          </Container>
          <Container className="flex items-center space-x-3">
            <Avatar imgSrc={data?.user?.profilePicture} size="large" />
            <Container>
              <Text fontWeight="semibold" className="text-primary text-[16px]">
                {data?.user?.firstName} {data?.user?.lastName}
              </Text>
              <Text fontWeight="normal" className="text-primary text-[16px]">
                {data?.user?.position}
              </Text>
            </Container>
          </Container>
          <Container className="">
            <Text fontWeight="medium" className="text-gray-600">
              {data?.company?.address?.street}
            </Text>
            <Text fontWeight="medium" className="text-gray-600">
              {data?.company?.address?.house}{" "}
              {data?.company?.address?.city?.name},{" "}
              {data?.company?.address?.country?.name}.
            </Text>
          </Container>
          <GoogleMap />
        </Container>
      )}
    </Container>
  );
};

export default ProductOverview;
