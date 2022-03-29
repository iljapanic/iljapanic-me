import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Video({ url }) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="100%"
        light={true}
        className="react-player"
      />
    </div>
  )
}
