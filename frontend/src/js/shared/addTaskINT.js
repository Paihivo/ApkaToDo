import {API_URL} from '../static/const.js'

const addDevice = async (device) => {
    const { hostname: location } = window.location;
    const settings = {
      method: 'POST',
      body: JSON.stringify(device),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  
    const response = await fetch(API_URL, settings);
    if (!response.ok) throw Error(response.message);
  
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };