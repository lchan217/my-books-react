import React from "react";
import "./App.css";
import Home from "./components/users/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewUserForm from "./components/users/NewUserForm";
import BookContainer from "./components/books/BookContainer";
import NewBookForm from "./components/books/NewBookForm";
import Feed from "./components/books/Feed";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path='/newUser' component={NewUserForm} />
        <Route exact path='/' component={Home} />
        <Route exact path='/books' component={BookContainer} />
        <Route exact path='/newBook' component={NewBookForm} />
        <Route exact path='/feed' component={Feed} />
      </Router>
    </div>
  );
}

export default App;
