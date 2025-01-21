import React, { createContext, useState } from 'react';
import { TrackingContextType, TrackingDetailsContextData } from '../lib/types';

export const TrackingContext = createContext<TrackingContextType | null>(null);

export const TrackingProvider = ({ children }: { children: React.ReactNode }) => {
  const [trackingDetails, setTrackingDetails] = useState<TrackingDetailsContextData | null>(null);

  return (
    <TrackingContext.Provider value={{ trackingDetails, setTrackingDetails }}>
      {children}
    </TrackingContext.Provider>
  );
};
