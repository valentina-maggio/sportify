// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { GEO_KEY  } from "../env";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: GEO_KEY,
        q: `${lat}+${lng}`,
        language: "en"
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;