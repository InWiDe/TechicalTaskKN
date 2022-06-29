export default function processData (filteredData) {
  const result = []
  const groupedData = filteredData.reduce((groups, x) => {
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
