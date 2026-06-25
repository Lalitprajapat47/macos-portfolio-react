import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({windowName, windowState, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
        <div className="resume-window">
          <embed src="/Resume.pdf#zoom=page-width" type="application/pdf" frameBorder="0"/>
        </div>
    </MacWindow>
  )
}

export default Resume