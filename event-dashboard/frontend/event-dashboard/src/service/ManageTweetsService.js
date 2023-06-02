import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY;

const path = window.location.pathname;
const username = path.substring(1);

export class ManageTweetsService {

    async retrieveAllTweets() {
        try {
            const data = await axios.get(`${apiKey}${username}/allTweets`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }
};

export default new ManageTweetsService();