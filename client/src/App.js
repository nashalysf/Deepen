import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import React from "react";
import Profile from "./pages/Profile";
import "./App.css";
import main from "./images/main.svg";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
//RVB
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ProfileNav from "./components/ProfileNav";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <main>
          <Header></Header>
          <Home></Home>
          <BrowserRouter>
            <Routes>
           
                <Route path="profile" element={<Profile />} />
            
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
