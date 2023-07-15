import classNames from "classnames";
import Avatar from "components/avatar";
import { UnstyledButton } from "components/button";
import { Container } from "components/container";
import { Text } from "components/typography";
import { navMenu } from "constants/nav-menu";
import Image from "next/image";
import React from "react";
import { FaProductHunt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "store";

const SideBar: React.FC = () => {
  const { data, isLoading } = useSelector((state: RootState) => state.apiInfo);

  const classes = classNames("fixed w-[270px] h-full flex flex-col");
  return (
    <Container className={classes}>
      <Container className="flex-1 py-[30px]">
        <Container className="flex items-center space-x-3">
          <Avatar imgSrc={data?.user?.profilePicture} size="large" />
          <Container>
            <Text fontWeight="semibold" className="text-primary text-[14px]">
              {data?.user?.firstName} {data?.user?.lastName}
            </Text>
            <Text fontWeight="normal" className="text-primary text-[12px]">
              {data?.user?.position}
            </Text>
          </Container>
        </Container>
        <Container className="flex flex-col items-start space-y-6 py-[30px]">
          {navMenu.map((menu) => (
            <UnstyledButton
              iconLeft={<FaProductHunt size={20} className="text-primary" />}
              fontWeight="normal"
              key={menu.label}
              href={menu.route}
            >
              <Text className="text-primary text-[14px]">{menu.label}</Text>
            </UnstyledButton>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default SideBar;
