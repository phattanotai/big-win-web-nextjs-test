import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listAgent = () => {
  return axios.get(`${endpoint}/agent`, configHeader());
};

const getAgentFromId = (id) => {
  return axios.get(`${endpoint}/agent/${id}`, configHeader());
};
 
const createAgent = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/agent`, data, configHeader());
};

const editAgent = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/agent/${id}`, data, configHeader());
};

const deleteAgent = (id) => {
  return axios.delete(`${endpoint}/agent/${id}`, configHeader());
};

export default {
  listAgent,
  getAgentFromId,
  createAgent,
  editAgent,
  deleteAgent,
};
