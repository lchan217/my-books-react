import React from 'react';
import './App.css';
import AuthorContainer from './containers/AuthorContainer'
import BookContainer from './containers/BookContainer'

function App() {
  return (
    <div>
      Welcome!
    <br/>
      Add login screen here once user model is set up
      <AuthorContainer />
      <BookContainer />
    </div>
  );
}

export default App;
