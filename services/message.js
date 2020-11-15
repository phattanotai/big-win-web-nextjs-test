import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listMessage = () => {
  return axios.get(`${endpoint}/web/message`, configHeader());
};

const GetMessage = (id) => {
  return axios.get(`${endpoint}/web/message/${id}`, configHeader());
};

const createMessage = (data) => {
  return axios.post(`${endpoint}/web/message/create`, data, configHeader());
};

const editMessage = (data, id) => {
  return axios.put(`${endpoint}/web/message/${id}`, data, configHeader());
};

const deleteMessage = (id) => {
  return axios.delete(`${endpoint}/web/message/${id}`, configHeader());
};

export default {
  listMessage,
  createMessage,
  editMessage,
  deleteMessage,
  GetMessage
};
