import { Tab as TabHeadless } from '@headlessui/react'
import classNames from 'classnames'

export function Tabs({ children }) {
  return (
    <TabHeadless.Group>
      <TabHeadless.List className="mb-6 flex space-x-4 md:space-x-8">
        {children.map((child) => {
          const { label } = child.props

          return (
            <TabHeadless
              key={label}
              className={({ selected }) =>
                classNames('uppercase tracking-wide text-xs md:text-sm', {
                  'border-b-2 border-accent font-medium': selected,
                  'border-dim hover:border-secondary border-b-2': !selected,
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
