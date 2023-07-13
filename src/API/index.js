import axios from 'axios';
import { UserContext } from '../App';

const url = 'https://api.api-ninjas.com/v1/quotes';
const apiKey = 'El04Y467yofY14mocdJPCw==Ent1hCPWqbXCYGTO';


export const fetchQuotes = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        'X-API-KEY': apiKey
      }
    });

    const modifiedData = response.data[0];
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchQuotesList = async (category) => {
  try {

    const response = await axios.get(`${url}?limit=3&category=${category}`, {
      headers: {
        'X-API-KEY': apiKey
      }
    });

    const modifiedDataList = response.data;
    return modifiedDataList;
  } catch (error) {
    console.log(error);
  }
};
