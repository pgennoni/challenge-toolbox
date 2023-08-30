import utils from "../utils/utils.js";
import HttpFilesClient from "../clients/http-files-client.js";
class FilesService {
  async getFilesData() {
    const httpFilesClient = new HttpFilesClient();
    const filesArray = [];
    const listOfFiles = await httpFilesClient.getListOfFiles();
    const promiseArray = listOfFiles.map((item) =>
      httpFilesClient.getFileData(item),
    );
    const responses = await Promise.allSettled(promiseArray);
    for (const response of responses) {
      const { value, status } = response;
      if (status !== "rejected") {
        const parsedData = utils.parseData(value.data);
        if (parsedData) {
          filesArray.push(parsedData);
        }
      }
    }
    return filesArray.filter((fileObj) => fileObj.lines.length || fileObj.file);
  }
}

export default FilesService;
