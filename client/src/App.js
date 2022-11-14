import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from "react";
import Profile from './pages/Profile';
import './App.css';
import main from "./images/main.svg"
import './index.css'
import Header from './components/Header';
import Home from './pages/Home';



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
        <Header></Header>
        <Home></Home>
    </main>
    </div>
    </ApolloProvider>
  );
}

export default App;
