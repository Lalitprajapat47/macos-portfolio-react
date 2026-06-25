import React from 'react'
import MacWindow from './MacWindow'
import TerminalModule from 'react-console-emulator'
import githubData from '../../assets/github.json'
import './cli.scss'

const Terminal = TerminalModule.default || TerminalModule

const Cli = ({windowName, windowState, setWindowState}) => {
    return (
        <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} width='20vh' height='20vh' >
            <div className="cli-window">
                                <Terminal 
                                    commands={commands}
                                    noDefaults={true}
                                    welcomeMessage={[
                                        'Welcome to the portfolio terminal!',
                                        'Type "help" to see available commands.',
                                        '',
                                        'Quick commands: help, about, projects, contact'
                                    ]}
                                    promptLabel={'lalitprajapati:~$'}
                                />
            </div>
        </MacWindow>
    )
}

export default Cli

const commands = {}

commands.help = {
    description: 'List available commands',
    usage: 'help',
    fn: () => {
        return Object.keys(commands).map(k => `${k} - ${commands[k].description}`)
    }
}

commands.about = {
    description: 'Show a short about text',
    usage: 'about',
    fn: () => {
        return [
            'Name: Lalit Prajapati',
            'Role: Full-stack Developer / Portfolio Owner',
            'Location: (Bhilwara)',
            'Use `projects` to list portfolio projects or `contact` for contact info.'
        ]
    }
}

commands.projects = {
    description: 'List portfolio project titles',
    usage: 'projects',
    fn: () => {
        if (!Array.isArray(githubData) || githubData.length === 0) return 'No projects found.'
        return githubData.map(p => `- ${p.title}`)
    }
}

commands.contact = {
    description: 'Show contact links',
    usage: 'contact',
    fn: () => {
        return [
            'Email: lp7554499@gmail.com',
            'GitHub: https://github.com/Lalitprajapat2005',
            'LinkedIn: https://www.linkedin.com/in/lalit-prajapat-019033206/'
        ]
    }
}