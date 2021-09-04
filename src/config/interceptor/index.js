import { useEffect } from "react";
import axios from "axios";

const useInterceptor = () => {

  const handleRequestSuccess = (request) => {
    request.params['api_key'] = '4b84dfdc42cd3945865882e1beedee43';
    request.params['language'] = 'es-ES';
    request.headers["Content-Type"] = "application/json";
    request.headers["accept"] = "application/json";
    return request;
  };
  const handleRequestError = (error) => {
    console.log(`REQUEST ERROR! => ${error}`);
  };

  const handleResponseSuccess = (response) => {
    return response;
  };

  const handleResponseError = (error) => {
    console.log(`RESPONSE ERROR! => ${error}`);
  };

  useEffect(() => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';
    axios.defaults.params = {};
    axios.interceptors.request.use(handleRequestSuccess, handleRequestError);
    axios.interceptors.response.use(handleResponseSuccess, handleResponseError);
  }, []);

};

export default useInterceptor;