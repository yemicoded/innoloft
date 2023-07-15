import { UnstyledButton } from "components/button";
import { Container } from "components/container";
import EditProductOverview from "./edit-overview";
import EditProductVideo from "./edit-product-video";
import EditProductOfferDetails from "./edit-offer-details";

const EditProductPageWrapper: React.FC = () => {
  return (
    <Container className="flex flex-col space-y-[30px]">
      <Container className="flex justify-end">
        <UnstyledButton className="py-[8px] px-4 bg-primary rounded-[10px] text-white" href="/product">
          View Offer
        </UnstyledButton>
      </Container>
      <EditProductOverview />
      <EditProductVideo />
      <EditProductOfferDetails />
    </Container>
  );
};

export default EditProductPageWrapper;
