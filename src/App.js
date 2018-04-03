import React, { Component } from 'react';
import Project from './components/Project'
import SearchItem from './components/SearchItem'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      project: []

  }
}
  componentWillMount(){
    this.setState({project: [
      {
         category: 'Dressers'
      },
      {
         category: 'Desk'
      },
      {
         category: 'Table'
      }
    ]});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Done and Done</h1>
        </header>
        <SearchItem />

        <Project project={this.state.project}/>
      </div>
    );
  }
}

export default App;
