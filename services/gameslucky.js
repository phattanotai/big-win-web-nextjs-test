import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listGameslucky = () => {
  return axios.get(`${endpoint}/gameslucky`, configHeader());
};

const getGamesluckyFromId = (id) => {
  return axios.get(`${endpoint}/gameslucky/${id}`, configHeader());
};
 
const createGameslucky = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/gameslucky`, data, configHeader());
};

const editGameslucky = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/gameslucky/${id}`, data, configHeader());
};

const deleteGameslucky = (id) => {
  return axios.delete(`${endpoint}/gameslucky/${id}`, configHeader());
};

export default {
  listGameslucky,
  getGamesluckyFromId,
  createGameslucky,
  editGameslucky,
  deleteGameslucky,
};
