import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listTransaction = () => {
  return axios.get(`${endpoint}/transections`, configHeader());
};

const getTransactionFromId = (id) => {
  return axios.get(`${endpoint}/transections/${id}`, configHeader());
};

const getTransactionFromAgentCode = (data,agent_code) => {
  return axios.post(`${endpoint}/transections/agent/${agent_code}` , data , configHeader());
};

const createTransaction = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/transections/`, data, configHeader());
};

const editTransaction = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/transections/${id}`, data, configHeader());
};

const deleteTransaction = (id) => {
  return axios.delete(`${endpoint}/transections/${id}`, configHeader());
};

export default {
  listTransaction,
  getTransactionFromId,
  getTransactionFromAgentCode,
  createTransaction,
  editTransaction,
  deleteTransaction
};
