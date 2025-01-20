import React from "react";
import Header from "./components/Header"
import Navbar from "./components/Navbar/index"
import OrderDetails from "./components/ShipmentDetailsSection/OrderDetails"
import TrackingDetails from "./components/ShipmentDetailsSection/TrackingDetails"
import { TrackingContext } from "./context/TrackingContext";
import { getTrackingDetails } from "./services/trackingService";
import { isErrorResponse, RequiredTrackingDetails } from "./lib/types";
import { mapTrackingDetails } from "./lib/utils";

function App() {

  const [hasShipment, setHasShipment] = React.useState(false);
  const [shipemntDetails, setShipmentDetails] = React.useState<RequiredTrackingDetails | null>(null);

  const context = React.useContext(TrackingContext);

  React.useEffect(() => {

    if (context?.trackingDetails) {
      getTrackingDetails(context?.trackingDetails.trackingNumber)
      .then((data) => {
        if(!isErrorResponse(data)) {
          setShipmentDetails(mapTrackingDetails(data))
          setHasShipment(true)
        }
      })
      .catch((error) => {
        throw new Error(error)
      })
    }
  }, [context?.trackingDetails]);


  return (
    <div className="app-container">
        <Navbar />
        <Header />
        {
          hasShipment && (
            <>
              <OrderDetails shipmentDetails={shipemntDetails} />
              <TrackingDetails shipmentDetails={shipemntDetails} />
            </>
          )
        }
    </div>
  )
}

export default App
