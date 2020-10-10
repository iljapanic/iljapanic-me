import React from 'react'

const Item = ({ start, end, program, school, url }) => {
  var year

  if (start) {
    year = start + '–' + end
  } else {
    year = end
  }

  return (
    <li>
      <div className="year">{year}</div>
      <div>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            {program}
          </a>
        </div>
        <div className="small color-secondary">{school}</div>
      </div>
    </li>
  )
}

const Education = () => {
  return (
    <ul className="cv-list education">
      <Item
        end="2019"
        program="Fab Academy"
        school="Fab Lab Barcelona"
        url="https://fablabbcn.org/education/academies/fab-academy-barcelona"
      />
      <Item
        start="2018"
        end="2019"
        program="Design for Emergent Futures"
        school="Institute for Advanced Architecture of Catalonia"
        url="https://iaac.net/educational-programmes/masters-programmes/master-in-design-for-emergent-futures-mdef/"
      />
      <Item
        start="2017"
        end="2018"
        program="Smart Cities & Urban Analytics"
        school="UCL, London"
        url="https://www.ucl.ac.uk/prospective-students/graduate/taught/degrees/smart-cities-urban-analytics-msc"
      />
      <Item
        start="2012"
        end="2015"
        program="Information Management"
        school="Copenhagen Business School"
        url="https://studieordninger.cbs.dk/2016/ba/171"
      />
      <Item
        start="2011"
        end="2012"
        program="Applied Informatics"
        school="University of Economics, Prague"
        url="https://fis.vse.cz/bakalarske-studium/bakalarske-programy/program-aplikovana-informatika/"
      />
    </ul>
  )
}

export default Education
