import classNames from "classnames";
import { Container } from "components/container";
import { Text } from "components/typography";
import React from "react";

interface ITextarea extends React.ComponentProps<"textarea"> {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: React.ReactNode;
}

const TextArea: React.FC<ITextarea> = ({
  children,
  label,
  className,
  iconRight,
  iconLeft,
  ...rest
}) => {
  const classes = classNames("flex flex-col space-y-1", className);
  return (
    <Container className={classes}>
      <Text fontWeight="semibold" className="text-[15px]">
        {label}
      </Text>
      <Container className="border-2 rounded-[6px] w-full py-[10px] px-4">
        <textarea {...rest} className="w-full outline-none font-montserrat" />
      </Container>
    </Container>
  );
};

export default TextArea;
