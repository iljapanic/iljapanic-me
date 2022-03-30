import { Tab as TabHeadless } from '@headlessui/react'
import classNames from 'classnames'

const tabs = [
  { name: 'My Account', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: true },
  { name: 'Billing', href: '#', current: false },
]

export function Tabs({ children }) {
  // console.log(children)

  return (
    <TabHeadless.Group>
      <TabHeadless.List className="mb-6 flex space-x-4 md:space-x-12">
        {children.map((child) => {
          const { label } = child.props

          return (
            <TabHeadless
              key={label}
              className={({ selected }) =>
                classNames('uppercase tracking-wide text-xs md:text-sm', {
                  'border-b-2 border-accent font-bold': selected,
                  'border-b-2 border-dim hover:border-secondary': !selected,
                })
              }
            >
              {label}
            </TabHeadless>
          )
        })}
      </TabHeadless.List>
      <TabHeadless.Panels>
        {children.map((child) => {
          return (
            <TabHeadless.Panel key={child.props.label}>
              {child.props.children}
            </TabHeadless.Panel>
          )
        })}
      </TabHeadless.Panels>
    </TabHeadless.Group>
  )
}

export function Tab({ ...props }) {
  return props.children
}
