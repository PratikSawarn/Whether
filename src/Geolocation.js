// geolocation.js
const getGeolocation = (onSuccess, onError) => {
    const geolocationAPI = navigator.geolocation;
  
    if (!geolocationAPI) {
      onError('Geolocation API is not available in your browser!');
    } else {
    geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          const lat = coords.latitude;
          const long = coords.longitude;
          onSuccess({ lat, long });
        },
        (error) => {
          onError('Something went wrong getting your position!');
        }
      );
    }
  };
  
export default getGeolocation;
  