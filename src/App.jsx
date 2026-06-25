import React, { useState } from 'react'
import "./app.scss"
import Docs from './components/Docs.jsx'
import Nav from './components/Nav.jsx'
import MacWindow from './components/windows/MacWindow.jsx'
import Github from './components/windows/Github.jsx'
import Note from './components/windows/Note.jsx'
import Resume from './components/windows/Resume.jsx'
import Spotify from './components/windows/Spotify.jsx'
import Cli from './components/windows/Cli.jsx'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github.js'
import { resume } from 'react-dom/server'

const App = () => {

  const [windowState, setWindowState] = useState({
    github: false,
    resume: false,
    note: false,
    spotify: false,
    cli: false
  })

  return (
    <>
    <main>
      <Nav />
      <Docs windowState={windowState} setWindowState={setWindowState} />
      { windowState.github &&  <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
      { windowState.note &&  <Note windowName="note" windowState={windowState} setWindowState={setWindowState} />}
      { windowState.resume &&  <Resume windowName="resume" windowState={windowState} setWindowState={setWindowState} />}
      { windowState.spotify &&  <Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState} />}
      { windowState.cli &&   <Cli windowName="cli" windowState={windowState} setWindowState={setWindowState} />}
    </main>
    </>
  )
}

export default App