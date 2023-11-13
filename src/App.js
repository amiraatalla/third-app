import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';

class App extends Component {
  render() {
    return <>
      <Navbar />
    </>
  }



}

export default App;
