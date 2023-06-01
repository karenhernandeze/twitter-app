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

    async retrieveLatestTweets() {
        try {
            const data = axios.get(`${apiKey}${username}/tweets`, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async createTweet(body) {
        try {
            const data = axios.post(`${apiKey}${username}/new`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async retrieveReplies(tweetId) {
        try {
            const data = axios.post(`${apiKey}${username}/replies`, tweetId, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async setAsReply(body) {
        try {
            const data = axios.post(`${apiKey}${username}/reply`, body, { crossdomain: true })
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }
    
    async getUsernameById(body) {
        try {
            console.log(body)
            const data = axios.post(`http://192.168.1.189:8546/user/get`, body, { crossdomain: true })
            console.log(data)
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

    async getReplyIds() {
        try {
            const data = await axios.get(`${apiKey}${username}/replyIds`, { crossdomain: true })
            console.log(data)
            return data;
        } catch (err) {
            console.log(err);
            return err.message
        }
    }

};

export default new ManageTweetsService();