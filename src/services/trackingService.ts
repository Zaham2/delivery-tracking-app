import {
  FullTrackingDetailsResponse,
  TrackingDetailsErrorResponse,
  isErrorResponse,
} from "../lib/types";

export const getTrackingDetails = async (
  trackingNumber: string
): Promise<FullTrackingDetailsResponse> => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + trackingNumber,
      {
        method: "GET",
        headers: {
          [import.meta.env.VITE_API_HEADER_KEY]: import.meta.env
            .VITE_API_HEADER_VALUE,
        },
      }
    );
    const data: FullTrackingDetailsResponse | TrackingDetailsErrorResponse =
      await response.json();
    console.log(data);
    if (isErrorResponse(data)) throw new Error(data.error);

    return data;
  } catch (error) {
    console.error("Error fetching tracking details:", error);
    throw new Error("Error fetching tracking details");
  }
};
