const utilsModule = {};
utilsModule.parseData = (data) => {
  const parsedData = [];
  let file = "";
  if (!data) {
    return;
  }
  const lines = data.trim().split("\n");
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = line.split(",");
    const header = lines[0].split(",");
    file = values[0];
    if (
      utilsModule.hasValueUndefined(values) &&
      utilsModule.hasValueEmpty(values)
    ) {
      parsedData.push({
        [header[1]]: values[1],
        [header[2]]: values[2],
        [header[3]]: values[3],
      });
    }
  }
  return {
    file,
    lines: parsedData,
  };
};

utilsModule.hasValueUndefined = (line) =>
  Boolean(line[0] && line[1] && line[2] && line[3]);

utilsModule.hasValueEmpty = (line) => {
  return line.every((item) => item);
};

export default utilsModule;
