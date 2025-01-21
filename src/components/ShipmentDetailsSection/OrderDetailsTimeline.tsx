import { SHIPMENT_TIMELINE_STATUSES } from "../../lib/constants"
import { OrderStatus } from "../../lib/types"
import { formatDate } from "../../lib/utils"

interface OrderDetailsTimelineProps {
    orderStatus: OrderStatus
}

const statusCompletionMap = {
    [SHIPMENT_TIMELINE_STATUSES.PICKED_UP.toLowerCase()]: 1,
    [SHIPMENT_TIMELINE_STATUSES.PROCESSING.toLowerCase()]: 2,
    [SHIPMENT_TIMELINE_STATUSES.OUT_FOR_DELIVERY.toLowerCase()]: 3,
    [SHIPMENT_TIMELINE_STATUSES.DELIVERED.toLowerCase()]: 4,
    "returned": 4,
}

const OrderDetailsTimeline = (props: OrderDetailsTimelineProps) => {

    if (!props.orderStatus) return

    return (
        <div className="order-details-timeline">
            {Object.values(SHIPMENT_TIMELINE_STATUSES).map((timelineStatus, index) => {

                const isCompleted = index < statusCompletionMap[props.orderStatus.state.toLowerCase()]
                const shipmentTimelineStatuses = Object.values(SHIPMENT_TIMELINE_STATUSES).length
                const isLastItem = index === shipmentTimelineStatuses - 1

                return (
                    <div
                        key={index}
                        className={`order-details-timeline-item ${isCompleted ? 'completed' : ''}`}>
                        {
                            !isLastItem &&
                            <div
                                className="order-details-timeline-item-connector"
                                style={{
                                    ['--progress-percentage' as string]: isCompleted ? '100%' : '50%'
                                }}>
                            </div>
                        }
                        <div className="order-details-timeline-item-dot"></div>
                        <span className="order-details-timeline-item-label">{timelineStatus}</span>

                        {/* There is no "distinct" source of truth for this data within the provided, So I'm just rendering the given date for demonstration purposes. I could have used fields like "collectedFromBusiness" or "promisedDate" to determine the date, but I don't think this logic should be in the frontend*/}
                        {
                            isCompleted && <span className="order-details-timeline-item-label-date">{formatDate(new Date(props.orderStatus.timestamp), true)}</span>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default OrderDetailsTimeline
