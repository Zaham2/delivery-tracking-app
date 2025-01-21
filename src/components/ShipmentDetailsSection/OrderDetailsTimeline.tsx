import { SHIPMENT_TIMELINE_STATUSES } from "../../lib/constants"

const OrderDetailsTimeline = () => {
    return (
        <div className="order-details-timeline">
            {Object.values(SHIPMENT_TIMELINE_STATUSES).map((timelineStatus, index) => (
                <div key={index} className="order-details-timeline-item">
                    {index < (Object.keys(SHIPMENT_TIMELINE_STATUSES).length - 1) && <div className="order-details-timeline-item-connector"></div>}
                    <div className="order-details-timeline-item-dot">
                        <span className="order-details-timeline-item-label">{timelineStatus}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderDetailsTimeline
