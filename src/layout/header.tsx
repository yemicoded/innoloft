import classNames from "classnames";
import { IconButton } from "components/button";
import { Container } from "components/container";
import SearchInput from "components/input/search-input";
import Image from "next/image";
import React from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

const Header: React.FC = () => {
  const classes = classNames(
    "fixed top-0 left-0 right-0 w-full bg-primary flex items-center justify-center z-[999]"
  );
  return (
    <header className={classes}>
      <Container className="w-[90%] mx-auto flex items-center">
        <Container className="w-[270px]">
          <Container className="w-[120px] h-[70px]">
            <Image
              src="/assets/images/logo2.svg"
              width="1000"
              height="1000"
              className="w-full h-full object-fill filter invert-[500] opacity-100"
              alt="logo"
            />
          </Container>
        </Container>
        <Container className="flex-1 hidden lg:flex items-center justify-between ">
          <SearchInput
            placeholder="Enter Product Title"
            className="bg-white w-[350px]"
          />
          <Container className="flex items-center space-x-3">
            <IconButton
              variant="white"
              icon={<BiSolidMessageRoundedDots />}
              rounded
            />
            <IconButton variant="white" icon={<IoIosNotifications />} rounded />
          </Container>
        </Container>
      </Container>
    </header>
  );
};

export default Header;
