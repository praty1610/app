import React, { Component } from 'react';
import Pagination from './Pagination';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state ={
      total: 15,
      skip: 4,
      previous: false,
      next: true,
      current: 1,
      itemsPerPage: 4
    }
  }

  nextPage = () => {
    let { skip, total, itemsPerPage } = this.state;
    this.setState({
      current: skip+1,
      skip: skip+itemsPerPage,
      next: skip>=total ? false: true,
      previous: true
    })
  }

  previousPage = () => {
    let { current, skip, itemsPerPage } = this.state;
    this.setState({
      current: current-itemsPerPage,
      skip: skip-itemsPerPage,
      next: true,
      previous: current-1===itemsPerPage?false:true
    })
  }

  render() {
    return (
      <div className="App">
        <Pagination 
          {...this.state}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
      </div>
    );
  }
}

export default App;
