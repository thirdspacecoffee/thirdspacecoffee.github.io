var today = new Date()
var dateOfEvent = new Date('2020-11-14')
var eventHasPast = today > dateOfEvent

// Declare a shared state store
export const store = {
  state: {
    onlineOrderingEnabled: true,
    eventHasPast: eventHasPast,
    eventIsCurrent: !eventHasPast
  }
}
