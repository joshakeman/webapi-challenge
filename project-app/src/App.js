import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    // ajax request to get the items from a server on mount
    //1. invoke .get
    //2. pass in the server url - base url + endpoint
    axios.get('http://localhost:5000/projects')
    .then(res => {
      this.setState({ projects: res.data });
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="projects">
        <div>
          {this.state.projects.map(project => {
             return ( <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>)
          })}
        </div>
        </div>
      </div>
    );
  }
}

export default App;