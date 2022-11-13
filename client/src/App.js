import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from "react";
import Profile from './pages/Profile';
import './App.css';
import Header from './components/ProfileNav';
import main from "./images/main.svg"


const httpLink = createHttpLink({
  uri: '/graphql',
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
      <img
            src={main}
            className="main"
            style={{ width: "40%" }}
            alt="mainpic"
          />
    </main>
    </div>
    </ApolloProvider>
  );
}

export default App;
