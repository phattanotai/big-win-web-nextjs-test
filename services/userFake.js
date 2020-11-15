import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listUserFake = () => {
  return axios.get(`${endpoint}/web/userfake`, configHeader());
};

const getUserFake = (id) => {
  return axios.get(`${endpoint}/web/userfake/${id}`, configHeader());
};

const createUserFake = (data) => {
  return axios.post(`${endpoint}/web/userfake/create`, data, configHeader());
};

const editUserFake = (data, id) => {
  return axios.put(`${endpoint}/web/userfake/${id}`, data, configHeader());
};

const deleteUserFake = (id) => {
  return axios.delete(`${endpoint}/web/userfake/${id}`, configHeader());
};

export default {
  listUserFake,
  createUserFake,
  editUserFake,
  deleteUserFake,
  getUserFake
};
