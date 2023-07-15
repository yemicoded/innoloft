import Avatar from "components/avatar";
import { Button } from "components/button";
import { Container } from "components/container";
import Input from "components/input/base-input";
import RichTextEditor from "components/input/rich-text-editor";
import TextArea from "components/input/textarea";
import { Text } from "components/typography";
import { StoreContext } from "context/store-context";
import { IProductInfoFormValues } from "form-handlers/product-info";
import useFormHandler from "form-handlers/use-form-handler";
import Image from "next/image";
import React from "react";
import { BsCheckLg, BsTrash } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TFormHandler } from "types/form-handler";
import GoogleMap from "../google-map";

const EditProductOverview: React.FC = () => {
  const store = React.useContext(StoreContext);
  const { data, configuration } = useSelector(
    (state: RootState) => state.apiInfo
  );
  const { isLoading: isFormLoading, formik } = useFormHandler({
    type: "product-info",
  }) as TFormHandler<IProductInfoFormValues>;

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
            <Container className="w-[40px] h-[40px] bg-white hover:bg-gray-300 cursor-pointer duration-300 rounded-bl-[10px] flex items-center justify-center">
              <BsTrash size={16} />
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
        <form onSubmit={formik.handleSubmit}>
          <Container className="p-4 flex flex-col space-y-2">
            <Input
              placeholder={data?.name}
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <RichTextEditor />
            {/* <TextArea
              placeholder= {data?.description}
              rows={8}
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            /> */}
            <Container className="flex space-x-4 items-center justify-end pt-3">
              <Button variant="none">Cancel</Button>
              <Button
                variant="primary"
                iconLeft={<BsCheckLg />}
                type="submit"
                // disabled
              >
                Save
              </Button>
            </Container>
          </Container>
        </form>
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
            <Avatar imgSrc="/assets/images/thumbnail.jpg" size="large" />
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

export default EditProductOverview;
