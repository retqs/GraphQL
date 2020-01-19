import React from 'react';
import List from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddBook from './components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql'
});
//try to recreate this as if it would be CreateContext or Redux,providing it with <provider>{children}<provider>
function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <header className='App-header'>asd;lfI"MD</header>
        <List></List>
        <AddBook></AddBook>
      </div>
    </ApolloProvider>
  );
}

export default App;
