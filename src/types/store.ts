export type TStore = {
//   data: any;
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
