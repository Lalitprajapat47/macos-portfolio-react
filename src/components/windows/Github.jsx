import React from 'react'
import githubData from '../..//assets/github.json'
import MacWindow from './MacWindow'
import "./github.scss"

const GitCard = ({data = { id:1,image:"",title:"",description:"",tags:[],repoLink:"",demoLink:""}})=>{
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p>{data.demoLink}</p>
        <div className="tags">
           {
            data.tags.map((tag, idx)=> <p key={`${data.id}-tag-${idx}`} className='tag' >{tag}</p>)
           }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repositery</a>
            <a href={data.demoLink}>Demo link</a>
        </div>

    </div>
}

const Github = ({windowName, windowState, setWindowState}) => {


  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} >
        <div className="cards">
            {githubData.map(project=>{
                return <GitCard key={project.id || project.title} data={project} />
            })}
        </div>
    </MacWindow>
  )
}

export default Github