import { Container } from "components/container";
import { Text } from "components/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface IAvatar extends React.ComponentProps<"button"> {
  href?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  imgSrc?: string;
}

const Avatar: React.FC<IAvatar> = ({
  className,
  disabled,
  href = "",
  imgSrc = "",
  size = "medium",
  children,
  ...rest
}) => {
  const classes = classNames(
    "flex items-center justify-center rounded-full overflow-hidden",
    {
      "w-[30px] h-[30px]": size === "small",
    },
    {
      "w-[45px] h-[45px]": size === "medium",
    },
    {
      "w-[55px] h-[55px]": size === "large",
    },
    { "cursor-not-allowed": disabled },
    className
  );
  if (href) {
    return (
      <Link href={disabled ? "" : href}>
        <button {...rest} className={classes} disabled={disabled}>
          <Image
            src={imgSrc}
            alt="avatar"
            width={1500}
            height={1500}
            className="w-full h-full object-fill"
          />
        </button>
      </Link>
    );
  }
  return (
    <button {...rest} className={classes} disabled={disabled}>
      <Image
        src={imgSrc}
        alt="avatar"
        width={30}
        height={30}
        className="w-full h-full object-fill"
      />
    </button>
  );
};

export default Avatar;
