import type { Component } from "solid-js";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import Login from "./components/login";
import { Toaster } from "solid-toast";
import "./elastic-rum";

const queryClient = new QueryClient();

const App: Component = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Login />
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
