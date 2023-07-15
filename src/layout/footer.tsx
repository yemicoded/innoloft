import classNames from "classnames";
import { IconButton } from "components/button";
import { Container } from "components/container";
import SearchInput from "components/input/search-input";
import { Text } from "components/typography";
import Image from "next/image";
import React from "react";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

const Footer: React.FC = () => {
  const classes = classNames(
    "w-full bg-primary flex items-center justify-center h-[40px] text-white text-[14px]"
  );
  return (
    <footer className={classes}>
      <Text fontWeight="semibold" className="text-center">Developed By Oloko SODIQ Opeyemi (olokoopeyemi06@gmail.com)</Text>
    </footer>
  );
};

export default Footer;
