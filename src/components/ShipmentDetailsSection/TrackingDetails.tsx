import React from "react"
import { OrderStatus, RequiredTrackingDetails } from "../../lib/types"
import TransitEvent from "./TransitEvent"

const TrackingDetails = (props: { shipmentDetails: RequiredTrackingDetails | null }) => {

  const [eventsByDay, setEventsByDay] = React.useState<Map<string, OrderStatus[]>>(new Map())

  React.useEffect(() => {
    if (props.shipmentDetails?.transitEvents) {
      const eventMap = new Map<string, OrderStatus[]>()

      props.shipmentDetails.transitEvents.forEach((event) => {
        const eventDate = new Date(event.timestamp)
        const dateKey = eventDate.toDateString()
        if (!eventMap.has(dateKey)) {
          eventMap.set(dateKey, [])
        }
        eventMap.get(dateKey)?.push(event)
      })
      setEventsByDay(eventMap)
    }

  }, [props.shipmentDetails])

  if (!props.shipmentDetails) {
    return null
  }

  if (props.shipmentDetails.transitEvents.length === 0) {
    return (
      <div className="tracking-details-empty">
        <div className="tracking-details-empty-text">No tracking history available</div>
      </div>)
  }

  return (
    <div className="tracking-details">
      <div className="tracking-details-title">Tracking details</div>
      {Array.from(eventsByDay).map(([day, transitEvents]) => {
        return (
          <div className="tracking-details-item-container" key={day}>
            <div className="tracking-details-day">
              <span className="tracking-details-day-bullet"></span>
              {day}
            </div>
            {transitEvents.map((event: OrderStatus, index: number) => (
              <TransitEvent key={index} transitEvent={event} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default TrackingDetails
