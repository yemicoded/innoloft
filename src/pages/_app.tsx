import "styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import DashboardLayout from "layout";
import { Provider } from "react-redux";
import { store } from "store";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </Provider>
  );
}
