import "styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import DashboardLayout from "layout";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { store } from "store";

export default function App({ Component, pageProps }: AppProps) {
  const [client] = React.useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
