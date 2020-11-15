import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

 const login = (data) => {
  console.log('endpoint : ' + endpoint)
  return axios.post(`${endpoint}/login`, data, configHeader());
}; 

const listUser = () => {
  return axios.get(`${endpoint}/user`, configHeader());
};

const listMenu = () => {
  return axios.get(`${endpoint}/menu`, configHeader());
};

const getUserFromId = (id) => {
  return axios.get(`${endpoint}/user/${id}`, configHeader());
};
 
const listSystemRole = () => {
  console.log('get from => ' + `${endpoint}/user_level`);
  return axios.get(`${endpoint}/user_level`, configHeader());
}; 

const getSystemRole = (id) => {
  console.log("uid : " + id);
  return axios.get(`${endpoint}/user_level/${id}`, configHeader());
}; 

const createSystemRole = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/user_level`, data, configHeader());
};

const editSystemRole = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/user_level/${id}`, data, configHeader());
};

const createUser = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/user`, data, configHeader());
};

const editUser = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/user/${id}`, data, configHeader());
};

const deleteUser = (id) => {
  return axios.delete(`${endpoint}/user/${id}`, configHeader());
};

export default {
  login,
  listUser,
  createUser,
  editUser,
  deleteUser,
  getSystemRole,
  listSystemRole,
  getUserFromId,
  createSystemRole,
  editSystemRole,
  listMenu
};
