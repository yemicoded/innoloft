import { Container } from "components/container";
import React from "react";
import Header from "./header";
import SideBar from "./sidebar";
import StoreProvider from "context/store-context";
import getProductInfo from "utils/database/get-product-info";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiInfo, fetchConfiguration } from "store/slices/api-slice";
import { AppDispatch, RootState } from "store";
import axios from "axios";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({ children }) => {
  const fetched = React.useRef<boolean>(false);
  const { data, isLoading, configuration } = useSelector(
    (state: RootState) => state.apiInfo
  );
  const dispatch = useDispatch<AppDispatch>();
  React.useEffect(() => {
    if (fetched.current === false) {
      dispatch(fetchApiInfo());
      dispatch(fetchConfiguration());
    }
    return () => {
      fetched.current = true;
    };
  }, []);
  console.log("config", configuration);
  console.log("isLoading", isLoading);
  return (
    <StoreProvider>
      <Container className="w-full bg-primary/5 lg:h-[100vh] lg:overflow-hidden">
        <Header />
        <Container className="w-full lg:max-h-[calc(100vh-70px)] mt-[70px] overflow-auto">
          <Container className="w-[95%] md:w-[90%] mx-auto relative">
            <Container className="lg:ml-auto min-h-[calc(100vh-70px)] relative">
              <Container className="hidden lg:block">
                <SideBar />
              </Container>
              <Container className="hidden">
                <SideBar />
              </Container>
              <main className="lg:w-[calc(100%-270px)] ml-auto py-[20px] md:py-[30px] max-h-full">
                <Container>{children}</Container>
              </main>
            </Container>
          </Container>
        </Container>
      </Container>
    </StoreProvider>
  );
};

export default DashboardLayout;
