const https = require('https');
const configHeader = (token = null) => {
  // const tokenData = token ? { token: token } : {};  

  const config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    },
  };

  return config;
};

export { configHeader };
