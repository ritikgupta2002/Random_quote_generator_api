const Quote = require('../models/quotes.js');
const mongoose = require('mongoose');
const quotesData = require('../quotes.json');

async function uploadQuotes() {
    try {
        // Iterate through the quotes from the JSON file
        for (const quoteData of quotesData) {
            // Check if the quote with the same text already exists in the database
            const existingQuote = await Quote.findOne({ quote: quoteData.quote });

            // If the quote doesn't exist, insert it into the database
            if (!existingQuote) {
                const newQuote = new Quote(quoteData);
                await newQuote.save();
                console.log('Quote saved successfully:', newQuote);
            } else {
                console.log('Quote already exists:', existingQuote);
            }
        }
    } catch (error) {
        console.error('Error uploading quotes:', error);
    }
}

module.exports=uploadQuotes;


