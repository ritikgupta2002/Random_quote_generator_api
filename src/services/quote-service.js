const Quote = require("../models/quotes");
const quotesData = require("../quotes.json");


const MAX_RETRIES = 3; // Define the maximum number of retries

const get = async () => {
  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      const count = await Quote.countDocuments();
      const random = Math.floor(Math.random() * count);
      const randomQuote = await Quote.findOne().skip(random);
      if (randomQuote) {
        // Quote found, return it
        return randomQuote;
      }
      retries++;
    } catch (error) {
      // Handle the error (log it or rethrow it if necessary)
      console.error("Error while fetching random quote:", error);
      throw error;
    }
  }
  // No quote found after maximum retries, throw an error
  throw new Error("No quotes found in the database.");
};


const upload = async () => {
  const uploadedQuotes = [];
  try {
    for (const quoteData of quotesData) {
      const existingQuote = await Quote.findOne({ quote: quoteData.quote });
      if (!existingQuote) {
        const newQuote = new Quote(quoteData);
        await newQuote.save();
        uploadedQuotes.push(newQuote);
        console.log("Quote saved successfully:", newQuote);
      } else {
        console.log("Quote already exists:", existingQuote);
      }
    }
    return uploadedQuotes;
  } catch (error) {
    console.error("Error uploading quotes:", error);
    throw error ;
  }
};

module.exports = {
  get,
  upload,
};
