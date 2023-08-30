import axios from "axios";
import configVariables from "../config/config.js";
import {
  ClientRequestUnauthorizedError,
  NotFoundError,
} from "../errors/custom-errors.js";

class HttpFilesClient {

  constructor() {
    this.headerAuth = { authorization: `Bearer ${configVariables.authKey}` };
    this.errors = {
      401: () => {throw new ClientRequestUnauthorizedError("Could not get file list");},
      404: () => { throw new NotFoundError(404, "Resource not found", "The data is empty", false);},
    };
  }
  
  async getListOfFiles() {
    try {
      const response = await axios.get(configVariables.endpointGetFiles, {
        headers: this.headerAuth,
      });
      return response.data.files;
    } catch (err) {
      if (err?.status) this.errors[err?.status]();
    }
  }

  async getFileData(fileName) {
    try {
      return axios.get(`${configVariables.endpointGetFileData}${fileName}`, {
        headers: this.headerAuth,
      });
    } catch (err) {
      console.log("Could not get file because a response error");
    }
  }
}

export default HttpFilesClient;
