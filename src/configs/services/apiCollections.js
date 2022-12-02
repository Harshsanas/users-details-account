import ApiService from ".";

const BASE_URL = () => {
    if(process.env.REACT_APP_ENV === "development") return process.env.REACT_APP_BASE_URL_DEVELOPMENT;
    else if(process.env.REACT_APP_ENV === "staging") return process.env.REACT_APP_BASE_URL_STAGING;
    else if(process.env.REACT_APP_ENV === "production") {return process.env.REACT_APP_BASE_URL_PRODUCTION;}
}

const FILE_BASE_URL = () => {
  if(process.env.REACT_APP_ENV === "development") return process.env.REACT_APP_FILES_DEVELOPMENT_BASE_URL;
  else if(process.env.REACT_APP_ENV === "staging") return process.env.REACT_APP_FILES_STAGING_BASE_URL;
  else if(process.env.REACT_APP_ENV === "production") return process.env.REACT_APP_FILES_PRODUCTION_BASE_URL;
}

const client = new ApiService({ baseURL: BASE_URL() });
const ApiCollections = {
  // *********** Auth Module ********
  login: (params) => client.post("login", params),
};

export {FILE_BASE_URL};
export default ApiCollections;
