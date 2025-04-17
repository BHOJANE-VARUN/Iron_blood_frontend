import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Search from './components/Search';
import Body from './components/Body';
import React from 'react';
import {QueryClientProvider , QueryClient } from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

function App() {
  const queryClient = new QueryClient();
  const Router = createBrowserRouter([
    {
      path:"/",
      element:<Search/>
    },
    {
      path:"/body",
      element:<Body/>
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Router} />
    <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
