import axios from "axios";

const api_key = "d3350b02-97da-4672-9b46-13d7e29b9794";
const base_url = `https://airlabs.co/api/v9/schedules?api_key=${api_key}&`;
export const getFlightsAPI = async (startLocation, destination) => {
  const response = await axios.get(
    `${base_url}dep_iata=AMD&dep_icao=VAAH&arr_iata=MRU&arr_icao=FIFA&airline_iata=6E&airline_icao=IGO`
  );
  console.log(response);
  return response.data;
};
