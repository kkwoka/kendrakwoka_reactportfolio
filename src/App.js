import React from 'react';
import './App.css';
import Header from './components/Header';
import Wrapper from "./components/Wrapper";
import AboutMe from './pages/AboutMe/index';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio/index';
import Footer from "./components/Footer/index";
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
