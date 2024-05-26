import axios from 'axios'

const baseUrl = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

export const getAllProducts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}