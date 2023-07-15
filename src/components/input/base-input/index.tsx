import classNames from "classnames";
import { Container } from "components/container";
import { Text } from "components/typography";
import React from "react";

export interface IInput extends React.ComponentProps<"input"> {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: React.ReactNode;
}

const Input: React.FC<IInput> = ({ children, label, className, iconRight, iconLeft, ...rest }) => {
  const classes = classNames("flex flex-col space-y-1", className);
  return (
    <Container className={classes}>
      <Text fontWeight="semibold" className="text-[15px]">
        {label}
      </Text>
      <Container className="border-2 rounded-[6px] w-full py-[10px] px-4">
        <input {...rest} className="w-full outline-none font-montserrat" />
      </Container>
    </Container>
  );
};

export default Input;
