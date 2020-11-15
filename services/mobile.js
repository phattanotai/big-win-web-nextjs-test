import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listMobile = () => {
  return axios.get(`${endpoint}/web/mobile`, configHeader());
};

const createMobile = (data) => {
  return axios.post(`${endpoint}/web/mobile/create`, data, configHeader());
};

const editMobile = (data, id) => {
  return axios.put(`${endpoint}/web/mobile/${id}`, data, configHeader());
};

const deleteMobile = (id) => {
  return axios.delete(`${endpoint}/web/mobile/${id}`, configHeader());
};

const detailMobile = (id) => {
  return axios.get(`${endpoint}/web/mobile/${id}`, configHeader());
};

export default {
  listMobile,
  createMobile,
  editMobile,
  deleteMobile,
  detailMobile
};
