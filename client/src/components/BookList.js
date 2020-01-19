import React from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../Queries/Queries';

const BookList = props => {
  const RenderList = () => {
    let data = props.data;
    if (data.loading) {
      return <div>loading...</div>;
    } else {
      return data.books.map(book => <li key={book.id}>{book.name}</li>);
    }
  };

  return (
    <div>
      <ul id='list'>
        <RenderList></RenderList>
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
