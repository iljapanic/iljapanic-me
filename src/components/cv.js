import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import Work from './work'
import Education from './education'
import Competences from './competences'
import Stack from './stack'

const Item = ({ ...props }) => (
  <AccordionItem>
    <AccordionItemHeading>
      <AccordionItemButton>
        <div className="accordion__button-title">{props.title}</div>
        <span>×</span>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>{props.children}</AccordionItemPanel>
  </AccordionItem>
)

export default function CV() {
  return (
    <Accordion
      className="mt"
      allowMultipleExpanded={true}
      allowZeroExpanded={true}
      className="mt-l"
    >
      <Item title="Work highlights">
        <Work />
      </Item>
      <Item title="Education">
        <Education />
      </Item>
      <Item title="Competences">
        <Competences />
      </Item>
      <Item title="Stack">
        <Stack />
      </Item>
    </Accordion>
  )
}
