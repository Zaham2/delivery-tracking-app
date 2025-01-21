export interface TrackingContextType {
  trackingDetails: TrackingDetailsContextData | null;
  setTrackingDetails: (details: TrackingDetailsContextData) => void;
}

export interface TrackingDetailsContextData {
  trackingNumber: string;
}

export interface FullTrackingDetailsResponse {
    // required fields
    CurrentStatus: OrderStatus;
    TransitEvents: OrderStatus[];
    TrackingNumber: string;
    CreateDate: Date;
    PromisedDate: Date;
    ScheduleDate: Date;

    // unneeded fields
    provider?: string;
    Type?: string;
    TransitEvents?: object[];

    DropOffAddress?: object;
    isEditableShipment?: boolean;
    exceptionCode?: number;
    nextWorkingDay?: Date[];
    collectedFromBusiness?: Date;
    canRequestPOSMachine?: boolean;
    deliveryCountryCode?: string;
    canPayOnline?: boolean;
    isOnlinePaymentFeatureEnabled?: boolean;
}

export interface TrackingDetailsErrorResponse {
  error: string;
  status: string;
}

export interface RequiredTrackingDetails {
    transitEvents: OrderStatus[];
    currentStatus: OrderStatus;
    trackingNumber: string;
    createDate: Date;
    promisedDate: Date;
    scheduleDate: Date;
}

export interface OrderStatus {
  state: string;
  code: number;
  timestamp: Date;
}

// Not very good with type guards, this is AI generated
export const isErrorResponse = (data: object): data is TrackingDetailsErrorResponse => {
    return 'error' in data;
};
