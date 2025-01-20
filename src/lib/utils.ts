import { FullTrackingDetailsResponse, RequiredTrackingDetails } from "./types";

export function mapTrackingDetails(selectedShipment: FullTrackingDetailsResponse): RequiredTrackingDetails {
    return {
        currentStatus: selectedShipment.CurrentStatus,
        trackingNumber: selectedShipment.TrackingNumber,
        createDate: selectedShipment.CreateDate,
        promisedDate: selectedShipment.PromisedDate,
        scheduleDate: selectedShipment.ScheduleDate
    }
}
