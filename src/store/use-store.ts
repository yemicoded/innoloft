import { TStore } from "types/store";
import React from "react";

// This store should be ignored. It is not used anywhere in the app anymore
const useStore = () => {
  const [store, setStore] = React.useState<TStore | null>(null!);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const queriedStore = JSON.parse(
        localStorage.getItem("innoloft-store") as string
      ) as TStore;
      return setStore(queriedStore);
    }
    return setStore(null);
  }, []);

  React.useEffect(() => {
    if (!store) {
      localStorage.setItem(
        "innoloft-store",
        JSON.stringify({
          image: "/assets/images/background.jpg",
          productTitle:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
          productDescription:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae perferendis quisquam deserunt sapiente adipisci saepe, voluptates aliquid similique cupiditate aliquam quam veniam dolore numquam quae, ducimus amet dolores, voluptatum eos! Fugiat blanditiis sapiente iure placeat, dolorum beatae cum dolor officia vitae voluptatum rerum! Veritatis commodi maxime ipsum numquam officiis eos praesentium nam quo, dolorum laudantium laborum eveniet voluptates impedit totam.",
          videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        } as TStore)
      );
    }
  }, [store]);

  return store;
};

export default useStore;
