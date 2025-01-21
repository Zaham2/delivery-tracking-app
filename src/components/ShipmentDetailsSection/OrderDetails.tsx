import React from "react"
import { OrderStatus, RequiredTrackingDetails } from "../../lib/types"
import { formatDate, getRemainingDays, orderStatusTextGenerator } from "../../lib/utils"
import OrderDetailsTimeline from "./OrderDetailsTimeline"
import { SHIPMENT_FINAL_STATES } from "../../lib/constants"

const OrderDetails = (props: { shipmentDetails: RequiredTrackingDetails | null }) => {

  const [orderStatus, setOrderStatus] = React.useState<OrderStatus | null>(null)
  const [remainingDays, setRemainingDays] = React.useState<number | null>(null)

  React.useEffect(() => {
    setOrderStatus(props?.shipmentDetails?.currentStatus ?? null)
  }, [props.shipmentDetails])

  React.useEffect(() => {
    setRemainingDays(getRemainingDays(props.shipmentDetails?.scheduleDate ?? null))
  }, [orderStatus, props.shipmentDetails])

  if(!props.shipmentDetails || !remainingDays || !orderStatus) {
    return
  }

  const arrivingByText = orderStatus.state in Object.values(SHIPMENT_FINAL_STATES) ? `Arriving by` : `Arrived`

  return (
    <div className='order-details-container'>
      <div className='order-details-top-section'>
        <span className="order-number-text">ORDER # {props.shipmentDetails.trackingNumber}</span>
        <span className="order-arriving-by-text">{arrivingByText} <span className="arriving-by-date-text">{formatDate(props.shipmentDetails.scheduleDate)}</span></span>
        <span className="order-status-text">{orderStatusTextGenerator(remainingDays, orderStatus.state)}</span>
      </div>
      <div className='order-details-bottom-section'>
        <OrderDetailsTimeline orderStatus={orderStatus}/>
      </div>
    </div>
  )
}

export default OrderDetails
