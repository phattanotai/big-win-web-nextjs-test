import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listGames = () => {
  return axios.get(`${endpoint}/gamelist`, configHeader());
};

const getGames = (id) => {
  return axios.get(`${endpoint}/gamelist/${id}`, configHeader());
};

const listGamesFromBrand = (brand) => {
  return axios.get(`${endpoint}/gamelistwithbrand/${brand}`, configHeader());
};
 
const createGames = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/gamelist`, data, configHeader());
};

const editGames = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/gamelist/${id}`, data, configHeader());
};

const deleteGames = (id) => {
  return axios.delete(`${endpoint}/gamelist/${id}`, configHeader());
};

export default {
  listGames,
  listGamesFromBrand,
  createGames,
  editGames,
  deleteGames,
  getGames,
};
