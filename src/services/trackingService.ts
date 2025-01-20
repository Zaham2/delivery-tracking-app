export const getTrackingDetails = async (trackingNumber: string) => {
  const response = await fetch(import.meta.env.VITE_API_URL + trackingNumber, {
    method: 'GET',
    headers: {
      [import.meta.env.VITE_API_HEADER_KEY]: import.meta.env.VITE_API_HEADER_VALUE,
    },
  });
  const data = await response.json();
  console.log('initiated fetch');
  console.log(data);
  return data;
};
