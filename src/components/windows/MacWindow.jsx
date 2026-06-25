import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({
  children,
  width = '50vw',
  height = '60vh',
  windowName,
  windowState,
  setWindowState,
}) => {
  const handleClose = () => {
    setWindowState(prev => ({ ...prev, [windowName]: false }))
  }

  return (
    <Rnd
      default={{ x: 300, y: 200, width, height }}
      minWidth={320}
      minHeight={200}
      enableResizing={true}
      dragHandleClassName="nav"
    >
      <div className="window">

        <div className="nav">
          <div className="dots">

            {/* Red — Close */}
            <div className="dot red" onClick={handleClose} title="Close">
              <svg viewBox="0 0 10 10" fill="none">
                <line x1="2" y1="2" x2="8" y2="8" stroke="#4d0000" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="8" y1="2" x2="2" y2="8" stroke="#4d0000" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Yellow — Minimize */}
            <div className="dot yellow" title="Minimize">
              <svg viewBox="0 0 10 10" fill="none">
                <line x1="2" y1="5" x2="8" y2="5" stroke="#5a3c00" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* Green — Fullscreen */}
            <div className="dot green" title="Fullscreen">
              <svg viewBox="0 0 10 10" fill="none">
                <polyline points="2,6 2,8 4,8" stroke="#003d00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="6,2 8,2 8,4" stroke="#003d00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <line x1="2.5" y1="7.5" x2="7.5" y2="2.5" stroke="#003d00" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          <div className="title">
            <p>lalitprajapati — zsh</p>
          </div>
        </div>

        <div className="main-content">
          {children}
        </div>

      </div>
    </Rnd>
  )
}

export default MacWindow