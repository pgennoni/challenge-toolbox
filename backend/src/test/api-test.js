import app from "../index.js";
import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import axios from "axios";
import {
  responseMockApi,
  responseMockFileApi,
  responseMockListFileApi,
} from "./api-response-mock.js";
import configVariables from "../config/config.js";

chai.use(chaiHttp);

describe("Api test", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("GET /files/data 200", async () => {
    sandbox
      .stub(axios, "get")
      .withArgs(configVariables.endpointGetFiles)
      .resolves({ status: 200, data: responseMockListFileApi })
      .withArgs(`${configVariables.endpointGetFileData}test9.csv`)
      .resolves({ status: 200, data: responseMockFileApi });
    const response = await chai.request(app).get("/files/data");
    chai.expect(response.status).to.equal(200);
    chai.expect(response.body).to.deep.equal(responseMockApi);
  });

  it("GET /files/data 404 if file list is empty", async () => {
    sandbox.stub(axios, "get").rejects({ status: 404, data: [] });
    const response = await chai.request(app).get("/files/data");
    chai.expect(response.status).to.equal(404);
  });

  it("GET /files/data 200 with empty file data", async () => {
    sandbox
      .stub(axios, "get")
      .withArgs(configVariables.endpointGetFiles)
      .resolves({ status: 200, data: responseMockListFileApi })
      .withArgs(`${configVariables.endpointGetFileData}test9.csv`)
      .rejects({ status: 404, data: [] });
    const response = await chai.request(app).get("/files/data");
    chai.expect(response.status).to.equal(200);
  });
});
