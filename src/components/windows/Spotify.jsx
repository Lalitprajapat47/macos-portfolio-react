import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({windowName, windowState, setWindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setWindowState={setWindowState} width='20vh' >
        <div className="spotify-window">
                <iframe
                  data-testid="embed-iframe"
                  title="spotify-embed"
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/album/0Rkv5iqjF2uenfL0OVB8hg?utm_source=generator&theme=0&si=2231b55bf15d4b5e"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify