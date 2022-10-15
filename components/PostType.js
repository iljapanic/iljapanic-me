export default function PostType({ type }) {
  let label

  if (type == 'note') {
    label = 'Garden'
  } else if (type == 'course') {
    label = 'Course'
  } else if (type == 'essay') {
    label = 'Essay'
  } else if (type == 'project') {
    label = 'Project'
  } else if (type == 'talk') {
    label = 'Talk'
  }

  if (label) {
    return (
      <div className="text-secondary font-mono uppercase tracking-wider">
        {label}
      </div>
    )
  } else {
    return ''
  }
}
