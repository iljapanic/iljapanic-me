export default function displayDate(inputDate) {
  const date = new Date(inputDate)
  return date.toLocaleDateString('en-US', {
    // weekday: 'long', // possible values: 'long', 'short', 'narrow'
    month: 'long', // possible values: 'numeric', '2-digit', 'long', 'short', 'narrow'
    year: 'numeric', // possible values: 'numeric', '2-digit'
    // day: 'numeric' // possible values: 'numeric', '2-digit'
  })
}
