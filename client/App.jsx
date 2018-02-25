
import React from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import sketch from './sketches/sketch'

import {HashRouter as Router, Route} from 'react-router-dom'


class App extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    rotation: 60,
    stateSketch: sketch,
  };
  this.rotationChange = this.rotationChange.bind(this)
}

rotationChange(e){
  this.setState({rotation:e.target.value});
}
render() {

  return (
    <Router>
      <div>
      <div>Hello World</div>
        <P5Wrapper sketch={this.state.stateSketch} rotation={this.state.rotation}/>
        </div>
    </Router>


  )
}
}

  export default App
