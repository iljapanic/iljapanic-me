import classNames from 'classnames'
import { getIcon } from '../../lib/getIcon'

export default function Box({ type = 'info', children }) {
  const boxStyles = classNames(
    'shadow-sm px-4 py-4 rounded-lg text-sm border flex',
    {
      'bg-gray-100 text-secondary border-dim dark:bg-gray-800': type == 'info',
      'bg-red-50 border border-red-200': type == 'danger',
    },
  )

  let icon

  if (type == 'info') {
    icon = getIcon('info', 'h-6 w-6 mr-4 text-dim')
  }

  return (
    <aside className={boxStyles}>
      <div>{icon}</div>
      <div>{children}</div>
    </aside>
  )
}
