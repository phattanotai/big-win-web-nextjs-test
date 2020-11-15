import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listWeb = () => {
  return axios.get(`${endpoint}/web/web`, configHeader());
};

const listHistory = () => {
  return axios.get(`${endpoint}/web/history`, configHeader());
};

const getHistory = (id) => {
  return axios.get(`${endpoint}/web/history/${id}`, configHeader());
};

const detailWeb = (id) => {
  return axios.get(`${endpoint}/web/web/${id}`, configHeader());
};

const createWeb = (data) => {
  return axios.post(`${endpoint}/web/web/create`, data, configHeader());
};

const editWeb = (data, id) => {
  return axios.put(`${endpoint}/web/web/${id}`, data, configHeader());
};

const deleteWeb = (id) => {
  return axios.delete(`${endpoint}/web/web/${id}`, configHeader());
};

const listconfig = () => {
  return axios.get(`${endpoint}/web/bot_config`, configHeader());
};

const getconfig = (name) => {
  return axios.get(`${endpoint}/web/bot_config/${name}`, configHeader());
};

const editConfig = (data) => {
  return axios.put(`${endpoint}/web/bot_config`, data, configHeader());
};

const sig_mobileloadConfig = () => {
  return axios.put(`${endpoint}/web/send_signal_app_loadconfig`, configHeader());
};

export default {
  listWeb,
  createWeb,
  editWeb,
  deleteWeb ,
  detailWeb,
  listHistory,
  getHistory,
  listconfig,
  getconfig,
  editConfig,
  sig_mobileloadConfig
};
