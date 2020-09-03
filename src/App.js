import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EncounterPage from './components/EncounterPage/EncounterPage'
import CreatePage from './components/CreatePage/CreatePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/encounter">
          <EncounterPage />
        </Route>
        <Route expect path="/">
          <CreatePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
