import { RequiredTrackingDetails } from "../../lib/types"

const TrackingDetails = (props: { shipmentDetails: RequiredTrackingDetails | null }) => {
  if(!props.shipmentDetails) {
    return null
  }

  return (
    <div>
      
    </div>
  )
}

export default TrackingDetails
