import React from 'react'
import "./dock.scss"
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'

const Docs = ({windowState, setWindowState}) => {
  return (
    <footer className='dock' >

      <div 
      onClick={()=>{setWindowState(state => ({...state, github:true}))}}
      className="icon github"
      ><img src="/doc-icons/github.svg" alt="" /></div>
      <div className="icon notes"
      onClick={()=>{setWindowState(state => ({...state, note:true}))}}
      ><img src="/doc-icons/notes.svg" alt="" /></div>
      <div className="icon pdf"
      onClick={()=>{setWindowState(state => ({...state, resume:true}))}}
      ><img src="/doc-icons/pdf.svg" alt="" /></div>
      <div 
      onClick={()=>{window.open("https://calendar.google.com/calendar/u/0/r?pli=1","_blank")}}
      className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
      <div className="icon spotify"
      onClick={()=>{setWindowState(state => ({...state, spotify:true}))}}
      ><img src="/doc-icons/spotify.svg" alt="" /></div>
      <div 
      onClick={()=>{window.open("mailto:lp7554499@gmail.com","_blank")}}
      className="icon email"><img src="/doc-icons/email.svg" alt="" /></div>
      <div onClick={()=>{window.open("https://www.linkedin.com/in/lalit-prajapat-019033206/")}} className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>
      <div className="icon cli"
      onClick={()=>{setWindowState(state => ({...state, cli:true}))}}
      ><img src="/doc-icons/cli.svg" alt="" /></div>

    </footer>
  )
}

export default Docs