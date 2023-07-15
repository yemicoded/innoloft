interface menu {
  label: string;
  route: string;
  icon?: React.ReactNode;
}

export const navMenu: menu[] = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Product",
    route: "/product",
  },
];
