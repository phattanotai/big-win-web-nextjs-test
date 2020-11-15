import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listWallets = () => {
  return axios.get(`${endpoint}/wallets`, configHeader());
};

const getWalletsFromId = (id) => {
  return axios.get(`${endpoint}/wallets/${id}`, configHeader());
};

const getWallets = (data) => {
  return axios.post(`${endpoint}/wallets/get`, data, configHeader());
};

const createWallets = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/wallets/register`, data, configHeader());
};

const editWallets = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/wallets/${id}`, data, configHeader());
};

const deleteWallets = (id) => {
  return axios.delete(`${endpoint}/wallets/${id}`, configHeader());
};

export default {
  listWallets,
  getWalletsFromId,
  createWallets,
  editWallets,
  deleteWallets,
  getWallets,
};
