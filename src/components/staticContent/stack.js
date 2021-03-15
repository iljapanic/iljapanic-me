import React from 'react'

const Item = ({ ...props }) => <li>{props.children}</li>

const Stack = () => {
  return (
    <ul className="cv-list competences">
      <Item>HTML</Item>
      <Item>PostCSS</Item>
      <Item>Gatsby.js</Item>
      <Item>React</Item>
      <Item>Sanity.io</Item>
      <Item>Netlify</Item>
      <Item>Git</Item>
      <Item>TouchDesigner</Item>
      <Item>Rhino Grasshopper</Item>
      <Item>Raspberry Pi</Item>
      <Item>Arduino</Item>
      <Item>Notion</Item>
      <Item>Roam Research</Item>
    </ul>
  )
}

export default Stack
