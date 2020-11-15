import axios from "axios";
import { configHeader } from "../components/functions/configHeader";
const env = require('../env');
const endpoint_img = env.endpoint_img;
const endpoint = env.endpoint;

const imageshow = (filename) => {
  return `${endpoint_img}/${filename}`;
};
 
const imageUpload = (data) => {
  //console.log('data : ' + data.password);
  return axios.post(`${endpoint}/upload`, data, configHeader());
};

export default {
    imageshow,
    imageUpload,
};
