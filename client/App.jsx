
import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import P5Wrapper from 'react-p5-wrapper'
import Sketch from './components/Sketch'

const App = (props) => {
  return (
    <Router>
      <div>Hello World</div>
      <P5Wrapper sketch={Sketch} />
    </Router>

  )
}

  export default App
