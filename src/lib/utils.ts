import { SHIPMENT_STATUS } from "./constants";
import { FullTrackingDetailsResponse, RequiredTrackingDetails } from "./types";

export function mapTrackingDetails(selectedShipment: FullTrackingDetailsResponse): RequiredTrackingDetails {
    return {
        currentStatus: selectedShipment.CurrentStatus,
        transitEvents: selectedShipment.TransitEvents || [],
        trackingNumber: selectedShipment.TrackingNumber,
        createDate: new Date(selectedShipment.CreateDate),
        promisedDate: new Date(selectedShipment.PromisedDate),
        scheduleDate: new Date(selectedShipment.ScheduleDate)
    }
}

export function formatDate(date: Date, fullDay: boolean = false): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = fullDay ? fullDays[date.getDay()] : days[date.getDay()];
    const monthName = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${dayName} ${monthName}. ${dayOfMonth}`;
}

export function formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}
export function getRemainingDays(date: Date | null): number | null {
    if(!date) return null

    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export function orderStatusTextGenerator(remainingDays: number, orderStatus: string): string {
    if(orderStatus.toLowerCase() === SHIPMENT_STATUS.DELIVERED.toLowerCase()) {
      return `Your order has been delivered`
    }
  
    if(orderStatus.toLowerCase() === SHIPMENT_STATUS.RETURNED.toLowerCase()) {
      return `Your order has been returned`
    }
  
    if(orderStatus.toLowerCase() === SHIPMENT_STATUS.OUT_FOR_DELIVERY.toLowerCase()) {
      return `Your order is out for delivery`
    }
  
    if(orderStatus.toLowerCase() === SHIPMENT_STATUS.IN_TRANSIT.toLowerCase()) {
      return `Your order is in transit`
    }

    if(orderStatus.toLowerCase() === SHIPMENT_STATUS.RECEIVED_AT_WAREHOUSE.toLowerCase()) {
      return `Your order has been received at our warehouse`
    }
  
    return `Your order is expected to arrive within ${remainingDays - 1} - ${remainingDays} working days.`
  }
