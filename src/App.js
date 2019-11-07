import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "bootswatch/dist/lux/bootstrap.min.css";

import Navbar from './components/navbar'
import MainMenu from './components/mainmenu'
import ConferenceList from './components/conferencelist'
import Conference from './components/conference'
import MyConferences from './components/myconferences'
import Footer from './components/footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={MainMenu} />
      <Route path="/conferences" component={ConferenceList} />
      <Route path="/conference/id" component={Conference} />
      <Route path="/myconferences" component={MyConferences} />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
