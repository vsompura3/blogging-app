/* 
  @desc - Get the user's timezone
  @return {String} - The user's timezone
*/
function getTimezone() {
  // Get the user's locale
  const userLocale = navigator.language || navigator.userLanguage
  // Create a DateTimeFormat instance with the user's locale
  const dateFormat = new Intl.DateTimeFormat(userLocale)
  // Get the timezone from the resolved options
  const { timeZone } = dateFormat.resolvedOptions()
  return timeZone
}

export default getTimezone
