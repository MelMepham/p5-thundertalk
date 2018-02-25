
import React from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/sketch'

import {HashRouter as Router, Route} from 'react-router-dom'


class App extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    rotation: 150,
    stateSketch: sketch,
  };
}
render() {

  return (
    <Router>
      <div>
      <div>Hello World</div>
        <P5Wrapper sketch={this.state.stateSketch}/>
        </div>
    </Router>


  )
}
}

  export default App
