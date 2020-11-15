import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listTurnover = () => {
  return axios.get(`${endpoint}/turnover`, configHeader());
};

const getTurnoverFromId = (id) => {
  return axios.get(`${endpoint}/turnover/${id}`, configHeader());
};

const getTurnoverAgent = (data,agent_code) => {
  return axios.post(`${endpoint}/turnover/agent/${agent_code}`,data, configHeader());
};
 
const createTurnover = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/turnover`, data, configHeader());
};

const editTurnover = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/turnover/${id}`, data, configHeader());
};

const deleteTurnover = (id) => {
  return axios.delete(`${endpoint}/turnover/${id}`, configHeader());
};

export default {
  listTurnover,
  getTurnoverFromId,
  createTurnover,
  editTurnover,
  deleteTurnover,
  getTurnoverAgent,
};
