export const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/Table%201`;

//define a config object that has our authorization api key
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
