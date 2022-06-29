const mockDbData = [{
  id: '1',
  code: '234',
  name: 'test',
  date: '10-01-2022'
}, {
  id: '2',
  code: '235',
  name: 'mockName1',
  date: '01-23-2022'
}, {
  id: '3',
  code: '025',
  name: 'test',
  date: '15-01-2022'
}, {
  id: '4',
  code: '025',
  name: 'test',
  date: '12-02-2022'
}, {
  id: '5',
  code: '025',
  name: 'test',
  date: '12-02-2022'
},
{
  id: '6',
  code: '025',
  name: 'test',
  date: '11-01-2022'
},
{
  id: '6',
  code: '025',
  name: 'test',
  date: '11-01-2022'
},
{
  id: '100',
  code: '025',
  name: 'test',
  date: '11-01-2021'
},
{
  id: '120',
  code: '025',
  name: 'test',
  date: '11-01-2021'
},
{
  id: '150',
  code: '025',
  name: 'test',
  date: '11-01-2021'
},
{
  id: '170',
  code: '025',
  name: 'test',
  date: '11-01-2021'
}
]

export default function getDataFromMockDb () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockDbData)
    }, 300)
  })
}
