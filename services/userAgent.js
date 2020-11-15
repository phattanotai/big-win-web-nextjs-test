import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listUserAgent = () => {
  return axios.get(`${endpoint}/agent_user`, configHeader());
};

const getUserAgent = (id) => {
  return axios.get(`${endpoint}/agent_user/${id}`, configHeader());
};

const getUserAgentFromAgentCode = (code) => {
  return axios.get(`${endpoint}/get_agentuser_from_agentcode/${code}`, configHeader());
};

const createUserAgent = (data) => {
  return axios.post(`${endpoint}/agent_user`, data, configHeader());
};

const editUserAgent = (data, id) => {
  return axios.put(`${endpoint}/agent_user/${id}`, data, configHeader());
};

const deleteUserAgent = (id) => {
  return axios.delete(`${endpoint}/agent_user/${id}`, configHeader());
};

export default {
  listUserAgent,
  createUserAgent,
  editUserAgent,
  deleteUserAgent,
  getUserAgent,
  getUserAgentFromAgentCode
};
