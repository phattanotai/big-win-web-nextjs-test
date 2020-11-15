import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listService = () => {
  return axios.get(`${endpoint}/services`, configHeader());
};

const getService = (id) => {
  return axios.get(`${endpoint}/services/${id}`, configHeader());
};

const listServiceFromAgent = (AgentCode) => {
  return axios.get(`${endpoint}/services_agent/${AgentCode}`, configHeader());
}; 
 
const createService = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/services`, data, configHeader());
};

const editService = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/services/${id}`, data, configHeader());
};

const deleteService = (id) => {
  return axios.delete(`${endpoint}/services/${id}`, configHeader());
};

export default {
  listService,
  getService,
  listServiceFromAgent,
  createService,
  editService,
  deleteService,
};
