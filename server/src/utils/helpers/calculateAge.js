import { differenceInYears, parse } from 'date-fns'
import getTimezone from './getTimezone.js'

/* 
  @desc - Calculate the age of a user based on their date of birth
  @param {String} dob - The date of birth of the user
  @return {Number} - The age of the user
*/
function calculateAge(dob) {
  const dt = new Date(dob)
  const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)
  // Parse the date of birth string into a Date object
  const dobDate = parse(dtDateOnly, 'yyyy-MM-dd', new Date())
  const currentDate = new Date()
  const age = differenceInYears(currentDate, dtDateOnly)
  return age
}

export default calculateAge
