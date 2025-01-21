import { OrderStatus } from '../../lib/types'
import { formatTime } from '../../lib/utils'

const TransitEvent = (props: { transitEvent: OrderStatus }) => {
  return (
    <div className="transit-event">
        <div className="transit-event-state">{props.transitEvent.state}</div>
        <div className="transit-event-date">{formatTime(new Date(props.transitEvent.timestamp))}</div>
    </div>
  )
}

export default TransitEvent
