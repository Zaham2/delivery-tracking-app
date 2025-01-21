export const LANGUAGES = {
    EN: 'English',
    AR: 'Arabic'
}

export const SHIPMENT_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    SHIPMENT_CREATED: 'created',
    PICKED_UP: 'picked_up',
    IN_TRANSIT: 'In Transit',
    OUT_FOR_DELIVERY: 'Out for delivery',
    RECEIVED_AT_WAREHOUSE: 'Received at warehouse',

    DELIVERED: 'Delivered',
    RETURNED: 'Returned',
}

export const SHIPMENT_TIMELINE_STATUSES = {
    PICKED_UP: 'Picked Up',
    PROCESSING: 'Processing',
    OUT_FOR_DELIVERY: 'Out for Delivery',
    DELIVERED: 'Delivered',
}

export const SHIPMENT_FINAL_STATES = [SHIPMENT_STATUS.DELIVERED, SHIPMENT_STATUS.RETURNED]
