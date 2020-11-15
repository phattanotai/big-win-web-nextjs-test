import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint = env.endpoint;

const listBrands = () => {
  return axios.get(`${endpoint}/brands`, configHeader());
};

const getBrandsFromId = (id) => {
  return axios.get(`${endpoint}/brands/${id}`, configHeader());
};
 
const createBrands = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/brands`, data, configHeader());
};

const editBrands = (data, id) => {
  //console.log('data : ' + data);
  return axios.put(`${endpoint}/brands/${id}`, data, configHeader());
};

const deleteBrands = (id) => {
  return axios.delete(`${endpoint}/brands/${id}`, configHeader());
};

const editBrandsSort = (data, id) => {
  //console.log('data : ' + data);
  return axios.post(`${endpoint}/brands_sort_update`, data, configHeader());
};

const getBrandsSort = () => {
  return axios.get(`${endpoint}/brands_sort`, configHeader());
};

export default {
  listBrands,
  getBrandsFromId,
  createBrands,
  editBrands,
  deleteBrands,
  editBrandsSort,
  getBrandsSort
};
