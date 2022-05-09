// import React, { useState, useEffect } from 'react';

// import WeatherHeader from './WeatherHeader';
// import WeatherAndForecast from './WeatherAndForecast';
// import WeatherLoader from './WeatherLoader';
// import WeatherWarning from './WeatherWarning';

// import getAddressOfCoordinates from '../api/reverseGeocoding';
// import getCoordinatesOfAddress from '../api/forwardGeocoding';
// import getWeatherAndForecast from '../api/weatherAndForecastAPI';

// import './Weather.css';

// function Weather() {
//   const [address, setAddress] = useState('');
//   const [coordinates, setCoordinates] = useState({});
//   const [weatherAndForecastInfo, setWeatherAndForecastInfo] = useState({});
//   const [locationInfo, setLocationInfo] = useState({});
//   const [contentState, setContentState] = useState('blank');

//   function searchCity(target) {
//     setAddress(target);
//   }

//   function showWarning() {
//     setContentState('warning');
//     setTimeout(() => setContentState('blank'), 3000);
//   }

//   useEffect(() => {
//     function makeRequest(position) {
//       setContentState('loading');
//       getAddressOfCoordinates(
//         position.coords.latitude,
//         position.coords.longitude
//       )
//         .then((res) => {
//           setLocationInfo({
//             city: res.data.results[0].components.city_district,
//             town: res.data.results[0].components.town,
//             state: res.data.results[0].components.state_code,
//             country: res.data.results[0].components.country_code,
//           });
//         })
//         .then(() =>
//           setCoordinates({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           })
//         )
//         // eslint-disable-next-line no-unused-vars
//         .catch((error) => showWarning());
//     }

//     function catchError(err) {
//       alert(`ERROR(${  err.code  }): ${  err.message}`);
//     }

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(makeRequest, catchError);
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   useEffect(() => {
//     if (address === '') return;

//     setContentState('loading');
//     getCoordinatesOfAddress(address)
//       .then((res) => {
//         if (
//           res.data.results.length === 0 ||
//           (res.data.results[0].components.city === undefined &&
//             res.data.results[0].components.town === undefined)
//         ) {
//           showWarning();
//           return;
//         }

//         setCoordinates(res.data.results[0].geometry);
//         setLocationInfo({
//           city: res.data.results[0].components.city,
//           town: res.data.results[0].components.town,
//           state: res.data.results[0].components.state_code,
//           country: res.data.results[0].components.country_code,
//         });
//       })
//       // eslint-disable-next-line no-unused-vars
//       .catch((error) => showWarning());
//   }, [address]);

//   useEffect(() => {
//     if (Object.keys(coordinates).length === 0) return;

//     getWeatherAndForecast(coordinates)
//       .then((res) => {
//         setWeatherAndForecastInfo(res.data);
//         setContentState('weatherAndForecast');
//       })
//       // eslint-disable-next-line no-unused-vars
//       .catch((error) => showWarning());
//   }, [coordinates]);

//   const Main = {
//     blank: () => null,
//     // eslint-disable-next-line react/no-unstable-nested-components
//     loading: () => <WeatherLoader />,
//     // eslint-disable-next-line react/no-unstable-nested-components
//     warning: () => <WeatherWarning />,
//     // eslint-disable-next-line react/no-unstable-nested-components
//     weatherAndForecast: () => (
//       <WeatherAndForecast
//         weatherInfo={weatherAndForecastInfo}
//         location={locationInfo}
//       />
//     ),
//   };

//   return (
//     <div className='weather'>
//       <div className='weather-container'>
//         {/* eslint-disable-next-line react/jsx-no-bind */}
//         <WeatherHeader searchCity={searchCity} />
//           {/* <WeatherHeader /> */}
//           {Main[contentState]()}
//       </div>
//     </div>
//   );
// }

// export default Weather;
