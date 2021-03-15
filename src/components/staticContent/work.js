import React from 'react'

const Item = ({ ...props }) => (
  <li>
    <div className="year">{props.year}</div>
    <div>{props.children}</div>
  </li>
)

const Work = () => {
  return (
    <ul className="cv-list work">
      <Item year="2020">Started as an UX Engineer at Memsource</Item>
      <Item year="2019">
        Worked as a technical advisor for{' '}
        <a href="https://h40.cz/" target="_blank" rel="noreferrer">
          H40
        </a>{' '}
        non-profit
      </Item>
      <Item year="2019">
        Launched{' '}
        <a href="https://cyberbiomes.org" target="_blank" rel="noreferrer">
          Cyberbiomes
        </a>
      </Item>
      <Item year="2017">
        Assisted a{' '}
        <a href="https://www.cbs.dk/en" target="_blank" rel="noreferrer">
          CBS
        </a>{' '}
        associate professor with research{' '}
      </Item>
      <Item year="2015">
        Started solo UX consultancy and a web design studio
      </Item>
      <Item year="2014">Got a job as a front-end developer at an agency</Item>
      <Item year="2011">
        Made my first website from scratch
        <br />
        (that got me accepted to university in Denmark)
      </Item>
    </ul>
  )
}

export default Work
