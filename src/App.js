import React from "react";
import "./App.css";
import Home from "./components/users/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewUserForm from "./components/users/NewUserForm";
import Books from "./components/books/Books";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/newUser" component={NewUserForm} />
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
      </Router>
    </div>
  );
}

export default App;
