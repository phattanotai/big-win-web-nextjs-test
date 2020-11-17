import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;


const getBalance = (username) => {
  return axios.get(`${endpoint}/member/getBalance/${username}`, configHeader());
};

const getMemberInfo = (username) => {
    return axios.get(`${endpoint}/member/info/${username}`, configHeader());
};
 
const createMember = (data) => {
  return axios.post(`${endpoint}/member/register`, data, configHeader());
};

const editMember = (data, username) => {
  return axios.put(`${endpoint}/member/${username}`, data, configHeader());
};

const deposit = (data, username) => {
  return axios.put(`${endpoint}/member/deposit/${username}`, data, configHeader());
};

const WithdrawAll = (data, username) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/member/WithdrawAll/${username}`, data, configHeader());
};

const memberLogin = (data) => {
  return axios.post(`${endpoint}/memberlogin1`, data, configHeader());
};

const memberLogin2 = (data) => {
  return axios.post(`${endpoint}/memberlogin2`, data, configHeader());
};

const loadgameAll = (agent_code) => {
  return axios.get(`${endpoint}/loadgames_all_byagent/${agent_code}`, configHeader());
};

export default {
  memberLogin,
  memberLogin2,
  getBalance,
  getMemberInfo,
  createMember,
  editMember,
  deposit,
  WithdrawAll,
  loadgameAll
};
