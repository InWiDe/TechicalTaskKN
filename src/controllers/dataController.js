import express from 'express'
import moment from 'moment'
import getDataFromMockDb from '../../db/mockDb.js'
import processData from '../actions/processData.js'

const router = new express.Router()

/**
 * Endpoint, that retrieves all processed data
 * @params {from}, from specific date
 * @params {to}, to specific date
 * @returns 200 response with processed data
 * @error returns 400 response if bad request, 404 if no data found within defined timespan.
 */
router.get('/data/:from/:to', async (req, res) => {
  try {
    const dateFormat = 'MM-DD-YYYY'
    if (!moment(req.params.from, dateFormat, true).isValid() || !moment(req.params.to, dateFormat, true).isValid()) {
      throw new Error(`The error occured due to the parameter format mismatch:${dateFormat}`)
    }
    const from = Date.parse(req.params.from)
    const to = Date.parse(req.params.to)
    const mockDataFromDb = await getDataFromMockDb()
    const filteredData = mockDataFromDb.filter(data => (data.id !== null && data.id !== '' && data !== undefined && data.code === '025' && data.name.includes('test') && (Date.parse(data.date) >= from && Date.parse(data.date) <= to)))
    if (filteredData.length > 0) {
      const processedData = processData(filteredData)
      res.status(200).send(processedData)
    } else {
      res.status(404).send('No data was found for this request')
    }
  } catch (error) {
    res.status(400).send(`Problem occured while getting filtered data. Reason:${error.message}`)
  }
})

export default router
