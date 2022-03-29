import React from 'react'

export default function Soundcloud({ ...props }) {
  const {
    width = '100%',
    height = '480px',
    url = 'https://soundcloud.com/iljapanic/sets/storytelling',
    autoPlay = false,
    hideRelated = false,
    showComments = false,
    showUser = true,
    showReposts = false,
    visual = false,
    color = '000000',
    showTeaser = true,
  } = props

  var src = visual
    ? `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}`
    : `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;show_teaser=${showTeaser}`

  var urlParts = url.split('/')
  var urlTitle = urlParts[urlParts.length - 1]

  return (
    <iframe
      title={`soundcloud-embed-${urlTitle}`}
      width={width}
      height={height}
      scrolling="no"
      frameBorder="no"
      src={src}
      className="mb-12"
    />
  )
}
