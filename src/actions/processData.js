/**
 * Function, that processes data by grouping it and counting unique id's per year
 */
export default function processData (data) {
  const result = []
  const groupedData = data.reduce((groups, x) => {
    const year = new Date(x.date).getFullYear()
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(x)
    return groups
  }, {})
  Object.keys(groupedData).forEach(key => {
    const unique = [...new Set(groupedData[key].map(item => item.id))]
    result.push({ year: key, quantity: unique.length })
  })
  return result
}
