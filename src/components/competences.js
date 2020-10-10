import React from 'react'

const Item = ({ ...props }) => <li>{props.children}</li>

const Competences = () => {
  return (
    <ul className="cv-list competences">
      <Item>Information Architecture</Item>
      <Item>Analytical Writing</Item>
      <Item>Communication Strategy</Item>
      <Item>Heuristic evaluation</Item>
      <Item>UX Analysis</Item>
      <Item>UI Prototyping</Item>
      <Item>Front-end Development</Item>
      <Item>Digital Fabrication</Item>
      <Item>IoT Prototyping</Item>
      <Item>3D Printing</Item>
    </ul>
  )
}

export default Competences
