const { upload, get } = require("../services/quote-service.js");

const uploadQuotes = async (req, res) => {
  try {
    const response = await upload();
    return res.status(200).json({
      success: true,
      message: "controller : Successfully uploaded the quotes ",
      data: response,
      err: {},
    });
  } catch (error) {
    console.error("Error uploading quotes:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload quotes.",
      err: error,
    });
  }
};

const getQuote = async (req, res) => {
  try {
    const response = await get();
    console.log(response);
    return res.status(200).json({
      success: true,
      message: "Quote fetched successfully",
      data: response,
      err:{},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetched quotes",
      data:{},
      err:error,
    });
  }
};

module.exports = {
  uploadQuotes,
  getQuote,
};
