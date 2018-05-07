import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Buckets from './components/Buckets'
import './app.css'

const App = () => (
  <div className="app" lang="EN">
    <Switch>
      <Route exact path="/" component={Buckets}/>
    </Switch>
  </div>
)

export default App
