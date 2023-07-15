import classNames from "classnames";
import { Container } from "components/container";
import { Text } from "components/typography";
import React from "react";
import { BiSearch } from "react-icons/bi";

export interface ISearchInput extends React.ComponentProps<"input"> {
  iconLeft?: React.ReactNode;
}

const SearchInput: React.FC<ISearchInput> = ({
  children,
  className,
  iconLeft,
  ...rest
}) => {
  const classes = classNames(
    "flex items-center space-x-2 py-1 px-4 rounded-[6px]",
    className
  );
  return (
    <Container className={classes}>
      <Container className="w-full">
        <input
          {...rest}
          className="w-full outline-none font-montserrat bg-transparent"
        />
      </Container>
      <BiSearch />
    </Container>
  );
};

export default SearchInput;
