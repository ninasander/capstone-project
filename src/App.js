import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EncounterPage from './components/EncounterPage/EncounterPage'
import CreatePage from './components/CreatePage/CreatePage'
import useCreatureEntries from './components/hooks/useCreatureEntries'

function App() {
  const { creatureEntries, addCreatureEntry } = useCreatureEntries()
  return (
    <Router>
      <Switch>
        <Route path="/encounter">
          <EncounterPage creatureEntries={creatureEntries} />
        </Route>
        <Route expect path="/">
          <CreatePage
            creatureEntries={creatureEntries}
            addCreatureEntry={addCreatureEntry}
          />
          {/* <JournalPage entries={entries} addEntry={addEntry} /> */}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
