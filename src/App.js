import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import AddComment from './components/AddComment';
import CommentCards from "./components/CommentCards";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <div className="container-fluid app">
        <Header companyName="HoneyHunters" />
        <AddComment />
        <CommentCards />
        <Footer companyName="HoneyHunters"/>
      </div>
    );
  }
}

export default App;