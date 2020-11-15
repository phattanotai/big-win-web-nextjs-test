import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listGames = () => {
  return axios.get(`${endpoint}/gameprovider`, configHeader());
};

const getGames = (id) => {
  return axios.get(`${endpoint}/gameproviderlist/${id}`, configHeader());
};

const listGamesFromBrand = (brand) => {
  return axios.get(`${endpoint}/gameproviderwithbrand/${brand}`, configHeader());
};
 
const createGames = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/gameprovider`, data, configHeader());
};

const AddGames = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/addgameprovider`, data, configHeader());
};

const editGames = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/gameprovider/${id}`, data, configHeader());
};

const deleteGames = (id) => {
  return axios.delete(`${endpoint}/gameprovider/${id}`, configHeader());
};

export default {
  listGames,
  listGamesFromBrand,
  createGames,
  editGames,
  deleteGames,
  getGames,
  AddGames,
};
