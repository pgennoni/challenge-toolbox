import "dotenv/config";

const configVariables = {
  endpointGetFiles: process.env.GET_FILES_URL,
  endpointGetFileData: process.env.GET_FILE_DATA_URL,
  authKey: process.env.GET_AUTH_KEY,
  port: process.env.NODE_PORT,
};
export default configVariables;
