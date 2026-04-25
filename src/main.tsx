import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";
import { createHead, UnheadProvider } from "@unhead/react/client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
const head = createHead();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Check your index.html.");
}
createRoot(rootElement).render(
  <UnheadProvider head={head}>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </StrictMode>
    </ErrorBoundary>
  </UnheadProvider>,
);
