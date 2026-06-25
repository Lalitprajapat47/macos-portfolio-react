import React from 'react'
import Markdown from 'react-markdown'
import { useEffect, useState } from 'react'
import "./note.scss"
import notes from "../../assets/notes.txt?raw"
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Note = ({windowName, windowState, setWindowState}) => {

    const [markdown, setMarkdown] = useState(null)

    useEffect(()=>{
      setMarkdown(notes)
    },[])

  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
        <div className="note-window">
            {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note