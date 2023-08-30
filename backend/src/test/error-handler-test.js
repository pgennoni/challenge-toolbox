import chai from "chai";
import utilsModule from "../utils/utils.js"; // Adjust the path to match your file structure

const { expect } = chai;

describe("utilsModule", () => {
  describe("hasValueUndefined Function", () => {
    it("should return true if all values are defined", () => {
      const result = utilsModule.hasValueUndefined(["1", "2", "3", "4"]);
      expect(result).to.be.true;
    });

    it("should return false if any value is undefined", () => {
      const result = utilsModule.hasValueUndefined(["1", "2", "3", undefined]);
      expect(result).to.be.false;
    });
  });

  describe("hasValueEmpty Function", () => {
    it("should return true if all values are not empty", () => {
      const result = utilsModule.hasValueEmpty(["1", "2", "3", "4"]);
      expect(result).to.be.true;
    });

    it("should return false if any value is empty", () => {
      const result = utilsModule.hasValueEmpty(["1", "", "3", "4"]);
      expect(result).to.be.false;
    });
  });

  describe("parseData Function", () => {
    it("should parse data correctly", () => {
      const data = `file,header1,header2,header3
example.csv,1,2,3
example.csv,4,5,6`;

      const expectedResult = {
        file: "example.csv",
        lines: [
          { header1: "1", header2: "2", header3: "3" },
          { header1: "4", header2: "5", header3: "6" },
        ],
      };

      const result = utilsModule.parseData(data);
      expect(result).to.deep.equal(expectedResult);
    });

    it("should return undefined for empty data", () => {
      const result = utilsModule.parseData("");
      expect(result).to.be.undefined;
    });
  });
});
