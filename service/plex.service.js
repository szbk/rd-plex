const configs = require("../configs");
const axios = require("axios");

const getAllLibrary = async (url) => {
  try {
    let resultArray = [];
    const getData = await axios.get(url, configs.axiosHeader);
    const result = getData.data.MediaContainer.Directory;

    for (let i = 0; i < result.length; i++) {
      resultArray.push({
        title: result[i].title,
        id: result[i].key,
      });
    }
    return resultArray;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllLibrary };
