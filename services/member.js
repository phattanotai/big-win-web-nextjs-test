import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listMember = () => {
  return axios.get(`${endpoint}/member`, configHeader());
};

const getBalance = (username) => {
  return axios.get(`${endpoint}/member/getBalance/${username}`, configHeader());
};

const getMemberInfo = (username) => {
    return axios.get(`${endpoint}/member/info/${username}`, configHeader());
  };
 
const createMember = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/member/register`, data, configHeader());
};

const editMember = (data, username) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/member/${username}`, data, configHeader());
};

const deposit = (data, username) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/member/deposit/${username}`, data, configHeader());
};

const WithdrawAll = (data, username) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/member/WithdrawAll/${username}`, data, configHeader());
};

const deleteMember = (id) => {
  return axios.delete(`${endpoint}/member/${id}`, configHeader());
};

export default {
  listMember,
  getBalance,
  getMemberInfo,
  createMember,
  editMember,
  deposit,
  WithdrawAll,
  deleteMember,
};
