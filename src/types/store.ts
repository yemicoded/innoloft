// This store is not used anywhere in the app anymore. However, it was used to setup local storage store in place of API data
export type TStore = {
  image: string;
  productTitle: string;
  productDescription: string;
  videoUrl: string;
  offerDetails?: TOffer[];
};

export type TOffer = {
  title: string;
  tags: string[];
};
