import { RequiredTrackingDetails } from "../../lib/types"

const OrderDetails = (props: { shipmentDetails: RequiredTrackingDetails | null }) => {

  if(!props.shipmentDetails) {
    return null
  }

  return (
    <div className='order-details-container'>
      <div className='order-details-header'>
        <h6 className="order-number-text">Order# {props.shipmentDetails.trackingNumber}</h6>
        <h2 className="arriving-by-text">Arriving by</h2>
        <h2 className="arriving-by-date-text">2025-01-20</h2>
      </div>
    </div>
  )
}

export default OrderDetails
