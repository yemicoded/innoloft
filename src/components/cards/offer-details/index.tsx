import { Container } from "components/container";
import { Text } from "components/typography";
import React from "react";
import { TOffer } from "types/store";

interface IOfferDetailsCard extends TOffer {
  icon: React.ReactNode;
}
const OfferDetailsCard: React.FC<IOfferDetailsCard> = ({
  title,
  tags,
  icon,
}) => {
  return (
    <Container className="flex space-x-2">
      <Container className="min-w-[30px] min-h-[30px] max-h-[30px] border-2 rounded-full flex items-center justify-center">
        {icon}
      </Container>
      <Container className="flex flex-col space-y-2">
        <Text as="h1" fontWeight="medium" className="text-[16px] text-gray-600">
          {title}
        </Text>
        <Container className="flex items-center gap-2 flex-wrap">
          {tags?.map((tag) => (
            <Container
              key={tag}
              className="w-fit px-3 py-[2px] rounded-full bg-gray-300"
            >
              <Text
                as="h1"
                fontWeight="normal"
                className="text-[12px] text-gray-700"
              >
                {tag}
              </Text>
            </Container>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default OfferDetailsCard;
