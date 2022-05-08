// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { GEO_KEY } from '../env';

async function getCoordinatesOfAddress(address) {
  const response = await axios.get(
    'https://api.opencagedata.com/geocode/v1/json? ',
    {
      params: {
        key: GEO_KEY,
        q: address,
        language: 'en',
      },
    }
  );

  return response;
}

export default getCoordinatesOfAddress;
