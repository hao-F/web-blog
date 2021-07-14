import axios from 'axios';

console.log(process.env.BASE_URL);
const Service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})

Service.interceptors.request.use(
  async config => {
    config.headers["Authorization"] = "token";
    return config 
  }
)

Service.interceptors.response.use(
  response => {
    let res = response.data
    if(res.code !== 10000) {
      console.log(res);
    }

    return response
  },
  error => {
    console.log(error)
  }
)

export default Service
