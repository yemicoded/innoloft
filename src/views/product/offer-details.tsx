import OfferDetailsCard from "components/cards/offer-details";
import { Container } from "components/container";
import { Text } from "components/typography";
import React from "react";
import { BiSolidBusiness } from "react-icons/bi";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { SiInfracost, SiKingstontechnology } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "store";

const ProductOfferDetails: React.FC = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.apiInfo);

  return (
    <Container className="flex flex-col space-y-6 bg-white w-full border-2 p-4 rounded-[10px]">
      <Text as="h1" fontWeight="semibold" className="text-[18px] text-gray-600">
        Offer details
      </Text>
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OfferDetailsCard
          icon={<SiKingstontechnology className="text-gray-400" />}
          title="Technology"
          tags={["Label 1", "Label 2", "Label 3"]}
        />
        <OfferDetailsCard
          icon={<BiSolidBusiness className="text-gray-400" />}
          title="Business Model"
          tags={data?.businessModels?.map((tag: any) => tag.name)}
        />
        <OfferDetailsCard
          icon={<FaAssistiveListeningSystems className="text-gray-400" />}
          title="TRL"
          tags={[data?.trl?.name]}
        />
        <OfferDetailsCard
          icon={<SiInfracost className="text-gray-400" />}
          title="Costs"
          tags={data?.businessModels?.map((tag: any) => tag.name)}
        />
      </Container>
    </Container>
  );
};

export default ProductOfferDetails;
