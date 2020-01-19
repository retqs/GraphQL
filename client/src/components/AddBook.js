import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../Queries/Queries';
import { flowRight as compose } from 'lodash';

const AddBook = props => {
  const [state, setState] = useState({
    name: '',
    genre: '',
    authorId: ''
  });
  console.log(props.addBookMutation);
  const RenderAuthors = () => {
    let data = props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading....</option>;
    } else {
      return data.authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    props.addBookMutation({
      variables: {
        name: state.name,
        genre: state.genre,
        authordId: state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  };

  return (
    <div>
      <form id='add-book' onSubmit={onSubmitForm}>
        <div className='field'>
          <label>Book name:</label>
          <input type='text' value={state.name} onChange={e => setState({ ...state, name: e.target.value })} />
        </div>

        <div className='field'>
          <label>Genre:</label>
          <input type='text' value={state.genre} onChange={e => setState({ ...state, genre: e.target.value })} />
        </div>

        <div className='field'>
          <label>Author:</label>
          <select value={state.authorId} onChange={e => setState({ ...state, authorId: e.target.value })}>
            <option>select smth</option>
            <RenderAuthors></RenderAuthors>
          </select>
        </div>

        <button type='submit'>+</button>
      </form>
    </div>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
